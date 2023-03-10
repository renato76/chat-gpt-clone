import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useSession } from 'next-auth/react'

type Props = {
  id: string
}

function ChatRow({ id }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const [active, setActive] = useState(false)
  
  const [messages] = useCollection(
    query(
      collection(db, "users", session?.user?.email!, "chats", id, "messages")
    )
  )

  useEffect(() => {
    if (!pathname) return
    setActive(pathname.includes(id))
  }, [pathname])

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id))
    router.push('/')
  }

  return (
    <div className="relative">
      <Link
        href={`/chat/${id}`}
        className={`chatRow justify-center bg-[#3c4157] ${active && "bg-gray-700/50"}`}
      >
        <ChatBubbleLeftIcon className="h-5 w-5" />
        <p className="md:inline-flex w-full pr-4 text-ellipsis overflow-hidden">
          {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
        </p>
      </Link>
      <div className="flex items-center justify-center">
        <TrashIcon
          onClick={removeChat}
          className="h-5 w-5 text-white absolute top-1/4 right-3 cursor-pointer hover:text-red-500 transition duration-500"
        />
      </div>
    </div>
  )
}

export default ChatRow


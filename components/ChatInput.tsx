'use client'

import { FormEvent, useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from "../firebase"
import { toast } from 'react-hot-toast'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

type Props = {
  chatId: string
}

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState('')
  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  })
  const { data: session } = useSession()

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!prompt) return
    window.scrollTo(0,0)
    const input = prompt.trim()
    setPrompt('')

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    }

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    )

    // Toast Notification
    const notification = toast.loading("ChatGPT is thinking...")
    
    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input, chatId, model, session }),
    }).then((res) => {
      toast.success("ChatGPT has responded!", {
        id: notification,
      })
    })
  }

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm mb-30% md:mb-0">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input 
          className="bg-transparent focus:outline-none flex-1
          disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text" 
          placeholder="Type your message here"
        />
        <button 
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold
          px-4 py-2 rounded disabled:cursor-not-allowed disabled:bg-gray-300"
        >  
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
    </div>
  )
}

export default ChatInput
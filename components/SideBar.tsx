'use client'

import { collection, orderBy, query } from 'firebase/firestore'
import { useSession, signOut } from 'next-auth/react'
import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import NewChat from './NewChat'
import ChatRow from './ChatRow'

function SideBar() {
  const { data: session } = useSession()

  const [chats, loading, error] = useCollection(
    session && query(
      collection(db, 'users', session?.user?.email!, 'chats'),
      orderBy('createdAt', 'asc')
    )
  )

  return (
    <div className="pb-12 px-6 md:p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>
            {/* Model Selection */}
          </div>
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <img 
         onClick={() => signOut()}
          src={session.user?.image!} 
          alt="profile pic" 
          className="h-12 w-12 rounded-full mx-auto mb-2 hover:opacity-50 cursor-pointer" 
        />
      )}
    </div>
  )
}

export default SideBar
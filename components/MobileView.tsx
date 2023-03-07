'use client'

import SideBar from './SideBar'
import { useRouter, usePathname } from 'next/navigation'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function MobileView() {
  const router = useRouter()
  const pathname = usePathname()
  const isOnHomePage = pathname === '/'

  const handleChatsLink = () => {
    router.replace('/')
  }

  return (
    <div>
      <div className="w-screen">
      {isOnHomePage ? (
        <SideBar />
      ): (
        <div onClick={handleChatsLink} className="m-4 cursor-pointer flex items-center">
            <div className="mr-1">
              <AiOutlineArrowLeft />
              </div>
            <div>Chats</div>
        </div>
      )}
      </div>
    </div>
  )
}

export default MobileView
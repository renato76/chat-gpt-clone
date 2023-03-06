'use client'

import React, { useState } from 'react'
import SideBar from './SideBar'
import { useRouter, usePathname } from 'next/navigation'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function MobileView() {
  const router = useRouter()
  const pathname = usePathname()
  const isOnHomePage = pathname === '/'
  const [showMenu, setShowMenu] = useState(isOnHomePage ? true : false)

  const handleClick = () => setShowMenu(!showMenu)

  return (
    <div onClick={handleClick}>
      <div className="w-screen">
      {showMenu ? (
        <SideBar />
      ): (
        <div onClick={handleClick} className="m-4 cursor-pointer flex items-center">
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
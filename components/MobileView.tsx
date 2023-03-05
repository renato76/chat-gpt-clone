'use client'

import React, { useState } from 'react'
import SideBar from './SideBar'
import { useRouter, usePathname } from 'next/navigation'

function MobileView() {
  const router = useRouter()
  const pathname = usePathname()
  const isOnHomePage = pathname === '/'
  const [showMenu, setShowMenu] = useState(isOnHomePage ? true : false)

  const handleClick = () => setShowMenu(!showMenu)
  const handleHome = () => {
    setShowMenu(!showMenu)
    router.push('/')
  }

  return (
    <div onClick={handleClick}>
      <div className="w-screen">
      {showMenu && (
          <div className="cursor-pointer">
            <div onClick={handleHome} className="m-4">
            Home
           </div>
           <div><SideBar /></div>
          </div>
        )}
        {!showMenu && (
          <div  className="cursor-pointer">
             <div onClick={handleClick} className="m-4">
              Chats
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MobileView
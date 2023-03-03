'use client'

import React, { useState } from 'react'
import SideBar from './SideBar'
import { useRouter } from "next/navigation"

function MobileView() {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

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
            <div onClick={handleHome} >
            Home
           </div>
           <div className=""><SideBar /></div>
          </div>
        )}
        {!showMenu && (
          <div  className="cursor-pointer">
             <div onClick={handleClick} >
              Menu
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MobileView
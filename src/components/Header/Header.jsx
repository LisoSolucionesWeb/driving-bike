import React from 'react'
import NavBar from "./NavBar/NavBar"
import TopHeader from "./TopHeader/TopHeader"

const Header = () => {
  return (
    <div className='flex flex-col mt-0 h-fit'>
        <TopHeader/>
        <NavBar/>
    </div>
  )
}

export default Header
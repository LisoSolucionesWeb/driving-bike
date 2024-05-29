import React from 'react'

const NavBar = () => {

    const itemsNavbar = ["Home", "Productos", "Service", "Contact Us"]

  return (
    <div  className='w-full h-16 bg-blue-700'>
        <ul className='flex justify-between w-4/5 mx-auto h-full'>
            {itemsNavbar.map((menus,key)=>(
                <li key={key}
                    className='text-xl font-bold text-slate-200 px-5 h-full flex items-center hover:cursor-pointer hover:bg-gradient-to-b hover:from-black hover:to-blue-700 hover:text-white transition duration-300'>
                        {menus}</li>
            ))}
        </ul>


    </div>
  )
}

export default NavBar
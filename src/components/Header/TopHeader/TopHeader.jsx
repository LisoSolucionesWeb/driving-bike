import React from 'react'
import { useState } from 'react'


const TopHeader = () => {

    const [burguerButton, setBurguerButton] = useState(false);

    const handleButtonBurguer = ()=>{
        burguerButton===false?setBurguerButton(true):setBurguerButton(false)
    }
    const handleButtonClosedBurguer = ()=>{
        setBurguerButton(false)
    }

  return (
    <div className='py-10 bg-blue-950 w-full flex justify-evenly'>
        <div className='lg:w-4/5 w-auto flex flex-col lg:flex-row lg:justify-normal justify-center items-center lg:m-auto'>
            <div className='md:w-auto text-start mx-auto flex flex-col gap-1 '>
                <h2 className='lg:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blue-300 via-blue-500 to-blue-800 font-bold'>
                    Driving-Bike
                </h2>
                <p className='text-slate-100 text-sm font-semi-bold md:text-start'>Liso Soluciones</p>
            </div>
            <div className='flex flex-col w-2/3 mr-auto gap-4'>
                <div className='mb-1 flex gap-4 text-slate-100 items-center self-end'>
                    <p className='hidden text-sm lg:block lg:text-end'>Esta es una web de muestra, hecho exclusivamente para apreciación del cliente</p>
                    <p className='hidden text-base  w-32'>0800-1234-5252</p>
                </div>
                <div className='flex lg:justify-end justify-start w-full'>
                    <div className='flex gap-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-400 hover:cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-400 hover:cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-auto'>
            <div className='lg:hidden flex items-center justify-center relative'> 
            {/* Icono menu hamburguesa ↓*/}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={handleButtonBurguer} className="size-16 absolute top-5 text-slate-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <div className={`py-3 px-5 absolute top-8 right-8 border translate-y-1/2 bg-slate-200/80 rounded-md border-blue-500 z-10 transition duration-300 ease-in transform ${burguerButton === true? "opacity-100 visible" : "translate-x-full opacity-0"}`}>
                    {/* cruz cerrar menu  ↓*/}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={handleButtonClosedBurguer} className="text-black absolute top-2 right-2 size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    <ul className='flex flex-col gap-1 mt-3'>
                        <li className='text-lg hover:underline font-semibold'>Inicio</li>
                        <li className='text-lg hover:underline font-semibold'>Productos</li>
                        <li className='text-lg hover:underline font-semibold'>Servicios</li>
                        <li className='text-lg hover:underline font-semibold'>Contactanos</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TopHeader;
import React from 'react'

const TopHeader = () => {
  return (
    <div className='py-10 bg-blue-950 w-full'>
        <div className='w-full flex flex-col lg:flex-row justify-between container m-auto'>
            <div className='md:w-auto lg:1/4 text-center md:text-start mx-auto flex flex-col gap-1'>
                <h2 className='text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-300 via-blue-500 to-blue-800 font-bold'>
                    Driving-Bike
                </h2>
                <p className='text-slate-100 text-sm font-semi-bold md:text-end'>Liso Soluciones</p>
            </div>
            <div className='flex flex-col w-2/3 mx-auto gap-4 '>
                <div className='mb-1 flex gap-4 text-slate-100 items-center self-end'>
                    <p className='hidden md:block text-sm lg:text-end'>Esta es una web de muestra, hecho exclusivamente para apreciación del cliente</p>
                    <p className='hidden md:block text-base  w-32'>0800-1234-5252</p>
                </div>
                <div className='flex justify-end'>
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

    </div>
  )
}

export default TopHeader
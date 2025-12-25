import React from 'react'

const Heroo = () => {
  return (
    <div className='my-40 w-full flex flex-col items-center'>
        <h1 className='max-w-2xl text-7xl font-bold tracking-tight text-center leading-tight text-transparent
            bg-clip-text bg-linear-to-b from-neutral-50 to-neutral-500
        '>Unleash the power of <br /> intuitive finance</h1>
        <p
            className='text-center mt-10  max-w-3xl text-xl text-neutral-500 selection:bg-white'
        >say goodbye to the outdated finanace tools. Every small business owner, <br /> regardless of  the background, can now manage thier business like a pro <br /> Somple. Intitive. And new boring. </p>
    
        <div className='mt-10 flex gap-4 w-full max-w-lg '>
            <input placeholder='Entry your email' type='text' className='border rounded-2xl p-2 border-neutral-700 placeholder:text-neutral-500  text-neutral-300 px-4 flex-1 focus:outline-none focus:ring-1 focus:ring-sky-500
                transition-all duration-200 
            '/>
            <button className='text-neutral-300 p-2 px-4 border border-neutral-700 overflow-hidden rounded-2xl  
            cursor-pointer relative ' >
                Join witlist
                <div className='absolute bottom-0 inset-x-0 w-full h-px bg-linear-to-r from-transparent 
                via-sky-600  
                to-transparent'>

                </div>
            </button>
        </div>
    </div>
  )
}

export default Heroo
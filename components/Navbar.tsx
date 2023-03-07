import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center px-20 py-5'>
        <div className='flex justify-center items-start '>
                    <div className='flex items-center h-fit'>
                        <img src='/seamless-ui 2.png' className='h-20 w-20 ' draggable={false}/>
                        <h1 className='text-3xl text-white  whitespace-nowrap'>SeamLess UI</h1>
                    </div>
                </div>
                <div className='flex gap-5 text-xl'>
                    <p className='text-[#7EE787] hover:underline cursor-pointer '>Docs</p>
                    <p className='text-white hover:underline cursor-pointer '>Blogs</p>
                    <p className='text-white hover:underline cursor-pointer'>Showcase</p>
                </div>
    </div>
  )
}

export default Navbar
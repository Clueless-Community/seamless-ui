import React from 'react'
import Link from 'next/link'

const Explore = () => {
  return (
    <div className='text-white text-centre flex  flex-col-reverse md:flex-row  justify-between  relative mt-20'>
      
      <div className='text-centre md:p-20 p-9'>
        <div className='flex space-x-5  '>
        <Link href='https://www.figma.com/file/0eqV7t3UKKM14UeqCSfOZb/SeamLess-UI?node-id=3880%3A1442&t=xbQ8rnQ1WyJ1oO6d-0' target={'_blank'} rel="noreferrer" > 
          <img className='pr-2 hidden md:block' src="/figma 1.png " alt="" draggable={false} />
          </Link>
          <h1 className=' text-4xl text-[#7EE787] hidden md:block '>SeamLess UI Figma</h1>
        </div>


        <h2 className='text-xl mb-4 mt-4 text-center md:text-left'>
          Built with the vision to encourage open-source
          enthusiasts!
          <br />
        </h2>
        <div className="green-gradient absolute left-28 top-36"></div>
        <p className='text-xl mb-7 text-center md:text-left'>
          built with the vision to encourage open-source
          enthusiasts!built with the vision to encourage
          open-source enthusiasts!

        </p>
        <button className='text-[#7EE787] text-2xl flex items-center justify-center hover:underline pl-28 md:pl-0  hover:bg-green-800 transition-all'>Explore <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 ml-1" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg></button>
      </div>
      <img className='md:p-10 p-2 md:w-5/12 w-full' src="/figma-dark 1.png" alt="" draggable={false} />
      <h1 className=' text-3xl text-[#7EE787] text-center md:hidden'>SeamLess UI Figma</h1>
    </div>

  )
}

export default Explore;
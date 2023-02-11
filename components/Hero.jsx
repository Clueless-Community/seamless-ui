import React from 'react'

const Hero = () => {
  return (
    <div className='relative'>
      <div className='green-gradient absolute'></div>
      <div className='green-gradient absolute right-10 bottom-60  '></div>
      <h1 className=" text-center  text-7xl font-bold mt-36">The Open-source UI library</h1>

      <h1 className=" text-center  text-7xl font-bold "> You always wanted </h1>
      <h2 className=' text-center pt-9'>The next gen UI made with simple HTML and Tailwind CSS. It's compatible with simple HTML, CSS static <br /> website or a React, Vue, Angular or Next.js Complex app. Zero JS and no pluggins installed.
      </h2>
      <div className=' text-center pt-10 space-x-7 pb-28' >
        <button className=' bg-green-700 p-2 rounded-lg pl-6 pr-6'>Getting Started</button>
        <button className=' border-2 border-green-700 p-2 rounded-lg pl-4 pr-4'>Explore Components</button>
      </div >
      <h1 className=' text-center text-2xl font-semibold mt-7 mb-4'>SeamLess UI in all frameworks</h1>
      <div className=' flex flex-wrap w-full sm:justify-between mt-16 px-10 md:px-36 xl:px-80 '>
        <img src="/Vue.js_Logo_2 1 1.png" alt="" className='w-20 h-20' />
        <img  src="/next-js 1 2.png" alt="" className='w-20 h-20' />
        <img src="/download 2 3.png" alt="" className='w-20 h-20' />
        <img src="/image 20 4.png" alt="" className='w-20 h-20' />
        <img src="/svelte 1 5.png" alt="" className='w-20 h-20' />
      </div>

    </div>
  )
}

export default Hero;
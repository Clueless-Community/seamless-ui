import React from 'react'

const Explore = () => {
  return (
    <div className='text-white text-centre flex justify-between  relative mt-20'>
      <div className='text-centre p-20'>
        <div className='flex space-x-5 '>
          <img className='pr-2' src="/figma 1.png" alt="" draggable={false} />
          <h1 className=' text-4xl text-[#7EE787]'>SeamLess UI Figma</h1>
        </div>


        <h2 className='text-xl mb-4 mt-4'>
          Built with the vision to encourage open-source
          <br></br>
          enthusiasts!
          <br />
        </h2>
        <div className="green-gradient absolute left-28 top-36"></div>
        <p className='text-xl mb-7'>
          built with the vision to encourage open-source
          <br></br>
          enthusiasts!built with the vision to encourage
          <br></br>
          open-source enthusiasts!
          <br></br>

        </p>
        <button className='text-[#7EE787] text-2xl flex items-center justify-center hover:underline   hover:bg-green-800 transition-all'>Explore <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 ml-1" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg></button>
      </div>
      <img className='p-10 w-5/12' src="/figma-dark 1.png" alt="" draggable={false} />
    </div>
  )
}

export default Explore;
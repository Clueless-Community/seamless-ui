import React from 'react'

const Explore = () => {
  return (
    <div className='text-white text-centre flex justify-between '>
      <div className='text-centre p-32'>
        <div className='flex space-x-5 '>
          <img className='pr-2' src="/figma 1.png" alt="" draggable={false}/>
          <h1 className=' text-4xl text-green-500'>SeamLess UI Figma</h1>
        </div>

        <h2 className='text-2xl mb-4 mt-4'>
          Built with the vision to encourage open-source
          <br></br>
          enthusiasts!
          <br />
        </h2>
        <h2 className='text-2xl mb-7'>
          built with the vision to encourage open-source
          <br></br>
          enthusiasts!built with the vision to encourage
          <br></br>
          open-source enthusiasts!
          <br></br>

        </h2>

        <div className='flex space-x-4'>
          <button className='text-green-500 text-2xl'>Explore</button>
          <img src="/_.png" alt="" draggable={false} />
        </div>
      </div>
      <img className='p-10 h-auto w-auto' src="/figma-dark 1.png" alt="" draggable={false} />
    </div>
  )
}

export default Explore;
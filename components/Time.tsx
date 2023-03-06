import React from 'react'

function Time() {
    return (
        <div className=' pl-20 relative '>
            <div className='absolute'>
            <div className="green-gradient absolute left-75 bottom-28"></div>
                <h1 className=' text-[#7EE787] font-semibold text-4xl pb-1 '>Lacking time? </h1>
                <h1 className=' text-white font-semibold text-3xl pb-5'>We got you covered.</h1>
                <p className='text-white w-[1000px] text-xl'>built with the vision to encourage open-source enthusiasts!
                    built with the vision to encourage open-source enthusiasts!
                </p>
                <button className='bg-[#7EE787] p-2 px-4 text-xl rounded-lg mt-10 font-semibold  hover:bg-green-800 transition-all'>Explore components</button>

            </div>

            <img src='/Group 271.png' className='w-11/12' draggable={false} />
        </div>
    )
}

export default Time
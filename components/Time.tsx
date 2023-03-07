import React from 'react'

function Time() {
    return (
        <div className=' md:pl-20 relative px-2'>
            <div className='md:absolute text-center md:text-left'>
                <div className="green-gradient absolute md:left-75 md:bottom-28"></div> 
                <h1 className=' text-[#7EE787] font-semibold text-4xl pb-1  '>Lacking time? </h1>
                <h1 className=' text-white font-semibold text-3xl pb-5 '>We got you covered.</h1>
                <p className='text-white lg:w-[1000px] text-xl  '>built with the vision to encourage open-source enthusiasts!
                    built with the vision to encourage open-source enthusiasts!
                </p>
                <button className='bg-[#7EE787] p-2 px-4 text-lg rounded-lg mt-10 font-semibold  hover:bg-green-800 transition-all'>Explore components</button>

            </div>
            <img src='/Group ui.png' className='w-11/12 md:hidden  pt-10' draggable={false} />
            <img src='/Group 271.png' className='w-11/12 hidden md:block ' draggable={false} />
        </div>
    )
}

export default Time
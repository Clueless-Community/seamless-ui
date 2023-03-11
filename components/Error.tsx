import React from 'react'

function Error() {
    return (
        <div className='relative'>
            <div className='flex justify-center items-center flex-col '>
                <div className="green-gradient absolute md:left-96 md:top-36"></div>
                <img src='/4o4.png' className='mt-16 md:mt-0 md:w-5/12' />
                <div className="green-gradient absolute right-80 top-80  "></div>
                <h1 className=' font-bold md:text-3xl text-2xl text-white pb-36 md:-mt-40 m-6 md:m-0 -mt-20'>OOPS! PAGE NOT FOUND</h1>
                <a href='' target={'_blank'} rel="noreferrer">
                <button className='bg-[#7EE787] font-semibold p-2 px-8 md:mb-36 mb-10 rounded-lg md:hidden -mt-32 '> Go Home </button>
                </a>


            </div>
        </div>
    )
}

export default Error
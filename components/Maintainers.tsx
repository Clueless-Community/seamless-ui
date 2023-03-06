import React from 'react'

function Maintainers() {
    return (
        <div className=''>
            <div className='flex justify-between items-center p-15'>
                <h1 className='text-4xl text-green-500 pl-32 '>All of these seems interesting?</h1>
                <button className='bg-green-500 p-2 pl-3 pr-3 rounded-lg  mr-20'>Contribute Now</button>
            </div>
            <div>

                <div className='flex justify-between items-center mt-20'>
                    <div className=' flex relative bg-[#282E36] p-10 w-[600px] rounded-xl  ring-1 ring-white ml-32  mb-10'>
                        <div className=''>

                            <div className='flex justify-between'>
                                <div >
                                    <h1 className='text-white text-2xl font-semibold'>SeamLess UI</h1>
                                    <button className='bg-green-500 p-2 px-3 mr-3 rounded-lg'>HTML</button>
                                    <button className='bg-green-500 p-2 px-3 rounded-lg '>Tailwind CSS</button>
                                </div>
                                <img src='Ellipse 58.png' />
                            </div>
                            <div className='h-0.5 w-full bg-gray-700 my-5'></div>
                            <p className='text-white text-lg'>built with the vision to encourage open-source enthusiasts!</p>

                        </div>
                        <button className='bg-green-500 absolute right-0 h-full top-0 p-4 rounded-r-xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        </button>
                    </div>
                    <div className=''>
                        <img src='Group 274.png' className='w-72 mr-28 ' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center gap-20  ml-96  mt-7'>
                <h1 className='text-4xl text-green-500 pl-32'>Meet the maintainers</h1>
                <img src='/pipe.png' className='w-96 mr-9 ' />
            </div>
        </div>

    )
}

export default Maintainers
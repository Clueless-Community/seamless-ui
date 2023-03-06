import React from 'react'

function Maintainers() {
    return (
        <div className='relative mt-20'>
            <div className='flex justify-between items-center p-15'>
                <h1 className='text-4xl text-[#7EE787] pl-20 '>All of these seems interesting?</h1>
                <button className='bg-[#7EE787] p-2 pl-3 pr-3 rounded-lg text-xl mr-20 font-semibold  hover:bg-green-800 transition-all'>Contribute Now</button>
            </div>
            <div>

                <div className='flex justify-between items-center mt-20'>
                    <div className=' flex relative bg-[#282E36] p-10 w-[600px] rounded-xl  ring-1 ring-white ml-20  mb-10'>
                        <div className=''>

                            <div className='flex justify-between'>
                                <div >
                                    <h1 className='text-white text-2xl font-semibold mb-3'>SeamLess UI</h1>
                                    <button className='bg-[#7EE787] p-1 px-3 mr-3 rounded-lg font-semibold hover:bg-green-800 transition-all'>HTML</button>
                                    <button className='bg-[#7EE787] p-1 px-3 rounded-lg font-semibold hover:bg-green-800 transition-all'>Tailwind CSS</button>
                                </div>
                                <img src='Ellipse 58.png' draggable={false}/>
                            </div>
                            <div className='h-0.5 w-full bg-gray-700 my-5'></div>
                            <p className='text-white text-lg'>built with the vision to encourage open-source enthusiasts!</p>

                        </div>
                        <button className='bg-[#7EE787] absolute right-0 h-full top-0 p-4 rounded-r-xl hover:bg-green-800 transition-all'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        </button>
                    </div>
                    <div className=''>
                        <img src='Group 274.png' className='w-72 mr-28 ' draggable={false} />
                    </div>
                    <div className="green-gradient absolute right-80 top-72 "></div>
                </div>
                
            </div>
            <div className='flex justify-center items-center gap-20  ml-96  mt-7'>
                <h1 className='text-4xl text-[#7EE787] pl-32 mt-40'>Meet the maintainers</h1>
                <img src='/pipe.png' className='w-96 mr-9 ' draggable={false} />
            </div>
        </div>

    )
}

export default Maintainers
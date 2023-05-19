import React from 'react'

function Maintainers() {
    return (
        <div className='relative mt-20'>
            <div className='flex  flex-col md:flex-row md:justify-between items-center p-15  '>
                <h1 className='text-4xl text-[#7EE787] md:pl-20  text-center'>All of these seems interesting?</h1>
                <a href='https://github.com/Clueless-Community/seamless-ui' target={'_blank'} rel="noreferrer" >

                <button className='bg-[#7EE787] p-2 pl-3 pr-3 rounded-lg text-xl md:mr-20 font-semibold  hover:bg-green-800 transition-all  md:mt-0 mt-10 mx-auto'>Contribute Now</button>
                </a>
            </div>
            <div>

                <div className='flex justify-between items-center mt-20 flex-col lg:flex-row'>
                    <div className=' flex  flex-col md:flex-row relative bg-[#282E36] md:p-10 mx-6 md:w-[600px] rounded-xl  ring-1 ring-white md:ml-20  mb-10'>
                        <div className='p-9 md:p-0'>

                            <div className='flex justify-between flex-col-reverse md:flex-row text-center items-center md:text-left '>
                                <div >
                                    <h1 className='text-white text-2xl font-semibold mb-3'>SeamLess UI</h1>
                                    <button className='bg-[#7EE787] p-1 px-3 mr-3 rounded-lg font-semibold hover:bg-green-800 transition-all'>HTML</button>
                                    <button className='bg-[#7EE787] p-1 px-3 rounded-lg font-semibold hover:bg-green-800 transition-all'>Tailwind CSS</button>
                                </div>
                                <img src='Ellipse 58.png' className='w-16 ' draggable={false}/>
                            </div>
                            <div className='h-0.5 w-full bg-gray-700 my-5'></div>
                            <p className='text-white text-lg text-center md:text-left mb-4 md:mb-0  '>built with the vision to encourage open-source enthusiasts!</p>

                        </div>
                        <a href='https://github.com/Clueless-Community/seamless-ui' target={'_blank'} rel="noreferrer" >
                        <button className='bg-[#7EE787] hidden md:block  absolute right-0 h-full top-0 p-4 rounded-r-xl hover:bg-green-800 transition-all'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        </button>
                        </a>
                        <a href='https://github.com/Clueless-Community/seamless-ui' target={'_blank'} rel="noreferrer" >
                        <button className='bg-[#7EE787]  md:hidden  absolute bottom-0 w-full left-0 p-2 rounded-b-xl hover:bg-green-800 transition-all'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        </button>

                        </a>
                    </div>
                    <div className=''>
                        <img src='Group 274.png' className='w-72 lg:mr-28 ' draggable={false} />
                    </div>
                    <div className="green-gradient absolute right-80 top-72 "></div>
                </div>
                
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center md:gap-20 gap-10  lg:ml-96  mt-7'>
                <h1 className='text-4xl text-[#7EE787] lg:pl-32 lg:mt-40 mt-5   text-center'>Meet the maintainers</h1>
                <img src='/pipe.png' className='w-96 mr-9 hidden lg:block ' draggable={false} />
                <img src='/Group 273.png' className=' h-36 md:hidden' />
            </div>
        </div>

    )
}

export default Maintainers
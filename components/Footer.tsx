import React from 'react'
function Footer() {
    return (
        <div className='p-10 bg-[#1B1B1B] space-y-8'>

            <div className='flex justify-between p-5 flex-col md:flex-row text-center space-y-1'>
                <div className='flex justify-center items-start '>
                    <div className='flex items-center h-fit '>
                        <img src='/seamless-ui 2.png' className='h-20 w-20 ' draggable={false} />
                        <h1 className='text-3xl text-white  whitespace-nowrap'>SeamLess UI</h1>
                    </div>
                </div>
                <div className=' grid grid-row-3 '>
                    <p className='text-2xl md:text-[#7EE787] text-white'>Know us</p>
                    <p className='md:text-xl text-md text-white'>About Us</p>
                    <p className='md:text-xl text-md text-white mb-5 md:mb-0'>Our goal</p>

                </div>
                <div className='grid grid-row-3 '>
                    <p className='text-2xl md:text-[#7EE787] text-white gap-2'>Legal</p>
                    <p className='md:text-xl text-md text-white'>Privacy Policy</p>
                    <p className='md:text-xl text-md text-white mb-5 md:mb-0'>Terms & condition</p>
                </div>
                <div className='grid grid-row-5 gap-4'>
                    <p className='text-2xl text-[#7EE787] mb-2 hidden md:block gap-2'>Quick links</p>
                    <p className='text-xl text-white hidden md:block'>Events</p>
                    <p className='text-xl text-white hidden md:block'>Resources</p>
                    <p className='text-xl text-white hidden md:block'>Blogs</p>
                    <p className='text-xl text-white hidden md:block'>Projects</p>
                </div>
                <div className='grid grid-row-3 md:gap-4 gap-2'>
                    <p className='text-2xl  md:text-[#7EE787] text-white md:mb-2 mb-0'>Contact and Help</p>
                    <p className='md:text-xl text-md text-white'>Contact us</p>
                    <p className='md:text-xl text-md text-white'>Report an Issue</p>
                    <div className='flex md:justify-between mt-4 justify-center gap-5 md:gap-0'>
                        <img src='/Google.png'   draggable={false} />
                        <img src='/Twitter.png' draggable={false} />
                        <img src='/Github .png' draggable={false} />
                    </div>
                </div>

            </div>
            <div className='-mx-10 md:-mx-0 '>
                <div className='md:flex md:justify-between text-center md:py-10 md:px-6 '>
                    <p className='   bg-[#7EE787]  md:bg-transparent  text-white py-2'>Copyright 2022 by ClueLess</p>
                    <p className='text-white hidden md:block'>Powered by Clueless</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
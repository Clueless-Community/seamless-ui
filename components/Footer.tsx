import React from 'react'
function Footer() {
    return (
        <div className='p-10'>

            <div className='flex justify-between p-5 '>
                <div className='flex justify-center items-start '>
                    <div className='flex items-center h-fit'>
                        <img src='/seamless-ui 2.png' className='h-20 w-20 ' />
                        <h1 className='text-3xl text-white  whitespace-nowrap'>SeamLess UI</h1>
                    </div>
                </div>
                <div className=' grid grid-row-3 '>
                    <p className='text-2xl text-green-500'>Know us</p>
                    <p className='text-xl text-white'>About Us</p>
                    <p className='text-xl text-white'>Our goal</p>

                </div>
                <div className='grid grid-row-3 '>
                    <p className='text-2xl text-green-500 '>Legal</p>
                    <p className='text-xl text-white'>Privacy Policy</p>
                    <p className='text-xl text-white'>Terms & condition</p>
                </div>
                <div className='grid grid-row-5 gap-4'>
                    <p className='text-2xl text-green-500 mb-2'>Quick links</p>
                    <p className='text-xl text-white'>Events</p>
                    <p className='text-xl text-white'>Resources</p>
                    <p className='text-xl text-white'>Blogs</p>
                    <p className='text-xl text-white'>Projects</p>
                </div>
                <div className='grid grid-row-3 gap-4'>
                    <p className='text-2xl text-green-500 mb-2'>Contact and Help</p>
                    <p className='text-xl text-white'>Contact us</p>
                    <p className='text-xl text-white'>Report a Issue</p>
                    <div className='flex justify-between'>
                        <img src='/Google.png' className='' />
                        <img src='/Twitter.png' />
                        <img src='/Github .png' />
                    </div>
                </div>

            </div>
            <div className='flex justify-between py-10 px-6'>
                <p className='text-white'>Copyright 2022 by ClueLess</p>
                <p className='text-white'>Powerd by Clueless</p>
            </div>
        </div>
    )
}

export default Footer
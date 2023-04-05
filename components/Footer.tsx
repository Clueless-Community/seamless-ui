import Link from 'next/link'
import React from 'react'
function Footer() {
    return (
        <div className='p-10 bg-[#1B1B1B] space-y-8'>

            <div className='flex justify-between p-5 flex-col md:flex-row md:text-left text-center space-y-1'>
                <div className='flex justify-center items-start '>
                    <Link href={'/home-page'} rel="noreferrer">
                        <div className='flex items-center h-fit '>
                            <img src='/seamless-ui 2.png' className='h-20 w-20 ' draggable={false} />
                            <h1 className='text-3xl text-white  whitespace-nowrap'>SeamLess UI</h1>
                        </div>
                    </Link>
                </div>
                <div className=' grid grid-row-3 '>
                    <p className='text-2xl md:text-[#7EE787] text-white cursor-pointer'>Know us</p>
                    <Link href={'/about-us'} rel="noreferrer">
                        <p className='md:text-xl text-md text-white hover:text-[#7EE787] transition-all cursor-pointer'>About Us</p>
                    </Link>
                    <p className='md:text-xl text-md text-white mb-5 md:mb-0 hover:text-[#7EE787] transition-all cursor-pointer'>Our goal</p>

                </div>
                <div className='grid grid-row-3 '>
                    <p className='text-2xl md:text-[#7EE787] text-white gap-2 cursor-pointer'>Legal</p>
                    <Link href={'/privacy-policy'} rel="noreferrer">
                        <p className='md:text-xl text-md text-white hover:text-[#7EE787] transition-all cursor-pointer'>Privacy Policy</p>
                    </Link>
                    <Link href={'/terms-and-condition'} rel="noreferrer">
                        <p className='md:text-xl text-md text-white mb-5 md:mb-0 hover:text-[#7EE787] transition-all cursor-pointer'>Terms & condition</p>
                    </Link>
                </div>
                <div className='grid grid-row-5 gap-4'>
                    <p className='text-2xl text-[#7EE787] mb-2 hidden md:block gap-2 cursor-pointer'>Quick links</p>
                    <p className='text-xl text-white hidden md:block hover:text-[#7EE787] transition-all cursor-pointer'>Events</p>
                    <p className='text-xl text-white hidden md:block hover:text-[#7EE787] transition-all cursor-pointer'>Resources</p>
                    <p className='text-xl text-white hidden md:block hover:text-[#7EE787] transition-all cursor-pointer'>Blogs</p>
                    <p className='text-xl text-white hidden md:block hover:text-[#7EE787] transition-all cursor-pointer'>Projects</p>
                </div>
                <div className='grid grid-row-3 md:gap-4 gap-2'>
                    <p className='text-2xl  md:text-[#7EE787] text-white md:mb-2 mb-0 cursor-pointer'>Contact and Help</p>
                    <Link href={'/contact-us'} rel="noreferrer">
                        <p className='md:text-xl text-md text-white hover:text-[#7EE787] transition-all cursor-pointer'>Contact us</p>
                    </Link>
                    <p className='md:text-xl text-md text-white hover:text-[#7EE787] transition-all cursor-pointer'>Report an Issue</p>
                    <div className='flex md:justify-between mt-4 justify-center gap-5 md:gap-0'>
                        <a href='https://www.google.com/' target={'_blank'} rel="noreferrer" >
                            <img src='/Google.png' draggable={false} />
                        </a>
                        <a href='https://twitter.com/by_clueless/' target={'_blank'} rel="noreferrer" >
                            <img src='/Twitter.png' draggable={false} />
                        </a>
                        <a href='https://github.com/Clueless-Community/seamless-ui/' target={'_blank'} rel="noreferrer" >
                            <img src='/Github .png' draggable={false} />
                        </a>
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
import Link from 'next/link'
import React from 'react'

function Product() {
    return (
        <div className='relative mt-20'>
            <h1 className='text-3xl text-[#7EE787] md:pl-20 text-center md:text-left '>A Product by ClueLess</h1>
            <div className='flex flex-col md:flex-row justify-between items-center md:gap-36 md:px-20 md:py-20'>
                <div className="green-gradient absolute left-75 top-32"></div>
                <img src='/zig.png' className='md:pl-16 md:w-3/12 w-48 mt-16 md:mt-0' draggable={false} />
                <div className=' flex flex-col items-center md:items-start'>
                    <p className='text-white text-xl text-center mt-10 md:mt-0 md:text-left pl-5 pr-5 '>Built with the vision to encourage open-source enthusiasts!
                        We provide the best resources, conducts weekly contests to test your skills, a guide to Open-source, and help you build projects.

                    </p>
                    <a href='https://clueless.live/' target='_blank' rel="noreferrer" > 
                    <button className='bg-[#7EE787] p-2 px-6 my-9 md:my-9 font-semibold rounded-lg mt-10 hover:bg-green-800 transition-all text-xl'>Visit ClueLess</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Product
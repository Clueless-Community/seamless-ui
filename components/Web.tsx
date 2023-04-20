import Link from 'next/link'
import React, { useState } from 'react'

function Web() {
    const [theme, setTheme] = useState("black")

    return (
        <div className='flex md:pr-6   relative flex-col md:flex-row md:justify-between'>
            <div className=' md:p-20 flex-col md:w-[1050px] p-4 text-center md:text-left '>
                <h1 className='text-[#7EE787] font-semibold text-4xl mb-7 '>The best UI ever built </h1>
                <div className='mb-10   '>
                    <span className='text-white text-xl mx-auto  '>The next gen UI made with simple HTML and Tailwind CSS. It's compatible with simple HTML, CSS
                        static website or a React, Vue, Angular or Next.js Complex app.</span>
                    <span className='text-white text-xl font-bold mb-7 ml-1'>Zero JS and no-plugins installed.</span>
                </div>
                <Link href='/docs/components/accordion'>
                <button className=' bg-[#7EE787] rounded-xl p-2 px-7  hover:bg-green-800 transition-all font-semibold text-lg '>Explore</button>
                </Link>
            </div>
            <div className='p-8 md:w-[430px]  '>
                <div className=' flex-col bg-[#282E36] items-center justify-center flex mx-auto w-full md:p-10 p-5 rounded-xl mt-2 ring-1 ring-white'>
                    <img src='/web3.png' className=' md:w-[270px]' draggable={false} />
                    <div className='bg-white rounded-b-xl md:w-[270px] '>
                        <div className='w-[270px] p-5 '>
                            <h1 className={` font-bold mb-2 text-2xl text-${theme}`}> What is web 3?</h1>
                            <span className='text-red-500'></span>
                            <span className='text-blue-500'></span>
                            <p className='mb-4 text-md'>
                                Slate helps you see how
                                many more days you need
                                to work to reach. Slate helps you
                                see how many more days.
                            </p>
                            <div className=' flex flex-wrap gap-1 '>
                                <button className={`bg-${theme}  text-white  px-3 py-1 rounded-md `}>Tags</button>
                                <button className={`bg-${theme}  text-white  px-3 py-1 rounded-md`}>Google</button>
                                <button className={`bg-${theme}  text-white  px-3 py-1 rounded-md gree`}>Nvdia</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-6 gap-2'>
                        <button onClick={() => setTheme("red-500")} className='p-4 rounded-full bg-red-500 mr-3 focus:ring-2 focus:ring-white '></button>
                        <button onClick={() => setTheme("[#7EE787]")} className='p-4 rounded-full bg-[#7EE787] mr-3 focus:ring-2 focus:ring-white'></button>
                        <button onClick={() => setTheme("blue-500")} className='p-4 rounded-full bg-blue-500 mr-3 focus:ring-2 focus:ring-white'></button>
                        <button onClick={() => setTheme("black")} className='p-4 rounded-full bg-black mr-3 focus:ring-2 focus:ring-white  '></button>
                    </div>
                </div>
                 <div className="green-gradient absolute right-80 top-98"></div> 
                <img src='/pipe2.png' className='md:hidden p-8 ml-10'/>
                <img src='/Group 273.png' className=' pt-14 pl-36 hidden md:block' />
            </div>
        </div>

    )
}

export default Web
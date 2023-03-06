import React, { useState, useRef, useEffect } from 'react'

function Web() {
    const [theme, setTheme] = useState("black")
    //  const focus=useRef()
    //  console.log(focus);
    //  const inputElement = useRef();

    //  const focusInput = () => {
    //    inputElement.current.focus();
    //  };
    const emailInput = useRef(null);

    useEffect(() => {
        if (emailInput.current) {
            emailInput.current.focus();
        }
    }, []);

    return (
        <div className='flex pr-6 relative'>
            <div className=' p-20 flex-col '>
                <h1 className='text-[#7EE787] font-semibold text-4xl mb-7'>The best UI ever built </h1>
                <div className='mb-10   '>
                    <span className='text-white text-xl'>The next gen UI made with simple HTML and Tailwind CSS. It's compatible with simple HTML, CSS
                        static website or a React, Vue, Angular or Next.js Complex app.</span>
                    <span className='text-white text-xl font-bold mb-7 ml-1'>Zero JS and no-plugins installed.</span>
                </div>
                <button className=' bg-[#7EE787] rounded-xl p-2 px-7  hover:bg-green-800 transition-all font-semibold text-xl'>Explore</button>
            </div>
            <div className='p-10 w-[530px]'>
                <div className=' flex-col bg-[#282E36] p-10 rounded-xl mt-2 ring-1 ring-white'>
                    <img src='/web3.png' draggable={false} />
                    <div className='bg-white rounded-b-xl w-full'>
                        <div className='w-full p-5 '>
                            <h1 className={` font-bold mb-2 text-2xl text-${theme}`}> What is web 3?</h1>
                            <span className='text-red-500'></span>
                            <span className='text-blue-500'></span>
                            {/* <span className='text-red-500'></span> */}
                            <p className='mb-4 text-md '>
                                Slate helps you see how
                                many more days you need
                                to work to reach. Slate helps you
                                see how many more days.
                            </p>
                            <div className=' flex'>
                                <button className={`bg-${theme}  text-white  px-3 py-1 rounded-md `}>Tags</button>
                                <button className={`bg-${theme}  text-white mx-3 px-3 py-1 rounded-md`}>Google</button>
                                <button className={`bg-${theme}  text-white  px-3 py-1 rounded-md`}>Nvdia</button>
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-6 gap-2'>
                        <button onClick={() => setTheme("red-500")} className='p-4 rounded-full bg-red-500 mr-3 focus:ring-2 focus:ring-white '></button>
                        <button onClick={() => setTheme("[#7EE787]")} className='p-4 rounded-full bg-[#7EE787] mr-3 focus:ring-2 focus:ring-white'></button>
                        <button onClick={() => setTheme("blue-500")} className='p-4 rounded-full bg-blue-500 mr-3 focus:ring-2 focus:ring-white'></button>
                        <button onClick={() => setTheme("black")} className='p-4 rounded-full bg-black mr-3 focus:ring-2 focus:ring-white ref={emailInput} '></button>
                    </div>
                </div>
                <div className="green-gradient absolute right-80 top-98"></div>
                <img src='/Group 273.png' className=' pt-14 pl-36' />

            </div>
        </div>

    )
}

export default Web
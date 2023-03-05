import React, { useState } from 'react'

function Web() {
    const [theme, setTheme] = useState("black")
    // const handletheme=(value:any) =>{
    //     setTheme(value)
    // }

    return (
        <div className='flex'>
            <div className=' p-28 flex-col '>
                <h1 className='text-green-500 text-3xl mb-7'>The best UI ever built </h1>
                <div>
                    <p className='text-white text-2xl'>The next gen UI made with simple HTML and Tailwind CSS. It's compatible with simple HTML, CSS
                        static website or a React, Vue, Angular or Next.js Complex app.</p>
                    <p className='text-white text-2xl font-bold mb-7'>Zero JS and no-plugins installed.</p>
                </div>
                <button className=' bg-green-500 rounded-xl p-2 pr-6 pl-6  '>Explore</button>
            </div>
            <div className='p-10 flex'>
                <div className=' flex-col bg-[#282E36] p-10 rounded-lg'>
                    <img src='/web3.png' />
                    <div className='bg-white w-full'>
                        <div className='w-full'>
                            <h1 className=""> What is web 3?</h1>
                            <p className='w-full'>
                                Slate helps you see how 
                                many more days you need 
                                to work to reach. Slate helps you
                                 see how many more days.
                            </p>
                            <div className=' flex-row'>
                                <button className={`${theme}  text-white`}>Tags</button>
                                <button className={`${theme}  text-white`}>Google</button>
                                <button className={`${theme}  text-white`}>Nvdia</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex-row'>
                        <button onClick={()=>setTheme("red")} className='p-2 rounded-full bg-red-500 mr-3'></button>
                        <button onClick={()=>setTheme("green")} className='p-2 rounded-full bg-green-500 mr-3 '></button>
                        <button onClick={()=>setTheme("blue")} className='p-2 rounded-full bg-blue-500 mr-3 '></button>
                        <button onClick={()=>setTheme("black")} className='p-2 rounded-full bg-black mr-3 '></button>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Web
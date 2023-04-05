import React from "react"
import Navbar from 'components/Navbar'
import Footer from "components/Footer"


const Home = () => (
    <div className='index-bg '>
        <Navbar />
        <div>
            <div className="flex justify-between items-center md:p-28 md:flex-row flex-col-reverse">
                <div className="relative p-4">
                    <div className="green-gradient  absolute md:left-80 left-10 "></div>
                    <h1 className="text-white font-bold md:text-8xl text-3xl whitespace-nowrap  mb-20 md:block hidden">About Community.</h1>
                    <div className="flex  ">
                        <img src="/Group 325.png" alt="" className="md:h-[500px] md:w-32 hidden md:block" />
                        <p className="text-white md:text-2xl text-lg md:w-[500px] text-center  ">
                            Clueless in a virtual open-source community built with the motive of “Learn and Grow”. We, as a community, encourage and guide enthusiasts to dive into the world of open-source. We provide the best resources available on the internet, write blogs that helps other to explore their domain more deeply, organize events, GitHub repositories, organize hackathons, and more couniting activities
                        </p>

                    </div>
                    <img src='/Group 273.png' className=' pt-14 pl-36 md:hidden block w-6/12' />
                </div>
                <div>
                    <h1 className="text-white font-bold md:text-8xl text-3xl whitespace-nowrap  my-20 block md:hidden text-center ">About Community.</h1>
                    <img src="/aboutus.png" alt="" className="" />
                </div>

            </div>
            <div className=" p-10  w-screen ">
                <div className=' flex  md:flex-row flex-col-reverse  relative bg-[#282E36] md:p-2 justify-between w-full   rounded-xl  ring-1 ring-white mb-10'>
                    <div className='flex items-center justify-between gap-16 md:p-3  w-full  md:flex-row flex-col-reverse'>

                        <img src="earth.png" alt="" className="md:w-4/12 mb-3" />


                        <div className='flex  flex-col text-center items-center py-5  p-3  '>
                            <h1 className="text-white font-bold md:text-4xl w-48 mb-6 text-2xl">Our Vision</h1>
                            <p className="text-white text-lg  md:text-left text-center">Internet is flooded with so many resources that can make one confused and clueless. So we provide the best, filtered, and curated resources like YouTube videos, GitHub repositories, websites, cheatsheets, etc! </p>

                        </div>


                    </div>
                    <div className="">

                        <a href='https://github.com/Clueless-Community/seamless-ui' target={'_blank'} rel="noreferrer" >
                            <button className='bg-[#7EE787] md:hidden block  absolute md:bottom-0 top-0 w-full left-0 p-2 md:rounded-b-xl rounded-t-xl  hover:bg-green-800 transition-all'>
                            </button>

                        </a>
                        <a href='https://github.com/Clueless-Community/seamless-ui' target={'_blank'} rel="noreferrer" >
                            <button className='bg-[#7EE787]   absolute md:bottom-0 h-full  right-0 p-2 md:rounded-r-xl hidden md:block  hover:bg-green-800 transition-all'>
                            </button>

                        </a>
                    </div>
                </div>

            </div>
            <div>
                
                <div className="flex flex-col justify-center items-center">
                <img src="/aboutuspipe.png" className="md:mr-44 w-[200px]" alt="" />
                    <h1 className=" font-bold md:text-5xl text-white my-10 text-3xl  ">Maintainers</h1>
                </div>
            </div>
            <div className=" md:justify-evenly justify-center items-center md:flex-row flex flex-col gap-3 ">
                <a href='https://github.com/Rajdip019/' target={'_blank'} rel="noreferrer" >
                    <img src="/rajdeep.png" alt="" className="w-[130px]" />
                </a>
                <a href='https://github.com/rupsha014/' target={'_blank'} rel="noreferrer" >
                    <img src="/rupsha.png" alt="" className="w-[130px]" />
                </a>
                <a href='https://github.com/RavindraP04/' target={'_blank'} rel="noreferrer" >
                    <img src="/ravindta.png" alt="" className="w-[130px]" />
                </a>

            </div>
            
            <img src="/socialmedia.png" alt="" className=" mt-32 p-4 mb-24  w-[70%] mx-auto md:block hidden " />
            <img src="/socialmedia2.png" alt="" className=" md:mt-24 p-16 mb-24 w-full md:hidden " />

            <Footer />
        </div>
    </div>

)


export default Home
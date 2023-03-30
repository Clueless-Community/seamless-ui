import React from "react"
import Navbar from 'components/Navbar'
import Footer from "components/Footer"


const Home = () => (
    <div className='index-bg '>
        <Navbar />
        <div>
            <div className="flex justify-between items-center p-28">
                <div>
                    <div className="green-gradient  absolute md:left-80 left-10 "></div>
                    <h1 className="text-white font-bold text-8xl w-32 mb-20">About Community.</h1>
                    <div className="flex  ">
                        <img src="/Group 325.png" alt="" className="h-[500px] w-32" />
                        <p className="text-white text-2xl w-[500px] justify-center  ">
                            Clueless in a virtual open-source community built with the motive of “Learn and Grow”. We, as a community, encourage and guide enthusiasts to dive into the world of open-source. We provide the best resources available on the internet, write blogs that helps other to explore their domain more deeply, organize events, GitHub repositories, organize hackathons, and more couniting activities
                        </p>

                    </div>
                </div>
                <div>
                    <img src="/aboutus.png" alt="" className=" -mr-28" />
                </div>

            </div>
            <div className=" p-60 -mt-60">
                <div className=' flex  flex-row relative bg-[#282E36] p-2 justify-between  md:w-[1200px] rounded-xl  ring-1 ring-white mb-10'>
                    <div className='flex items-center justify-between p-3 '>

                        <img src="earth.png" alt="" className="w-4/12 -ml-10" />


                        <div className='flex  flex-col text-center items-center ml-44 mr-6 '>
                            <h1 className="text-white font-bold text-4xl w-48 mb-6 ">Our Vision</h1>
                            <p className="text-white text-lg w-[600px] text-left ">Internet is flooded with so many resources that can make one confused and clueless. So we provide the best, filtered, and curated resources like YouTube videos, GitHub repositories, websites, cheatsheets, etc! </p>
                        </div>


                    </div>
                    <a href='https://github.com/Clueless-Community/seamless-ui' target={'_blank'} rel="noreferrer" >
                        <button className='bg-[#7EE787] hidden md:block  absolute right-0 h-full top-0 p-4 rounded-r-xl hover:bg-green-800 transition-all'>
                        </button>
                    </a>
                    <a href='https://github.com/Clueless-Community/seamless-ui' target={'_blank'} rel="noreferrer" >
                        <button className='bg-[#7EE787]  md:hidden  absolute bottom-0 w-full left-0 p-2 rounded-b-xl hover:bg-green-800 transition-all'>
                        </button>

                    </a>
                </div>

            </div>
            <div>
                <img src="/aboutuspipe.png" className="px-[660px] -mt-20 -ml-10 " alt="" />
                <div className="flex justify-center items-center">
                    <h1 className=" font-bold text-5xl text-white mt-7 ">Team Members</h1>
                </div>
            </div>
            <img src="/socialmedia.png" alt="" className="pl-28 mt-24 mb-24"/>
            <Footer />
        </div>
    </div>

)


export default Home
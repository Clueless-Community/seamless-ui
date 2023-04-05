import React from "react"
import Navbar from 'components/Navbar'
import Footer from "components/Footer"


const Home = () => (
    <div className='index-bg '>
        <Navbar />
        <div className="relative w-full">
            <div className="flex md:flex-row flex-col-reverse justify-between items-center md:px-36 -mt-40 md:-mb-28 py-10">
                <div className="mb-28 md:mb-0 p-4">
                    <h1 className="font-bold md:text-5xl text-white md:mb-4 text-3xl mb-2">Contact Us</h1>
                    <p className=" text-[#7EE787] mb-8 md:text-lg">Have any questions? We’d love to hear from you.</p>
                    <div className="gap-0">

                        <p className="text-white -mb-2 ">Email</p>
                        <input placeholder="Enter the Email" className=" border-2 w-full border-[#7EE787] md:p-3 p-1 rounded-lg my-3 index-bg text-white md:mr-96"></input>
                    </div>
                    <div>

                        <p className="text-white -mb-2">Subject</p>
                        <input placeholder="Enter the Subject" className="border-2 w-full border-[#7EE787] md:p-3  p-1 rounded-lg my-3 index-bg text-white md:mr-96 "></input>
                    </div>
                    <div>
                        <div className="green-gradient  absolute md:left-84 left-0 md:block hidden"></div>
                        <div className="green-gradient  absolute md:right-84 md:top-72 right-0"></div>
                        <p className="text-white -mb-2">Write here</p>
                        <input placeholder="How can we help you" className="border-2 w-full border-[#7EE787] md:p-3 p-1  rounded-lg my-3 md:pb-32  index-bg pb-28 text-white md:mr-96"></input>
                    </div>
                </div>
                <img src="/input.png" className="md:w-7/12 md:mb-40  -ml-20 my-28 md:my-0" />
            </div>
        </div>
        <Footer />
    </div>

)


export default Home
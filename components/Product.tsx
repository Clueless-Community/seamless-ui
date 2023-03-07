import React from 'react'

function Product() {
    return (
        <div className='relative mt-20'>
            <h1 className='text-4xl text-[#7EE787] pl-20'>A Product by ClueLess</h1>
            <div className='flex justify-between items-center gap-36 px-20 py-20'>
            <div className="green-gradient absolute left-75 top-32"></div>
                <img src='/zig.png' className='pl-16 w-3/12' draggable={false} />
                <div>

                <p className='text-white text-xl  '>Built with the vision to encourage open-source enthusiasts!
                    We provide the best resources, conducts weekly contests to test your skills, a guide to Open-source, and help you build projects.

                </p>
                <button className='bg-[#7EE787] p-2 px-6 font-semibold rounded-lg mt-10 hover:bg-green-800 transition-all text-xl'>Visit ClueLess</button>
                </div>
            </div>
        </div>
    )
}
export default Product
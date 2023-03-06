import React from 'react'

function Product() {
    return (
        <div className='relative'>
            <h1 className='text-4xl text-green-500 pl-32'>A Product by ClueLess</h1>
            <div className='flex justify-between items-center gap-32 px-20 py-20'>
            <div className="green-gradient absolute left-75 top-10"></div>
                <img src='/zig.png' className='pl-20' />
                <div>

                <p className='text-white text-2xl  '>Built with the vision to encourage open-source enthusiasts!
                    We provide the best resources, conducts weekly contests to test your skills, a guide to Open-source, and help you build projects.

                </p>
                <button className='bg-green-500 p-2 px-6 font-semibold rounded-lg mt-10 hover:bg-green-700 transition-all'>Visit ClueLess</button>
                </div>
            </div>
        </div>
    )
}
export default Product
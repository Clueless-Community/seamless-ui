import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative px-2">
        <div className="green-gradient  absolute md:left-80 left-0 "></div>
        <div className="green-gradient  absolute md:right-80 md:top-72 right-0"></div>
        <h1 className=" text-center text-white md:text-7xl text-4xl font-bold md:pt-36  pt-16 md:w-[1000px] mx-auto">
          The Open-source UI library You always wanted
        </h1>
        <h2 className=" text-center pt-9 text-white md:w-[750px] mx-auto ">
          The next gen UI made with simple HTML and Tailwind CSS. It's
          compatible with simple HTML, CSS static website or a React,
          Vue, Angular or Next.js Complex app. Zero JS and no pluggins      
          installed.
        </h2>
      </div>
      <div className=" flex flex-col md:flex-row pt-10 md:justify-center items-center  md:space-x-7 space-y-7 md:space-y-0 pb-28 w-fit ">
        <button className="w-fit bg-[#7EE787] border-2 border-[#7EE787] hover:bg-green-800 transition-all hover:border-green-800 active:scale-95 p-2 rounded-lg px-6 font-semibold">
          Getting Started
        </button>
        <button className=" text-white border-2 border-[#7EE787] hover:border-green-800 hover:bg-green-800 active:scale-95 transition-all p-2 rounded-lg px-4 font-semibold">
          Explore Components
        </button>
      </div>
      <h1 className=" text-center md:text-2xl text-4xl font-semibold mt-7 mb-4 text-white">
        SeamLess UI in all frameworks
      </h1>
      <div className=" flex flex-wrap w-full sm:justify-between mt-16 px-10 md:px-36 xl:px-80 pb-40 gap-5 md:gap-0 ">
        <img src="/Vue.js_Logo_2 1 1.png" alt="" className="w-20 h-20" draggable={false} />
        <img src="/next-js 1 2.png" alt="" className="w-20 h-20" draggable={false} />
        <img src="/download 2 3.png" alt="" className="w-20 h-20" draggable={false} />
        <img src="/image 20 4.png" alt="" className="w-20 h-20 mt-6 md:mt-0 ml-12 md:ml-0" draggable={false} />
        <img src="/svelte 1 5.png" alt="" className="w-20 h-20 mt-6 md:mt-0" draggable={false} />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <div className="green-gradient absolute left-80"></div>
        <div className="green-gradient absolute right-80 top-72"></div>
        <h1 className=" text-center text-white text-7xl font-bold pt-36">
          The Open-source UI library <br /> You always wanted
        </h1>
        <h2 className=" text-center pt-9 text-gray-300">
          The next gen UI made with simple HTML and Tailwind CSS. It's
          compatible with simple HTML, CSS static <br /> website or a React,
          Vue, Angular or Next.js Complex app. Zero JS and no pluggins
          installed.
        </h2>
      </div>
      <div className=" flex pt-10 justify-center space-x-7 pb-28 text-white">
        <button className=" bg-green-700 border-2 border-green-700 hover:bg-green-800 transition-all hover:border-green-800 active:scale-95 p-2 rounded-lg px-6 font-semibold">
          Getting Started
        </button>
        <button className="border-2 border-green-700 hover:border-green-800 hover:bg-green-800 active:scale-95 transition-all p-2 rounded-lg px-4 font-semibold">
          Explore Components
        </button>
      </div>
      <h1 className=" text-center text-2xl font-semibold mt-7 mb-4 text-white">
        SeamLess UI in all frameworks
      </h1>
      <div className=" flex flex-wrap w-full sm:justify-between mt-16 px-10 md:px-36 xl:px-80 pb-40 ">
        <img src="/Vue.js_Logo_2 1 1.png" alt="" className="w-20 h-20" draggable={false} />
        <img src="/next-js 1 2.png" alt="" className="w-20 h-20" draggable={false} />
        <img src="/download 2 3.png" alt="" className="w-20 h-20"  draggable={false}/>
        <img src="/image 20 4.png" alt="" className="w-20 h-20" draggable={false} />
        <img src="/svelte 1 5.png" alt="" className="w-20 h-20"  draggable={false}/>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div>
        <div className="relative px-2">
          <div className="green-gradient  absolute md:left-80 left-0 "></div>
          <div className="green-gradient  absolute md:right-80 md:top-72 right-0"></div>
          <h1 className="text-center text-white md:text-7xl text-4xl font-bold md:pt-36 pt-16 lg:w-full mx-auto -mt-6 md:-mt-0">
            The Open-source UI library <br /> You always wanted
          </h1>
          <h2 className=" text-center pt-9 text-white md:w-[750px] mx-auto ">
            The next gen UI made with simple HTML and Tailwind CSS. It's
            compatible with simple HTML, CSS static website or a React, Vue,
            Angular or Next.js Complex app. Zero JS and no plugins installed.
          </h2>
        </div>
        <div className=" flex flex-col md:flex-row pt-10 md:justify-center items-center  md:space-x-7 space-y-7 md:space-y-0 pb-28">
          <Link href="/docs/getting-started">
            <button className="text-black hover:text-white w-fit bg-[#7EE787] border-2 border-[#7EE787] hover:bg-green-800 transition-all hover:border-green-800 active:scale-95 p-2 rounded-lg px-6 font-semibold">
              Getting Started
            </button>
          </Link>
          <Link href="/docs/components/accordion">
            <button className=" text-white border-2 border-[#7EE787] hover:border-green-800 hover:bg-green-800 active:scale-95 transition-all p-2 rounded-lg px-4 font-semibold">
              Explore Components
            </button>
          </Link>
        </div>
        <h1 className=" text-center md:text-2xl text-4xl font-semibold mt-7 mb-4 text-white">
          SeamLess UI in all frameworks
        </h1>
        <div className="mt-16 flex w-full flex-wrap justify-center gap-12 px-8 pb-40 sm:justify-evenly sm:px-20 md:gap-6 md:px-36 xl:px-80">
          <img
            src="/download 2 3.png"
            alt="HTML5 Logo"
            className="md:w-18 md:h-18 h-14 w-14 lg:h-20 lg:w-20"
            draggable={false}
          />
          <img
            src="/image 20 4.png"
            alt="ReactJS Logo"
            className="md:w-18 md:h-18 h-14 w-14 lg:h-20 lg:w-20"
            draggable={false}
          />
          <img
            src="/next-js 1 2.png"
            alt="NextJS Logo"
            className="md:w-18 md:h-18 h-14 w-14 lg:h-20 lg:w-20"
            draggable={false}
          />
          <img
            src="/svelte 1 5.png"
            alt="SvelteJS Logo"
            className="md:w-18 md:h-18 h-14 w-14 lg:h-20 lg:w-20"
            draggable={false}
          />
          <img
            src="/Vue.js_Logo_2 1 1.png"
            alt="VueJS Logo"
            className="md:w-18 md:h-18 h-14 w-14 lg:h-20 lg:w-20"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

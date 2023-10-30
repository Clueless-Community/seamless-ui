import Link from "next/link";
import React from "react";

function Time() {
  return (
    <div className=" md:pl-20 relative px-2 flex flex-col lg:flex-row">
      <div className="md:absolute text-center md:text-left">
        <div className="green-gradient absolute md:left-75 md:bottom-28"></div>
        <h1 className=" text-[#7EE787] font-semibold text-4xl pb-1  ">
          Lacking time?{" "}
        </h1>
        <h1 className=" text-white font-semibold text-3xl pb-5 ">
          We got you covered.
        </h1>
        <p className="text-white w-80 sm:w-[360px] mx-auto md:w-[400px] lg:w-[600px] text-xl">
          built with the vision to encourage open-source enthusiasts! built with
          the vision to encourage open-source enthusiasts!
        </p>
        <Link href="/docs/components/accordion">
          <button className="bg-[#7EE787] p-2 px-4 text-black hover:text-white text-lg rounded-lg mt-10 font-semibold  hover:bg-green-800 transition-all">
            Explore components
          </button>
        </Link>
      </div>
      <img
        src="/Group ui.png"
        className="md:hidden pt-10 w-60 sm:w-72 mx-auto"
        draggable={false}
      />
      <img
        src="/Group 271.png"
        className="mt-72 lg:mt-0 w-11/12 hidden md:block  "
        draggable={false}
      />
    </div>
  );
}

export default Time;

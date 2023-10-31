import Link from "next/link";
import React from "react";

function Product() {
  return (
    <div className="relative mt-20">
      <h1 className="md:text-4xl text-3xl text-[#7EE787] md:pl-20 text-center md:text-left px-4 md:px-0">
        A Product by ClueLess
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-36 md:px-20 md:py-20">
        <div className="green-gradient absolute left-75 top-32"></div>
        <img
          src="/zig.png"
          className="md:pl-16 md:w-3/12 w-48 mt-16 md:mt-0"
          draggable={false}
        />
        <div className=" flex flex-col items-center md:items-start">
          <p className="text-white text-xl text-center mt-10 md:mt-0 md:text-left px-5 md:px-0 ">
            Built with the vision to encourage open-source enthusiasts! We
            provide the best resources, conducts weekly contests to test your
            skills, a guide to Open-source, and help you build projects.
          </p>

          <button className="bg-[#7EE787] py-2 my-9 text-black hover:text-white font-semibold rounded-lg hover:bg-green-800 transition-all text-xl">
            <a href="https://clueless.live/" className="p-2 px-6" target="_blank" rel="noreferrer">
              Visit ClueLess
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product;

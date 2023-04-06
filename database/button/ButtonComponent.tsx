import React from "react";

// ------------Primary Text Button--------------
export const PrimaryTextButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button
        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-all 
    hover:bg-white/90 disabled:bg-gray-400"
      >
        Button
      </button>

      <button
        className="text-lg rounded-md bg-white px-8 py-2.5 font-medium text-black transition-all
     hover:bg-white/90 disabled:bg-gray-400"
      >
        Button
      </button>

      <button
        className="rounded-md bg-white px-10 py-3 text-2xl font-medium text-black transition-all
     hover:bg-white/90 disabled:bg-gray-400"
      >
        Button
      </button>
    </div>
  );
};

export const PrimaryTextButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button
        className="bg-blue-600 px-4 py-2 rounded-md text-white text-sm text-center hover:bg-blue-700 
transition-all disabled:bg-gray-400"
      >
        Button
      </button>

      <button
        className="bg-blue-600 px-8 py-2.5 rounded-md text-white text-lg text-center hover:bg-blue-700 
transition-all disabled:bg-gray-400"
      >
        Button
      </button>

      <button
        className="bg-blue-600 px-10 py-3 rounded-md text-white text-2xl text-center hover:bg-blue-700 
transition-all disabled:bg-gray-400"
      >
        Button
      </button>
    </div>
  );
};

export const PrimaryTextButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button
        className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all
hover:bg-black disabled:bg-gray-400"
      >
        Button
      </button>

      <button
        className="rounded-md bg-gray-900 px-8 py-2.5 text-lg font-medium text-white transition-all
hover:bg-black disabled:bg-gray-400"
      >
        Button
      </button>

      <button
        className="rounded-md bg-gray-900 px-10 py-3 text-2xl font-medium text-white transition-all
hover:bg-black disabled:bg-gray-400"
      >
        Button
      </button>
    </div>
  );
};

// ------------Primary Rounded Text Button--------------//
export const PrimaryRoundedTextButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-white/90 disabled:bg-gray-400">
        Button
      </button>

      <button className="text-lg rounded-full bg-white px-8 py-2.5 font-medium text-black transition-all hover:bg-white/90 disabled:bg-gray-400">
        Button
      </button>

      <button className="rounded-full bg-white px-10 py-3 text-2xl font-medium text-black transition-all hover:bg-white/90 disabled:bg-gray-400">
        Button
      </button>
    </div>
  );
};

export const PrimaryRoundedTextButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button
        className="bg-blue-600 px-4 py-2 rounded-full text-white text-sm font-normal font-sans
text-center text-bg-gray-200 hover:bg-blue-700 transition-all disabled:bg-gray-400"
      >
        Button
      </button>

      <button
        className="bg-blue-600 px-8 py-2.5 rounded-full text-white text-lg font-normal font-sans
text-center text-bg-gray-200 hover:bg-blue-700 transition-all disabled:bg-gray-400"
      >
        Button
      </button>

      <button
        className="bg-blue-600 px-10 py-3 rounded-full text-white text-2xl font-normal hover:bg-blue-700
transition-all disabled:bg-gray-400"
      >
        Button
      </button>
    </div>
  );
};

export const PrimaryRoundedTextButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button
        className="hover:bg-black px-4 py-2 rounded-full text-white text-sm font-normal bg-gray-900
transition-all disabled:bg-gray-400 font-sans text-center text-bg-gray-200"
      >
        Button
      </button>

      <button
        className="hover:bg-black px-8 py-2.5 rounded-full text-white text-lg font-normal bg-gray-900
transition-all disabled:bg-gray-400 font-sans text-center text-bg-gray-200"
      >
        Button
      </button>

      <button
        className="hover:bg-black px-10 py-3 rounded-full text-white text-2xl font-normal bg-gray-900
transition-all disabled:bg-gray-400 font-sans text-center  text-bg-gray-200"
      >
        Button
      </button>
    </div>
  );
};

// ------------Secondary Text Button--------------//
export const SecondaryTextButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className=" border-2 border-white px-4 py-2 rounded-md text-white text-sm font-medium  hover:bg-white hover:text-black transition-all disabled:bg-gray-400 bg-transparent font-sans text-center">
        Button
      </button>

      <button className=" border-2 border-white px-8 py-2.5 rounded-md text-white text-lg font-medium  hover:bg-white transition-all hover:text-black disabled:bg-gray-400  bg-transparent font-sans text-center">
        Button
      </button>

      <button className="border-2 border-white px-10 py-3 text-2xl rounded-md  text-white  font-medium  hover:bg-white transition-all hover:text-black disabled:bg-gray-400  bg-transparent font-sans text-center">
        Button
      </button>
    </div>
  );
};

export const SecondaryTextButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className=" border-2 border-blue-600 px-4 py-2 rounded-md text-blue-600 text-sm font-medium  hover:bg-blue-700 hover:text-white transition-all disabled:bg-gray-400 bg-transparent font-sans text-center">
        Button
      </button>
      <button className=" border-2 border-blue-600 px-8 py-2.5 rounded-md text-blue-600 text-lg font-medium  hover:bg-blue-700 hover:text-white transition-all  disabled:bg-gray-400  bg-transparent font-sans text-center">
        Button
      </button>
      <button className="border-2 border-blue-600 px-10 py-3 text-2xl rounded-md  text-blue-600  font-medium  hover:bg-blue-700 hover:text-white transition-all disabled:bg-gray-400  bg-transparent font-sans text-center">
        Button
      </button>
    </div>
  );
};

export const SecondaryTextButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="text-sm rounded-md border-2 border-black text-black px-4 py-2 transition-all hover:bg-black hover:text-white">
        Button
      </button>
      <button className="text-lg rounded-md border-2 border-black text-black px-8 py-2.5 transition-all hover:bg-black hover:text-white">
        Button
      </button>
      <button className="text-2xl rounded-md border-2 border-black text-black px-10 py-3 transition-all hover:bg-black hover:text-white">
        Button
      </button>
    </div>
  );
};

// ------------Secondary Rounded Text Button--------------//
export const SecondaryRoundedTextButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="border-white-90 rounded-full border-2 px-4 py-2 text-sm font-medium text-white/90 transition-all hover:bg-white hover:text-black disabled:bg-gray-400 disabled:text-white disabled:opacity-75">
        Button
      </button>

      <button className="border-white-90 rounded-full border-2 px-8 py-2.5 text-lg font-medium text-white/90 transition-all hover:bg-white hover:text-black disabled:bg-gray-400 disabled:text-white disabled:opacity-75">
        Button
      </button>

      <button className="border-white-90 rounded-full border-2 px-10 py-3 text-2xl font-medium text-white/90 transition-all hover:bg-white hover:text-black disabled:bg-gray-400 disabled:text-white disabled:text-white/90">
        Button
      </button>
    </div>
  );
};

export const SecondaryRoundedTextButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded-full border-2 border-blue-600 bg-transparent px-4 py-2 text-center font-sans text-sm font-medium text-blue-600 transition-all hover:bg-blue-700 hover:text-white">
        Button
      </button>

      <button className="rounded-full border-2 border-blue-600 bg-transparent px-8 py-2.5 text-center font-sans text-lg font-medium text-blue-600 transition-all hover:bg-blue-700 hover:text-white">
        Button
      </button>

      <button className="font-normalS rounded-full border-2 border-blue-600 bg-transparent px-10 py-3 font-sans text-2xl text-blue-600 transition-all hover:bg-blue-700 hover:text-white">
        Button
      </button>
    </div>
  );
};

export const SecondaryRoundedTextButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded-full border-2 border-black bg-transparent  text-black px-4 py-2 text-center font-sans text-sm font-medium text-slate-900 transition-all hover:bg-black hover:text-white disabled:bg-gray-400 disabled:text-white disabled:opacity-75">
        Button
      </button>

      <button className="text-lg rounded-full border-2 border-black text-black  bg-transparent px-8 py-2.5 text-center font-sans font-medium text-slate-900 transition-all hover:bg-black hover:text-white disabled:bg-gray-400 disabled:text-white disabled:opacity-75">
        Button
      </button>

      <button className="rounded-full border-2 border-black bg-transparent text-black  px-10 py-3 text-center font-sans text-2xl font-medium text-slate-900 transition-all hover:bg-black hover:text-white disabled:bg-gray-400 disabled:text-white disabled:text-white/90">
        Button
      </button>
    </div>
  );
};

// ------------Group Button--------------//
export const GroupButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <div className="mr-2 inline-flex">
        <button className="bg-white text-black px-4 py-2 border border-black hover:bg-black hover:text-white focus:text-white focus:bg-black">
          Left
        </button>
        <button className="bg-white text-black px-4 py-2 border border-black hover:bg-black hover:text-white focus:text-white focus:bg-black">
          Middle
        </button>
        <button className="bg-white text-black px-4 py-2 border border-black hover:bg-black hover:text-white focus:text-white focus:bg-black">
          Right
        </button>
      </div>

      <div className="inline-flex">
        <button className="border border-white bg-transparent px-4 py-2 text-white hover:bg-white hover:text-black hover:ring-0 focus:bg-white focus:text-black focus:ring-0">
          Left
        </button>
        <button className="border border-white bg-transparent px-4 py-2 text-white hover:bg-white hover:text-black hover:ring-0 focus:bg-white focus:text-black focus:ring-0">
          Middle
        </button>
        <button className="border border-white bg-transparent px-4 py-2 text-white hover:bg-white hover:text-black hover:ring-0 focus:bg-white focus:text-black focus:ring-0">
          Right
        </button>
      </div>
    </div>
  );
};

export const GroupButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <div className="mr-2 inline-flex">
        <button className="border border-blue-700 bg-blue-500 px-4 py-2 text-gray-100 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:ring-0 focus:border-blue-600 focus:bg-blue-600 focus:ring-0">
          Left
        </button>
        <button className="border border-blue-700 bg-blue-500 px-4 py-2 text-gray-100 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:ring-0 focus:border-blue-600 focus:bg-blue-600 focus:ring-0">
          Middle
        </button>
        <button className="border border-blue-700 bg-blue-500 px-4 py-2 text-gray-100 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:ring-0 focus:border-blue-600 focus:bg-blue-600 focus:ring-0">
          Right
        </button>
      </div>

      <div className="inline-flex" role="group">
        <button className="border border-blue-500 bg-transparent px-4 py-2 text-blue-500 hover:border-blue-600 hover:bg-blue-600 hover:text-gray-100 hover:ring-0 focus:border-blue-600 focus:bg-blue-600 focus:text-gray-100 focus:ring-0">
          Left
        </button>
        <button className="border border-blue-500 bg-transparent px-4 py-2 text-blue-500 hover:border-blue-600 hover:bg-blue-600 hover:text-gray-100 hover:ring-0 focus:border-blue-600 focus:bg-blue-600 focus:text-gray-100 focus:ring-0">
          Middle
        </button>
        <button className="border border-blue-500 bg-transparent px-4 py-2 text-blue-500 hover:border-blue-600 hover:bg-indigo-600 hover:text-gray-100 hover:ring-0 focus:border-blue-600 focus:bg-blue-600 focus:text-gray-100 focus:ring-0">
          Right
        </button>
      </div>
    </div>
  );
};

export const GroupButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <div className="mr-2 inline-flex" role="group">
        <button className="border border-white bg-black px-4 py-2 text-white hover:bg-white hover:text-black hover:ring-0 focus:border-black focus:bg-white focus:text-black focus:ring-0">
          Left
        </button>
        <button className="border border-white bg-black px-4 py-2 text-white hover:bg-white hover:text-black hover:ring-0 focus:border-black focus:bg-white focus:text-black focus:ring-0">
          Middle
        </button>
        <button className="border border-white bg-black px-4 py-2 text-white hover:bg-white hover:text-black hover:ring-0 focus:border-black focus:bg-white focus:text-black focus:ring-0">
          Right
        </button>
      </div>

      <div className="inline-flex" role="group">
        <button className="border border-black bg-transparent px-4 py-2 text-black hover:bg-black hover:text-white hover:ring-0 focus:border-white focus:bg-black focus:text-white focus:ring-0">
          Left
        </button>
        <button className="border border-black bg-transparent px-4 py-2 text-black hover:bg-black hover:text-white hover:ring-0 focus:border-white focus:bg-black focus:text-white focus:ring-0">
          Middle
        </button>
        <button className="border border-black bg-transparent px-4 py-2 text-black hover:bg-black hover:text-white hover:ring-0 focus:border-white focus:bg-black focus:text-white focus:ring-0">
          Right
        </button>
      </div>
    </div>
  );
};

//-------------Primary Icon Button---------------//
export const PrimaryIconButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded bg-white p-2 text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
      <button className="rounded bg-white p-3 text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
      <button className="rounded bg-white p-4 text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
};

export const PrimaryIconButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded bg-blue-600 p-2 text-white transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
      <button className="rounded bg-blue-600 p-3 text-white transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
      <button className="rounded bg-blue-600 p-4 text-white transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
};

export const PrimaryIconButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded bg-black p-2 text-white transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
      <button className="rounded bg-black p-3 text-white transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
      <button className="rounded bg-black p-4 text-white transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
};

//-------------Primary Icon Button---------------//
export const PrimaryRoundedIconButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded-full bg-white p-2 text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded-full bg-white p-3 text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded-full bg-white p-4 text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
};

export const PrimaryRoundedIconButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded-full bg-blue-600 p-2 text-white transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded-full bg-blue-600 p-3 text-white transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded-full bg-blue-600 p-4 text-white transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
};

export const PrimaryRoundedIconButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded-full bg-black p-2 text-white transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded-full bg-black p-3 text-white transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded-full bg-black p-4 text-white transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
};

//-------------Secondary Icon Button-----------------//
export const SecondaryIconButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded bg-transparent border-2 border-white p-2 text-white hover:bg-white hover:text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded bg-transparent border-2 border-white p-3 text-white hover:bg-white hover:text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded bg-transparent border-2 border-white p-4 text-white hover:bg-white hover:text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
};

export const SecondaryIconButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded bg-transparent border-2 border-blue-600 hover:bg-blue-600 p-2 hover:text-white text-blue-600 transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded bg-transparent border-2 border-blue-600 hover:bg-blue-600 p-3 hover:text-white text-blue-600 transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded bg-transparent border-2 border-blue-600 hover:bg-blue-600 p-4 hover:text-white text-blue-600 transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
};

export const SecondaryIconButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded bg-transparent border-2 border-black hover:bg-black p-2 hover:text-white text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded bg-transparent border-2 border-black hover:bg-black p-3 hover:text-white text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded bg-transparent border-2 border-black hover:bg-black p-4 hover:text-white text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
};

//-------------Secondary Rounded Icon Button-----------------//
export const SecondaryRoundedIconButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded-full bg-transparent border-2 border-white p-2 text-white hover:bg-white hover:text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded-full bg-transparent border-2 border-white p-3 text-white hover:bg-white hover:text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded-full bg-transparent border-2 border-white p-4 text-white hover:bg-white hover:text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
};

export const SecondaryRoundedIconButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded-full bg-transparent border-2 border-blue-600 hover:bg-blue-600 p-2 hover:text-white text-blue-600 transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded-full bg-transparent border-2 border-blue-600 hover:bg-blue-600 p-3 hover:text-white text-blue-600 transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded-full bg-transparent border-2 border-blue-600 hover:bg-blue-600 p-4 hover:text-white text-blue-600 transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
};

export const SecondaryRoundedIconButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="rounded-full bg-transparent border-2 border-black hover:bg-black p-2 hover:text-white text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded-full bg-transparent border-2 border-black hover:bg-black p-3 hover:text-white text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      <button className="rounded-full bg-transparent border-2 border-black hover:bg-black p-4 hover:text-white text-black transition-all disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
};

//-----------primaryTextIconFrontButton-----------------//
export const PrimaryTextIconFrontButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="text-md flex items-center rounded-md bg-white px-6 py-3 font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="flex items-center rounded-md bg-white px-8 py-4 text-lg font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Settings</span>
      </button>
    </div>
  );
};

export const PrimaryTextIconFrontButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="text-md flex items-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="flex items-center rounded-md bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-blue-700 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Settings</span>
      </button>
    </div>
  );
};

export const PrimaryTextIconFrontButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="text-md flex items-center rounded-md bg-gray-900 px-6 py-3 font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="flex items-center rounded-md bg-gray-900 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Settings</span>
      </button>
    </div>
  );
};

//-----------primaryRoundedTextIconFrontButton-----------------//
export const PrimaryRoundedTextIconFrontButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="text-md flex items-center rounded-full bg-white px-6 py-3 font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="flex items-center rounded-full bg-white px-8 py-4 text-lg font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Settings</span>
      </button>
    </div>
  );
};

export const PrimaryRoundedTextIconFrontButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="text-md flex items-center rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="flex items-center rounded-full bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-blue-700 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Settings</span>
      </button>
    </div>
  );
};

export const PrimaryRoundedTextIconFrontButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="text-md flex items-center rounded-full bg-gray-900 px-6 py-3 font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="flex items-center rounded-full bg-gray-900 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Settings</span>
      </button>
    </div>
  );
};

//-----------SecondaryTextIconFrontButton-----------------//
export const SecondaryTextIconFrontButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-md bg-transparent border-2 border-white px-4 py-2 text-sm font-medium text-white hover:text-black transition-all hover:bg-white disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="text-md flex items-center rounded-md bg-transparent border-2 border-white px-6 py-3 font-medium text-white hover:text-black transition-all hover:bg-white disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="flex items-center rounded-md bg-transparent border-2 border-white px-8 py-4 text-lg font-medium text-white hover:text-black transition-all hover:bg-white disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Settings</span>
      </button>
    </div>
  );
};

export const SecondaryTextIconFrontButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-md bg-transparent border-2 border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:text-white transition-all hover:bg-blue-600 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="text-md flex items-center rounded-md bg-transparent border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:text-white transition-all hover:bg-blue-600 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="flex items-center rounded-md bg-transparent border-2 border-blue-600 px-8 py-4 text-lg font-medium text-blue-600 hover:text-white transition-all hover:bg-blue-600 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Settings</span>
      </button>
    </div>
  );
};

export const SecondaryTextIconFrontButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-md bg-transparent border-2 border-black px-4 py-2 text-sm font-medium text-black transition-all hover:bg-black hover:text-white disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="text-md flex items-center rounded-md bg-transparent border-2 border-black px-6 py-3 font-medium text-black transition-all hover:bg-black hover:text-white disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="flex items-center rounded-md bg-transparent border-2 border-black px-8 py-4 text-lg font-medium text-black transition-all hover:bg-black hover:text-white disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Settings</span>
      </button>
    </div>
  );
};

//-----------SecondaryRoundedTextIconFrontButton-----------------//
export const SecondaryRoundedTextIconFrontButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-transparent border-2 border-white px-4 py-2 text-sm font-medium hover:text-black text-white transition-all hover:bg-white disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="text-md flex items-center rounded-full bg-transparent border-2 border-white px-6 py-3 font-medium hover:text-black text-white transition-all hover:bg-white disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="flex items-center rounded-full bg-transparent border-2 border-white px-8 py-4 text-lg font-medium hover:text-black text-white transition-all hover:bg-white disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Settings</span>
      </button>
    </div>
  );
};

export const SecondaryRoundedTextIconFrontButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-transparent border-2 border-blue-600 px-4 py-2 text-sm font-medium hover:text-white text-blue-600 transition-all hover:bg-blue-600 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="text-md flex items-center rounded-full bg-transparent border-2 border-blue-600 px-6 py-3 font-medium hover:text-white text-blue-600 transition-all hover:bg-blue-600 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="flex items-center rounded-full bg-transparent border-2 border-blue-600 px-8 py-4 text-lg font-medium hover:text-white text-blue-600 transition-all hover:bg-blue-600 disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Settings</span>
      </button>
    </div>
  );
};

export const SecondaryRoundedTextIconFrontButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-transaprent border-2 border-black px-4 py-2 text-sm font-medium hover:text-white text-black transition-all hover:bg-black disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="text-md flex items-center rounded-full bg-transaprent border-2 border-black px-6 py-3 font-medium hover:text-white text-black transition-all hover:bg-black disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        <span>Settings</span>
      </button>

      <button className="flex items-center rounded-full bg-transaprent border-2 border-black px-8 py-4 text-lg font-medium hover:text-white text-black transition-all hover:bg-black disabled:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-7 w-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Settings</span>
      </button>
    </div>
  );
};

//-----------primaryTextIconRearButton-----------------//
export const PrimaryTextIconRearButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
        <span>Tag</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="ml-2 h-4 w-4"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>

      <button className="text-md flex items-center rounded-md bg-white px-6 py-3 font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
        <span>Tag</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-2 h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <button className="flex items-center rounded-md bg-white px-8 py-4 text-lg font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
        <span>Tag</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="ml-2 h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export const PrimaryTextIconRearButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:text-white disabled:bg-gray-300">
        <span>Tag</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="ml-2 h-4 w-4"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>

      <button className="text-md flex items-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 hover:text-white disabled:bg-gray-300">
        <span>Tag</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-2 h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <button className="flex items-center rounded-md bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-blue-700 hover:text-white disabled:bg-gray-300">
        <span>Tag</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="ml-2 h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export const PrimaryTextIconRearButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
        <span>Tag</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="ml-2 h-4 w-4"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>

      <button className="text-md flex items-center rounded-md bg-gray-900 px-6 py-3 font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
        <span>Tag</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-2 h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <button className="flex items-center rounded-md bg-gray-900 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
        <span>Tag</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="ml-2 h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

//-----------primaryRoundedTextIconRearButton-----------------//
export const PrimaryRoundedTextIconRearButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
  <span>Tag</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-2 h-4 w-4">
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
</button>

<button className="text-md flex items-center rounded-full bg-white px-6 py-3 font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
  <span>Tag</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 h-5 w-5">
    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
  </svg>
</button>

<button className="flex items-center rounded-full bg-white px-8 py-4 text-lg font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
  <span>Tag</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 h-6 w-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
    </div>
  );
};

export const PrimaryRoundedTextIconRearButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:text-white disabled:bg-gray-300">
  <span>Tag</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-2 h-4 w-4">
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
</button>

<button className="text-md flex items-center rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 hover:text-white disabled:bg-gray-300">
  <span>Tag</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 h-5 w-5">
    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
  </svg>
</button>

<button className="flex items-center rounded-full bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-blue-700 hover:text-white disabled:bg-gray-300">
  <span>Tag</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 h-6 w-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
    </div>
  );
};

export const PrimaryRoundedTextIconRearButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
  <span>Tag</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-2 h-4 w-4">
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
</button>

<button className="text-md flex items-center rounded-full bg-gray-900 px-6 py-3 font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
  <span>Tag</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 h-5 w-5">
    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
  </svg>
</button>

<button className="flex items-center rounded-full bg-gray-900 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
  <span>Tag</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 h-6 w-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
    </div>
  );
};
import React from "react";

// ------------Primary Text Button--------------
export const PrimaryTextButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button
        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-all 
    hover:bg-white/80 disabled:bg-gray-400"
      >
        Button
      </button>

      <button
        className="text-lg rounded-md bg-white px-8 py-2.5 font-medium text-black transition-all
     hover:bg-white/80 disabled:bg-gray-400"
      >
        Button
      </button>

      <button
        className="rounded-md bg-white px-10 py-3 text-2xl font-medium text-black transition-all
     hover:bg-white/80 disabled:bg-gray-400"
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
      <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-400">
        Button
      </button>

      <button className="text-lg rounded-full bg-white px-8 py-2.5 font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-400">
        Button
      </button>

      <button className="rounded-full bg-white px-10 py-3 text-2xl font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-400">
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
      <button className="rounded bg-white p-2 text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
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
      <button className="rounded bg-white p-3 text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
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
      <button className="rounded bg-white p-4 text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
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
      <button className="rounded bg-blue-600 hover:bg-blue-700 p-2 text-white transition-all disabled:bg-gray-300">
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
      <button className="rounded bg-blue-600 hover:bg-blue-700 p-3 text-white transition-all disabled:bg-gray-300">
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
      <button className="rounded bg-blue-600 hover:bg-blue-700 p-4 text-white transition-all disabled:bg-gray-300">
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
      <button className="rounded bg-gray-900 hover:bg-black p-2 text-white transition-all disabled:bg-gray-300">
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
      <button className="rounded bg-gray-900 hover:bg-black p-3 text-white transition-all disabled:bg-gray-300">
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
      <button className="rounded bg-gray-900 hover:bg-black p-4 text-white transition-all disabled:bg-gray-300">
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
      <button className="rounded-full bg-white hover:bg-white/80 p-2 text-black transition-all disabled:bg-gray-300">
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

      <button className="rounded-full bg-white hover:bg-white/80 p-3 text-black transition-all disabled:bg-gray-300">
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

      <button className="rounded-full bg-white hover:bg-white/80 p-4 text-black transition-all disabled:bg-gray-300">
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
      <button className="rounded-full bg-blue-600 hover:bg-blue-700 p-2 text-white transition-all disabled:bg-gray-300">
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

      <button className="rounded-full bg-blue-600 hover:bg-blue-700 p-3 text-white transition-all disabled:bg-gray-300">
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

      <button className="rounded-full bg-blue-600 hover:bg-blue-700 p-4 text-white transition-all disabled:bg-gray-300">
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
      <button className="rounded-full bg-gray-900 hover:bg-black p-2 text-white transition-all disabled:bg-gray-300">
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

      <button className="rounded-full bg-gray-900 hover:bg-black p-3 text-white transition-all disabled:bg-gray-300">
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

      <button className="rounded-full bg-gray-900 hover:bg-black p-4 text-white transition-all disabled:bg-gray-300">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="ml-2 h-4 w-4"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>

      <button className="text-md flex items-center rounded-full bg-white px-6 py-3 font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
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

      <button className="flex items-center rounded-full bg-white px-8 py-4 text-lg font-medium text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
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

export const PrimaryRoundedTextIconRearButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:text-white disabled:bg-gray-300">
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

      <button className="text-md flex items-center rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 hover:text-white disabled:bg-gray-300">
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

      <button className="flex items-center rounded-full bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-blue-700 hover:text-white disabled:bg-gray-300">
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

export const PrimaryRoundedTextIconRearButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
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

      <button className="text-md flex items-center rounded-full bg-gray-900 px-6 py-3 font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
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

      <button className="flex items-center rounded-full bg-gray-900 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-black disabled:bg-gray-300">
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

//-----------Secondary TextIconRearButton-----------------//
export const SecondaryTextIconRearButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-md bg-transparent border-2 border-white px-4 py-2 text-sm font-medium text-white hover:text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
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

      <button className="text-md flex items-center rounded-md bg-transparent border-2 border-white px-6 py-3 font-medium text-white hover:text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
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

      <button className="flex items-center rounded-md bg-transparent border-2 border-white px-8 py-4 text-lg font-medium text-white hover:text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
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

export const SecondaryTextIconRearButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-md bg-transparent border-2 border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-all hover:bg-blue-600 hover:text-white disabled:bg-gray-300">
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

      <button className="text-md flex items-center rounded-md bg-transparent border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 transition-all hover:bg-blue-600 hover:text-white disabled:bg-gray-300">
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

      <button className="flex items-center rounded-md bg-transparent border-2 border-blue-600 px-8 py-4 text-lg font-medium text-blue-600 transition-all hover:bg-blue-600 hover:text-white disabled:bg-gray-300">
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

export const SecondaryTextIconRearButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-md text-black bg-transparent border-2 border-black px-4 py-2 text-sm font-medium hover:text-white  transition-all hover:bg-black disabled:bg-gray-300">
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

      <button className="text-md flex items-center text-black rounded-md bg-transparent border-2 border-black px-6 py-3 font-medium hover:text-white  transition-all hover:bg-black disabled:bg-gray-300">
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

      <button className="flex items-center rounded-md text-black bg-transparent border-2 border-black px-8 py-4 text-lg font-medium hover:text-white  transition-all hover:bg-black disabled:bg-gray-300">
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

//-----------Secondary Rounded TextIconRearButton-----------------//
export const SecondaryRoundedTextIconRearButtonLight = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-transparent border-2 border-white px-4 py-2 text-sm font-medium text-white hover:text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
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

      <button className="text-md flex items-center rounded-full bg-transparent border-2 border-white px-6 py-3 font-medium text-white hover:text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
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

      <button className="flex items-center rounded-full bg-transparent border-2 border-white px-8 py-4 text-lg font-medium text-white hover:text-black transition-all hover:bg-white/80 disabled:bg-gray-300">
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

export const SecondaryRoundedTextIconRearButtonBlue = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full bg-transparent border-2 border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-all hover:bg-blue-600 hover:text-white disabled:bg-gray-300">
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

      <button className="text-md flex items-center rounded-full bg-transparent border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 transition-all hover:bg-blue-600 hover:text-white disabled:bg-gray-300">
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

      <button className="flex items-center rounded-full bg-transparent border-2 border-blue-600 px-8 py-4 text-lg font-medium text-blue-600 transition-all hover:bg-blue-600 hover:text-white disabled:bg-gray-300">
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

export const SecondaryRoundedTextIconRearButtonDark = () => {
  return (
    <div className=" flex gap-10 items-center">
      <button className="flex items-center rounded-full text-black bg-transparent border-2 border-black px-4 py-2 text-sm font-medium hover:text-white  transition-all hover:bg-black disabled:bg-gray-300">
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

      <button className="text-md flex items-center rounded-full text-black bg-transparent border-2 border-black px-6 py-3 font-medium hover:text-white  transition-all hover:bg-black disabled:bg-gray-300">
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

      <button className="flex items-center rounded-full text-black bg-transparent border-2 border-black px-8 py-4 text-lg font-medium hover:text-white  transition-all hover:bg-black disabled:bg-gray-300">
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

//------------------Gradient Buttons-----------------------//
export const GradientButtons = () => {
  return (
    <div className=" grid grid-cols-4 gap-x-10 gap-y-4  ">
      <button className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Blue
      </button>

      <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Green
      </button>

      <button className="text-white bg-gradient-to-r from-[#24d0ee] via-[#09B5D6] to-[#0891B4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Cyan
      </button>

      <button className="text-white bg-gradient-to-r from-[#2ED0C5] via-[#15B6AA] to-[#0E958C] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Teal
      </button>

      <button className="text-white bg-gradient-to-r from-[#96E04A] via-[#7EC926] to-[#98E147] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Lime
      </button>

      <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Red
      </button>

      <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Pink
      </button>

      <button className="text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Purple
      </button>
    </div>
  );
};

//----------------Payment Buttons------------------//
export const SocialButtons = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <button className="text-white bg-[#3b5998] hover:bg-[#3b5898cb] focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
        <svg
          className="mr-2 -ml-1 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-f"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
          ></path>
        </svg>
        Sign in with Facebook
      </button>

      <button className="text-white bg-[#1da1f2] hover:bg-[#1da0f2db] focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
        <svg
          className="mr-2 -ml-1 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="twitter"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
          ></path>
        </svg>
        Sign in with Twitter
      </button>

      <button className="text-white bg-[#24292F] hover:bg-[#1b1e23] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
        <svg
          className="mr-2 -ml-1 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="github"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            fill="currentColor"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          ></path>
        </svg>
        Sign in with Github
      </button>

      <button className="text-white bg-[#4285F4] hover:bg-[#4286f4db] focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
        <svg
          className="mr-2 -ml-1 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Sign in with Google
      </button>

      <button className="text-white bg-[#050708] hover:bg-[#05070896] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
        <svg
          className="mr-2 -ml-1 w-5 h-5"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="apple"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
          ></path>
        </svg>
        Sign in with Apple
      </button>

      <button className="text-black bg-[#f1ca81] hover:bg-[#f1ca81d0] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 -ml-1 w-5 h-5"
          viewBox="0 0 212 189"
        >
          <g fill="none" fill-rule="evenodd">
            <polygon
              fill="#CDBDB2"
              points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
            />
            <polygon
              fill="#CDBDB2"
              points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
              transform="matrix(-1 0 0 1 256.5 0)"
            />
            <polygon
              fill="#393939"
              points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
            />
            <polygon
              fill="#F89C35"
              points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
            />
            <polygon
              fill="#F89D35"
              points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
            />
            <polygon
              fill="#D87C30"
              points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
            />
            <polygon
              fill="#EA8D3A"
              points="46.125 101.813 65.25 119.813 65.25 137.813"
            />
            <polygon
              fill="#F89D35"
              points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
            />
            <polygon
              fill="#EB8F35"
              points="65.25 138.375 60.75 173.25 90.563 152.438"
            />
            <polygon
              fill="#EA8E3A"
              points="92.25 102.375 95.063 150.188 86.625 125.719"
            />
            <polygon
              fill="#D87C30"
              points="39.375 138.938 65.25 138.375 60.75 173.25"
            />
            <polygon
              fill="#EB8F35"
              points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
            />
            <polygon
              fill="#E8821E"
              points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
            />
            <polygon
              fill="#DFCEC3"
              points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
            />
            <polygon
              fill="#DFCEC3"
              points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
              transform="matrix(-1 0 0 1 272.25 0)"
            />
            <polygon
              fill="#393939"
              points="70.313 112.5 64.125 125.438 86.063 119.813"
              transform="matrix(-1 0 0 1 150.188 0)"
            />
            <polygon
              fill="#E88F35"
              points="12.375 .563 88.875 58.5 75.938 27"
            />
            <path
              fill="#8E5A30"
              d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
            />
            <g transform="matrix(-1 0 0 1 211.5 0)">
              <polygon
                fill="#F89D35"
                points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
              />
              <polygon
                fill="#D87C30"
                points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
              />
              <polygon
                fill="#EA8D3A"
                points="46.125 101.813 65.25 119.813 65.25 137.813"
              />
              <polygon
                fill="#F89D35"
                points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
              />
              <polygon
                fill="#EB8F35"
                points="65.25 138.375 60.75 173.25 90 153"
              />
              <polygon
                fill="#EA8E3A"
                points="92.25 102.375 95.063 150.188 86.625 125.719"
              />
              <polygon
                fill="#D87C30"
                points="39.375 138.938 65.25 138.375 60.75 173.25"
              />
              <polygon
                fill="#EB8F35"
                points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
              />
              <polygon
                fill="#E8821E"
                points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
              />
              <polygon
                fill="#393939"
                points="70.313 112.5 64.125 125.438 86.063 119.813"
                transform="matrix(-1 0 0 1 150.188 0)"
              />
              <polygon
                fill="#E88F35"
                points="12.375 .563 88.875 58.5 75.938 27"
              />
              <path
                fill="#8E5A30"
                d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
              />
            </g>
          </g>
        </svg>
        Sign in with Metamask
      </button>
    </div>
  );
};

//------------Processing Button----------------//
export const ProcessingButtons = () => {
  return (
    <div className="flex items-center justify-center">
      <button disabled className="flex pr-6 pl-4 py-2.5 items-center justify-center bg-indigo-400 rounded-lg text-white
       font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]">
        <span className="h-5 w-5 mx-2 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></span>
        <span className="-mx-1"> Processing... </span>
      </button>
    </div>
  );
};


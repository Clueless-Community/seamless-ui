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

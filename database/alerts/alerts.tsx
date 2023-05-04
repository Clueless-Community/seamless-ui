import React from "react";

export const AlertGeneral = () => {
  return (
    <div className="lg:w-[600px] sm:w-[450px] w-[300px]">
      <div className="relative w-full">
        <input
          type="radio"
          className="peer opacity-0 absolute cursor-pointer right-8 top-5 h-5 w-5"
        />
        <div className="peer flex cursor-default items-center rounded-2xl border border-solid border-[#D6D3D1] bg-[#F4F4F5] sm:px-8 px-4 sm:py-4 py-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#D6D3D1] peer-checked:hidden">
          <div className="items-center justify-items-center">
            <svg
              className="w-6 mt-1 h-6 sm:w-8 sm:h-8"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
                fill="#737070"
              />
            </svg>
          </div>
          <div className="ml-5 items-center justify-items-center sm:text-lg text-base font-semibold text-[#737373]">
            This is a message
          </div>
          <div className="ml-auto items-center justify-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 0.5H7C3.42 0.5 0.5 3.42 0.5 7V13C0.5 16.58 3.42 19.5 7 19.5H13C16.58 19.5 19.5 16.58 19.5 13V7C19.5 3.42 16.58 0.5 13 0.5ZM13.71 12.29C14.1 12.68 14.1 13.32 13.71 13.71C13.51 13.9 13.26 14 13 14C12.74 14 12.49 13.9 12.29 13.71L10 11.4199L7.71002 13.71C7.51002 13.9 7.26 14 7 14C6.74 14 6.48998 13.9 6.28998 13.71C5.89998 13.32 5.89998 12.68 6.28998 12.29L8.58002 10L6.28998 7.70996C5.89998 7.31996 5.89998 6.68004 6.28998 6.29004C6.67998 5.90004 7.32002 5.90004 7.71002 6.29004L10 8.58008L12.29 6.29004C12.68 5.90004 13.32 5.90004 13.71 6.29004C14.1 6.68004 14.1 7.31996 13.71 7.70996L11.42 10L13.71 12.29Z"
                fill="#737070"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AlertInfo = () => {
  return (
    <div className="lg:w-[600px] sm:w-[450px] w-[300px]">
      <div className="relative w-full">
        <input
          type="radio"
          className="peer opacity-0 absolute cursor-pointer right-8 top-5 h-5 w-5"
        />
        <div className="peer flex cursor-default items-center rounded-2xl border border-solid border-blue-700 bg-blue-100 sm:px-8 px-4 sm:py-4 py-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 peer-checked:hidden">
          <div className="items-center justify-items-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
                fill="#1855CB"
              />
            </svg>
          </div>
          <div className="sm:ml-5 ml-2 items-center justify-items-center sm:text-lg text-sm font-semibold text-blue-600">
            This is an information message
          </div>
          <div className="ml-auto items-center justify-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 0.5H7C3.42 0.5 0.5 3.42 0.5 7V13C0.5 16.58 3.42 19.5 7 19.5H13C16.58 19.5 19.5 16.58 19.5 13V7C19.5 3.42 16.58 0.5 13 0.5ZM13.71 12.29C14.1 12.68 14.1 13.32 13.71 13.71C13.51 13.9 13.26 14 13 14C12.74 14 12.49 13.9 12.29 13.71L10 11.4199L7.71002 13.71C7.51002 13.9 7.26 14 7 14C6.74 14 6.48998 13.9 6.28998 13.71C5.89998 13.32 5.89998 12.68 6.28998 12.29L8.58002 10L6.28998 7.70996C5.89998 7.31996 5.89998 6.68004 6.28998 6.29004C6.67998 5.90004 7.32002 5.90004 7.71002 6.29004L10 8.58008L12.29 6.29004C12.68 5.90004 13.32 5.90004 13.71 6.29004C14.1 6.68004 14.1 7.31996 13.71 7.70996L11.42 10L13.71 12.29Z"
                fill="#1855CB"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AlertError = () => {
  return (
    <div className="lg:w-[600px] sm:w-[450px] w-[300px]">
      <div className="relative w-full">
        <input
          type="radio"
          className="peer opacity-0 absolute cursor-pointer right-8 top-5 h-5 w-5"
        />
        <div className="peer flex cursor-default items-center  rounded-2xl border border-solid border-red-600 bg-red-100 sm:px-8 px-4 sm:py-4 py-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-100 peer-checked:hidden">
          <div className="items-center justify-items-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
                fill="#DF1E1E"
              />
            </svg>
          </div>
          <div className="ml-5 items-center justify-items-center sm:text-lg text-base font-semibold text-red-500">
            This is an error message
          </div>
          <div className="ml-auto items-center justify-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 0.5H7C3.42 0.5 0.5 3.42 0.5 7V13C0.5 16.58 3.42 19.5 7 19.5H13C16.58 19.5 19.5 16.58 19.5 13V7C19.5 3.42 16.58 0.5 13 0.5ZM13.71 12.29C14.1 12.68 14.1 13.32 13.71 13.71C13.51 13.9 13.26 14 13 14C12.74 14 12.49 13.9 12.29 13.71L10 11.4199L7.71002 13.71C7.51002 13.9 7.26 14 7 14C6.74 14 6.48998 13.9 6.28998 13.71C5.89998 13.32 5.89998 12.68 6.28998 12.29L8.58002 10L6.28998 7.70996C5.89998 7.31996 5.89998 6.68004 6.28998 6.29004C6.67998 5.90004 7.32002 5.90004 7.71002 6.29004L10 8.58008L12.29 6.29004C12.68 5.90004 13.32 5.90004 13.71 6.29004C14.1 6.68004 14.1 7.31996 13.71 7.70996L11.42 10L13.71 12.29Z"
                fill="#DF1E1E"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AlertSuccess = () => {
  return (
    <div className="lg:w-[600px] sm:w-[450px] w-[300px]">
      <div className="relative w-full">
        <input
          type="radio"
          className="peer opacity-0 absolute cursor-pointer right-8 top-5 h-5 w-5"
        />
        <div className="peer flex cursor-default items-center rounded-2xl border border-solid border-[#6EE7B7] bg-green-50 sm:px-8 px-4 sm:py-4 py-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100 peer-checked:hidden">
          <div className="items-center justify-items-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
                fill="#95E2B8"
              />
            </svg>
          </div>
          <div className="ml-5 items-center justify-items-center sm:text-lg text-base font-semibold text-[#34D399]">
            This is a success message
          </div>
          <div className="ml-auto items-center justify-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 0.5H7C3.42 0.5 0.5 3.42 0.5 7V13C0.5 16.58 3.42 19.5 7 19.5H13C16.58 19.5 19.5 16.58 19.5 13V7C19.5 3.42 16.58 0.5 13 0.5ZM13.71 12.29C14.1 12.68 14.1 13.32 13.71 13.71C13.51 13.9 13.26 14 13 14C12.74 14 12.49 13.9 12.29 13.71L10 11.4199L7.71002 13.71C7.51002 13.9 7.26 14 7 14C6.74 14 6.48998 13.9 6.28998 13.71C5.89998 13.32 5.89998 12.68 6.28998 12.29L8.58002 10L6.28998 7.70996C5.89998 7.31996 5.89998 6.68004 6.28998 6.29004C6.67998 5.90004 7.32002 5.90004 7.71002 6.29004L10 8.58008L12.29 6.29004C12.68 5.90004 13.32 5.90004 13.71 6.29004C14.1 6.68004 14.1 7.31996 13.71 7.70996L11.42 10L13.71 12.29Z"
                fill="#95E2B8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AlertWarning = () => {
  return (
    <div className="lg:w-[600px] sm:w-[450px] w-[300px]">
      <div className="relative w-full">
        <input
          type="radio"
          className="peer opacity-0 absolute cursor-pointer right-8 top-5 h-5 w-5"
        />
        <div className="peer flex cursor-default items-center rounded-2xl border border-[#FB923C] nx-bg-orange-50 px-8 sm:py-4 py-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#FB923C] peer-checked:hidden">
          <div className="items-center justify-items-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9997 2.33331C7.57134 2.33331 2.33301 7.57165 2.33301 14C2.33301 20.4283 7.57134 25.6666 13.9997 25.6666C20.428 25.6666 25.6663 20.4283 25.6663 14C25.6663 7.57165 20.428 2.33331 13.9997 2.33331ZM13.9997 21C13.358 21 12.833 20.475 12.833 19.8333C12.833 19.1916 13.358 18.6666 13.9997 18.6666C14.6413 18.6666 15.1663 19.1916 15.1663 19.8333C15.1663 20.475 14.6413 21 13.9997 21ZM16.3797 15.5401C15.3064 16.2517 15.1314 16.6367 15.108 16.7067C14.9447 17.1967 14.4897 17.5 13.9997 17.5C13.8713 17.5 13.7547 17.4766 13.6263 17.4416C13.0197 17.2316 12.693 16.5666 12.8913 15.9599C13.253 14.9099 14.3147 14.1049 15.0847 13.5915C16.543 12.6232 16.3563 11.5732 16.298 11.2348C16.1347 10.3132 15.353 9.53168 14.4313 9.36835C13.7197 9.24001 13.043 9.42661 12.4947 9.88161C11.9697 10.3249 11.6663 10.9783 11.6663 11.6666C11.6663 12.3083 11.1413 12.8333 10.4997 12.8333C9.85801 12.8333 9.33301 12.3083 9.33301 11.6666C9.33301 10.29 9.93967 8.98324 11.0013 8.09658C12.063 7.19824 13.463 6.83671 14.8397 7.07005C16.718 7.40838 18.258 8.94835 18.5963 10.8267C18.923 12.6933 18.1297 14.3734 16.3797 15.5401Z"
                fill="#E77C40"
              />
            </svg>
          </div>
          <div className="ml-5 items-center justify-items-center sm:text-lg text-base font-semibold text-[#F97316]">
            This is a warning
          </div>
          <div className="ml-auto items-center justify-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 0.5H7C3.42 0.5 0.5 3.42 0.5 7V13C0.5 16.58 3.42 19.5 7 19.5H13C16.58 19.5 19.5 16.58 19.5 13V7C19.5 3.42 16.58 0.5 13 0.5ZM13.71 12.29C14.1 12.68 14.1 13.32 13.71 13.71C13.51 13.9 13.26 14 13 14C12.74 14 12.49 13.9 12.29 13.71L10 11.4199L7.71002 13.71C7.51002 13.9 7.26 14 7 14C6.74 14 6.48998 13.9 6.28998 13.71C5.89998 13.32 5.89998 12.68 6.28998 12.29L8.58002 10L6.28998 7.70996C5.89998 7.31996 5.89998 6.68004 6.28998 6.29004C6.67998 5.90004 7.32002 5.90004 7.71002 6.29004L10 8.58008L12.29 6.29004C12.68 5.90004 13.32 5.90004 13.71 6.29004C14.1 6.68004 14.1 7.31996 13.71 7.70996L11.42 10L13.71 12.29Z"
                fill="#E77C40"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AlertModern = () => {
  return (
    <div className="lg:w-[600px] sm:w-[450px] w-[300px]">
      <div className="bg-indigo-900 text-center py-4 lg:px-4 px-2">
        <div
          className="p-2 w-full rounded-3xl cursor-pointer bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            New
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            Get the coolest t-shirts from our brand new store
          </span>
          <svg
            className="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

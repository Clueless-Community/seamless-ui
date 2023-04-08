import React from "react";

export const AlertGeneral = () => {
  return (
    <div className="w-[600px]">
      <div className="relative w-full">
        <input
          type="radio"
          className="peer opacity-0 absolute cursor-pointer right-8 top-5 h-5 w-5"
        />
        <div className="peer flex cursor-default items-center rounded-2xl border border-solid border-stone-300 bg-zinc-100 px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-stone-300 peer-checked:hidden">
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
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
                fill="#737070"
              />
            </svg>
          </div>
          <div className="ml-5 items-center justify-items-center text-lg font-semibold text-neutral-500">
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
    <div className="w-[600px]">
      <div className="relative w-full">
        <input
          type="radio"
          className="peer opacity-0 absolute cursor-pointer right-8 top-5 h-5 w-5"
        />
        <div className="peer flex cursor-default items-center rounded-2xl border border-solid border-blue-700 bg-blue-100 px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 peer-checked:hidden">
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
          <div className="ml-5 items-center justify-items-center text-lg font-semibold text-blue-600">
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
    <div className="w-[600px]">
      <div className="relative w-full">
        <input
          type="radio"
          className="peer opacity-0 absolute cursor-pointer right-8 top-5 h-5 w-5"
        />
        <div className="peer flex cursor-default items-center rounded-2xl border border-solid border-red-600 bg-red-100 px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-red-100 peer-checked:hidden">
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
          <div className="ml-5 items-center justify-items-center text-lg font-semibold text-red-500">
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

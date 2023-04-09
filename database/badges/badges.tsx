import React from "react";

export const Badge1 = () => {
  return (
    <div className="flex gap-5">
      <span className="mr-2 rounded cursor-pointer bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
        Default
      </span>
      <span className="mr-2 rounded cursor-pointer bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
        Dark
      </span>
      <span className="mr-2 rounded cursor-pointer bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800 dark:bg-red-200 dark:text-red-900">
        Red
      </span>
      <span className="mr-2 rounded cursor-pointer bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-200 dark:text-green-900">
        Green
      </span>
      <span className="mr-2 rounded cursor-pointer bg-yellow-100 px-2.5 py-0.5 text-sm font-medium text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900">
        Yellow
      </span>
      <span className="mr-2 rounded cursor-pointer bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900">
        Indigo
      </span>
      <span className="mr-2 rounded cursor-pointer bg-purple-100 px-2.5 py-0.5 text-sm font-medium text-purple-800 dark:bg-purple-200 dark:text-purple-900">
        Purple
      </span>
      <span className="mr-2 rounded cursor-pointer bg-pink-100 px-2.5 py-0.5 text-sm font-medium text-pink-800 dark:bg-pink-200 dark:text-pink-800">
        Pink
      </span>
    </div>
  );
};

export const Badge2 = () => {
  return (
    <div className="flex gap-5">
      <span className="inline-flex cursor-default items-center rounded bg-gray-600 px-2.5 py-0.5 text-xs font-medium text-gray-300 dark:bg-gray-700 dark:text-gray-300">
        <svg
          aria-hidden="true"
          className="mr-1.5 h-3 w-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-darkreader-inline-fill=""
        //   style="--darkreader-inline-fill:currentColor;"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          ></path>
        </svg>
        3 days ago
      </span>
      <span className="inline-flex cursor-default items-center rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
        <svg
          aria-hidden="true"
          className="mr-1.5 h-3 w-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-darkreader-inline-fill=""
        //   style="--darkreader-inline-fill:currentColor;"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          ></path>
        </svg>
        2 minutes ago
      </span>
      <span className="inline-flex cursor-default items-center rounded bg-blue-600 px-2.5 py-0.5 text-xs font-medium text-gray-300 dark:bg-blue-700 dark:text-gray-300">
        <svg
          aria-hidden="true"
          className="mr-1.5 h-3 w-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-darkreader-inline-fill=""
        //   style="--darkreader-inline-fill:currentColor;"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          ></path>
        </svg>
        3 mins ago
      </span>
      <span className="text-white-800 inline-flex cursor-default items-center rounded bg-red-800 px-2.5 py-0.5 text-xs font-medium">
        <svg
          aria-hidden="true"
          className="mr-1.5 h-3 w-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-darkreader-inline-fill=""
        //   style="--darkreader-inline-fill:currentColor;"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          ></path>
        </svg>
        2 s ago
      </span>
    </div>
  );
};

export const Badge3 = () => {
  return (
    <div className=" flex gap-10">
      <button
        className="inline-flex items-center rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none dark:bg-green-600 dark:hover:bg-green-700"
      >
        Messages
        <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-xs font-semibold text-blue-800">
          {" "}
          2{" "}
        </span>
      </button>

      <button
        className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Commits
        <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800">
          {" "}
          3{" "}
        </span>
      </button>

      <button
        className="inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700"
      >
        Mails
        <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-xs font-semibold text-red-800">
          {" "}
          9{" "}
        </span>
      </button>
    </div>
  );
};

export const Badge4 = () => {
  return (
    <div className="space-x-5">
      <span className="inline-flex items-center p-1 text-sm font-semibold text-gray-400 rounded-full bg-gray-700 dark:text-gray-300">
        <svg
          aria-hidden="true"
          className="w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-darkreader-inline-fill=""
        //   style="--darkreader-inline-fill:currentColor;"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Icon description</span>
      </span>
      <span className="inline-flex items-center p-1 text-sm font-semibold text-blue-800 bg-blue-200 rounded-full dark:bg-blue-200 dark:text-blue-800">
        <svg
          aria-hidden="true"
          className="w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-darkreader-inline-fill=""
        //   style="--darkreader-inline-fill:currentColor;"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Icon description</span>
      </span>
      <span className="bg-gray-700 text-gray-400 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
        <svg
          aria-hidden="true"
          className="w-3.5 h-3.5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-darkreader-inline-fill=""
        //   style="--darkreader-inline-fill:currentColor;"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Icon description</span>
      </span>
      <span className="bg-blue-200 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
        <svg
          aria-hidden="true"
          className="w-3.5 h-3.5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-darkreader-inline-fill=""
        //   style="--darkreader-inline-fill:currentColor;"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Icon description</span>
      </span>
    </div>
  );
};

export const Badge5 = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <button
        className="text-white bg-blue-700 px-5 py-2.5 hover:bg-blue-800 font-medium rounded-full text-sm text-center"
      >
        Default
      </button>
      <button
        className="px-5 pt-2.5 pb-2.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Alternative
      </button>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 pt-2.5 pb-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Dark
      </button>
      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 pt-2.5 pb-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Light
      </button>
      <button
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 pt-2.5 pb-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Green
      </button>
      <button
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 pt-2.5 pb-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Red
      </button>
      <button
        className="text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-full text-sm px-5 pt-2.5 pb-2.5 text-center"
      >
        Yellow
      </button>
      <button
        className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-full text-sm px-5 pt-2.5 pb-2.5 text-center"
      >
        Purple
      </button>
    </div>
  );
};

import React from "react";

export const AccordionLight = () => {
  return (
    <div className="md:mx-10 sm:mx-5 mx-3">
      <div className="p-5 bg-gray-200">
        <div className="relative border border-gray-300 rounded-md my-1">
          <input
            type="checkbox"
            className="peer absolute left-0 top-0 h-16 w-full cursor-pointer bg-red-300 p-5 opacity-0"
          />
          <div className="cursor-pointer text-gray-900 rounded-md bg-white p-5">
            What is web-ui-kit?
          </div>
          <div className="absolute pointer-events-none right-3 text-gray-900 top-3 rounded-full border p-2 shadow-md duration-500 nx-rotate-90 peer-checked:-rotate-90 peer-checked:rounded-full peer-checked:bg-blue-500 peer-checked:text-white peer-checked:transition-all peer-checked:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-screen">
            <p className="p-4 text-black">
              web-ui-kit is an open-source library of interactive components
              built on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
          </div>
        </div>
        <div className="relative border border-gray-300 rounded-md my-1">
          <input
            type="checkbox"
            className="peer absolute left-0 top-0 h-16 w-full cursor-pointer bg-red-300 p-5 opacity-0"
          />
          <div className="cursor-pointer text-gray-900 rounded-md bg-white p-5 pr-10">
            Is there a Figma file available?
          </div>
          <div className="absolute pointer-events-none right-3 text-gray-900 top-3 rounded-full border p-2 shadow-md duration-500 nx-rotate-90 peer-checked:-rotate-90 peer-checked:rounded-full peer-checked:bg-blue-500 peer-checked:text-black peer-checked:transition-all peer-checked:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-screen">
            <p className="p-4 text-black">
              web-ui-kit is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="p-4 text-black">
              Check out the{" "}
              <a href="https://clueless.tech" className="underline">
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from
              web-ui-kit.
            </p>
          </div>
        </div>
        <div className="relative border border-gray-300 rounded-md my-1">
          <input
            type="checkbox"
            className="peer absolute left-0 top-0 h-16 w-full cursor-pointer bg-red-300 p-5 opacity-0"
          />
          <div className="cursor-pointer text-gray-900 rounded-md bg-white p-5 pr-14">
            What are the differences between web-ui-kit and Tailwind UI?
          </div>
          <div className="absolute pointer-events-none text-gray-900 right-3 top-3 rounded-full border p-2 shadow-md duration-500 nx-rotate-90 peer-checked:-rotate-90 peer-checked:rounded-full peer-checked:bg-blue-500 peer-checked:text-black peer-checked:transition-all peer-checked:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-screen">
            <p className="p-4 text-black">
              The main difference is that the core components from web-ui-kit
              are open source under the MIT license, whereas Tailwind UI is a
              paid product. Another difference is that web-ui-kit relies on
              smaller and standalone components, whereas Tailwind UI offers
              sections of pages.
            </p>
            <p className="p-4 text-black">
              However, we actually recommend using both web-ui-kit, web-ui-kit
              Pro, and even Tailwind UI as there is no technical reason stopping
              you from using the best of two worlds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AccordionBlue = () => {
  return (
    <div className="md:mx-10 sm:mx-5 mx-3">
      <div className="bg-white p-5">
        <div className="relative my-1">
          <input
            type="checkbox"
            className="peer absolute left-0 top-0 h-16 w-full cursor-pointer bg-red-300 p-5 opacity-0"
          />
          <div className="cursor-pointer rounded-md bg-blue-600 p-5 pr-14 text-white">
            What is web-ui-kit?
          </div>
          <div className="absolute pointer-events-none right-3 top-3 text-gray-900 nx-rotate-90 rounded-full border bg-white p-2 shadow-md duration-500 peer-checked:-rotate-90 peer-checked:rounded-full peer-checked:bg-white peer-checked:transition-all peer-checked:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden text-gray-900 transition-all duration-500 peer-checked:max-h-screen">
            <p className="p-4">
              web-ui-kit is an open-source library of interactive components
              built on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
          </div>
        </div>

        <div className="relative my-1">
          <input
            type="checkbox"
            className="peer absolute left-0 top-0 h-16 w-full cursor-pointer bg-red-300 p-5 opacity-0"
          />
          <div className="cursor-pointer rounded-md bg-blue-600 p-5 pr-14 text-white">
            Is there a Figma file available?
          </div>
          <div className="absolute pointer-events-none right-3 top-3 text-gray-900 nx-rotate-90 rounded-full border bg-white p-2 shadow-md duration-500 peer-checked:-rotate-90 peer-checked:rounded-full peer-checked:transition-all peer-checked:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden text-gray-900 transition-all duration-500 peer-checked:max-h-screen">
            <p className="p-4">
              web-ui-kit is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="p-4">
              Check out the{" "}
              <a
                href="https://clueless.tech"
                className="hover:underline text-blue-600"
              >
                Figma design system
              </a>{" "}
              based on the utility classes from Tailwind CSS and components from
              web-ui-kit.
            </p>
          </div>
        </div>
        <div className="relative my-1">
          <input
            type="checkbox"
            className="peer absolute left-0 top-0 h-16 w-full cursor-pointer bg-red-300 p-5 opacity-0"
          />
          <div className="cursor-pointer rounded-md bg-blue-600 p-5 pr-14 text-white">
            What are the differences between web-ui-kit and Tailwind UI?
          </div>
          <div className="absolute pointer-events-none right-3 top-3 nx-rotate-90 text-gray-900 rounded-full border bg-white p-2 shadow-md duration-500 peer-checked:-rotate-90 peer-checked:rounded-full peer-checked:transition-all peer-checked:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden transition-all text-gray-900 duration-500 peer-checked:max-h-screen">
            <p className="p-4">
              The main difference is that the core components from web-ui-kit
              are open source under the MIT license, whereas Tailwind UI is a
              paid product. Another difference is that web-ui-kit relies on
              smaller and standalone components, whereas Tailwind UI offers
              sections of pages.
            </p>
            <p className="p-4">
              However, we actually recommend using both web-ui-kit, web-ui-kit
              Pro, and even Tailwind UI as there is no technical reason stopping
              you from using the best of two worlds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AccordionDark = () => {
  return (
    <div className="md:mx-10 sm:mx-5 mx-3">
      <div className="p-5 bg-gray-900">
        <div className="relative my-1">
          <input
            type="checkbox"
            className="peer absolute left-0 top-0 h-16 w-full cursor-pointer bg-red-300 p-5 opacity-0"
          />
          <div className="cursor-pointer text-gray-900 rounded-md bg-white p-5">
            What is web-ui-kit?
          </div>
          <div className="absolute pointer-events-none right-3 top-3 text-gray-900 rounded-full border p-2 shadow-md duration-500 nx-rotate-90 peer-checked:-rotate-90 peer-checked:rounded-full peer-checked:bg-slate-900 peer-checked:text-gray-900 peer-checked:transition-all peer-checked:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-screen">
            <p className="p-4 text-white">
              web-ui-kit is an open-source library of interactive components
              built on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
          </div>
        </div>

        <div className="relative my-1">
          <input
            type="checkbox"
            className="peer absolute left-0 top-0 h-16 w-full cursor-pointer bg-red-300 p-5 opacity-0"
          />
          <div className="cursor-pointer text-gray-900 rounded-md bg-white p-5 pr-10">
            Is there a Figma file available?
          </div>
          <div className="absolute pointer-events-none right-3 top-3 text-gray-900 rounded-full border p-2 shadow-md duration-500 nx-rotate-90 peer-checked:-rotate-90 peer-checked:rounded-full peer-checked:bg-slate-900 peer-checked:text-gray-900 peer-checked:transition-all peer-checked:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-screen">
            <p className="p-4 text-white">
              web-ui-kit is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="p-4 text-white">
              Check out the{" "}
              <a href="https://clueless.tech" className="underline">
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from
              web-ui-kit.
            </p>
          </div>
        </div>
        <div className="relative my-1">
          <input
            type="checkbox"
            className="peer absolute left-0 top-0 h-16 w-full cursor-pointer bg-red-300 p-5 opacity-0"
          />
          <div className="cursor-pointer text-gray-900 rounded-md bg-white p-5 pr-14">
            What are the differences between web-ui-kit and Tailwind UI?
          </div>
          <div className="absolute pointer-events-none right-3 top-3 text-gray-900 rounded-full border p-2 shadow-md duration-500 nx-rotate-90 peer-checked:-rotate-90 peer-checked:rounded-full peer-checked:bg-slate-900 peer-checked:text-gray-900 peer-checked:transition-all peer-checked:duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-screen">
            <p className="p-4 text-white">
              The main difference is that the core components from web-ui-kit
              are open source under the MIT license, whereas Tailwind UI is a
              paid product. Another difference is that web-ui-kit relies on
              smaller and standalone components, whereas Tailwind UI offers
              sections of pages.
            </p>
            <p className="p-4 text-white">
              However, we actually recommend using both web-ui-kit, web-ui-kit
              Pro, and even Tailwind UI as there is no technical reason stopping
              you from using the best of two worlds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AccordionAutoCloses = () => {
  return (
    <div className="md:mx-10 sm:mx-5 mx-3">
      <div className="bg-gray-900 p-5">
        <div className="relative my-1 w-full">
          <input
            className="peer absolute left-0 top-0 h-16 w-full cursor-pointer p-5 opacity-0"
            type="radio"
            name="panel"
            id="panel-1"
          />

          <div className="cursor-pointer rounded-md text-gray-900 bg-white p-5">
            What is web-ui-kit
          </div>

          <div className="absolute pointer-events-none right-3 top-3 text-gray-900 nx-rotate-90 rounded-full border p-2 shadow-md duration-500 peer-checked:-rotate-90 peer-checked:rounded-full peer-checked:bg-gray-900 peer-checked:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>

          <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
            <p className="p-4 text-white">
              web-ui-kit is an open-source library of interactive components
              built on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
          </div>
        </div>

        <div className="relative my-1">
          <input
            className="peer absolute left-0 top-0 h-16 w-full cursor-pointer bg-red-300 p-5 opacity-0"
            type="radio"
            name="panel"
            id="panel-2"
          />

          <div className="cursor-pointer rounded-md text-gray-900 bg-white p-5">
            Is there a Figma file available?
          </div>

          <div className="absolute pointer-events-none right-3 text-gray-900 top-3  nx-rotate-90 rounded-full border p-2 shadow-md duration-500 peer-checked:-rotate-90 peer-checked:rounded-full peer-checked:bg-gray-900 peer-checked:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>

          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-screen">
            <p className="p-4 text-white">
              web-ui-kit is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="p-4 text-white">
              Check out the{" "}
              <a href="https://clueless.tech" className="underline">
                Figma design system
              </a>{" "}
              based on the utility classNamees from Tailwind CSS and components
              from web-ui-kit.
            </p>
          </div>
        </div>
        <div className="relative my-1">
          <input
            className="peer absolute left-0 top-0 h-16 w-full cursor-pointer bg-red-300 p-5 opacity-0"
            type="radio"
            name="panel"
            id="panel-3"
          />

          <div className="cursor-pointer rounded-md text-gray-900 bg-white p-5">
            What are the differences between web-ui-kit and Tailwind ?
          </div>

          <div className="absolute pointer-events-none right-3 top-3 text-gray-900 nx-rotate-90 rounded-full border p-2 shadow-md duration-500 peer-checked:-rotate-90 peer-checked:rounded-full peer-checked:bg-gray-900 peer-checked:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>

          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-screen">
            <p className="p-4 text-white">
              The main difference is that the core components from web-ui-kit
              are open source under the MIT license, whereas Tailwind UI is a
              paid product. Another difference is that web-ui-kit relies on
              smaller and standalone components, whereas Tailwind UI offers
              sections of pages.
            </p>
            <p className="p-4 text-white">
              However, we actually recommend using both web-ui-kit, web-ui-kit
              Pro, and even Tailwind UI as there is no technical reason stopping
              you from using the best of two worlds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

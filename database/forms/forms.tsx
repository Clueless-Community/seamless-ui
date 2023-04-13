import React from "react";

// ------------Feature Card 0 Light--------------
export const Checkbox0Dark = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 ">
        <div className="flex items-center gap-2">
          <label className="container relative mb-4 block w-fit cursor-pointer select-none pl-9 text-lg text-gray-500">
            Checkbox
            <input
              type="checkbox"
              className="peer absolute left-0 top-0 h-6 w-6 cursor-pointer appearance-none rounded border border-gray-300 bg-gray-900 checked:bg-white"
            />
            <span className="checkmark absolute left-0 top-0 h-2 w-2 after:absolute after:left-2.5 after:top-1.5 after:hidden after:h-3 after:w-1.5 after:rotate-45 after:border-b-[3px] after:border-r-[3px] after:border-solid after:border-gray-900 after:content-[''] checked:border-gray-900 peer-checked:after:block"></span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <label className="container relative mb-4 block w-fit cursor-pointer select-none pl-9 text-lg text-gray-500">
            Checkbox
            <input
              type="checkbox"
              className="peer absolute left-0 top-0 h-6 w-6 cursor-pointer appearance-none rounded border border-gray-900 bg-white checked:bg-gray-900"
            />
            <span className="checkmark absolute left-0 top-0 h-2 w-2 after:absolute after:left-2.5 after:top-1.5 after:hidden after:h-3 after:w-1.5 after:rotate-45 after:border-b-[3px] after:border-r-[3px] after:border-solid after:border-white after:content-[''] checked:border-gray-900 peer-checked:after:block"></span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <label className="container relative mb-4 block w-fit cursor-pointer select-none pl-9 text-lg text-gray-500">
            Checkbox
            <input
              type="checkbox"
              className="peer absolute left-0 top-0 h-6 w-6 cursor-pointer appearance-none rounded border border-white bg-white checked:bg-gray-900"
            />
            <span className="checkmark absolute left-0 top-0 h-2 w-2 after:absolute after:left-2.5 after:top-1.5 after:hidden after:h-3 after:w-1.5 after:rotate-45 after:border-b-[3px] after:border-r-[3px] after:border-solid after:border-white after:content-[''] checked:border-white peer-checked:after:block"></span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <label className="container relative mb-4 block w-fit cursor-not-allowed select-none pl-9 text-lg text-gray-500">
            Checkbox
            <input
              type="checkbox"
              className="peer absolute left-0 top-0 h-6 w-6 cursor-not-allowed appearance-none rounded border border-gray-300 bg-gray-300"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

// ------------Feature Card 0 Blue--------------
export const Checkbox0Light = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-2">
          <label className="container relative mb-4 block w-fit cursor-pointer select-none pl-9 text-lg text-gray-500">
            Checkbox
            <input
              type="checkbox"
              className="peer absolute left-0 top-0 h-6 w-6 cursor-pointer appearance-none rounded border border-gray-300 bg-blue-600 checked:bg-white"
            />
            <span className="checkmark absolute left-0 top-0 h-2 w-2 after:absolute after:left-2.5 after:top-1.5 after:hidden after:h-3 after:w-1.5 after:rotate-45 after:border-b-[3px] after:border-r-[3px] after:border-solid after:border-blue-600 after:content-[''] checked:border-gray-900 peer-checked:after:block"></span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <label className="container relative mb-4 block w-fit cursor-pointer select-none pl-9 text-lg text-gray-500">
            Checkbox
            <input
              type="checkbox"
              className="peer absolute left-0 top-0 h-6 w-6 cursor-pointer appearance-none rounded border border-blue-600 bg-white checked:bg-blue-600"
            />
            <span className="checkmark absolute left-0 top-0 h-2 w-2 after:absolute after:left-2.5 after:top-1.5 after:hidden after:h-3 after:w-1.5 after:rotate-45 after:border-b-[3px] after:border-r-[3px] after:border-solid after:border-white after:content-[''] checked:border-gray-900 peer-checked:after:block"></span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <label className="container relative mb-4 block w-fit cursor-pointer select-none pl-9 text-lg text-gray-500">
            Checkbox
            <input
              type="checkbox"
              className="peer absolute left-0 top-0 h-6 w-6 cursor-pointer appearance-none rounded border border-white bg-white checked:bg-blue-600"
            />
            <span className="checkmark absolute left-0 top-0 h-2 w-2 after:absolute after:left-2.5 after:top-1.5 after:hidden after:h-3 after:w-1.5 after:rotate-45 after:border-b-[3px] after:border-r-[3px] after:border-solid after:border-white after:content-[''] checked:border-white peer-checked:after:block"></span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <label className="container relative mb-4 block w-fit cursor-not-allowed select-none pl-9 text-lg text-gray-500">
            Checkbox
            <input
              type="checkbox"
              className="peer absolute left-0 top-0 h-6 w-6 cursor-not-allowed appearance-none rounded border border-gray-300 bg-gray-300"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

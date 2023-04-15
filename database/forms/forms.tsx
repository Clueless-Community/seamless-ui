import React from "react";

// ------------Checkbox 0 Light--------------
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

// ------------Checkbox 0 Blue--------------
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

// ------------Checkbox 0 Light--------------
export const ChooseFile0Dark = () => {
  return (
    <div>
      <div className="grid gap-5">
        <div className="w-[600px]">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex items-center pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z" />
              </svg>
            </div>
            <input
              type="file"
              id="file_input_dark"
              className="w-full cursor-pointer rounded-full border-2 border-gray-900 bg-gray-900 p-2 pl-10 text-sm text-gray-100 file:border-none file:bg-gray-900 file:text-white focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex items-center pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                fill="#ffffff"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z" />
              </svg>
            </div>
            <input
              type="file"
              id="file_input_dark"
              className="text-md w-full cursor-pointer rounded-full border-2 border-gray-900 bg-gray-900 p-3 pl-10 text-gray-100 file:border-none file:bg-gray-900 file:text-white focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex items-center pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                fill="#ffffff"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z" />
              </svg>
            </div>
            <input
              type="file"
              id="file_input_dark"
              className="text-gl w-full cursor-pointer rounded-full border-2 border-gray-900 bg-gray-900 p-5 pl-10 text-gray-100 file:border-none file:bg-gray-900 file:text-white focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------Checkbox 0 Blue--------------
export const ChooseFile0Light = () => {
  return (
    <div>
      <div className="grid gap-5">
        <div className="w-[600px]">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex items-center pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z" />
              </svg>
            </div>
            <input
              type="file"
              id="file_input_light"
              className="w-full cursor-pointer rounded-full border-2 border-gray-200 bg-gray-100 p-2 pl-10 text-sm text-gray-600 file:border-none file:bg-gray-100 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex items-center pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z" />
              </svg>
            </div>
            <input
              type="file"
              id="file_input_light"
              className="text-md w-full cursor-pointer rounded-full border-2 border-gray-200 bg-gray-100 p-3 pl-10 text-gray-600 file:border-none file:bg-gray-100 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex items-center pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z" />
              </svg>
            </div>
            <input
              type="file"
              id="file_input_light"
              className="text-gl w-full cursor-pointer rounded-full border-2 border-gray-200 bg-gray-100 p-5 pl-10 text-gray-600 file:border-none file:bg-gray-100 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------Checkbox 0 Rounded Light--------------
export const ChooseFile0RoundedDark = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <div className="w-full">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex cursor-pointer items-center pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z" />
              </svg>
            </div>
            <input
              type="file"
              id="file_input_light"
              className="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-gray-100 p-2 pl-10 text-sm text-gray-600 file:border-none file:bg-gray-100 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex cursor-pointer items-center pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z" />
              </svg>
            </div>
            <input
              type="file"
              id="file_input_light"
              className="text-md w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-gray-100 p-3 pl-10 text-gray-600 file:border-none file:bg-gray-100 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex cursor-pointer items-center pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z" />
              </svg>
            </div>
            <input
              type="file"
              id="file_input_light"
              className="text-gl w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-gray-100 p-5 pl-10 text-gray-600 file:border-none file:bg-gray-100 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------Checkbox 0 Rounded Blue--------------
export const ChooseFile0RoundedLight = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <div className="w-full">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex cursor-pointer items-center pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z" />
              </svg>
            </div>
            <input
              type="file"
              id="file_input_dark"
              className="w-full cursor-pointer rounded-md border-2 border-gray-900 bg-gray-900 p-2 pl-10 text-sm text-gray-100 file:border-none file:bg-gray-900 file:text-white focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex cursor-pointer items-center pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                fill="#ffffff"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z" />
              </svg>
            </div>
            <input
              type="file"
              id="file_input_dark"
              className="text-md w-full cursor-pointer rounded-md border-2 border-gray-900 bg-gray-900 p-3 pl-10 text-gray-100 file:border-none file:bg-gray-900 file:text-white focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 flex cursor-pointer items-center pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                fill="#ffffff"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z" />
              </svg>
            </div>
            <input
              type="file"
              id="file_input_dark"
              className="text-gl w-full cursor-pointer rounded-lg border-2 border-gray-900 bg-gray-900 p-5 pl-10 text-gray-100 file:border-none file:bg-gray-900 file:text-white focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------Checkbox 0 Rounded Light--------------
export const EmailRoundedDark = () => {
  return (
    <div>
      <div className="grid outline-none gap-5 w-[600px]">
        <input
          type="email"
          className="w-full rounded-full outline-none focus:outline-none bg-[#121225] p-2 pl-5 text-sm text-[400] text-white placeholder-gray-400 "
          placeholder="Email *"
        />

        <input
          type="email"
          className="text-md w-full rounded-full bg-[#121225] focus:outline-none p-3 pl-6 text-white placeholder-gray-400 outline-none focus:border-blue-600 disabled:border-gray-300 disabled:bg-gray-300"
          placeholder="Email *"
        />

        <input
          type="email"
          className="w-full rounded-full bg-[#121225] p-5 pl-8 text-lg focus:outline-none text-white placeholder-gray-400 outline-none focus:border-blue-600 disabled:border-gray-300 disabled:bg-gray-300"
          placeholder="Email *"
        />
      </div>
    </div>
  );
};

// ------------Checkbox 0 Rounded Blue--------------
export const EmailRoundedLight = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <input
          type="email"
          className="w-full rounded-full border-[#DADADA] bg-[#F9F9F9] p-2 pl-5 text-sm text-[400] text-black placeholder-[#737373]"
          placeholder="Email *"
        />

        <input
          type="email"
          className="text-md w-full rounded-full border-[#DADADA] bg-[#F9F9F9] p-3 pl-6 text-black placeholder-[#737373]"
          placeholder="Email *"
        />

        <input
          type="email"
          className="w-full rounded-full border-[#DADADA] bg-[#F9F9F9] p-5 pl-8 text-lg text-black placeholder-[#737373]"
          placeholder="Email *"
        />
      </div>
    </div>
  );
};

// ------------Checkbox 0 Rounded Light--------------
export const EmailDark = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <input
          type="email"
          className="w-full rounded-lg outline-none focus:outline-none bg-[#121225] p-2 pl-5 text-sm text-[400] text-white placeholder-gray-400 disabled:border-gray-300 disabled:bg-gray-300"
          placeholder="Email *"
        />

        <input
          type="email"
          className="text-md w-full focus:outline-none rounded-lg bg-[#121225] p-3 pl-6 text-white placeholder-gray-400 outline-none focus:border-blue-600 disabled:border-gray-300 disabled:bg-gray-300"
          placeholder="Email *"
        />

        <input
          type="email"
          className="w-full rounded-lg focus:outline-none bg-[#121225] p-5 pl-8 text-lg text-white placeholder-gray-400 outline-none focus:border-blue-600 disabled:border-gray-300 disabled:bg-gray-300"
          placeholder="Email *"
        />
      </div>
    </div>
  );
};

// ------------Checkbox 0 Rounded Blue--------------
export const EmailLight = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <input
          type="email"
          className="w-full rounded-lg border-2 border-gray-200 bg-white p-2 pl-5 text-sm text-[400] text-black placeholder-[#737373]"
          placeholder="Email *"
        />

        <input
          type="email"
          className="text-md w-full rounded-lg border-2 border-gray-200 bg-white p-3 pl-6 text-black placeholder-[#737373]"
          placeholder="Email *"
        />

        <input
          type="email"
          className="w-full rounded-lg border-2 border-gray-200 bg-white p-5 pl-8 text-lg text-black placeholder-[#737373]"
          placeholder="Email *"
        />
      </div>
    </div>
  );
};

// ------------Error Dark--------------
export const ErrorLight = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <input
          type="text"
          className="w-full rounded-md border-2 border-red-500 bg-gray-100 p-2 text-sm outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="text-md w-full rounded-md border-2 border-red-500 bg-gray-100 p-3 outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="w-full rounded-md border-2 border-red-500 bg-gray-100 p-5 text-lg outline-none"
          placeholder="Error"
        />
      </div>
    </div>
  );
};

// ------------Error Light--------------
export const ErrorDark = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <input
          type="text"
          className="w-full rounded-md border-2 border-red-500 bg-gray-900 p-2 text-sm outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="text-md w-full rounded-md border-2 border-red-500 bg-gray-900 p-3 outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="w-full rounded-md border-2 border-red-500 bg-gray-900 p-5 text-lg outline-none"
          placeholder="Error"
        />
      </div>
    </div>
  );
};

// ------------Error ROunded Light--------------
export const ErrorRoundedLight = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <input
          type="text"
          className="w-full rounded-full border-2 border-red-500 bg-gray-100 p-2 text-sm outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="text-md w-full rounded-full border-2 border-red-500 bg-gray-100 p-3 outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="w-full rounded-full border-2 border-red-500 bg-gray-100 p-5 text-lg outline-none"
          placeholder="Error"
        />
      </div>
    </div>
  );
};

// ------------Error ROunded Dark--------------
export const ErrorRoundedDark = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <input
          type="text"
          className="w-full rounded-full border-2 border-red-500 bg-gray-900 p-2 text-sm outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="text-md w-full rounded-full border-2 border-red-500 bg-gray-900 p-3 outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="w-full rounded-full border-2 border-red-500 bg-gray-900 p-5 text-lg outline-none"
          placeholder="Error"
        />
      </div>
    </div>
  );
};

// ------------Success Light--------------
export const SuccessLight = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <input
          type="text"
          className="w-full rounded-md border-2 border-green-500 bg-gray-100 p-2 text-sm outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="text-md w-full rounded-md border-2 border-green-500 bg-gray-100 p-3 outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="w-full rounded-md border-2 border-green-500 bg-gray-100 p-5 text-lg outline-none"
          placeholder="Error"
        />
      </div>
    </div>
  );
};

// ------------Success Dark--------------
export const SuccessDark = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <input
          type="text"
          className="w-full rounded-md border-2 border-green-500 bg-gray-900 p-2 text-sm outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="text-md w-full rounded-md border-2 border-green-500 bg-gray-900 p-3 outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="w-full rounded-md border-2 border-green-500 bg-gray-900 p-5 text-lg outline-none"
          placeholder="Error"
        />
      </div>
    </div>
  );
};

// ------------Success Rounded Light--------------
export const SuccessRoundedLight = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <input
          type="text"
          className="w-full rounded-full border-2 border-green-500 bg-gray-100 p-2 text-sm outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="text-md w-full rounded-full border-2 border-green-500 bg-gray-100 p-3 outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="w-full rounded-full border-2 border-green-500 bg-gray-100 p-5 text-lg outline-none"
          placeholder="Error"
        />
      </div>
    </div>
  );
};

// ------------Success Rounded Dark--------------
export const SuccessRoundedDark = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
        <input
          type="text"
          className="w-full rounded-full border-2 border-green-500 bg-gray-900 p-2 text-sm outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="text-md w-full rounded-full border-2 border-green-500 bg-gray-900 p-3 outline-none"
          placeholder="Error"
        />

        <input
          type="text"
          className="w-full rounded-full border-2 border-green-500 bg-gray-900 p-5 text-lg outline-none"
          placeholder="Error"
        />
      </div>
    </div>
  );
};

// ------------textarea Light--------------
export const TextareaLight = () => {
  return (
    <div>
      <div className="my-0 max-w-[900px] p-5">
        <textarea
          name="message"
          id=""
          cols={50}
          rows={4}
          placeholder="Message"
          className="w-[100%] max-w-[500px] resize-none rounded bg-white p-7 text-xl tracking-wide text-gray-300"
        ></textarea>
      </div>
    </div>
  );
};

// ------------textarea Dark--------------
export const TextareaDark = () => {
  return (
    <div>
      <div className="my-0 max-w-[900px] p-5">
        <textarea
          name="message"
          id=""
          cols={50}
          rows={4}
          placeholder="Message"
          className="w-[100%] max-w-[500px] resize-none rounded bg-gray-900 p-7 text-xl tracking-wide text-white"
        ></textarea>
      </div>
    </div>
  );
};

// ------------textarea Light--------------
export const TextareaRoundedDark = () => {
  return (
    <div>
      <div className="mx-auto my-0 max-w-[900px] p-5">
        <textarea
          name="message"
          id=""
          cols={50}
          rows={4}
          placeholder="Message"
          className="w-[100%] max-w-[500px] resize-none rounded-2xl bg-gray-900 p-6 text-xl tracking-wide text-white placeholder:text-xl placeholder:text-white"
        ></textarea>
      </div>
    </div>
  );
};

// ------------textarea Dark--------------
export const TextareaRoundedLight = () => {
  return (
    <div>
      <div className="my-0 max-w-[900px] p-5">
        <textarea
          name="message"
          id=""
          cols={50}
          rows={4}
          placeholder="Message"
          className="w-[100%] max-w-[500px] resize-none rounded-2xl bg-white p-7 text-xl tracking-wide text-gray-300"
        ></textarea>
      </div>
    </div>
  );
};

// ------------textarea Light--------------
export const SwitchDark = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 py-5">
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div
            className="fmRadio h-6 w-11 rounded-full border border-gray-900 bg-gray-900 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 
          after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full
           peer-checked:after:border-white peer-focus:outline-none"
          ></div>
          <span className="ml-3 select-none text-gray-600">Switch</span>
        </label>
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div
            className="fmRadio h-6 w-11 rounded-full border border-gray-900 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full
           after:border after:border-gray-400 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-900 peer-checked:after:translate-x-full
            peer-checked:after:border-white peer-focus:outline-none"
          ></div>
          <span className="ml-3 select-none text-gray-600">Switch</span>
        </label>
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div
            className="fmRadio h-6 w-11 rounded-full bg-white after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border
           after:border-gray-300 after:bg-gray-900 after:transition-all after:content-[''] peer-checked:bg-gray-900 peer-checked:after:translate-x-full
            peer-checked:after:border-white peer-checked:after:bg-white peer-focus:outline-none"
          ></div>
          <span className="ml-3 select-none text-gray-600">Switch</span>
        </label>
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div
            className="fmRadio h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border
           after:border-gray-300 after:bg-gray-100 after:transition-all after:content-[''] peer-checked:bg-gray-900 peer-checked:after:translate-x-full
            peer-checked:after:border-white"
          ></div>
          <span className="ml-3 select-none text-gray-600">Switch</span>
        </label>
      </div>
    </div>
  );
};

// ------------textarea Dark--------------
export const SwitchLight = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 py-5">
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="h-6 w-11 rounded-full border border-blue-600 bg-blue-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
          <span className="ml-3 select-none text-gray-600">Switch</span>
        </label>
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="h-6 w-11 rounded-full border border-blue-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-400 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
          <span className="ml-3 select-none text-gray-600">Switch</span>
        </label>
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="h-6 w-11 rounded-full bg-white after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-blue-600 after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white peer-focus:outline-none"></div>
          <span className="ml-3 select-none text-gray-600">Switch</span>
        </label>
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-gray-100 after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          <span className="ml-3 select-none text-gray-600">Switch</span>
        </label>
      </div>
    </div>
  );
};

// ------------Search Light--------------
export const SearchRoundedDark = () => {
  return (
    <div>
      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4601 10.3188L15.7639 14.6226C15.9151 14.7739 16.0001 14.9792 16 15.1932C15.9999 15.4072 15.9148 15.6124 15.7635 15.7637C15.6121 15.915 15.4068 15.9999 15.1928 15.9998C14.9788 15.9998 14.7736 15.9147 14.6223 15.7633L10.3185 11.4595C9.03194 12.456 7.41407 12.9249 5.79403 12.7709C4.17398 12.6169 2.67346 11.8515 1.59771 10.6304C0.521957 9.40936 -0.0482098 7.82433 0.00319691 6.19779C0.0546036 4.57125 0.723722 3.02539 1.87443 1.87468C3.02514 0.723966 4.57101 0.0548478 6.19754 0.00344105C7.82408 -0.0479657 9.40911 0.522201 10.6302 1.59795C11.8513 2.6737 12.6167 4.17423 12.7707 5.79427C12.9247 7.41432 12.4558 9.03219 11.4593 10.3188H11.4601ZM6.4003 11.1995C7.67328 11.1995 8.89412 10.6938 9.79425 9.7937C10.6944 8.89356 11.2001 7.67272 11.2001 6.39974C11.2001 5.12676 10.6944 3.90592 9.79425 3.00579C8.89412 2.10565 7.67328 1.59997 6.4003 1.59997C5.12732 1.59997 3.90648 2.10565 3.00634 3.00579C2.10621 3.90592 1.60052 5.12676 1.60052 6.39974C1.60052 7.67272 2.10621 8.89356 3.00634 9.7937C3.90648 10.6938 5.12732 11.1995 6.4003 11.1995V11.1995Z"
              fill="gray"
            />
          </svg>
        </div>
        <input
          type="text"
          className="w-full rounded-full border-2 border-gray-900 bg-gray-900 px-72 py-2 pl-16 text-base text-white placeholder-gray-400 focus:border-gray-400"
          placeholder="Search"
        />
      </div>

      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
          <svg
            width="18"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4601 10.3188L15.7639 14.6226C15.9151 14.7739 16.0001 14.9792 16 15.1932C15.9999 15.4072 15.9148 15.6124 15.7635 15.7637C15.6121 15.915 15.4068 15.9999 15.1928 15.9998C14.9788 15.9998 14.7736 15.9147 14.6223 15.7633L10.3185 11.4595C9.03194 12.456 7.41407 12.9249 5.79403 12.7709C4.17398 12.6169 2.67346 11.8515 1.59771 10.6304C0.521957 9.40936 -0.0482098 7.82433 0.00319691 6.19779C0.0546036 4.57125 0.723722 3.02539 1.87443 1.87468C3.02514 0.723966 4.57101 0.0548478 6.19754 0.00344105C7.82408 -0.0479657 9.40911 0.522201 10.6302 1.59795C11.8513 2.6737 12.6167 4.17423 12.7707 5.79427C12.9247 7.41432 12.4558 9.03219 11.4593 10.3188H11.4601ZM6.4003 11.1995C7.67328 11.1995 8.89412 10.6938 9.79425 9.7937C10.6944 8.89356 11.2001 7.67272 11.2001 6.39974C11.2001 5.12676 10.6944 3.90592 9.79425 3.00579C8.89412 2.10565 7.67328 1.59997 6.4003 1.59997C5.12732 1.59997 3.90648 2.10565 3.00634 3.00579C2.10621 3.90592 1.60052 5.12676 1.60052 6.39974C1.60052 7.67272 2.10621 8.89356 3.00634 9.7937C3.90648 10.6938 5.12732 11.1995 6.4003 11.1995V11.1995Z"
              fill="gray"
            />
          </svg>
        </div>
        <input
          type="text"
          className="w-full rounded-full border-2 border-gray-900 bg-gray-900 px-72 py-4 pl-16 text-lg text-white placeholder-gray-400 focus:border-gray-600"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

// ------------Search Dark--------------
export const SearchRoundedLight = () => {
  return (
    <div>
      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4601 10.3188L15.7639 14.6226C15.9151 14.7739 16.0001 14.9792 16 15.1932C15.9999 15.4072 15.9148 15.6124 15.7635 15.7637C15.6121 15.915 15.4068 15.9999 15.1928 15.9998C14.9788 15.9998 14.7736 15.9147 14.6223 15.7633L10.3185 11.4595C9.03194 12.456 7.41407 12.9249 5.79403 12.7709C4.17398 12.6169 2.67346 11.8515 1.59771 10.6304C0.521957 9.40936 -0.0482098 7.82433 0.00319691 6.19779C0.0546036 4.57125 0.723722 3.02539 1.87443 1.87468C3.02514 0.723966 4.57101 0.0548478 6.19754 0.00344105C7.82408 -0.0479657 9.40911 0.522201 10.6302 1.59795C11.8513 2.6737 12.6167 4.17423 12.7707 5.79427C12.9247 7.41432 12.4558 9.03219 11.4593 10.3188H11.4601ZM6.4003 11.1995C7.67328 11.1995 8.89412 10.6938 9.79425 9.7937C10.6944 8.89356 11.2001 7.67272 11.2001 6.39974C11.2001 5.12676 10.6944 3.90592 9.79425 3.00579C8.89412 2.10565 7.67328 1.59997 6.4003 1.59997C5.12732 1.59997 3.90648 2.10565 3.00634 3.00579C2.10621 3.90592 1.60052 5.12676 1.60052 6.39974C1.60052 7.67272 2.10621 8.89356 3.00634 9.7937C3.90648 10.6938 5.12732 11.1995 6.4003 11.1995V11.1995Z"
              fill="gray"
            />
          </svg>
        </div>
        <input
          type="text"
          className="w-full rounded-full border-2 bg-white px-72 py-2 pl-16 text-base text-black placeholder-gray-400 focus:border-gray-400"
          placeholder="Search"
        />
      </div>

      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
          <svg
            width="18"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4601 10.3188L15.7639 14.6226C15.9151 14.7739 16.0001 14.9792 16 15.1932C15.9999 15.4072 15.9148 15.6124 15.7635 15.7637C15.6121 15.915 15.4068 15.9999 15.1928 15.9998C14.9788 15.9998 14.7736 15.9147 14.6223 15.7633L10.3185 11.4595C9.03194 12.456 7.41407 12.9249 5.79403 12.7709C4.17398 12.6169 2.67346 11.8515 1.59771 10.6304C0.521957 9.40936 -0.0482098 7.82433 0.00319691 6.19779C0.0546036 4.57125 0.723722 3.02539 1.87443 1.87468C3.02514 0.723966 4.57101 0.0548478 6.19754 0.00344105C7.82408 -0.0479657 9.40911 0.522201 10.6302 1.59795C11.8513 2.6737 12.6167 4.17423 12.7707 5.79427C12.9247 7.41432 12.4558 9.03219 11.4593 10.3188H11.4601ZM6.4003 11.1995C7.67328 11.1995 8.89412 10.6938 9.79425 9.7937C10.6944 8.89356 11.2001 7.67272 11.2001 6.39974C11.2001 5.12676 10.6944 3.90592 9.79425 3.00579C8.89412 2.10565 7.67328 1.59997 6.4003 1.59997C5.12732 1.59997 3.90648 2.10565 3.00634 3.00579C2.10621 3.90592 1.60052 5.12676 1.60052 6.39974C1.60052 7.67272 2.10621 8.89356 3.00634 9.7937C3.90648 10.6938 5.12732 11.1995 6.4003 11.1995V11.1995Z"
              fill="gray"
            />
          </svg>
        </div>
        <input
          type="text"
          className="w-full rounded-full border-2 bg-white px-72 py-4 pl-16 text-lg text-black placeholder-gray-400 focus:border-gray-600"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

// ------------Search Light--------------
export const SearchDark = () => {
  return (
    <div>
      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4601 10.3188L15.7639 14.6226C15.9151 14.7739 16.0001 14.9792 16 15.1932C15.9999 15.4072 15.9148 15.6124 15.7635 15.7637C15.6121 15.915 15.4068 15.9999 15.1928 15.9998C14.9788 15.9998 14.7736 15.9147 14.6223 15.7633L10.3185 11.4595C9.03194 12.456 7.41407 12.9249 5.79403 12.7709C4.17398 12.6169 2.67346 11.8515 1.59771 10.6304C0.521957 9.40936 -0.0482098 7.82433 0.00319691 6.19779C0.0546036 4.57125 0.723722 3.02539 1.87443 1.87468C3.02514 0.723966 4.57101 0.0548478 6.19754 0.00344105C7.82408 -0.0479657 9.40911 0.522201 10.6302 1.59795C11.8513 2.6737 12.6167 4.17423 12.7707 5.79427C12.9247 7.41432 12.4558 9.03219 11.4593 10.3188H11.4601ZM6.4003 11.1995C7.67328 11.1995 8.89412 10.6938 9.79425 9.7937C10.6944 8.89356 11.2001 7.67272 11.2001 6.39974C11.2001 5.12676 10.6944 3.90592 9.79425 3.00579C8.89412 2.10565 7.67328 1.59997 6.4003 1.59997C5.12732 1.59997 3.90648 2.10565 3.00634 3.00579C2.10621 3.90592 1.60052 5.12676 1.60052 6.39974C1.60052 7.67272 2.10621 8.89356 3.00634 9.7937C3.90648 10.6938 5.12732 11.1995 6.4003 11.1995V11.1995Z"
              fill="gray"
            />
          </svg>
        </div>
        <input
          type="text"
          className="w-full rounded-md border-2 border-gray-900 bg-gray-900 px-72 py-2 pl-16 text-base text-white placeholder-gray-400 focus:border-gray-400"
          placeholder="Search"
        />
      </div>

      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
          <svg
            width="18"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4601 10.3188L15.7639 14.6226C15.9151 14.7739 16.0001 14.9792 16 15.1932C15.9999 15.4072 15.9148 15.6124 15.7635 15.7637C15.6121 15.915 15.4068 15.9999 15.1928 15.9998C14.9788 15.9998 14.7736 15.9147 14.6223 15.7633L10.3185 11.4595C9.03194 12.456 7.41407 12.9249 5.79403 12.7709C4.17398 12.6169 2.67346 11.8515 1.59771 10.6304C0.521957 9.40936 -0.0482098 7.82433 0.00319691 6.19779C0.0546036 4.57125 0.723722 3.02539 1.87443 1.87468C3.02514 0.723966 4.57101 0.0548478 6.19754 0.00344105C7.82408 -0.0479657 9.40911 0.522201 10.6302 1.59795C11.8513 2.6737 12.6167 4.17423 12.7707 5.79427C12.9247 7.41432 12.4558 9.03219 11.4593 10.3188H11.4601ZM6.4003 11.1995C7.67328 11.1995 8.89412 10.6938 9.79425 9.7937C10.6944 8.89356 11.2001 7.67272 11.2001 6.39974C11.2001 5.12676 10.6944 3.90592 9.79425 3.00579C8.89412 2.10565 7.67328 1.59997 6.4003 1.59997C5.12732 1.59997 3.90648 2.10565 3.00634 3.00579C2.10621 3.90592 1.60052 5.12676 1.60052 6.39974C1.60052 7.67272 2.10621 8.89356 3.00634 9.7937C3.90648 10.6938 5.12732 11.1995 6.4003 11.1995V11.1995Z"
              fill="gray"
            />
          </svg>
        </div>
        <input
          type="text"
          className="w-full rounded-md border-2 border-gray-900 bg-gray-900 px-72 py-4 pl-16 text-lg text-white placeholder-gray-400 focus:border-gray-600"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

// ------------Search Dark--------------
export const SearchLight = () => {
  return (
    <div>
      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4601 10.3188L15.7639 14.6226C15.9151 14.7739 16.0001 14.9792 16 15.1932C15.9999 15.4072 15.9148 15.6124 15.7635 15.7637C15.6121 15.915 15.4068 15.9999 15.1928 15.9998C14.9788 15.9998 14.7736 15.9147 14.6223 15.7633L10.3185 11.4595C9.03194 12.456 7.41407 12.9249 5.79403 12.7709C4.17398 12.6169 2.67346 11.8515 1.59771 10.6304C0.521957 9.40936 -0.0482098 7.82433 0.00319691 6.19779C0.0546036 4.57125 0.723722 3.02539 1.87443 1.87468C3.02514 0.723966 4.57101 0.0548478 6.19754 0.00344105C7.82408 -0.0479657 9.40911 0.522201 10.6302 1.59795C11.8513 2.6737 12.6167 4.17423 12.7707 5.79427C12.9247 7.41432 12.4558 9.03219 11.4593 10.3188H11.4601ZM6.4003 11.1995C7.67328 11.1995 8.89412 10.6938 9.79425 9.7937C10.6944 8.89356 11.2001 7.67272 11.2001 6.39974C11.2001 5.12676 10.6944 3.90592 9.79425 3.00579C8.89412 2.10565 7.67328 1.59997 6.4003 1.59997C5.12732 1.59997 3.90648 2.10565 3.00634 3.00579C2.10621 3.90592 1.60052 5.12676 1.60052 6.39974C1.60052 7.67272 2.10621 8.89356 3.00634 9.7937C3.90648 10.6938 5.12732 11.1995 6.4003 11.1995V11.1995Z"
              fill="gray"
            />
          </svg>
        </div>
        <input
          type="text"
          className="w-full rounded-md border-2 bg-white px-72 py-2 pl-16 text-base text-white placeholder-gray-400 focus:border-gray-400"
          placeholder="Search"
        />
      </div>

      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
          <svg
            width="18"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4601 10.3188L15.7639 14.6226C15.9151 14.7739 16.0001 14.9792 16 15.1932C15.9999 15.4072 15.9148 15.6124 15.7635 15.7637C15.6121 15.915 15.4068 15.9999 15.1928 15.9998C14.9788 15.9998 14.7736 15.9147 14.6223 15.7633L10.3185 11.4595C9.03194 12.456 7.41407 12.9249 5.79403 12.7709C4.17398 12.6169 2.67346 11.8515 1.59771 10.6304C0.521957 9.40936 -0.0482098 7.82433 0.00319691 6.19779C0.0546036 4.57125 0.723722 3.02539 1.87443 1.87468C3.02514 0.723966 4.57101 0.0548478 6.19754 0.00344105C7.82408 -0.0479657 9.40911 0.522201 10.6302 1.59795C11.8513 2.6737 12.6167 4.17423 12.7707 5.79427C12.9247 7.41432 12.4558 9.03219 11.4593 10.3188H11.4601ZM6.4003 11.1995C7.67328 11.1995 8.89412 10.6938 9.79425 9.7937C10.6944 8.89356 11.2001 7.67272 11.2001 6.39974C11.2001 5.12676 10.6944 3.90592 9.79425 3.00579C8.89412 2.10565 7.67328 1.59997 6.4003 1.59997C5.12732 1.59997 3.90648 2.10565 3.00634 3.00579C2.10621 3.90592 1.60052 5.12676 1.60052 6.39974C1.60052 7.67272 2.10621 8.89356 3.00634 9.7937C3.90648 10.6938 5.12732 11.1995 6.4003 11.1995V11.1995Z"
              fill="gray"
            />
          </svg>
        </div>
        <input
          type="text"
          className="w-full rounded-md border-2 bg-white px-72 py-4 pl-16 text-lg text-white placeholder-gray-400 focus:border-gray-600"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

// ------------Select Light--------------
export const SelectDark = () => {
  return (
    <div>
      <div className="grid gap-5 p-5">
        <div className="relative w-[600px]">
          <select className="block w-full appearance-none rounded-md border-2 border-gray-200 bg-gray-900 p-2 text-sm text-gray-300 outline-none focus:border-blue-600 disabled:bg-gray-300">
            <option selected>Select</option>
            <option>Tailwind</option>
            <option>React</option>
            <option>SeamLess UI</option>
            <option>Input</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-6">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select className="text-md block w-full appearance-none rounded-md border-2 border-gray-200 bg-gray-900 p-3 text-gray-300 outline-none focus:border-blue-600 disabled:bg-gray-300">
            <option selected>Select</option>
            <option>Tailwind</option>
            <option>React</option>
            <option>SeamLess UI</option>
            <option>Input</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-6">
            <svg
              className="h-5 w-5 fill-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select className="block w-full appearance-none rounded-md border-2 border-gray-200 bg-gray-900 p-5 text-lg text-gray-300 outline-none focus:border-blue-600 disabled:bg-gray-300">
            <option selected>Select</option>
            <option>Tailwind</option>
            <option>React</option>
            <option>SeamLess UI</option>
            <option>Input</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-6">
            <svg
              className="h-5 w-5 fill-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------Select Dark--------------
export const SelectLight = () => {
  return (
    <div>
      <div className="grid gap-5 p-5 w-[600px]">
        <div className="relative">
          <select className="block w-full appearance-none rounded-md border-2 border-gray-200 bg-white p-2 text-sm text-gray-500 outline-none focus:border-blue-600 disabled:bg-gray-300">
            <option selected>Select</option>
            <option>Tailwind</option>
            <option>React</option>
            <option>SeamLess UI</option>
            <option>Input</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-6">
            <svg
              className="h-5 w-5 fill-slate-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select className="text-md block w-full appearance-none rounded-md border-2 border-gray-200 bg-white p-3 text-gray-500 outline-none focus:border-blue-600 disabled:bg-gray-300">
            <option selected>Select</option>
            <option>Tailwind</option>
            <option>React</option>
            <option>SeamLess UI</option>
            <option>Input</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-6">
            <svg
              className="h-5 w-5 fill-slate-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select className="block w-full appearance-none rounded-md border-2 border-gray-200 bg-white p-5 text-lg text-gray-500 outline-none focus:border-blue-600 disabled:bg-gray-300">
            <option selected>Select</option>
            <option>Tailwind</option>
            <option>React</option>
            <option>SeamLess UI</option>
            <option>Input</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-6">
            <svg
              className="h-5 w-5 fill-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------Select Rounded Light--------------
export const SelectRoundedDark = () => {
  return (
    <div>
      <div className="grid gap-5 p-5 w-[600px]">
        <div className="relative">
          <select className="block w-full appearance-none rounded-full border-2 border-gray-200 bg-gray-900 p-2 pl-5 text-sm text-gray-100 outline-none focus:border-blue-600 disabled:bg-gray-300">
            <option selected>Select</option>
            <option>Tailwind</option>
            <option>React</option>
            <option>SeamLess UI</option>
            <option>Input</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-5">
            <svg
              className="h-5 w-5 fill-slate-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select className="text-md block w-full appearance-none rounded-full border-2 border-gray-200 bg-gray-900 p-3 pl-6 text-slate-100 outline-none focus:border-blue-600 disabled:bg-gray-300">
            <option selected>Select</option>
            <option>Tailwind</option>
            <option>React</option>
            <option>SeamLess UI</option>
            <option>Input</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-6">
            <svg
              className="h-5 w-5 fill-slate-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select className="block w-full appearance-none rounded-full border-2 border-gray-200 bg-gray-900 p-5 pl-8 text-lg text-slate-100 outline-none focus:border-blue-600 disabled:bg-gray-300">
            <option selected>Select</option>
            <option>Tailwind</option>
            <option>React</option>
            <option>SeamLess UI</option>
            <option>Input</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-7">
            <svg
              className="h-5 w-5 fill-slate-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------Select Rounded Dark--------------
export const SelectRoundedLight = () => {
  return (
    <div>
      <div className="grid gap-5 p-5 w-[600px]">
        <div className="relative">
          <select className="block w-full appearance-none rounded-full border-2 border-gray-200 bg-gray-100 p-2 text-sm text-gray-600 outline-none pl-5 focus:border-blue-600 disabled:bg-gray-300">
            <option selected>Select</option>
            <option>Tailwind</option>
            <option>React</option>
            <option>SeamLess UI</option>
            <option>Input</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-5">
            <svg
              className="h-5 w-5 fill-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select className="text-md block w-full appearance-none rounded-full border-2 border-gray-200 bg-gray-100 p-3 text-gray-600 outline-none pl-7 focus:border-blue-600 disabled:bg-gray-300">
            <option selected>Select</option>
            <option>Tailwind</option>
            <option>React</option>
            <option>SeamLess UI</option>
            <option>Input</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-6">
            <svg
              className="h-5 w-5 fill-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select className="block w-full appearance-none rounded-full border-2 border-gray-200 bg-gray-100 p-5 text-lg text-gray-600 outline-none pl-8 focus:border-blue-600 disabled:bg-gray-300">
            <option selected>Select</option>
            <option>Tailwind</option>
            <option>React</option>
            <option>SeamLess UI</option>
            <option>Input</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-7">
            <svg
              className="h-5 w-5 fill-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

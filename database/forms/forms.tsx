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
      <div className="grid gap-5 w-[600px]">
        <input
          type="email"
          className="w-full rounded-full bg-[#121225] p-2 pl-5 text-sm text-[400] text-white placeholder-gray-400 outline-none focus:border-blue-600 disabled:border-gray-300 disabled:bg-gray-300"
          placeholder="Email *"
        />

        <input
          type="email"
          className="text-md w-full rounded-full bg-[#121225] p-3 pl-6 text-white placeholder-gray-400 outline-none focus:border-blue-600 disabled:border-gray-300 disabled:bg-gray-300"
          placeholder="Email *"
        />

        <input
          type="email"
          className="w-full rounded-full bg-[#121225] p-5 pl-8 text-lg text-white placeholder-gray-400 outline-none focus:border-blue-600 disabled:border-gray-300 disabled:bg-gray-300"
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
          className="w-full rounded-lg bg-[#121225] p-2 pl-5 text-sm text-[400] text-white placeholder-gray-400 outline-none focus:border-blue-600 disabled:border-gray-300 disabled:bg-gray-300"
          placeholder="Email *"
        />

        <input
          type="email"
          className="text-md w-full rounded-lg bg-[#121225] p-3 pl-6 text-white placeholder-gray-400 outline-none focus:border-blue-600 disabled:border-gray-300 disabled:bg-gray-300"
          placeholder="Email *"
        />

        <input
          type="email"
          className="w-full rounded-lg bg-[#121225] p-5 pl-8 text-lg text-white placeholder-gray-400 outline-none focus:border-blue-600 disabled:border-gray-300 disabled:bg-gray-300"
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
  
  <input type="text" className="w-full rounded-full border-2 border-green-500 bg-gray-100 p-2 text-sm outline-none" placeholder="Error" />

  
  <input type="text" className="text-md w-full rounded-full border-2 border-green-500 bg-gray-100 p-3 outline-none" placeholder="Error" />

  
  <input type="text" className="w-full rounded-full border-2 border-green-500 bg-gray-100 p-5 text-lg outline-none" placeholder="Error" />
</div>
    </div>
  );
};

// ------------Success Rounded Dark--------------
export const SuccessRoundedDark = () => {
  return (
    <div>
      <div className="grid gap-5 w-[600px]">
  
  <input type="text" className="w-full rounded-full border-2 border-green-500 bg-gray-900 p-2 text-sm outline-none" placeholder="Error" />

  
  <input type="text" className="text-md w-full rounded-full border-2 border-green-500 bg-gray-900 p-3 outline-none" placeholder="Error" />

  
  <input type="text" className="w-full rounded-full border-2 border-green-500 bg-gray-900 p-5 text-lg outline-none" placeholder="Error" />
</div>

    </div>
  );
};

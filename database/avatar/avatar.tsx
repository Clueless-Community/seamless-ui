import React from "react";

export const Avatar = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row flex-wrap">
          <div>
            <div className="relative">
              <div>
                <h2 className="my-4 text-lg font-semibold text-white">
                  Avatar squared
                </h2>
                <div className="space-x-10">
                  <img
                    className="inline-block h-8 w-8 max-w-full bg-gray-100 dark:bg-gray-100"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-12 w-12 max-w-full bg-gray-100 dark:bg-gray-100"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-20 w-20 max-w-full bg-gray-100 dark:bg-gray-100"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-32 w-32 max-w-full bg-gray-100 dark:bg-gray-100"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    alt="Image Description"
                  />
                </div>

                <h2 className="my-4 text-lg font-semibold text-white">
                  Avatar rounded
                </h2>
                <div className="space-x-10">
                  <img
                    className="inline-block h-8 w-8 max-w-full rounded-full bg-gray-100 shadow-xl dark:bg-gray-100"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-12 w-12 max-w-full rounded-full bg-gray-100 shadow-xl dark:bg-gray-100"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-20 w-20 max-w-full rounded-full bg-gray-100 shadow-xl dark:bg-gray-100"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-32 w-32 max-w-full rounded-full bg-gray-100 shadow-xl dark:bg-gray-100"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    alt="Image Description"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AvatarText = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center space-x-4">
        <img
          className="rounded-full border-2 border-gray-200 shadow-md h-20 w-20"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          alt=""
        />
        <div className="font-medium dark:text-blue-700">
          <div>Rahul Karda</div>
          <div className="text-sm text-gray-500 dark:text-gray-500">
            Joined Github in 2020
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <img
          className="rounded-full border-6 border-gray-200 shadow-md h-28 w-28"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          alt=""
        />
        <div className="font-medium dark:text-blue-700 scale-125">
          <div>Rahul Karda</div>
          <div className="text-sm text-gray-500 dark:text-gray-500">
            Joined Github in 2020
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-12">
        <img
          className="rounded-full border-2 border-gray-200 shadow-md h-40 w-40"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          alt=""
        />
        <div className="font-medium dark:text-blue-700 scale-150">
          <div>Rahul Karda</div>
          <div className="text-sm text-gray-500 dark:text-gray-500">
            Joined Github in 2020
          </div>
        </div>
      </div>
    </div>
  );
};

export const AvatarStatus = () => {
  return (
    <div>
      <img
        id="avatarButton"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="inline-block w-20 h-20 max-w-full transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl dark:bg-blue-100"
        src="https://mdbcdn.b-cdn.net/img/new/avatars/7.webp"
        alt="User dropdown"
      />

      <div className="relative">
        <img
          className="inline-block w-20 h-20 max-w-full transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl dark:bg-blue-100"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          alt=""
        />
        <span className="top-0 left-14 absolute  w-7 h-7 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <div className="relative">
        <img
          className="inline-block w-20 h-20 max-w-full transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl dark:bg-blue-100"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
          alt=""
        />
        <span className="absolute top-0 -right-2 transform -translate-y-1/2 w-7 h-7 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <div className="relative">
        <img
          className="inline-block w-20 h-20 max-w-full transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl dark:bg-blue-100"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/10.webp"
          alt=""
        />
        <span className="bottom-0 left-14 absolute  w-7 h-7 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <div className="relative">
        <img
          className="inline-block w-20 h-20 max-w-full transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl dark:bg-blue-100"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/11.webp"
          alt=""
        />
        <span className="absolute bottom-2 left-14 transform translate-y-1/4 w-7 h-7 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
    </div>
  );
};

export const AvatarGroup = () => {
  return (
    <div>
      <div>
        <div className="mb-5">
          <h2 className="mb-4 text-lg font-semibold text-white">Avatar group</h2>
          <div className="relative ml-4">
            <img
              style={{border: '2px solid gray'}}
              className="-ml-4 inline-block transform transition-all relative cursor-pointer duration-300 image h-20 w-20 rounded-full"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/6.webp"
              alt="Image Description"
            />
            <img
              style={{border: '2px solid gray'}}
              className="-ml-4 inline-block transform transition-all relative cursor-pointer duration-300 image h-20 w-20 rounded-full"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/7.webp"
              alt="Image Description"
            />
            <img
              style={{border: '2px solid gray'}}
              className="-ml-4 inline-block transform transition-all relative cursor-pointer duration-300 image h-20 w-20 rounded-full"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              alt="Image Description"
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-gray-500">Example</p>
          <div className="mb-6 w-fit rounded-lg bg-white px-4 py-6 shadow-lg">
            <div className="flex flex-col pb-2">
              <h3 className="text-base text-black font-bold">New Followers</h3>
              <hr className="my-2" />
            </div>
            <div className="flex px-4">
              <img
                style={{border: '1px solid gray'}}
                className="-ml-4 inline-block transition-all duration-300 relative cursor-pointer transform h-12 image rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/6.webp"
                alt="Image Description"
              />
              <img
                style={{border: '1px solid gray'}}
                className="-ml-4 inline-block transition-all duration-300 relative cursor-pointer transform h-12 image rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/7.webp"
                alt="Image Description"
              />
              <img
                style={{border: '1px solid gray'}}
                className="-ml-4 inline-block transition-all duration-300 relative cursor-pointer transform h-12 image rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                alt="Image Description"
              />
              <img
                style={{border: '1px solid gray'}}
                className="-ml-4 inline-block transition-all duration-300 relative cursor-pointer transform h-12 image rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
                alt="Image Description"
              />
              <img
                style={{border: '1px solid gray'}}
                className="-ml-4 inline-block h-12 transform image duration-300 relative cursor-pointer rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl transition-all"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/10.webp"
                alt="Image Description"
              />

              <span className="self-center text-sm font-semibold text-gray-500 ltr:ml-5 rtl:mr-5">
                +232 more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

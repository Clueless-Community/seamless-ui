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
    <div>
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
        <span className="absolute top-4 left-14 transform -translate-y-1/2 w-7 h-7 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
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
      <div className="mx-auto p-5">
        <div className="p-5">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Avatar group
          </h2>
          <div className="relative">
            <img
              className="-ml-4 inline-block h-20 w-20 max-w-full transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl transition-all hover:-translate-y-1 dark:bg-blue-100"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/6.webp"
              alt="Image Description"
            />
            <img
              className="-ml-4 inline-block h-20 w-20 max-w-full transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl transition-all hover:-translate-y-1 dark:bg-blue-100"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/7.webp"
              alt="Image Description"
            />
            <img
              className="-ml-4 inline-block h-20 w-20 max-w-full transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl transition-all hover:-translate-y-1 dark:bg-blue-100"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              alt="Image Description"
            />
          </div>
        </div>
        <div className="p-3">
          <p className="mb-2 text-gray-500">Example</p>
          <div className="mb-6 rounded-lg bg-white py-6 px-4 shadow-lg w-fit">
            <div className="flex flex-col pb-2">
              <h3 className="text-base font-bold">New Followers</h3>
              <hr className="my-2" />
            </div>
            <div className=" px-4">
              <img
                className="-ml-4 inline-block h-12 w-fit transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl transition-all hover:-translate-y-1 dark:border-gray-100 dark:bg-gray-800"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/6.webp"
                alt="Image Description"
              />
              <img
                className="-ml-4 inline-block h-12 w-fit transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl transition-all hover:-translate-y-1 dark:border-gray-100 dark:bg-gray-800"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/7.webp"
                alt="Image Description"
              />
              <img
                className="-ml-4 inline-block h-12 w-fit transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl transition-all hover:-translate-y-1 dark:border-gray-100 dark:bg-gray-800"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                alt="Image Description"
              />
              <img
                className="-ml-4 inline-block h-12 w-fit transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl transition-all hover:-translate-y-1 dark:border-gray-100 dark:bg-gray-800"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
                alt="Image Description"
              />
              <img
                className="-ml-4 inline-block h-12 w-fit transform rounded-full border-2 border-gray-400 bg-gray-300 shadow-xl transition-all hover:-translate-y-1 dark:border-gray-100 dark:bg-gray-800"
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

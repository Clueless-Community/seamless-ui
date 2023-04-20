import { Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
function Footer() {
  return (
    <div className="p-10 bg-[#1B1B1B] space-y-8">
      <div className="flex justify-between p-5 flex-col md:flex-row md:text-left text-center space-y-1">
        <div className="flex justify-center items-start ">
          <Link href={"/home-page"} rel="noreferrer">
            <div className="flex items-center h-fit ">
              <img
                src="/seamless-ui 2.png"
                className="h-20 w-20 "
                draggable={false}
              />
              <h1 className="text-3xl text-white  whitespace-nowrap">
                SeamLess UI
              </h1>
            </div>
          </Link>
        </div>
        <div className=" grid grid-row-3 ">
          <p className="text-2xl md:text-[#7EE787] text-white cursor-pointer">
            Know us
          </p>
          <Link href={"/about-us"} rel="noreferrer">
            <p className="md:text-xl text-md text-white hover:text-[#7EE787] transition-all cursor-pointer">
              About Us
            </p>
          </Link>
          <p className="md:text-xl text-md text-white mb-5 md:mb-0 hover:text-[#7EE787] transition-all cursor-pointer">
            Our goal
          </p>
        </div>
        <div className="grid grid-row-3 ">
          <p className="text-2xl md:text-[#7EE787] text-white gap-2 cursor-pointer">
            Legal
          </p>
          <Link href={"/privacy-policy"} rel="noreferrer">
            <p className="md:text-xl text-md text-white hover:text-[#7EE787] transition-all cursor-pointer">
              Privacy Policy
            </p>
          </Link>
          <Link href={"/terms-and-condition"} rel="noreferrer">
            <p className="md:text-xl text-md text-white mb-5 md:mb-0 hover:text-[#7EE787] transition-all cursor-pointer">
              Terms & condition
            </p>
          </Link>
        </div>

        <div className="grid grid-row-5 gap-4">
            <p className="text-2xl text-[#7EE787] mb-2 hidden md:block gap-2 cursor-pointer">
              Quick links
            </p>
          <Tooltip label="Coming soon...">
          <p className="text-xl text-white hidden md:block hover:text-[#7EE787] transition-all cursor-pointer">
            Events
          </p>
          </Tooltip>
          <Tooltip label="Coming soon...">
            <p className="text-xl text-white hidden md:block hover:text-[#7EE787] transition-all cursor-pointer">
              Resources
            </p>
          </Tooltip>
          <Tooltip label="Coming soon...">
            <p className="text-xl text-white hidden md:block hover:text-[#7EE787] transition-all cursor-pointer">
              Blogs
            </p>
          </Tooltip>
          <Tooltip label="Coming soon...">
            <p className="text-xl text-white hidden md:block hover:text-[#7EE787] transition-all cursor-pointer">
              Projects
            </p>
          </Tooltip>
        </div>

        <div className="grid grid-row-3 md:gap-4 gap-2">
          <p className="text-2xl  md:text-[#7EE787] text-white md:mb-2 mb-0 cursor-pointer">
            Contact and Help
          </p>
          <Link href={"/contact-us"} rel="noreferrer">
            <p className="md:text-xl text-md text-white hover:text-[#7EE787] transition-all cursor-pointer">
              Contact us
            </p>
          </Link>
          <p className="md:text-xl text-md text-white hover:text-[#7EE787] transition-all cursor-pointer">
            Report an Issue
          </p>
          <div className="flex md:justify-between mt-4 justify-center gap-5 md:gap-0">
            <a
              href="https://discord.gg/zrVMjGW8sB"
              target={"_blank"}
              rel="noreferrer"
              className=" w-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-white w-7"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/by_clueless/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/Twitter.png" draggable={false} />
            </a>
            <a
              href="https://github.com/Clueless-Community/seamless-ui/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/Github .png" draggable={false} />
            </a>
          </div>
        </div>
      </div>
      <div className="-mx-10 md:-mx-0 ">
        <div className="md:flex md:justify-between text-center md:px-6 ">
          <p className="bg-[#7EE787] md:bg-transparent text-white py-2">
            Copyright 2023 by ClueLess
          </p>
          <p className="text-white hidden md:block">Powered by Clueless</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import { Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <div className="p-10 bg-[#1B1B1B] space-y-8">
      <div className="grid md:grid-cols-4 text-center md:text-left lg:grid-cols-5 p-5 space-y-1">
        <div className="flex md:col-span-4 pb-3 md:pb-5 lg:pb-0 lg:col-span-1 justify-self-center lg:justify-self-start">
          <Link href={"/home-page"} rel="noreferrer">
            <div className="flex items-center h-fit ">
              <img
                src="/seamless-ui 2.png"
                className="h-14 w-14 md:h-20 md:w-20 "
                draggable={false}
              />
              <h1 className="text-2xl md:text-3xl text-white  whitespace-nowrap">
                SeamLess UI
              </h1>
            </div>
          </Link>
        </div>

        <div className="grid justify-self-center md:justify-self-start lg:justify-self-end xl:justify-self-center  grid-row-3">
          <p className="text-2xl md:text-[#7EE787] text-white cursor-pointer">
            Know us
          </p>
          <Link href={"/about-us"} rel="noreferrer">
            <p className="md:text-xl text-md text-white hover:text-[#7EE787] transition-all cursor-pointer">
              About Us
            </p>
          </Link>

          <Link href="/docs/introduction">
            <p className="md:text-xl text-md text-white mb-5 md:mb-0 hover:text-[#7EE787] transition-all cursor-pointer">
              Our goal
            </p>
          </Link>
        </div>

        <div className="grid justify-self-center md:justify-self-start lg:justify-self-end xl:justify-self-center  grid-row-3 ">
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

        <div className="grid justify-self-center xl:justify-self-center grid-row-5 gap-4">
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

        <div className="grid justify-self-center md:justify-self-end grid-row-3 md:gap-4 gap-2">
          <p className="text-2xl md:text-[#7EE787] text-white md:mb-2 mb-0 cursor-pointer">
            Contact and Help
          </p>
          <Link href={"/contact-us"} rel="noreferrer">
            <p className="md:text-xl text-md text-white hover:text-[#7EE787] transition-all cursor-pointer">
              Contact us
            </p>
          </Link>
          <Link
            href={
              "https://github.com/Clueless-Community/seamless-ui/issues/new?title=Report%20an%20Issue%20%3F&labels=feedback"
            }
            target={"_blank"}
          >
            <p className="md:text-xl text-md text-white hover:text-[#7EE787] transition-all cursor-pointer">
              Report an Issue
            </p>
          </Link>
          <div className="flex mt-4 mx-auto md:mx-0 justify-between w-32 md:w-40">
            <a
              href="https://discord.gg/zrVMjGW8sB"
              target={"_blank"}
              rel="noreferrer"
              className=" w-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#7EE787] md:text-white w-7"
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
              <svg
                className="fill-[#7EE787] md:fill-white h-5 mt-1"
                viewBox="0 0 1200 1227"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                />
              </svg>

              {/* <img className="h-5 mt-1" src="/x.png" draggable={false} /> */}
            </a>

            <a
              href="https://github.com/Clueless-Community/seamless-ui/"
              target={"_blank"}
              rel="noreferrer"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                className="fill-[#7EE787] md:fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3882_2967)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.3961 0.520996C9.45337 0.522536 6.60711 1.57356 4.36628 3.48612C2.12546 5.39869 0.636195 8.04809 0.164781 10.9606C-0.306633 13.8731 0.270541 16.8587 1.79311 19.3837C3.31568 21.9086 5.68435 23.8082 8.47558 24.7428C9.09137 24.8581 9.32332 24.4732 9.32332 24.146C9.32332 23.8188 9.311 22.87 9.30689 21.8327C5.85846 22.5839 5.12978 20.3653 5.12978 20.3653C4.56736 18.9246 3.75451 18.5459 3.75451 18.5459C2.62967 17.7762 3.83868 17.7906 3.83868 17.7906C5.08463 17.8791 5.73942 19.0728 5.73942 19.0728C6.84374 20.9724 8.63979 20.4229 9.34589 20.1018C9.45674 19.2971 9.77901 18.7496 10.1341 18.4389C7.37947 18.126 4.48525 17.0599 4.48525 12.2975C4.46818 11.0624 4.92529 9.86792 5.762 8.96129C5.63474 8.64846 5.20983 7.38478 5.8831 5.66832C5.8831 5.66832 6.92379 5.33491 9.29254 6.94229C11.3243 6.38519 13.468 6.38519 15.4997 6.94229C17.8664 5.33491 18.905 5.66832 18.905 5.66832C19.5803 7.38066 19.1555 8.64434 19.0282 8.96129C19.8675 9.86807 20.3256 11.0646 20.307 12.3016C20.307 17.0743 17.4066 18.126 14.6479 18.4327C15.0912 18.8196 15.4874 19.5749 15.4874 20.7357C15.4874 22.3987 15.473 23.7364 15.473 24.146C15.473 24.4773 15.6968 24.8643 16.3249 24.7428C19.1164 23.8081 21.4853 21.9082 23.0079 19.3828C24.5304 16.8574 25.1073 13.8713 24.6353 10.9585C24.1634 8.04579 22.6734 5.39637 20.4318 3.48413C18.1902 1.57189 15.3433 0.52156 12.4002 0.520996H12.3961Z"
                  />
                  <path d="M4.69429 18.3667C4.66761 18.4284 4.56908 18.4469 4.48903 18.4037C4.40898 18.3605 4.34945 18.2802 4.37819 18.2164C4.40693 18.1526 4.5034 18.1361 4.58345 18.1794C4.66351 18.2226 4.72508 18.3049 4.69429 18.3667Z" />
                  <path d="M5.19718 18.9286C5.15468 18.9501 5.10604 18.9561 5.05961 18.9456C5.01318 18.935 4.97184 18.9087 4.94266 18.871C4.86261 18.7845 4.84618 18.6652 4.90776 18.6117C4.96933 18.5581 5.08019 18.5828 5.16024 18.6693C5.24029 18.7557 5.25876 18.8751 5.19718 18.9286Z" />
                  <path d="M5.68588 19.6428C5.60993 19.6963 5.48061 19.6428 5.40876 19.5357C5.3889 19.5166 5.3731 19.4935 5.36231 19.4681C5.35152 19.4426 5.34595 19.4152 5.34595 19.3876C5.34595 19.3599 5.35152 19.3325 5.36231 19.3071C5.3731 19.2816 5.3889 19.2586 5.40876 19.2394C5.48471 19.1879 5.61403 19.2394 5.68588 19.3443C5.75772 19.4493 5.75977 19.5893 5.68588 19.6428Z" />
                  <path d="M6.34871 20.334C6.28097 20.4101 6.14345 20.3895 6.03056 20.2866C5.91766 20.1837 5.89097 20.0438 5.95871 19.9697C6.02644 19.8956 6.16397 19.9162 6.28097 20.017C6.39797 20.1179 6.42055 20.2599 6.34871 20.334Z" />
                  <path d="M7.27859 20.7377C7.24781 20.8344 7.10822 20.8776 6.96864 20.8364C6.82907 20.7953 6.7367 20.68 6.76338 20.5812C6.79007 20.4825 6.9317 20.4372 7.07333 20.4825C7.21496 20.5277 7.30528 20.6368 7.27859 20.7377Z" />
                  <path d="M8.29261 20.8076C8.29261 20.9085 8.17767 20.9949 8.02988 20.997C7.88209 20.999 7.76099 20.9167 7.76099 20.8158C7.76099 20.715 7.87593 20.6286 8.02372 20.6265C8.17151 20.6244 8.29261 20.7047 8.29261 20.8076Z" />
                  <path d="M9.23688 20.6489C9.25536 20.7498 9.15273 20.8547 9.00494 20.8794C8.85715 20.9041 8.72783 20.8444 8.70936 20.7456C8.69088 20.6469 8.79762 20.5398 8.9413 20.5131C9.08499 20.4863 9.21841 20.5481 9.23688 20.6489Z" />
                </g>
                <defs>
                  <clipPath id="clip0_3882_2967">
                    <rect width="24.7917" height="25" />
                  </clipPath>
                </defs>
              </svg>

              {/* <img src="/Github .png" draggable={false} /> */}
            </a>
          </div>
        </div>
      </div>

      <div className="-mx-10 md:-mx-0 ">
        <div className="md:flex md:justify-between text-center md:px-6 ">
          <p className="bg-[#599A5E] md:bg-transparent text-white py-2">
            &copy; {currentYear} by{" "}
            <a
              href="https://www.clueless.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              ClueLess
            </a>
          </p>
          <p className="text-white hidden md:block">
            Powered by{" "}
            <a
              href="https://www.clueless.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              ClueLess
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

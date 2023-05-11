import React, { useState } from "react";
import Link from "next/link";
import { Tooltip } from "@chakra-ui/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-row justify-between items-center px-5 py-3 md:px-20 md:py-5 bg-custom">
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <img
              src="/seamless-ui 2.png"
              className="h-8 w-8 md:h-10 md:w-10"
              draggable={false}
              alt="Logo"
            />
            <h1 className="text-xl text-white">SeamLess UI</h1>
          </div>
        </Link>
      </div>

      <div className="flex items-center ml-auto">
        <div className={`md:hidden ${isMenuOpen ? "order-3" : "order-2"}`}>
          <button
            onClick={toggleMenu}
            className="p-2 text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className={`flex items-center md:flex md:gap-4 md:items-center mt-4 md:mt-0 ${isMenuOpen ? "flex-col order-2 md:order-3" : "hidden"}`}>
          <Link href="/docs/introduction">
            <p className={`text-white hover:text-[#7EE787] cursor-pointer ${isMenuOpen ? "mb-2 md:mb-0" : ""}`}>
              Docs
            </p>
          </Link>
          <Tooltip label="Coming soon...">
            <p className={`text-white hover:text-[#7EE787] cursor-pointer ${isMenuOpen ? "mb-2 md:mb-0" : ""}`}>
              Blogs
            </p>
          </Tooltip>
          <Tooltip label="Coming soon...">
            <p className={`text-white hover:text-[#7EE787] cursor-pointer ${isMenuOpen ? "mb-4 md:mb-0" : ""}`}>
              Showcase
            </p>
          </Tooltip>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link,  } from "react-router";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // کنترل باز و بسته شدن منو

  return (
    <nav className="container  bg-white absolute w-3/4 top-0  flex left-1/2 -translate-x-1/2   rounded ">
      <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4">
        {/* دکمه همبرگر و لوگو کنار هم با فاصله */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse md:space-x-4">
          {/* دکمه منو برای موبایل با فاصله */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/Logo.png" className="h-8" alt=" Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> */}
          </Link>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
         
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none cursor-pointer focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Link to={"/login"}>
            ورود/ثبت نام
            </Link>
          </button>
        </div>
        <div
          className={`w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`}
        >
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-400 rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                رزرو خودرو
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-400 rounded-sm md:bg-transparent md:p-0"
              >
                خدمات ما
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-400 rounded-sm md:bg-transparent md:p-0"
              >
                بلاگ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-400 rounded-sm md:bg-transparent md:p-0"
              >
                تماس با ما
              </a>
            </li>
            <img src="/search.png" alt="search" className="w-3" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

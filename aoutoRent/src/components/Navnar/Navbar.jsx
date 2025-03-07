import React from "react";
import { Link } from "react-router";
function Navbar() {
  return (
    <nav className="container  bg-white absolute  w-1/2 z-20 top-0 start-0 flex left-1/2 -translate-x-1/2 rounded ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/Logo.png" className="h-8" alt=" Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> */}
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none cursor-pointer focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ورود/ثبت نام
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg
           bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white 
             dark:border-gray-700"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white  rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                رزرو خودرو
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                خدمات ما
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                بلاگ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                تماس با ما
              </a>
            </li>
            <img src="/search.png" alt="" className="w-3" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

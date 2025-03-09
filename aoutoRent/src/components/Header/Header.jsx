import React from "react";
import Navbar from "../Navnar/Navbar";
import { Link } from "react-router";

function Header() {
  return (
    <header
      className="min-h-screen relative overflow-hidden bg-center bg-cover flex flex-col"
      style={{ backgroundImage: "url('/headerbg.png')" }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-amber-300 text-3xl sm:text-4xl md:text-5xl leading-relaxed">
          اُتـــو رِنت؛ سریع، آسان و به صرفه
        </h1>
        <span className="text-white text-lg sm:text-xl md:text-2xl">
          سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن!
        </span>
        <div className="flex justify-center mt-6 gap-4 px-6 md:px-9">
          <button className="text-black flex items-center border bg-amber-300 rounded px-6 py-2">
            <Link to={"/"} className="flex justify-center gap-2">
              <img src="/car.png" alt="Car" className="w-6 h-6" />
              رزرو آسان خودرو
            </Link>
          </button>
          <button className="text-white flex items-center px-5 py-2 border bg-transparent rounded">
            <Link to={"/"} className="flex justify-center gap-2">
              <img src="/car.png" className="w-6 h-6" alt="Contact" />
              تماس با ما
            </Link>
          </button>
        </div>
      </div>

      <Navbar />
    </header>
  );
}

export default Header;

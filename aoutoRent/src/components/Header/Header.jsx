import React from "react";
import Navbar from "../Navnar/Navbar";

function Header() {
  return (
    <header
      className='min-h-screen relative bg-[url("/headerbg.png") overflow-hidden bg-center bg-cover flex flex-col   '
      style={{ backgroundImage: "url('/headerbg.png')" }}
    >
      <Navbar />
    </header>
  );
}

export default Header;

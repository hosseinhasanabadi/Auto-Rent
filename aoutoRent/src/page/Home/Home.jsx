import React from "react";
import Navbar from "../../components/Navnar/Navbar";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Comment from "../../components/Comment/Comment";
import Car from "../../components/Car/Car";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Car />
      <Comment />
    </div>
  );
}

export default Home;

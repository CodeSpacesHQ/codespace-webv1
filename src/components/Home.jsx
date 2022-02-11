import React from "react";
import Navbar from "./_App/Navbar";
import Hero from "./Common/Hero";
import "../assets/style/style.css";
import Advantages from "./Common/Advantages";

const Home = () => {
  return (
    <>
      <div className="bg">
        <Navbar />
        <Hero />
      </div>
      <Advantages />
    </>
  );
};

export default Home;

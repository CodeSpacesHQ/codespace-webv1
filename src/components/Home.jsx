import React from "react";
import Navbar from "./_App/Navbar";
import Hero from "./Common/Hero";
import "../assets/style/style.css";

const Home = () => {
  return (
    <>
      <div className="bg">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Home;

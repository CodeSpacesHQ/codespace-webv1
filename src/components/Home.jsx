import React from "react";
import Navbar from "./_App/Navbar";
import Hero from "./Common/Hero";
import Advantages from "./Common/Advantages";
import WhyUs from "./Common/WhyUs";
import Team from "./Common/Team";
import "../assets/style/style.css";

const Home = () => {
  return (
    <>
      <div className="bg">
        <Navbar />
        <Hero />
      </div>
      <Advantages />
      <WhyUs />
      <Team />
      <div className="mt-5">Lol</div>
    </>
  );
};

export default Home;

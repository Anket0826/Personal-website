import React from "react";
import "../../styles/Home.scss";
import About from "../../pages/about/About";
import Works from "../../pages/works/Works";
import Home from "../../pages/home/Home";
import Develop from "../../pages/develop/Develop";

const Router = () => {
  return (
    <div>
      <section id="/">
        <Home/>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="works">
        <Works />
      </section>
      <section id="develop">
        <Develop/>
      </section>
      {/* <section id="service">
        <h2>Our Services</h2>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
      </section> */}
    </div>
  );
};

export default Router;

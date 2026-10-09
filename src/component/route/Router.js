import React from "react";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Works from "../../pages/works/Works";
import Develop from "../../pages/develop/Develop";
import Achievements from "../../pages/achivements/Achivements";
import Experience from "../../pages/experience/Experience";
import Education from "../../pages/education/Education";
import Skill from "../../pages/skill/Skill";
import Service from "../../pages/service/Service";
import Testimonials from "../../pages/testimonials/Testimonials";
import Contact from "../../pages/contact/Contact";
import Footer from "../footer/Footer";
import BackToTop from "../common/BackToTop";

const Router = () => {
  return (
    <div className="portfolio_layout">
      {/* Home / Hero Section */}
      <Home />

      {/* About Section */}
      <About />

      {/* Featured Works / Portfolio */}
      <Works />

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Education />

      {/* Technical Skills */}
      <Skill />

      {/* Key Milestones & Stats */}
      <Develop />

      {/* Services Offered */}
      <Service />

      {/* Honors & Achievements */}
      <Achievements />

      {/* Testimonials */}
      <Testimonials />

      {/* Functional Contact Section */}
      <Contact />

      {/* Global Footer */}
      <Footer />

      {/* Floating Back To Top Button */}
      <BackToTop />
    </div>
  );
};

export default Router;

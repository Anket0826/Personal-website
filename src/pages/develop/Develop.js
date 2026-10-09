import React, { useEffect, useState } from "react";
import "../../styles/Develop.scss";
import { motion } from "framer-motion";
import { FiClock, FiCheckSquare, FiSmile, FiCode } from "react-icons/fi";

const Develop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    const developSection = document.getElementById("develop");
    if (developSection) {
      observer.observe(developSection);
    }

    return () => {
      if (developSection) observer.unobserve(developSection);
    };
  }, []);

  const stats = [
    { number: "02+", label: "Years of Experience", icon: <FiClock /> },
    { number: "25+", label: "Projects Completed", icon: <FiCheckSquare /> },
    { number: "100%", label: "Client Satisfaction", icon: <FiSmile /> },
    { number: "15+", label: "Modern Tech Skills", icon: <FiCode /> },
  ];

  return (
    <section id="develop" className="develop_page">
      <div className="develop_container">
        <motion.div
          className="develop_content"
          initial={{ y: 40, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="left_content">
            <span className="fun">KEY MILESTONES</span>
            <h2 className="develop_title">Building Resilient, High-Speed Web Solutions</h2>
            <p className="dev_descri">
              Every project is an opportunity to craft clean, maintainable architecture.
              I combine frontend elegance with dependable backend logic to deliver digital
              experiences that load instantly, scale smoothly, and keep users engaged.
            </p>
          </div>

          <div className="right_content">
            <div className="stats_grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat_card">
                  <div className="stat_icon_box">{stat.icon}</div>
                  <div className="stat_info">
                    <span className="stat_number">{stat.number}</span>
                    <span className="stat_label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Develop;
import React, { useEffect, useState } from "react";
import "../../styles/skill.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiPostman, SiExpress, SiMongodb, SiRedux } from "react-icons/si";

const skillGauges = [
  { percentage: 92, title: "JavaScript (ES6+)" },
  { percentage: 90, title: "React.js" },
  { percentage: 95, title: "HTML5 & SCSS" },
  { percentage: 85, title: "Node.js & APIs" },
  { percentage: 94, title: "Responsive UI/UX" },
  { percentage: 88, title: "Git & Version Control" },
];

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    const skillSection = document.getElementById("skill");
    if (skillSection) observer.observe(skillSection);

    return () => {
      if (skillSection) observer.unobserve(skillSection);
    };
  }, []);

  return (
    <section id="skill" className="skill_page">
      <div className="skill_container">
        <div className="skill_header">
          <span className="skill_subtitle">TECHNICAL EXPERTISE</span>
          <h2 className="skill_title">Core Competencies & Toolset</h2>
          <p className="skill_desc">
            A comprehensive overview of my technical abilities across modern frontend development, 
            backend integrations, and software engineering workflows.
          </p>
        </div>

        {/* Circular Gauges */}
        <motion.div
          className="circle_gauges_section"
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="gauges_grid">
            {skillGauges.map((skill, index) => (
              <div key={index} className="gauge_card">
                <div className="gauge_bar_wrapper">
                  <CircularProgressbar
                    value={isVisible ? skill.percentage : 0}
                    text={`${skill.percentage}%`}
                    styles={buildStyles({
                      pathColor: "#10b981",
                      textColor: "#ffffff",
                      trailColor: "rgba(255, 255, 255, 0.08)",
                      textSize: "20px",
                    })}
                  />
                </div>
                <h4 className="gauge_title">{skill.title}</h4>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Categorized Tech Badges */}
        <div className="categorized_skills">
          <div className="cat_skill_group">
            <h3>Frontend Development</h3>
            <div className="badges_row">
              <span className="tech_badge"><FaReact /> React.js</span>
              <span className="tech_badge"><FaJs /> JavaScript (ES6+)</span>
              <span className="tech_badge"><SiRedux /> Redux</span>
              <span className="tech_badge"><FaHtml5 /> HTML5 Semantic</span>
              <span className="tech_badge"><FaCss3Alt /> CSS3 & SCSS</span>
              <span className="tech_badge">Responsive Web Design</span>
              <span className="tech_badge">Framer Motion</span>
            </div>
          </div>

          <div className="cat_skill_group">
            <h3>Backend & Database</h3>
            <div className="badges_row">
              <span className="tech_badge"><FaNodeJs /> Node.js</span>
              <span className="tech_badge"><SiExpress /> Express.js</span>
              <span className="tech_badge"><SiMongodb /> MongoDB</span>
              <span className="tech_badge"><FaDatabase /> RESTful APIs</span>
              <span className="tech_badge">JSON Web Tokens (JWT)</span>
              <span className="tech_badge">CRUD Operations</span>
            </div>
          </div>

          <div className="cat_skill_group">
            <h3>Tools & Workflow</h3>
            <div className="badges_row">
              <span className="tech_badge"><FaGitAlt /> Git</span>
              <span className="tech_badge">GitHub</span>
              <span className="tech_badge"><SiPostman /> Postman</span>
              <span className="tech_badge">VS Code</span>
              <span className="tech_badge">npm & yarn</span>
              <span className="tech_badge">Lighthouse Optimization</span>
              <span className="tech_badge">Cross-Browser Testing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

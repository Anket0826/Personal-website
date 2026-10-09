import React from "react";
import "../../styles/Experience.scss";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineer & Web Developer",
    company: "Client Solutions & Freelance",
    period: "2023 — Present",
    location: "Nashik / Remote",
    description: "Architecting and delivering production-ready web applications using React.js, modern JavaScript (ES6+), and REST APIs. Implementing modular SCSS systems, accessible UI patterns, and optimizing Lighthouse performance scores above 95.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Studio & Web Projects",
    period: "2022 — 2023",
    location: "India / Remote",
    description: "Transformed wireframes and design mockups into responsive, cross-browser web interfaces. Integrated backend REST endpoints, built reusable stateful components, and enhanced interactive features using Framer Motion.",
  },
  {
    role: "Junior Web Developer & Intern",
    company: "Tech Accelerator & Open Source",
    period: "2021 — 2022",
    location: "Nashik, Maharashtra",
    description: "Assisted in building client websites, styling mobile-first components, testing cross-device compatibility, and collaborating through Git & GitHub pull-request workflows.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experi_page">
      <div className="experi_container">
        <div className="experi_header">
          <span className="work_title1">CAREER PATH</span>
          <h2 className="my_ex_name">Professional Experience</h2>
          <p className="ex_descri">
            A track record of crafting dependable, scalable web products with a focus on code quality and user experience.
          </p>
        </div>

        <div className="experience_wrapper">
          <div className="experience_list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience_card">
                <div className="icon_style">
                  <FaBriefcase />
                </div>
                <div className="exp_info">
                  <div className="exp_header_row">
                    <h3 className="role_title">{exp.role}</h3>
                    <span className="period_badge">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                  </div>
                  <div className="company_meta">
                    <span className="company_name">{exp.company}</span>
                    <span className="location_name">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                  <p className="descr_exp">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="experience_side_visual">
            <div className="visual_card">
              <img
                className="expri_img"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Development Collaboration"
                loading="lazy"
              />
              <div className="visual_highlight_box">
                <h4>Committed to Engineering Excellence</h4>
                <p>Delivering high-value code that scales with business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import "../../styles/Education.scss";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const educations = [
  {
    degree: "Bachelor of Computer Science / Engineering",
    institution: "University Department of Computer Science",
    period: "2021 — 2024",
    location: "Nashik, Maharashtra",
    description: "Core emphasis on Software Development Life Cycle, Web Architectures, Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Maharashtra State Board",
    period: "2019 — 2021",
    location: "Nashik, Maharashtra",
    description: "Major subjects in Computer Science, Advanced Mathematics, and Physics, establishing rigorous problem-solving fundamentals.",
  },
  {
    degree: "Advanced Web Development Specializations",
    institution: "Industry Certifications & Online Academies",
    period: "Ongoing",
    location: "Credential Programs",
    description: "Continuous self-directed certifications in React.js component architectures, Modern JavaScript ES6+, Responsive Design, and REST API engineering.",
  },
];

const Education = () => {
  return (
    <section id="education" className="education_page">
      <div className="education_container">
        <div className="education_header">
          <span className="edu_title1">ACADEMIC BACKGROUND</span>
          <h2 className="edu_headline">Education & Qualifications</h2>
          <p className="ex_descri">
            Solid computer science foundations combined with continuous practical learning in modern web technologies.
          </p>
        </div>

        <div className="education_content_wrapper">
          <div className="education_side_visual">
            <div className="edu_visual_card">
              <img
                className="educa_img"
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="University and Learning"
                loading="lazy"
              />
              <div className="edu_visual_overlay">
                <h4>Lifelong Learning</h4>
                <p>Consistently expanding technical depth through projects and research.</p>
              </div>
            </div>
          </div>

          <div className="education_list">
            {educations.map((item, index) => (
              <div key={index} className="education_card">
                <div className="icon_style_education">
                  <FaGraduationCap />
                </div>
                <div className="edu_info">
                  <div className="edu_top_row">
                    <h3 className="degree_title">{item.degree}</h3>
                    <span className="period_badge">
                      <FaCalendarAlt /> {item.period}
                    </span>
                  </div>
                  <div className="institution_meta">
                    <span className="inst_name">
                      <FaUniversity /> {item.institution}
                    </span>
                  </div>
                  <p className="educa_des">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

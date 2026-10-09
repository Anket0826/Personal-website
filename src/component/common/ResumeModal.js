import React from "react";
import "../../styles/ResumeModal.scss";
import { FiX, FiDownload, FiMail, FiPhone, FiMapPin, FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a printable/downloadable format or open resume view
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2>Curriculum Vitae</h2>
            <p className="subtitle">Anket Pawar — Software Engineer & Web Developer</p>
          </div>
          <div className="modal-actions">
            <button className="download-btn-modal" onClick={handleDownload}>
              <FiDownload /> Download / Print
            </button>
            <button className="close-btn-modal" onClick={onClose} aria-label="Close modal">
              <FiX />
            </button>
          </div>
        </div>

        <div className="resume-paper" id="resume-document">
          {/* Header Info */}
          <div className="resume-top">
            <div>
              <h1 className="resume-name">ANKET PAWAR</h1>
              <h3 className="resume-role">Full-Stack Software Engineer & Frontend Specialist</h3>
              <p className="resume-summary">
                Passionate and detail-oriented Software Engineer with proven expertise in building modern, 
                high-performance web applications using React.js, JavaScript (ES6+), Node.js, and responsive 
                UI/UX architectures. Dedicated to clean code, seamless user experiences, and scalable solutions.
              </p>
            </div>
            <div className="resume-contact-info">
              <p><FiMail /> anketpawar22@gmail.com</p>
              <p><FiPhone /> +91 7387603897</p>
              <p><FiMapPin /> Nashik, Maharashtra, India</p>
              <p><FiExternalLink /> linkedin.com/in/anket-pawar</p>
            </div>
          </div>

          <div className="resume-divider" />

          {/* Core Skills */}
          <div className="resume-section">
            <h4 className="section-title">CORE TECHNICAL SKILLS</h4>
            <div className="resume-skills-grid">
              <span className="skill-chip"><FaReact /> React.js</span>
              <span className="skill-chip"><FaJs /> JavaScript (ES6+)</span>
              <span className="skill-chip"><FaNodeJs /> Node.js & Express</span>
              <span className="skill-chip"><FaHtml5 /> HTML5 & Semantic Web</span>
              <span className="skill-chip"><FaCss3Alt /> CSS3 & SCSS/SASS</span>
              <span className="skill-chip"><FaGitAlt /> Git & GitHub</span>
              <span className="skill-chip">RESTful APIs & JSON</span>
              <span className="skill-chip">Responsive Web Design</span>
              <span className="skill-chip">UI/UX Optimization</span>
              <span className="skill-chip">Framer Motion</span>
            </div>
          </div>

          <div className="resume-divider" />

          {/* Work Experience */}
          <div className="resume-section">
            <h4 className="section-title">PROFESSIONAL EXPERIENCE</h4>
            
            <div className="resume-item">
              <div className="item-header">
                <h5>Software Engineer / Web Developer</h5>
                <span className="item-date">2023 — Present</span>
              </div>
              <p className="item-sub">Freelance & Client Projects • Nashik, India</p>
              <ul className="item-points">
                <li>Architected and delivered bespoke web applications with dynamic React interfaces and REST API integrations.</li>
                <li>Engineered responsive, mobile-first designs achieving 98+ Google Lighthouse performance scores across devices.</li>
                <li>Implemented clean component structures, modular SCSS architectures, and state management practices.</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="item-header">
                <h5>Frontend Developer Intern</h5>
                <span className="item-date">2022 — 2023</span>
              </div>
              <p className="item-sub">Tech Solutions & Web Studio • India</p>
              <ul className="item-points">
                <li>Collaborated on building reusable UI component libraries and interactive dashboards.</li>
                <li>Optimized legacy web codebases for fast load times and cross-browser compatibility.</li>
              </ul>
            </div>
          </div>

          <div className="resume-divider" />

          {/* Education */}
          <div className="resume-section">
            <h4 className="section-title">EDUCATION</h4>
            <div className="resume-item">
              <div className="item-header">
                <h5>Bachelor of Computer Engineering / Science</h5>
                <span className="item-date">Graduated</span>
              </div>
              <p className="item-sub">University Curriculum • Nashik, Maharashtra</p>
              <p className="item-desc">Focused on Software Engineering, Data Structures, Algorithms, Web Technologies, and Database Systems.</p>
            </div>
          </div>

          {/* Signature */}
          <div className="resume-bottom">
            <div className="resume-signature-block">
              <img src="/assets/Ankuuu.png" alt="Anket Pawar Signature" className="signature-img" />
              <p className="sig-name">Anket Pawar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

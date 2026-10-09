import React, { useState, useEffect } from "react";
import "../../styles/Header.scss";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import ResumeModal from "../common/ResumeModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header_container">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="header_logo"
            onClick={closeMenu}
          >
            ANKET <span>PAWAR</span>
          </ScrollLink>

          <nav className="header_nav">
            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Home
            </ScrollLink>

            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              About
            </ScrollLink>

            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Works
            </ScrollLink>

            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Experience
            </ScrollLink>

            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Skills
            </ScrollLink>

            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Services
            </ScrollLink>

            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Contact
            </ScrollLink>
          </nav>

          <div className="header_actions">
            <button
              className="download_button"
              onClick={() => setIsResumeOpen(true)}
              aria-label="Download CV"
            >
              <FiDownload className="btn-icon" />
              <span>DOWNLOAD CV</span>
            </button>

            <button
              className="menu_toggle"
              onClick={toggleMenu}
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Backdrop */}
        {isMenuOpen && <div className="mobile_backdrop" onClick={closeMenu} />}

        {/* Mobile Drawer */}
        <div className={`side_menu ${isMenuOpen ? "open" : ""}`}>
          <div className="side_menu_header">
            <span className="side_logo">ANKET PAWAR</span>
            <button className="close_icon" onClick={closeMenu} aria-label="Close Menu">
              <FiX />
            </button>
          </div>

          <div className="menu_items">
            <ScrollLink
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="works"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
            >
              Works
            </ScrollLink>
            <ScrollLink
              to="experience"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="skill"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="service"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
            >
              Contact
            </ScrollLink>

            <button
              className="drawer_download_btn"
              onClick={() => {
                closeMenu();
                setIsResumeOpen(true);
              }}
            >
              <FiDownload /> Download Resume
            </button>

            <div className="icons-resp">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/917387603897"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* CV / Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Header;

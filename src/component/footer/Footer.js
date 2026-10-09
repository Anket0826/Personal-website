import React from "react";
import "../../styles/Footer.scss";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio_footer">
      <div className="footer_container">
        <div className="footer_top">
          <div className="footer_brand">
            <h3 className="brand_logo">
              ANKET<span>.</span>
            </h3>
            <p className="brand_tagline">
              Software Engineer & Web Developer crafting responsive, intuitive, and high-performance digital solutions.
            </p>
          </div>

          <div className="footer_nav">
            <h4>Quick Links</h4>
            <div className="nav_links">
              <ScrollLink to="home" smooth={true} duration={600} offset={-80}>Home</ScrollLink>
              <ScrollLink to="about" smooth={true} duration={600} offset={-80}>About</ScrollLink>
              <ScrollLink to="works" smooth={true} duration={600} offset={-80}>Works</ScrollLink>
              <ScrollLink to="experience" smooth={true} duration={600} offset={-80}>Experience</ScrollLink>
              <ScrollLink to="skill" smooth={true} duration={600} offset={-80}>Skills</ScrollLink>
              <ScrollLink to="service" smooth={true} duration={600} offset={-80}>Services</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={600} offset={-80}>Contact</ScrollLink>
            </div>
          </div>

          <div className="footer_social">
            <h4>Get Connected</h4>
            <div className="social_links_row">
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/917387603897" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
            <p className="location_text">Nashik, Maharashtra, India</p>
          </div>
        </div>

        <div className="footer_divider" />

        <div className="footer_bottom">
          <p className="copyright_text">
            © {currentYear} <strong>Anket Pawar</strong>. All Rights Reserved.
          </p>
          <p className="built_text">
            Designed & Developed with <FiHeart className="heart_icon" /> using React & SASS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import "../../styles/Header.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header_name">ANKET PAWAR</div>
      <div className="header_content">
        <ScrollLink className="nav-link" to="/" smooth={true} duration={700} offset={-70}>
          <span>Home</span>
        </ScrollLink>

        <ScrollLink className="nav-link" to="about" smooth={true} duration={700} offset={-70}>
          <span>About</span>
        </ScrollLink>

        <ScrollLink className="nav-link" to="works" smooth={true} duration={500} offset={-70}>
          <span>Works</span>
        </ScrollLink>

        <ScrollLink className="nav-link" to="service" smooth={true} duration={500} offset={-70}>
          <span>Service</span>
        </ScrollLink>

        <ScrollLink className="nav-link" to="contact" smooth={true} duration={500} offset={-70}>
          <span>Contact</span>
        </ScrollLink>
      </div>
      <button className="download_button">DOWNLOAD CV</button>
      <div className="menu_icon" onClick={toggleMenu}>
        <FiMenu />
      </div>
      <div className={`side_menu ${isMenuOpen ? "open" : ""}`}>
        <div className="close_icon" onClick={toggleMenu}>
          <FiX />
        </div>
        <div className="menu_items">
          <ScrollLink to="/" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            <span>Home</span>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            <span>About</span>
          </ScrollLink>
          <ScrollLink to="works" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            <span>Works</span>
          </ScrollLink>
          <ScrollLink to="service" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            <span>Service</span>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            <span>Contact</span>
          </ScrollLink>

          <div className="icons-resp">
            <div><i class="fa-brands fa-facebook-f"></i></div>
            <div>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div><i class="fa-brands fa-instagram"></i></div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

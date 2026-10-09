import React, { useEffect, useRef } from "react";
import "../../styles/Home.scss";
import Typed from "typed.js";
import { Link as ScrollLink } from "react-scroll";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import {
  FiCode,
  FiLayers,
  FiZap,
  FiCpu,
} from "react-icons/fi";
import HeroVisual from "../../component/hero/HeroVisual";

const Home = () => {
  const typedRef = useRef(null);
  const el = useRef(null);

  useEffect(() => {
    const roles = [
      "Full-Stack Web Developer",
      "Software Engineer",
      "React.js Specialist",
      "UI/UX Enthusiast",
    ];

    const typed = new Typed(el.current, {
      strings: roles,
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    typedRef.current = typed;

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section id="home" className="home_hero_section">
        <div className="hero_container">
          {/* Left Column: Hero Text */}
          <div className="hero_text_content">
            <div className="status_badge">
              <span className="pulsing_dot" />
              <span>Available for New Projects</span>
            </div>

            <h3 className="hero_greeting">Hello, I Am</h3>
            <h1 className="hero_name">
              Anket <span className="highlight">Pawar</span>
            </h1>

            <div className="typed_wrapper">
              <span className="typed_prefix">A Passionate </span>
              <span className="typed_role" ref={el} />
            </div>

            <p className="hero_bio">
              Software Engineer based in Nashik, India. I specialize in building robust, 
              responsive, and scalable web applications with high-performance architectures 
              and intuitive user interfaces.
            </p>

            <div className="hero_cta_group">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn_primary"
              >
                <span>Say Hello</span>
                <FaArrowRight />
              </ScrollLink>

              <ScrollLink
                to="works"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn_secondary"
              >
                <span>View Works</span>
              </ScrollLink>
            </div>

            <div className="hero_socials">
              <span className="social_label">Connect:</span>
              <div className="social_icons_list">
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

          {/* Right Column: Next-Gen Developer Orbit & Command Center */}
          <div className="hero_visual_content">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Feature Pillar Cards */}
      <section className="features_section">
        <div className="features_container">
          <div className="feature_card">
            <div className="feature_icon_box">
              <FiZap />
            </div>
            <h3>Dedication</h3>
            <p>
              Committed to delivering clean, scalable code and high-performance user experiences on time.
            </p>
          </div>

          <div className="feature_card">
            <div className="feature_icon_box">
              <FiLayers />
            </div>
            <h3>Smart Architecture</h3>
            <p>
              Building modular, maintainable full-stack systems using modern React and component best practices.
            </p>
          </div>

          <div className="feature_card">
            <div className="feature_icon_box">
              <FiCpu />
            </div>
            <h3>Modern Technologies</h3>
            <p>
              Leveraging cutting-edge web frameworks, responsive design principles, and RESTful APIs.
            </p>
          </div>

          <div className="feature_card">
            <div className="feature_icon_box">
              <FiCode />
            </div>
            <h3>Collaboration</h3>
            <p>
              Clear communication, active problem-solving, and efficient agile workflow execution.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
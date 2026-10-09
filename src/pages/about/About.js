import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/About.scss";
import { FiUser, FiMail, FiPhone, FiMapPin, FiBriefcase, FiAward, FiDownload } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import ResumeModal from "../../component/common/ResumeModal";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const signaturePath = "/assets/Ankuuu.png";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    const aboutSection = document.getElementById("about");
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <>
      <section id="about" className="main_about_page">
        <div className="about_container">
          <div className="about_header_mobile">
            <span className="about_tag">ABOUT ME</span>
            <h2 className="about_title_mob">Engineering Systems That Deliver Impact</h2>
          </div>

          <div className="about_content_grid">
            {/* Left: About Visual / Card */}
            <motion.div
              className="about_visual_wrapper"
              initial={{ x: -40, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="about_image_card">
                <img
                  className="about_main_img"
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                  alt="Anket Pawar Workspace"
                  loading="lazy"
                />
                <div className="about_card_overlay">
                  <div className="overlay_stat">
                    <FiAward className="stat_icon" />
                    <div>
                      <strong>2+ Years</strong>
                      <span>Hands-on Web Dev</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Bio & Profile Info */}
            <motion.div
              className="about_details"
              initial={{ x: 40, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="about_tag desktop_only">ABOUT ME</span>
              <h2 className="about_headline desktop_only">
                Engineering Systems That Deliver Real-World Impact
              </h2>

              <p className="bio_paragraph">
                I am a dedicated <strong>Software Engineer & Web Developer</strong> based in 
                Nashik, Maharashtra. I specialize in crafting clean, scalable, and intuitive 
                digital products with modern React, JavaScript, and responsive UI engineering.
              </p>

              <p className="bio_subparagraph">
                My workflow is focused on writing modular, well-tested code, ensuring cross-device 
                responsiveness, and optimizing applications for speed and search engine visibility.
              </p>

              {/* Personal Info Grid */}
              <div className="personal_info_grid">
                <div className="info_pill">
                  <span className="info_icon"><FiUser /></span>
                  <div>
                    <label>Name</label>
                    <p>Anket Pawar</p>
                  </div>
                </div>

                <div className="info_pill">
                  <span className="info_icon"><FiBriefcase /></span>
                  <div>
                    <label>Occupation</label>
                    <p>Software Engineer</p>
                  </div>
                </div>

                <div className="info_pill">
                  <span className="info_icon"><FiMail /></span>
                  <div>
                    <label>Email</label>
                    <a href="mailto:anketpawar22@gmail.com">anketpawar22@gmail.com</a>
                  </div>
                </div>

                <div className="info_pill">
                  <span className="info_icon"><FiPhone /></span>
                  <div>
                    <label>Phone</label>
                    <a href="tel:+917387603897">+91 7387603897</a>
                  </div>
                </div>

                <div className="info_pill">
                  <span className="info_icon"><FiMapPin /></span>
                  <div>
                    <label>Location</label>
                    <p>Nashik, Maharashtra, India</p>
                  </div>
                </div>

                <div className="info_pill">
                  <span className="info_icon"><FiAward /></span>
                  <div>
                    <label>Availability</label>
                    <p>Open for Projects</p>
                  </div>
                </div>
              </div>

              {/* Signature & CTAs */}
              <div className="about_footer_row">
                <div className="signature_block">
                  <img
                    className="signature_image"
                    src={signaturePath}
                    alt="Anket Pawar Signature"
                  />
                  <div className="signature_text">
                    <h4>Anket Pawar</h4>
                    <span>Full-Stack Web Developer</span>
                  </div>
                </div>

                <div className="about_action_buttons">
                  <button
                    className="about_cv_btn"
                    onClick={() => setIsResumeOpen(true)}
                  >
                    <FiDownload /> View & Download CV
                  </button>

                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="about_hire_btn"
                  >
                    Hire Me
                  </ScrollLink>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default About;

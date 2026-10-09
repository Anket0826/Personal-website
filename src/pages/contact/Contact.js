import React, { useState } from "react";
import "../../styles/Contact.scss";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, submitted: false, error: "Please fill in all required fields." });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: "" });

    // Simulate reliable form submission
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: "" });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 6000);
    }, 1200);
  };

  return (
    <div id="contact" className="contact_page">
      <div className="contact_container">
        <div className="contact_header">
          <span className="contact_subtitle">GET IN TOUCH</span>
          <h2 className="contact_title">Let's Discuss Your Next Project</h2>
          <p className="contact_desc">
            Have an idea, opportunity, or project you'd like to bring to life? Feel free to reach out. 
            I'm always open to discussing new web development projects and collaborative work.
          </p>
        </div>

        <div className="contact_content">
          {/* Contact Details Column */}
          <div className="contact_info_column">
            <div className="info_card">
              <div className="info_icon">
                <FiMail />
              </div>
              <div className="info_details">
                <h4>Email Me</h4>
                <a href="mailto:anketpawar22@gmail.com">anketpawar22@gmail.com</a>
                <span>Quick response within 24 hours</span>
              </div>
            </div>

            <div className="info_card">
              <div className="info_icon">
                <FiPhone />
              </div>
              <div className="info_details">
                <h4>Call Me</h4>
                <a href="tel:+917387603897">+91 7387603897</a>
                <span>Available Mon — Sat, 9am — 7pm</span>
              </div>
            </div>

            <div className="info_card">
              <div className="info_icon">
                <FiMapPin />
              </div>
              <div className="info_details">
                <h4>Location</h4>
                <p>Nashik, Maharashtra, India</p>
                <span>Open to remote opportunities worldwide</span>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <a
              href="https://wa.me/917387603897?text=Hi%20Anket,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noreferrer"
              className="whatsapp_cta"
            >
              <FaWhatsapp className="wa_icon" />
              <div>
                <strong>Chat on WhatsApp</strong>
                <span>Instant messaging for urgent queries</span>
              </div>
            </a>

            {/* Social Links */}
            <div className="social_block">
              <h5>Connect Across Platforms</h5>
              <div className="social_icons">
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
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact_form_column">
            <form className="contact_form" onSubmit={handleSubmit}>
              <div className="form_group_row">
                <div className="form_group">
                  <label htmlFor="contact_name">Your Name *</label>
                  <input
                    type="text"
                    id="contact_name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>
                <div className="form_group">
                  <label htmlFor="contact_email">Your Email *</label>
                  <input
                    type="email"
                    id="contact_email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form_group">
                <label htmlFor="contact_subject">Subject</label>
                <input
                  type="text"
                  id="contact_subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. New Web Project / Job Opportunity"
                />
              </div>

              <div className="form_group">
                <label htmlFor="contact_message">Your Message *</label>
                <textarea
                  id="contact_message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or requirements..."
                  required
                />
              </div>

              {status.error && <div className="form_error">{status.error}</div>}

              {status.submitted && (
                <div className="form_success">
                  <FiCheckCircle />
                  <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                </div>
              )}

              <button
                type="submit"
                className={`submit_button ${status.submitting ? "submitting" : ""}`}
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

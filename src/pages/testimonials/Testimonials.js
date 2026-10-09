import React, { useState } from "react";
import "../../styles/Testimonials.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    quote: "Anket delivered our web application with incredible speed and attention to detail. His understanding of React architectures and responsive UI design exceeded our expectations.",
    name: "Rahul Deshmukh",
    role: "Product Lead",
    company: "Apex Tech Innovations",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    quote: "Working with Anket was seamless. He has a strong grasp of modern frontend performance, modular styling, and clean code principles. Highly recommended for any web project!",
    name: "Sneha Patil",
    role: "Engineering Manager",
    company: "NovaByte Solutions",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    quote: "From initial design review to deployment, Anket's proactive communication and problem-solving skills made the whole development journey effortless and high quality.",
    name: "Vikram Kulkarni",
    role: "Founder & Director",
    company: "CloudScale Digital",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="testimonials_page">
      <div className="testimonials_container">
        <div className="testimonials_header text-center">
          <span className="test_badge">CLIENT ENDORSEMENTS</span>
          <h2 className="test_headline">What Collaborators Say</h2>
          <p className="test_subhead">
            Feedback from team leads, clients, and partners who have trusted my software development work.
          </p>
        </div>

        <div className="testimonials_slider_wrapper">
          <div className="testimonial_card">
            <div className="quote_icon_box">
              <FaQuoteLeft />
            </div>

            <div className="star_rating">
              {[...Array(current.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="quote_text">"{current.quote}"</p>

            <div className="client_meta_row">
              <img
                src={current.avatar}
                alt={current.name}
                className="client_avatar"
                loading="lazy"
              />
              <div className="client_details">
                <h4 className="client_name">{current.name}</h4>
                <p className="client_role">
                  {current.role} • <span>{current.company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="slider_controls">
            <button
              className="ctrl_btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft />
            </button>

            <div className="dots_indicators">
              {testimonialsData.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot_indicator ${currentIndex === idx ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            <button
              className="ctrl_btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

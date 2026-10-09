import React from "react";
import "../../styles/Service.scss";
import { FiLayout, FiSmartphone, FiServer, FiZap, FiCheck, FiArrowRight } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const services = [
  {
    icon: <FiLayout />,
    title: "Full-Stack Web Development",
    description: "End-to-end web applications engineered with React.js, modern JavaScript, and Node.js. Scalable, secure, and designed for optimal business results.",
    features: [
      "Modern Single Page Applications (SPA)",
      "Clean, modular component architecture",
      "Robust state management & hooks",
      "Seamless backend data synchronization",
    ],
  },
  {
    icon: <FiSmartphone />,
    title: "Responsive Frontend & UI/UX",
    description: "Flawless mobile-first responsive interfaces optimized for every device and screen resolution, with smooth interactions and micro-animations.",
    features: [
      "100% Mobile, tablet & desktop responsiveness",
      "Framer Motion interactive animations",
      "Pixel-perfect translation from Figma/mockups",
      "Cross-browser stability & accessibility",
    ],
  },
  {
    icon: <FiServer />,
    title: "REST APIs & Backend Integration",
    description: "Clean integration between user interfaces and backend services. Fast data fetching, secure authentication, and robust CRUD endpoints.",
    features: [
      "RESTful API design and consumption",
      "Secure authentication & JWT handling",
      "MongoDB database integration & queries",
      "Third-party webhook & service integrations",
    ],
  },
  {
    icon: <FiZap />,
    title: "Performance Tuning & SEO",
    description: "Speed optimization and best practices to achieve 95+ Lighthouse scores, instant page loads, and organic search engine discoverability.",
    features: [
      "Optimized Core Web Vitals & asset minification",
      "Lazy loading, image optimization & caching",
      "Technical SEO meta tags & semantic HTML",
      "Clean, production-ready deployable code",
    ],
  },
];

const Service = () => {
  return (
    <section id="service" className="service_page">
      <div className="service_container">
        <div className="titles_service text-center">
          <span className="service_title">SERVICES & EXPERTISE</span>
          <h2 className="service_headline">What I Offer To Clients & Teams</h2>
          <p className="service_subhead">
            Specialized engineering services to take your web product from concept to production-ready deployment.
          </p>
        </div>

        <div className="services_grid">
          {services.map((service, index) => (
            <div key={index} className="service_card">
              <div className="service_header_row">
                <div className="service_icon_wrapper">
                  {service.icon}
                </div>
                <span className="service_index">0{index + 1}</span>
              </div>

              <h3 className="card_title">{service.title}</h3>
              <p className="card_desc">{service.description}</p>

              <ul className="features_list">
                {service.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <FiCheck className="check_icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="service_cta_link"
              >
                <span>Discuss Project</span>
                <FiArrowRight />
              </ScrollLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

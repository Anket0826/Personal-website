import React, { useState } from "react";
import "../../styles/Works.scss";
import { FiExternalLink, FiGithub, FiPlus, FiX } from "react-icons/fi";

const projectsData = [
  {
    id: 1,
    title: "Modern Portfolio & Showcase",
    subtitle: "Web Design & Development",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "SCSS", "Framer Motion", "Responsive Design"],
    description: "An ultra-modern personal developer website featuring responsive layouts, custom animations, resume modal, and interactive contact messaging.",
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "E-Commerce Digital Storefront",
    subtitle: "Web Application",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Redux", "REST API", "Tailwind CSS"],
    description: "A fast e-commerce platform with product filtering, cart drawer, seamless state management, and optimized checkout flow.",
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Task & Project Management System",
    subtitle: "Full-Stack Application",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    description: "Collaborative kanban and task management platform supporting role-based authentication, real-time board updates, and sprint tracking.",
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Enterprise Analytics Dashboard",
    subtitle: "Data Visualization",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Chart.js", "REST APIs", "Modern UI"],
    description: "Interactive administrative metrics console with dark mode, real-time data visualizers, exportable reports, and custom KPIs.",
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
];

const categories = ["All", "Frontend", "Web Apps", "Full Stack"];

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="works_page">
      {/* Dynamic Marquee Strip */}
      <div className="marquee_wrapper">
        <div className="marquee marquee_primary">
          <span>FULL-STACK WEB DEVELOPER • OPEN FOR PROJECTS • PASSIONATE CODER • </span>
          <span>FULL-STACK WEB DEVELOPER • OPEN FOR PROJECTS • PASSIONATE CODER • </span>
        </div>
        <div className="marquee marquee_outline">
          <span>CLEAN CODE • MODERN ARCHITECTURES • RESPONSIVE SOLUTIONS • </span>
          <span>CLEAN CODE • MODERN ARCHITECTURES • RESPONSIVE SOLUTIONS • </span>
        </div>
      </div>

      <div className="works_container">
        <div className="works_header">
          <span className="works_badge">PORTFOLIO</span>
          <h2 className="works_title">Featured Projects & Case Studies</h2>
          <p className="works_subtitle">
            A selection of recent applications built with modern tools, clean architectures, and focused user experience.
          </p>

          {/* Filter Pills */}
          <div className="filter_tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter_btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects_grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project_card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="card_image_box">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="category_pill">{project.category}</span>
                <div className="card_hover_overlay">
                  <button className="view_details_btn" aria-label="View project details">
                    <FiPlus />
                  </button>
                </div>
              </div>

              <div className="card_info">
                <span className="card_sub">{project.subtitle}</span>
                <h3 className="card_title">{project.title}</h3>
                <p className="card_desc">{project.description}</p>

                <div className="tags_list">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech_tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="project_modal_overlay" onClick={() => setSelectedProject(null)}>
          <div className="project_modal_box" onClick={(e) => e.stopPropagation()}>
            <div className="modal_header">
              <h3>{selectedProject.title}</h3>
              <button
                className="close_modal_btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
              >
                <FiX />
              </button>
            </div>

            <div className="modal_body">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal_project_img"
              />

              <div className="modal_details">
                <span className="modal_sub">{selectedProject.subtitle} • {selectedProject.category}</span>
                <p className="modal_desc">{selectedProject.description}</p>

                <div className="modal_tags">
                  <strong>Technologies Used:</strong>
                  <div className="tags_list">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="tech_tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="modal_cta_row">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="modal_btn live"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="modal_btn code"
                  >
                    <FiGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;

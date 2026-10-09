import React from "react";
import "../../styles/Achivements.scss";
import { FiAward, FiCalendar, FiMapPin } from "react-icons/fi";

const achievementsData = [
  {
    id: 1,
    title: "Outstanding Web Developer",
    year: "2024",
    organization: "Tech Innovation Guild",
    location: "Pune / Nashik, India",
    description: "Awarded for designing and delivering high-performance, user-centric web applications and responsive architectures.",
  },
  {
    id: 2,
    title: "Best Frontend Implementation",
    year: "2023",
    organization: "Developer Community Summit",
    location: "Online / National",
    description: "Recognized for exemplary React component reusability, modular SCSS architectures, and 95+ performance scores.",
  },
  {
    id: 3,
    title: "Rapid Prototyping & Coder Milestone",
    year: "2023",
    organization: "CodeSprint Championship",
    location: "Nashik, Maharashtra",
    description: "Honored for agile problem solving, clean code standards, and rapid full-stack application deployment.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements_page">
      <div className="achievements_container">
        <div className="achieve_header">
          <span className="stories_badge">SUCCESS STORIES</span>
          <h2 className="stories_title">Honors & Recognition</h2>
          <p className="stories_desc">
            Milestones and recognitions achieved along my journey in software development and technical problem solving.
          </p>
        </div>

        <div className="achievements_list">
          {achievementsData.map((item) => (
            <div key={item.id} className="achievement_item_card">
              <div className="award_icon_col">
                <div className="award_badge_icon">
                  <FiAward />
                </div>
              </div>

              <div className="award_title_col">
                <h3>{item.title}</h3>
                <span className="award_year">
                  <FiCalendar /> {item.year}
                </span>
              </div>

              <div className="award_org_col">
                <strong>{item.organization}</strong>
                <span className="award_loc">
                  <FiMapPin /> {item.location}
                </span>
              </div>

              <div className="award_desc_col">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
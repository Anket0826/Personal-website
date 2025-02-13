import React, { useEffect, useState } from 'react'
import '../../styles/skill.scss';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { motion } from "framer-motion";

const Skill = () => {

    const skills = [
        { percentage: 80, title: "Web Development" },
        { percentage: 95, title: "Hardware Development" },
        { percentage: 90, title: "Software Development" },
        { percentage: 75, title: "System Application" },
        { percentage: 60, title: "Project Management" },
        { percentage: 85, title: "Data Administration" }
    ];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        const education = document.getElementById("skill");
        if (education) observer.observe(education);
    }, []);

    return (
        <div className='skill_page'>
            <div className='skill_container'>
                <div className="marquee-w mb-125">
                    <div className="marquee">
                        <span className="pl-4">Senior Website Developer from New York *</span>
                        <span className="pl-4">Senior Website Developer from New York *</span>
                    </div>
                    <div className="marquee marquee2 pb-1">
                        <span>I’m Open for new projects * Let’s Work Together ,</span>
                        <span>I’m Open for new projects * Let’s Work Together ,</span>
                    </div>
                </div>
                <div className='skill_section'>
                    <div className='skill'>
                        <span className='text-uppercase edu_title1'>My Skill</span>
                        <h1>Growing Over Times</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis<span className="br-desktop-experi"><br /></span>unde omnis iste natus kobita tumi sopno charini hoye khbor nio<span className="br-desktop-experi"><br /></span>na sit voluptatem accusantium dolore.</p>
                    </div>

                    <motion.div
                        initial={{ y: "50vh", opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: "50vh", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 25, }}
                    >
                        <div className='circle-progress'>
                            {skills.map((skill, index) => (
                                <div key={index} className='progress-item'>
                                    <CircularProgressbar
                                        value={skill.percentage}
                                        text={`${skill.percentage}%`}
                                        styles={buildStyles({
                                            pathColor: "#4CAF50",
                                            textColor: "#000",
                                            trailColor: "#eee",
                                            trailWidth: "10px",
                                            textSize: "16px",
                                            textAnchor: "middle",
                                        })}
                                    />
                                    <p className='progress-title'>{skill.title}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Skill

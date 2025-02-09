import React, { useEffect, useState } from "react";
import '../../styles/Develop.scss'
import { motion } from "framer-motion";

const Develop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );
        const aboutSection = document.getElementById("develop");
        if (aboutSection) observer.observe(aboutSection);

        return () => {
            if (aboutSection) observer.unobserve(aboutSection);
        };
    }, []);

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 25 }}
            id="develop">
            <div className="develop_page">
                <div className="develop_content">
                    <div className="left_content">
                        <span className="fun">FUN FACTS</span>
                        <h1 className="develop_title">
                            I Develop System<span className="br-desktop"><br /></span> that Works
                        </h1>
                        <p className="dev_descri">
                            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno
                            <span className="br-desktop"><br /></span>
                            charini hoye khbor nio na sit volup sundori toma amar tumi
                            <span className="br-desktop"><br /></span>
                            nili mar tatem accusantium dolore.
                        </p>
                    </div>
                    <div className="right_content">
                        <div className="main_card">
                            <div className="columan d-flex align-items-center">
                                <div className="ml-2 d-flex">
                                    <span className="card_text">02 </span>
                                    <span className="card_title">
                                        Years of<br /> Experience
                                    </span>
                                </div>
                            </div>
                            <div className="columan d-flex align-items-center">
                                <div className="ml-2 d-flex">
                                    <span className="card_text">2K </span>
                                    <span className="card_title">
                                        Total<br /> Client
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="main_card mt-4">
                            <div className="columan d-flex align-items-center">
                                <div className="ml-2 d-flex">
                                    <span className="card_text">4K </span>
                                    <span className="card_title">
                                        Project<br /> Completed
                                    </span>
                                </div>
                            </div>
                            <div className="columan d-flex align-items-center">
                                <div className="ml-2 d-flex">
                                    <span className="card_text">30 </span>
                                    <span className="card_title">
                                        Digital<br /> Projects
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Develop;
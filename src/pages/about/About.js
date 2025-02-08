import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/About.scss";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const Singntrue = "/assets/Ankuuu.png";

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );
        const aboutSection = document.getElementById("about");
        if (aboutSection) observer.observe(aboutSection);

        return () => {
            if (aboutSection) observer.unobserve(aboutSection);
        };
    }, []);

    return (
        <div id="about" className="main_about_page">
            <div className=" about_content">
                <div>
                    <motion.div
                        initial={{ x: "-50vw", opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : { x: "-50vw", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 20, damping: 15 }}>
                        <img
                            className="img-back"
                            src="https://thames-demo-nuxt.vercel.app/images/about/about-img.jpg"
                            height={500}
                            alt="Self"
                        />
                    </motion.div>
                </div>
                <div className="about_details">
                    <span className="about_me">About Me</span>
                    <h1 className="about_description">
                        I Develop System that Works
                    </h1>
                    <p className="description">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese<br />
                        runt mollit anim id est laboru doloremque laudantium, totaeaque ipsa quae <br />
                        ab illo inven tore veritatis et quasi architecto beatae vitae.
                    </p>
                    <p className="description">Oremque laudantium, totaeaque ipsa quae</p>

                    <div className="info-table">
                        <div className="row">
                            <span className="label">Name</span>
                            <span className="value">Anket Pawar</span>

                            <span className="label">Phone</span>
                            <span className="value">+91 7387603897</span>
                        </div>
                        <div className="row">
                            <span className="label">Age</span>
                            <span className="value">20</span>

                            <span className="label">Email</span>
                            <span className="value">anketpawar22@gmail.com</span>
                        </div>
                        <div className="row">
                            <span className="label">Occupation</span>
                            <span className="value">Software Engineer</span>

                            <span className="label">City</span>
                            <span className="value">Nashik</span>
                        </div>
                    </div>
                    
                 <div className="d-flex sing">
                 <img className="mt-3 Signature" src={Singntrue} alt="Signature" />              
                    <div className="Bruce d-flex">
                        <h4 className="sing">Bruce Wayne</h4>
                        <span className="ml-2">Software Architect, Google Inc.</span>
                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default About;

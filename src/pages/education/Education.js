import React, { useEffect, useState } from 'react'
import '../../styles/Education.scss';
import { motion } from "framer-motion";

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);
    const icon = '/assets/graduation-cap.png'

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        const education = document.getElementById("education");
        if (education) observer.observe(education);
    }, []);

    return (
        <div className='education_page'>
            <div className='education_container'>

                <div className='left_container'>
                    <span className='text-uppercase edu_title1'>Education</span>
                    <h1>My Education</h1>
                    <p className='ex_descri'>Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye<span className="br-desktop-experi"><br /></span> khbor nio na sit voluptatem accusantium dolore.</p>

                    <div className=''>
                        <div className='experience_card'>
                            <div className='icon_style_education'>
                                <img src={icon} alt='' />
                            </div>
                            <div className=''>
                                <h3>Masters in Computer Science</h3>
                                <h5>Dhaka University <span className='meta-text'> ( 2008 - 2011 )</span></h5>
                                <p className='descr-exp pt-1'>Ludantium totam rem aperia meaque ipsa quae ab illo inven<span className="br-desktop-experi"><br /></span> tore veritatis et quasi architecto beatae vitae.</p>
                            </div>
                        </div>
                        <div className='experience_card mt-4'>
                            <div className='icon_style_education'>
                                <img src={icon} alt='' />
                            </div>
                            <div className=''>
                                <h3>Bachelor in Computer Engineering</h3>
                                <h5>Easy Computers <span className='meta-text'>( 2015 - 2018 )</span></h5>
                                <p className='educa_des pt-1'>Ludantium totam rem aperia meaque ipsa quae ab illo inven<span className="br-desktop-experi"><br /></span> tore veritatis et quasi architecto beatae vitae.</p>
                            </div>
                        </div>
                        <div className='experience_card mt-4'>
                            <div className='icon_style_education'>
                                <img src={icon} alt='' />
                            </div>
                            <div className=''>
                                <h3>Diploma in Graphic Design</h3>
                                <h5>Bangla College <span className='meta-text'> ( 2012 - 2015 )</span></h5>
                                <p className='educa_des pt-1'>Ludantium totam rem aperia meaque ipsa quae ab illo inven<span className="br-desktop-experi"><br /></span> tore veritatis et quasi architecto beatae vitae.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='right_container'>
                    <div className=''>
                        <motion.div
                            initial={{ x: "20vw", opacity: 0 }}
                            animate={isVisible ? { x: 0, opacity: 1 } : { x: "20vw", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 20, damping: 15 }}>
                            <img className='educa_img' src='https://thames-demo-nuxt.vercel.app/images/education/education-img.jpg' alt='' />
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education

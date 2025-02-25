import React, { useEffect, useState } from 'react'
import '../../styles/Testimonials.scss'
import { motion } from "framer-motion";

const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        const education = document.getElementById("testimonials");
        if (education) observer.observe(education);
    }, []);
    return (
        <div className='testimonials_page'>
            <div className='main-content'>
                <div className='l-content'>
                    <div className='text-uppercase test-title'>
                        Testimonials
                    </div>
                    <h1>What People Say</h1>

                    <div className='pt-5 d-flex gap-3'>
                        <img className='pt-2 testimonial-icon' src='https://thames-demo-nuxt.vercel.app/images/testimonial/testimonial-icon.png' alt='' height={45} />
                        <span className='description-test ml-3'>
                            Excepteur sint occaecat cupidatat non proiden sunt in<span className="br-desktop-experi"><br /></span> 
                            culpa qui officia deserunt mollit anim id est laebor um.<span className="br-desktop-experi"><br /></span> 
                            Sed ut perspiciatis unde omnis iste natus error sit volup<span className="br-desktop-experi"><br /></span> 
                            tatem gotiraz bole ami ke
                        </span>
                    </div>
                    <div class="testi-info d-flex align-items-center pt-4 ml-5">
                        <div class="testi-avatar">
                            <img className="rounded-circle" src="https://thames-demo-nuxt.vercel.app/images/testimonial/author-img.jpg" alt="author">
                            </img>
                        </div>
                        <div class="avatar-info">
                            <h5 class="mb-1 text-capitalize">Paul Harrison,</h5><p class="meta-text-color mb-0">codeefly</p>
                        </div>
                    </div>
                </div>

                <div className='r-content'>
                    <motion.div
                        initial={{ x: "20vw", opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : { x: "20vw", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 20, damping: 15 }}>
                        <img className='test-img'
                            src='https://thames-demo-nuxt.vercel.app/images/testimonial/testimonials-img.jpg' alt='' />
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials

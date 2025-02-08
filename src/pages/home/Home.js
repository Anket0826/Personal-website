import React, { useEffect, useRef } from "react";
import '../../styles/Home.scss'
import Typed from "typed.js";

const Home = () => {
    const roles = ["Freelancer", "Web Designer", "Software Engineer"];
    const typedRef = useRef(null);
    useEffect(() => {
        const options = {
            strings: roles,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '_',
        };
        typedRef.current = new Typed(".typed-text", options);
        return () => {
            typedRef.current.destroy();
        };
    });

    return (
        <>
            <div name='/' id="/"></div>
            <div className="home_page">
                <div className="self_name">
                    <span className="hello_im">HELLO I'M</span>
                    <div>
                        <h3 className="iam-text">I Am,</h3>
                        <h1 className="my_name">Anket<span> Pawar</span></h1>
                    </div>

                    <div className="mt-4 Passionate" style={{ color: "white" }}>
                        <h4 className="Passionate">A Passionate</h4>
                        <span
                            className="ml-3"
                            style={{
                                position: "relative",
                                bottom: "3px",
                                color: "lightgreen",
                                fontWeight: "bold",
                            }}>
                            <span className="typed-text"></span>
                        </span>
                    </div>
                    <div>
                        <button className="hello_btn">
                            SAY HELLO
                        </button>
                    </div>
                    <div className="image_style">
                        <img className='img-service' src="/assets/1708804699403.png" alt="Self" />

                    </div>
                    <div className="icons">
                        <div>
                            <a href="https://www.facebook.com/login/" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home_page2">

                <div className="card">
                    <img src="https://ethemestudio.com/demo/thames/1_home_main/images/icon/intro-ft-icon1.png"
                        className="middle_name mr-5"
                        alt=""
                    />
                    <h3 >Dedication</h3>
                    <span className="Seaque">Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.</span>
                </div>

                <div className="card mt-5 middle-card">
                    <img src="https://ethemestudio.com/demo/thames/1_home_main/images/icon/intro-ft-icon2.png"
                        className="middle_name mr-5"
                        alt=""
                    />
                    <h3 >Smart Work</h3>
                    <span className="Seaque">Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.</span>
                </div>

                <div className="card">
                    <img src="https://ethemestudio.com/demo/thames/1_home_main/images/icon/intro-ft-icon3.png"
                        className="middle_name mr-5"
                        alt=""
                    />
                    <h3 >Collaboration</h3>
                    <span className="Seaque">Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.</span>
                </div>

                <div className="card mt-5 middle-card">
                    <img src="https://ethemestudio.com/demo/thames/1_home_main/images/icon/intro-ft-icon4.png"
                        className="middle_name mr-5"
                        alt=""
                    />
                    <h3 >Technology</h3>
                    <span className="Seaque">Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.</span>

                </div>
            </div>
        </>
    )
}
export default Home
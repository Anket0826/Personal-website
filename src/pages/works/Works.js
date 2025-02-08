import React from 'react';
import '../../styles/Works.scss';

const Works = () => {
    return (
        <div id="works" className="works_page">
            <div className="marquee-w mb-125">
                <div className="marquee">
                    <span className="pl-4">Senior Website Developer from New York ,</span>
                    <span className="pl-4">Senior Website Developer from New York ,</span>
                </div>
                <div className="marquee marquee2 pb-1">
                    <span>I’m Open for new projects * Let’s Work Together ,</span>
                    <span>I’m Open for new projects * Let’s Work Together ,</span>
                </div>
            </div>
            <div>
                <p className='portfolio'>PORTFOLIO</p>
                <h1 className='text-center recent_works'>My Recent Works</h1>
                <div>
                    <div className='web_design mt-5' />

                    <div className='class-hover d-flex'>
                        <span className='WEB_DESING'>WEB DESING</span>
                        <div className='eThemeStudio'>Software Design for<span className="br-desktop"><br /></span> codeefly
                        </div>
                        <div className='img-content'>
                            <img className='w-image'
                                src='https://ethemestudio.com/demo/thames/1_home_main/images/portfolio/port-img1.jpg' alt='' />
                        </div>
                        <div className='plus_border ml-4'>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>

                    <div className='web_design-2' />

                    <div className='class-hover d-flex'>
                        <span className='WEB_DESING'>Development</span>
                        <div className='eThemeStudio'>Website Development<span className="br-desktop"><br /></span>for ABC Corporation</div>
                        <div className='img-content'>
                            <img className='w-image'
                                src='https://thames-demo-nuxt.vercel.app/images/portfolio/port-img2.jpg' alt='' />
                        </div>
                        <div className='plus_border'>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>

                    <div className='web_design-2' />

                    <div className='class-hover d-flex'>
                        <span className='WEB_DESING'>Photography</span>
                        <div className='eThemeStudio'>Security Analysis for<span className="br-desktop"><br /></span>codeefly
                        </div>
                        <div className='img-content'>
                            <img className='w-image'
                                src='https://thames-demo-nuxt.vercel.app/images/portfolio/port-img4.jpg' alt='' />
                        </div>
                        <div className='plus_border ml-4'>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Works;

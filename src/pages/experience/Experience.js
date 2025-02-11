import React from 'react'
import '../../styles/Experience.scss';

const Experience = () => {
    const icon = '/assets/briefcase.png'
    return (
        <div className='experi_page'>
            <div className='experience_wrapper'>
                <div>
                    <img className='expri_img' src='https://thames-demo-nuxt.vercel.app/images/work/work-img.jpg' alt='' />
                </div>
                <div className='right_section'>
                    <span className='text-uppercase work_title1'>Work Experience</span>
                    <h1 className='my_ex_name'>My Experience</h1>
                    <p className='ex_descri mt-4'>Sed ut perspiciatis unde omnis iste natus kobita tumi sopno<span className="br-desktop-experi"><br /></span> charini hoye khbor nio na sit voluptatem.</p>

                    <div className='experience_card'>
                        <div className='icon_style'>
                            <img src={icon} alt='' />
                        </div>
                        <div className=''>
                            <h3>Senior Website Developer</h3>
                            <h5 className='font-12'>codeefly <span className='meta-text'>( 2018 - Running )</span></h5>
                            <p className='descr-exp'>Ludantium totam rem aperia meaque ipsa quae ab<span className="br-desktop-experi"><br /></span> illo inven tore veritatis et quasi architecto beatae et<span className="br-desktop"><br /></span> vitae ullam molesti quae quasi..</p>
                        </div>
                    </div>
                    <div className='experience_card'>
                        <div className='icon_style'>
                            <img src={icon} alt='' />
                        </div>
                        <div className=''>
                            <h3>Data Architect</h3>
                            <h5 className='font-12'>Easy Computers <span className='meta-text'>( 2015 - 2018 )</span></h5>
                            <p className='descr-exp'>Ludantium totam rem aperia meaque ipsa quae ab<span className="br-desktop-experi"><br /></span> illo inven tore veritatis et quasi architecto beatae et<span className="br-desktop"><br /></span> vitae ullam molesti quae quasi..</p>
                        </div>
                    </div>
                    <div className='experience_card'>
                        <div className='icon_style'>
                            <img src={icon} alt='' />
                        </div>
                        <div className=''>
                            <h3>Web Developer</h3>
                            <h5 className='font-12'>Bangla College <span className='meta-text'> ( 2012 - 2015 )</span></h5>
                            <p className='descr-exp'>Ludantium totam rem aperia meaque ipsa quae ab<span className="br-desktop-experi"><br /></span> illo inven tore veritatis et quasi architecto beatae et<span className="br-desktop"><br /></span> vitae ullam molesti quae quasi..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience

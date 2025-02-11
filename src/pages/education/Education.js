import React from 'react'
import '../../styles/Education.scss';

const Education = () => {

    const icon = '/assets/graduation.png'

    return (
        <div className='education_page'>
            <div className='education_container'>

                <div className='left_container'>
                    <span className='text-uppercase edu_title1'>Education</span>
                    <h1>My Education</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye<br /> khbor nio na sit voluptatem accusantium dolore.</p>

                    <div className=''>
                        <div className='experience_card'>
                            <div className='icon_style'>
                                <img src={icon} alt='' />
                            </div>
                            <div className=''>
                                <h3>Masters in Computer Science</h3>
                                <h5 className='font-12'>Dhaka University <span className='meta-text'> ( 2008 - 2011 )</span></h5>
                                <p className='descr-exp pt-1'>Ludantium totam rem aperia meaque ipsa quae ab illo inven<br /> tore veritatis et quasi architecto beatae vitae.</p>
                            </div>
                        </div>
                        <div className='experience_card mt-4'>
                            <div className='icon_style'>
                                <img src={icon} alt='' />
                            </div>
                            <div className=''>
                                <h3>Bachelor in Computer Engineering</h3>
                                <h5 className='font-12'>Easy Computers <span className='meta-text'>( 2015 - 2018 )</span></h5>
                                <p className='descr-exp pt-1'>Ludantium totam rem aperia meaque ipsa quae ab illo inven<br /> tore veritatis et quasi architecto beatae vitae.</p>
                            </div>
                        </div>
                        <div className='experience_card mt-4'>
                            <div className='icon_style'>
                                <img src={icon} alt='' />
                            </div>
                            <div className=''>
                                <h3>Diploma in Graphic Design</h3>
                                <h5 className='font-12'>Bangla College <span className='meta-text'> ( 2012 - 2015 )</span></h5>
                                <p className='descr-exp pt-1'>Ludantium totam rem aperia meaque ipsa quae ab illo inven<br /> tore veritatis et quasi architecto beatae vitae.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='right_container'>
                 <div>
                    <img src='https://thames-demo-nuxt.vercel.app/images/education/education-img.jpg' alt='' />
                 </div>
                </div>

            </div>
        </div>
    )
}

export default Education

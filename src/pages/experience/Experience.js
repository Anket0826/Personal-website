import React from 'react'
import '../../styles/Experience.scss';

const Experience = () => {
    return (
        <div className='experi_page'>
            <div>
                <img className='expri_img' src='https://thames-demo-nuxt.vercel.app/images/work/work-img.jpg' alt=''/>
            </div>
            <div className='experience_wrapper'>
                <h1>Experience</h1>
                </div>
                <div className='experience_list'>
                    <div className='experience_item'>
                        <h2>Senior Website Developer</h2>
                        <p>New York, NY</p>
                        <p>2021 - Present</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel velit id neque mattis tincidunt. Nullam in velit vel felis tincidunt tincidunt.</p>
                    </div>
                    <div className='experience_item'>
                        <h2>Senior Software Engineer</h2>
                        <p>San Francisco, CA</p>
                        <p>2020 - 2021</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel velit id neque mattis tincidunt. Nullam in velit vel felis tincidunt tincidunt.</p>
                    </div>
                </div>
        </div>
    )
}

export default Experience

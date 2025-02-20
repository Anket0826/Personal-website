import React from 'react'
import '../../styles/Service.scss';

const Service = () => {
    return (
        <div className='service_page'>
            <div className='service-content'>
                <div className='titles-service text-center'>
                    <p className='text-uppercase service-title'>Service</p>
                    <h1 className='text-white'>What I offer</h1>
                </div>

                <div className='mt-5 card-styles'>
                    <div className='card-service'>
                        <div className='card-content'>
                            <div className='card-icon'>
                                <img src='https://thames-demo-nuxt.vercel.app/images/icon/ser-icon1.png' alt='Web Development Icon' />
                            </div>
                            <div className='card-text'>
                                <h3>Web Development</h3>
                                <span>
                                    Ludantium totam rem aperia meaququae ab<span className="br-desktop"><br /></span> tatis et quasi architecto beatae vit
                                    dunt ut<span className="br-desktop"><br /></span>labore et dolore magna aliqua.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='card-service'>
                        <div className='card-content'>
                            <div className='card-icon'>
                                <img src='https://thames-demo-nuxt.vercel.app/images/icon/ser-icon2.png' alt='Web Development Icon' />
                            </div>
                            <div className='card-text'>
                                <h3>Software Development</h3>
                                <span>
                                    Ludantium totam rem aperia meaququae ab<span className="br-desktop"><br /></span> tatis et quasi architecto beatae vit
                                    dunt ut<span className="br-desktop"><br /></span>labore et dolore magna aliqua.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='card-service'>
                        <div className='card-content'>
                            <div className='card-icon'>
                                <img src='https://thames-demo-nuxt.vercel.app/images/icon/ser-icon3.png' alt='Web Development Icon' />
                            </div>
                            <div className='card-text'>
                                <h3>System Development</h3>
                                <span>
                                    Ludantium totam rem aperia meaququae ab<span className="br-desktop"><br /></span> tatis et quasi architecto beatae vit
                                    dunt ut<span className="br-desktop"><br /></span>labore et dolore magna aliqua.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='card-service'>
                        <div className='card-content'>
                            <div className='card-icon'>
                                <img src='https://thames-demo-nuxt.vercel.app/images/icon/ser-icon4.png' alt='Web Development Icon' />
                            </div>
                            <div className='card-text'>
                                <h3>Security Analysis</h3>
                                <span>
                                    Ludantium totam rem aperia meaququae ab<span className="br-desktop"><br /></span> tatis et quasi architecto beatae vit
                                    dunt ut<span className="br-desktop"><br /></span>labore et dolore magna aliqua.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service

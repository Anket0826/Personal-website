
import React from "react";
import '../../styles/Achivements.scss';

const Achivement = () => {
    return (
        <div className="achivements_page">
            <div>
                <div className="achive_title">
                    <p className='text-center storise'>SUCCESS STORISE</p>
                    <h1 className='text-center storise_title'>Awards & Achivements</h1>
                </div>

                <div className="">
                    <div className="web_design mt-5" />

                    <div className="acivement_list">
                        <img src="https://thames-demo-nuxt.vercel.app/images/award/award-logo1.png" alt="" />
                        <div>
                            Developer of the Year
                            <p>2023</p>
                        </div>

                        <div>
                            Dev Internatioal
                            <p>London, England</p>
                        </div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit<span className="br-desktop"><br /></span> voluptatem accusantium dolore.</p>
                    </div>

                    <div className="web_design mt-4" />

                    <div className="acivement_list">
                        <img src="https://thames-demo-nuxt.vercel.app/images/award/award-logo2.png" alt="" />
                        <div>
                            Best Developer
                            <p>2024</p>
                        </div>

                        <div>
                            Developer Association
                            <p>New York, Usa</p>
                        </div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit<span className="br-desktop"><br /></span> voluptatem accusantium dolore.</p>
                    </div>


                    <div className="web_design mt-4" />

                    <div className="acivement_list">
                        <img src="	https://thames-demo-nuxt.vercel.app/images/award/award-logo3.png" alt="" />
                        <div>
                            Fastest Coder
                            <p>2025</p>
                        </div>

                        <div>Amazing Programmer
                            <p>Dhaka, Bangladesh</p>
                        </div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit<span className="br-desktop"><br /></span> voluptatem accusantium dolore.</p>
                    </div>

                    <div className="web_design mt-4" />
                </div>
            </div>
        </div>
    )
}
export default Achivement;
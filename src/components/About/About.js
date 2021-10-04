import React from 'react';
import "./About.css"
import image1 from "../../images/slide-1.jpg"
const About = () => {
    return (
        <div className="about">
            <div className="approach">
                <div className="image-approach">
                    <img src={image1} alt="" />
                </div>
                <div className="approach-detail">
                    <h2>Our approach</h2>
                    <p>
                        At Junior Achievement, we teach students about money management, career choices, being good employees,
                        starting a business, and the importance of education - in fun and engaging ways!
                        Local role models share lessons on these topics with students in grades K-12,
                        giving them a greater belief in their abilities and the inspiration to turn dreams into realities.
                    </p>
                    <div className="quality">
                        <div>
                            <h1>
                                268
                            </h1>
                            <p>
                                graduates hired last year
                            </p>
                        </div>
                        <div>
                            <h1>
                                154
                            </h1>
                            <p>
                                professional
                                in our team
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team">
                <h2 className="meet-team">Meet our team</h2>
                <div className="cart-info">

                    <div className="cart">
                        <img className="img-fluid" src="https://image.shutterstock.com/image-photo/portrait-happy-teacher-standing-front-260nw-230617855.jpg" alt="" />
                        <h1>Amy Walker</h1>
                        <h4>Manager</h4>
                    </div>
                    <div className="cart">
                        <img className="img-fluid" src="https://d5t4h5a9.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg" alt="" />
                        <h1>Michen Mash</h1>
                        <h4> Assistant-Manager</h4>
                    </div>
                    <div className="cart">
                        <img className="img-fluid" src="https://www.lawyer-monthly.com/Lawyer-Monthly/wp-content/uploads/2018/02/young-lawyers.jpg" alt="" />
                        <h1>Jackline</h1>
                        <h4>Manager</h4>
                    </div>
                    <div className="cart">
                        <img className="img-fluid" src="http://www.dlf-ne.org/wp-content/uploads/2018/09/young-lawyer-junior-associate-e1481304527988.jpg" alt="" />
                        <h1>Donald</h1>
                        <h4>Manager</h4>
                    </div>
                    <div className="cart">
                        <img className="img-fluid" src="https://koreyhowellphotography.com/wp-content/uploads/2017/04/AdobeStock_94026210-1-e1492095156447.jpeg" alt="" />
                        <h1>Hilari</h1>
                        <h4>Teacher</h4>
                    </div>
                    <div className="cart">
                        <img className="img-fluid" src="https://thumbs.dreamstime.com/b/smiling-female-junior-lawyer-standing-law-firm-looking-camera-young-professional-woman-108192482.jpg" alt="" />
                        <h1>Ema Watson</h1>
                        <h4>Teacher</h4>
                    </div>

                </div>

            </div>

            <section className="feedback">
                <h1 className="review-title">Reviews</h1>
                <div className="review">
                    <div className='customer'>
                        <h4>
                            <span>&#8221;</span> Thanks to this awesome course, I am now a certified pilot who is allowed to train other pilots and issue flight permits! I appreciate the hard work that your team does for the trainees – the course went smoothly with tons of useful information. You are great!
                        </h4>
                        <p>Matt Woodson Los Angeles</p>
                    </div>
                    <div>
                        <h4>
                            <span>&#8221;</span>It was a truly amazing experience for me and my groupmates who came to get their CPL’s at this flying school. The training was professionally organized, and the crew who helped us study worked hard to make it as much effective as possible. Thanks a lot!
                        </h4>
                        <p>Ashton Parks Chicago</p>
                    </div>
                    <div>
                        <h4>

                            <span>&#8221;</span> It was fun and exciting to learn at your flying school! The instructors know exactly what they do, and I was fully aware of the risks and the trust that the students put in this training. I completed my license and night VFR fast and effectively. Thank you!
                        </h4>
                        <p>Ella Mason New York</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
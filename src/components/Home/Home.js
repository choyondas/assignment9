

import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import "./Home.css"

const Home = () => {
    const [services, setServices] = useState([]);
    // console.log(services);
    useEffect(() => {
        fetch('./homeData.Json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    return (
        <div>
            <div className="home">

            </div>
            <div className="news-section">
                <h2 className="heading-news">Our latest news and reports</h2>

                <div className="latest-news">
                    <div>

                        <div className="small-topic">
                            <img width="80px" src="https://c8.alamy.com/comp/DKGNRP/failing-your-exams-DKGNRP.jpg" alt="" />
                            <div>
                                <Link to="/" className="text-news"><h4 >Why some students might not pass the exam</h4></Link>
                                <p>Robart Henry</p>
                            </div>
                        </div>
                        <div className="small-topic">
                            <img width="80px" src="https://st3.depositphotos.com/9880800/16371/i/600/depositphotos_163714576-stock-photo-kids-raising-hands-in-class.jpg" alt="" />
                            <div>
                                <Link to="/" className="text-news"><h4>Necessary steps to master in English</h4></Link>
                                <p>Max Bosh</p>
                            </div>
                        </div>
                        <div className="small-topic">
                            <img width="80px" src="https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/f/11/f11eb581-1142-535b-aa00-e1337a6af06e/590651461e06a.image.jpg" alt="" />
                            <div>
                                <Link to="/" className="text-news"><h4>Grammar mistakes you should avoid</h4></Link>
                                <p>Robart Henry</p>
                            </div>
                        </div>
                    </div>
                    <div className="big-topic">
                        <div className="info-item" >
                            <img src="https://img.etimg.com/thumb/msid-77391367,width-650,imgsize-677864,,resizemode-4,quality-100/to-reduce-risk-experts-say-schools-should-make-adjustments-when-resuming-in-person-classes-.jpg" alt="" />

                            <Link to="/" className="text-news"><h4>Improving skills</h4></Link>

                            <p>april 28, 2021</p>
                        </div>
                        <div className="info-item">
                            <img src="https://kern.org/wp-content/blogs.dir/4/files/sites/4/2019/12/schools-a-z.jpg" alt="" />
                            <Link to="/" className="text-news"><h4>Learning process can be easy</h4></Link>

                            <p>april 28, 2021</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="catagory">
                <h3 className="m-4 ">Our services:</h3>


                <div className="row">
                    {
                        services.map(service =>

                            <div key={service.id} className="col-md-6 col-lg-4 col-12">

                                <div className="cart">

                                    <h3>{service.title}</h3>
                                    <h4>institute: {service.school}</h4>
                                    <img className="w-50" src={service.img} alt="" />

                                    <p>price:${service.price}</p>

                                    <Link to="/buy"><button className="buy-now">Buy Now</button></Link>


                                </div>
                            </div>

                        )
                    }
                </div>
                <NavLink to="/details">
                    <button className="more-details">More services</button>
                </NavLink>


            </section>

        </div>


    );
};

export default Home;
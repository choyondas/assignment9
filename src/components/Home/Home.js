import { Carousel } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('./homeData.Json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    return (
        <div>
            <div className="home">


            </div>

            <section className="catagory">
                <h3>Our services: {services.length}</h3>


                <div className="row">
                    {
                        services.map(service =>

                            <div key={service.id} className="col-md-6 col-lg-4 col-12">

                                <div className="cart">

                                    <h3>{service.title}</h3>
                                    <h4>institute: {service.school}</h4>
                                    <img className="w-50" src={service.img} alt="" />
                                    <p>price:${service.price}</p>


                                </div>
                            </div>

                        )
                    }
                </div>

                <div>
                    <div>

                    </div>
                </div>
            </section>

        </div>


    );
};

export default Home;
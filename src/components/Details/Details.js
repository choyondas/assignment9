import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Details.css"

const Details = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch("./schoolService.JSON")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div className="detail-div">
            <h2>Our services</h2>
            <div className="row">
                {
                    details.map(detail => <div
                        key={detail.id}
                        className="col-md-6 col-lg-4">
                        <div className="cart">
                            <h3>{detail.title}</h3>
                            <h4>institute: {detail.school}</h4>
                            <img className="w-75" src={detail.img} alt="" />
                            <p>price:${detail.price}</p>
                            <Link to="/buy"><button className="buy"> Buy now</button></Link>

                        </div>
                    </div>
                    )
                }

            </div>

        </div>
    );
};

export default Details;
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
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
                            <img className="w-50" src={detail.img} alt="" />
                            <p>price:${detail.price}</p>
                            <button className="buy"> Buy now</button>

                        </div>
                    </div>
                    )
                }

            </div>

        </div>
    );
};

export default Details;
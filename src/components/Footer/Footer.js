import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <img className="happy" src="https://icon-library.com/images/learn-icon-png/learn-icon-png-28.jpg" alt="" />
            <h1 >Happy Learning</h1>

            <div className="navigation">

                <NavLink className="m-4 fw-bold text-decoration-none text-white " to="/home"><h4>Home</h4></NavLink>
                <NavLink className="m-4 fw-bold text-decoration-none text-white " to="/about"><h4>About</h4></NavLink>
                <NavLink className="m-4 fw-bold text-decoration-none text-white " to="/service"><h4>Service</h4></NavLink>
                <NavLink className="m-4 fw-bold text-decoration-none text-white " to="/contact"><h4>Contact</h4></NavLink>
            </div>
            <h3>Quick Links</h3>
            <div className="quick-recap">
                <NavLink className="quick-link" to=""><p>Service Plus and plans</p></NavLink>
                <NavLink className="quick-link" to=""><p>Our features and careers</p></NavLink>
                <NavLink className="quick-link" to=""><p>Privacy policy and terms of use</p></NavLink>
                <NavLink className="quick-link" to=""><p>Courses and pilot requirements</p></NavLink>
            </div>
            <p>Choyon © 2021. All Rights Reserved..</p>
        </div>
    );
};

export default Footer;
import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header-div">
            <div className="header-left">
                <h2>Language International</h2>
            </div>
            <div className="header-right">


                <NavLink className="m-4 fw-bold text-decoration-none text-white " to="/home"><h4>Home</h4></NavLink>
                <NavLink className="m-4 fw-bold text-decoration-none text-white " to="/about"><h4>About</h4></NavLink>
                <NavLink className="m-4 fw-bold text-decoration-none text-white " to="/service"><h4>Service</h4></NavLink>
                <NavLink className="m-4 fw-bold text-decoration-none text-white " to="/contact"><h4>Contact</h4></NavLink>

            </div>
        </div>
    );
};

export default Header;
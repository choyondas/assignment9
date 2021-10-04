import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header-div">
            <div className="header-left">
                <img className="img-logo" src="https://icon-library.com/images/learn-icon-png/learn-icon-png-28.jpg" alt="" />
                <h2 className="title">Language International</h2>

            </div>
            <div className="header-right">


                <NavLink className="m-4 fw-bold text-decoration-none text-white " to="/home" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}><h4 >Home</h4></NavLink>
                <NavLink className="m-4 fw-bold text-decoration-none text-white " to="/about" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}><h4>About</h4></NavLink>
                <NavLink className="m-4 fw-bold text-decoration-none text-white " to="/service" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}><h4>Service</h4></NavLink>
                <NavLink className="m-4 fw-bold text-decoration-none text-white " to="/contact" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}><h4>Contact</h4></NavLink>

            </div>
        </div>
    );
};

export default Header;
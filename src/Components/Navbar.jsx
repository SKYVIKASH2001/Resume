import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/resume-logo-png-transparent.png'

function Navbar(props) {
    return (
        <>
          <div className="navbar">
                <div className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className="menu">
                    <Link to='/'>Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>  
        </>
    );
}

export default Navbar;






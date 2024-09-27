import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo/masakali.png'
import Tophead from '../Tophead/Tophead'
const Navbar = () => {
    const navigate = useNavigate();
    const handleClick = (to) => (e) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
    };
    const logoSize = {
        height: '55px',
    }
    const navbarTransparency = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
    return (
        <Fragment>
            <Tophead />
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top transparent-navbar" style={navbarTransparency}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="navbar-logo" 
                        style={logoSize}
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                            <Link className="nav-link" onClick={handleClick('/')} to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={handleClick('/menu')} to="/menu">
                                Menu
                            </Link>
                        </li>
                        {/* Uncomment if needed
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="#!">Food Catering</Link>
                                <Link className="dropdown-item" to="#!">Wedding Celebration</Link>
                                <Link className="dropdown-item" to="#!">Birthday's Celebration</Link>
                            </div>
                        </li>
                        */}
                        
                        <li className="nav-item">
                            <Link className="nav-link" onClick={handleClick('/contact')} to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item btn-cta">
                            {/* Uncomment if needed
                            <Link className="nav-link" to="/reservation">
                                <span>Reservation</span>
                            </Link>
                            */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </Fragment>
    );
}

export default Navbar;
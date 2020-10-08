import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg.svg';

const Navbar = () => (
    <nav className="navbar">
        <Link to="/" className="logo">
            <Logo  className="svg"/>
        </Link>

        <div className="navigation-links-parent">
            <ul className="nav-ul">
                <li>
                    <Link to="/shop">shop</Link>
                </li>
                <li>
                    <a href="http://kunaal.herokuapp.com/contact" target="_blank">contact</a>
                </li>
                <li>
                    <Link to="/signin" >Sign In</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar;
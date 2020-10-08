import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg.svg';
import { auth } from '../../firebase/firebase.utils';

const Navbar = ({ currentUser }) => (
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
                    <a href="http://kunaal.herokuapp.com/contact" rel="noopener noreferrer" target="_blank">contact</a>
                </li>
                <li>
                    {
                        currentUser ? 
                        <a style={{cursor: 'pointer'}} onClick={() => auth.signOut()} >Sign Out</a>
                        :
                        <Link to="/signin" >Sign In</Link>
                    }
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar;
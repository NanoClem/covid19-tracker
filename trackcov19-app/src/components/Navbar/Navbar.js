import React from 'react';
import {Link} from 'react-router-dom';
import Logout from '../Auth/Logout';
import './Navbar.css';


export default function Navbar({ isLoggedIn }) {

    const loggedText = isLoggedIn ? "logout" : "login";

    return(
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link className="link" to='/'>
                    <li>Home</li>
                </Link>
                { isLoggedIn && 
                    <Link className="link" to="/profile">
                        <li>Profile</li>
                    </Link>
                }
                <Link className="link" to={"/" + loggedText}>
                        <li>{loggedText.charAt(0).toUpperCase() + loggedText.slice(1)}</li>
                </Link>
            </ul>
        </nav>
    );
}
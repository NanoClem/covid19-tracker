import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {

        return(
            <nav>
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link className="link" to='/'>
                        <li>Home</li>
                    </Link>
                    <Link className="link" to="/profile">
                        <li>Profile</li>
                    </Link>
                    <Link className="link" to="/login">
                        <li>Login</li>
                    </Link>
                </ul>
            </nav>
        );
    }
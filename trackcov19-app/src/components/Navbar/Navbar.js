import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return(
            <nav>
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link className="link" to='/'>
                        <li>Home</li>
                    </Link>
                    <Link className="link" to="/dataviz">
                        <li>Dataviz</li>
                    </Link>
                    <Link className="link" to="/profile">
                        <li>Profile</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
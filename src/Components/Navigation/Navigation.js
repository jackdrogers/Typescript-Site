import React from 'react';
import NavItem from '../NavItem/NavItem';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = props => {
    return (
        <header>
            <nav className="navigation">
                <Link to="/">
                    <div className="navigation--logo"></div>
                </Link>

                <ul className="navigation--items">
                    <NavItem url="/about" text="About" />
                    <NavItem url="/contact" text="Contact" />
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
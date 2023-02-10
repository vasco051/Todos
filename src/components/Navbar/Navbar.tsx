import React, {FC} from 'react';
import './Navbar.css'
import {Link, NavLink} from "react-router-dom";

const Navbar: FC = () => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
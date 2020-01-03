import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/docs">Docs</NavLink>
        </div>
    )
}

export default Header;
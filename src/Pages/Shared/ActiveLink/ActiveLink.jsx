import React from 'react';
import { NavLink } from 'react-router-dom';
import './active.css'

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "nav-link active-color" : "nav-link non-active"}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;

import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
            {noHeaderFooter || <NavBar></NavBar>}
            <div className='text-end me-3'>
                <button className='btn btn-outline-info my-3' onClick={toggleTheme}>Toggle Theme</button>
            </div>
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;

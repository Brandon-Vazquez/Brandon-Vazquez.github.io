import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Check for saved theme preference or use system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkTheme(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        if (isDarkTheme) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    };

    return (
        <header className="navbar">
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="brand-name">Brandon Vazquez Munoz</Link>
                </div>
                <div className="nav-right">
                    <nav className="main-nav">
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                            HOME
                        </Link>
                        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                            ABOUT ME
                        </Link>
                        <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
                            PROJECTS
                        </Link>
                    </nav>
                    <button
                        className={`theme-switcher-grid ${isDarkTheme ? 'night-theme' : ''}`}
                        onClick={toggleTheme}
                        aria-label="Switch theme"
                    >
                        <div className="sun" aria-hidden="true"></div>
                        <div className="moon-overlay" aria-hidden="true"></div>
                        <div className="cloud-ball cloud-ball-left" aria-hidden="true"></div>
                        <div className="cloud-ball cloud-ball-middle" aria-hidden="true"></div>
                        <div className="cloud-ball cloud-ball-right" aria-hidden="true"></div>
                        <div className="cloud-ball cloud-ball-top" aria-hidden="true"></div>
                        <div className="star" aria-hidden="true"></div>
                        <div className="star" aria-hidden="true"></div>
                        <div className="star" aria-hidden="true"></div>
                        <div className="star" aria-hidden="true"></div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar; 
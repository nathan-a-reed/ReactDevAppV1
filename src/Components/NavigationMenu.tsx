// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // For routing between pages and tracking location

// Define the Navbar component
const Navbar: React.FC = () => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState<string>('home');

    // Set active item based on current path when component mounts or location changes
    useEffect(() => {
        const path = location.pathname;
        if (path === '/') {
            setActiveItem('home');
        } else {
            const currentPath = path.substring(1); // Remove leading slash
            if (['about', 'services', 'contact'].includes(currentPath)) {
                setActiveItem(currentPath);
            }
        }
    }, [location]);

    const handleLogoClick = () => {
        setActiveItem('home');
    };

    const handleNavClick = (item: string) => {
        setActiveItem(item);
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                <Link
                    to="/"
                    style={styles.logoText}
                    onClick={handleLogoClick}
                    className="logo-link"
                >
                    MySite
                </Link>
            </div>
            <ul style={styles.navList}>
                {['home', 'about', 'services', 'contact'].map((item) => (
                    <li key={item} style={styles.navListItem}>
                        <Link
                            to={item === 'home' ? '/' : `/${item}`}
                            style={{
                                ...styles.navItem,
                                ...(activeItem === item ? styles.activeNavItem : {}),
                            }}
                            onClick={() => handleNavClick(item)}
                            className="nav-link"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                            <span style={styles.navItemUnderline}></span>
                        </Link>
                    </li>
                ))}
            </ul>
            <style>{`
                .nav-link {
                    position: relative;
                    transition: color 0.3s ease, transform 0.2s ease;
                }
                
                .nav-link:hover {
                    color: #61dafb;
                    transform: translateY(-2px);
                }
                
                .nav-link:active {
                    transform: translateY(1px);
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -4px;
                    left: 0;
                    background-color: #61dafb;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .nav-link.active::after {
                    width: 100%;
                }
                
                .logo-link {
                    transition: color 0.3s ease, transform 0.3s ease;
                }
                
                .logo-link:hover {
                    color: #61dafb;
                    transform: scale(1.05);
                }
                
                .logo-link:active {
                    transform: scale(0.98);
                }
            `}</style>
        </nav>
    );
};

// CSS-in-JS styles for the navbar
const styles = {
    navbar: {
        backgroundColor: '#333',
        padding: '10px 0',
        color: 'white',
        width: '100%',
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxSizing: 'border-box' as 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    logo: {
        paddingLeft: '40px',
    },
    logoText: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white',
        textDecoration: 'none',
        display: 'inline-block',
    },
    navList: {
        listStyleType: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
        paddingRight: '40px',
    },
    navListItem: {
        margin: '0 15px',
    },
    navItem: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '1rem',
        padding: '8px 0',
        display: 'inline-block',
        position: 'relative' as 'relative',
    },
    activeNavItem: {
        color: '#61dafb',
    },
    navItemUnderline: {
        position: 'absolute' as 'absolute',
        bottom: 0,
        left: 0,
        width: '0%',
        height: '2px',
        backgroundColor: '#61dafb',
    },
};

// Export Navbar as default
export default Navbar;
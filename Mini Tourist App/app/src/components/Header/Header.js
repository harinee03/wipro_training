import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          Travel<span>Explorer</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/packages" 
              className={location.pathname === '/packages' ? 'active' : ''}
            >
              Packages
            </Link>
          </li>
          <li>
            <Link 
              to="/bookings" 
              className={location.pathname === '/bookings' ? 'active' : ''}
            >
              Bookings
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
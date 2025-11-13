import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import './Header.css';

const Header = ({ showInstallButton, onInstallClick }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user } = useUser();

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Productivity Dashboard</h1>
        
        <div className="header-actions">
          {user.isLoggedIn && (
            <span className="welcome-text">Welcome, {user.name}!</span>
          )}
          
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {showInstallButton && (
            <button 
              className="install-btn"
              onClick={onInstallClick}
            >
              Install App
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
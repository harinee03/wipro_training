import React from 'react';

import ThemeToggle from './ThemeToggle';
import InstallPrompt from './InstallPrompt';
import './Header.css';

const Header = () => {


  return (
    <header className="header">
     
        <div className="header-text">
          <h1>React Hooks & State Management</h1>
    
        </div>
        <div className="header-actions">
          <InstallPrompt />
          <ThemeToggle />
        </div>
     
    </header>
  );
};

export default Header;

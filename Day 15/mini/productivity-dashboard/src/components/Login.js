import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import './Login.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const { login, user } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      login(userName.trim());
      setUserName('');
    }
  };

  if (user.isLoggedIn) {
    return null; // Don't show login form if user is logged in
  }

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <h2>Welcome to Productivity Dashboard</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className="login-input"
            required
          />
          <button type="submit" className="login-btn">
            Start Being Productive
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
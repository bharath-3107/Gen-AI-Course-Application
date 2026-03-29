import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-content">

        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">GenAI</span>
            <span className="logo-subtext">Course</span>
          </Link>
        </div>

        <nav className="top-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/course" className="nav-link">Courses</Link>

          <div className="theme-toggle">
            <button 
              className="theme-btn" 
              onClick={toggleTheme} 
              title="Toggle Theme"
            >
              {isDarkTheme ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
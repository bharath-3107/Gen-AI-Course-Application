import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      return savedTheme === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const theme = isDarkTheme ? 'dark' : 'light';

    // Save to localStorage
    localStorage.setItem('theme', theme);

    // Set attribute for CSS usage
    document.documentElement.setAttribute('data-theme', theme);

    // Apply global styles
    document.body.style.backgroundColor = isDarkTheme ? '#121212' : '#ffffff';
    document.body.style.color = isDarkTheme ? '#ffffff' : '#202124';
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
};
import React, { createContext, useState, useContext } from 'react';

// Create Context
const ThemeContext = createContext();

// Provide Context to the App
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for Convenience
export const useTheme = () => useContext(ThemeContext);

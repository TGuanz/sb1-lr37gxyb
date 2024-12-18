import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always start with dark theme
  const [isDark, setIsDark] = useState(true);

  // Set initial theme
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#1E1E1E';
  }, []);

  const toggleTheme = () => {
    // For now, we'll keep it dark regardless of toggle
    setIsDark(true);
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#1E1E1E';
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
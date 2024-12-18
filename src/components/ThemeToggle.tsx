import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative"
      aria-label="Toggle theme"
    >
      <div className="transform transition-transform duration-200">
        {theme === 'dark' ? (
          <Sun className="h-6 w-6" />
        ) : (
          <Moon className="h-6 w-6" />
        )}
      </div>
    </button>
  );
};
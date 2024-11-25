import React from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, currentTheme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (currentTheme) {
      case 'light':
        return <Moon className="w-5 h-5" />;
      case 'dark':
        return <Palette className="w-5 h-5" />;
      default:
        return <Sun className="w-5 h-5" />;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 hover:scale-110"
      style={{ 
        backgroundColor: theme.cardBg,
        color: theme.primary,
        boxShadow: currentTheme === 'gradient' 
          ? `0 0 20px ${theme.primary}40`
          : '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}
      aria-label="Toggle theme"
    >
      {getIcon()}
    </button>
  );
};

export default ThemeToggle; 
import React, { createContext, useContext, useState, useMemo } from 'react';

type Theme = {
  background: string;
  text: string;
  primary: string;
  cardBg: string;
  muted: string;
};

type ThemeContextType = {
  theme: Theme;
  currentTheme: string;
  toggleTheme: () => void;
};

const themes = {
  light: {
    background: '#ffffff',
    text: '#1a1a1a',
    primary: '#3b82f6',
    cardBg: '#f8fafc',
    muted: '#64748b'
  },
  dark: {
    background: '#0f172a',
    text: '#f8fafc',
    primary: '#60a5fa',
    cardBg: '#1e293b',
    muted: '#94a3b8'
  },
  gradient: {
    background: '#0f172a',
    text: '#f8fafc',
    primary: '#60a5fa',
    cardBg: '#1e293b',
    muted: '#94a3b8'
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  
  const toggleTheme = () => {
    setCurrentTheme(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'gradient';
      return 'light';
    });
  };

  const value = useMemo(() => ({
    theme: themes[currentTheme as keyof typeof themes],
    currentTheme,
    toggleTheme
  }), [currentTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}; 
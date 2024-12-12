import React from 'react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/images/logo.png';
const Navigation = () => {
  const { theme, currentTheme } = useTheme();

  const navItems = [
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#education', text: 'Education' },
    { href: '#certifications', text: 'Certifications' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a 
            href="/"
            className="text-xl font-bold"
          >
            <img src={logo} alt="Logo" className="h-8" />
          </a>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative hover:text-[${theme.primary}] transform hover:-translate-y-0.5`}
                style={{ 
                  color: theme.text,
                }}
                onMouseEnter={(e) => {
                  if (currentTheme === 'gradient') {
                    e.currentTarget.style.textShadow = `0 0 8px ${theme.primary}40`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Education = () => {
  const { theme, currentTheme } = useTheme();

  return (
    <section 
      id="education" 
      className="py-20 px-4"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.text }}>
          EDUCATION
        </h2>
        <div 
          style={{ 
            backgroundColor: theme.cardBg,
            boxShadow: currentTheme === 'gradient' 
              ? `0 4px 20px ${theme.primary}20`
              : '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}
          className="p-6 rounded-lg hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap style={{ color: theme.primary }} className="w-6 h-6" />
            <h3 className="text-xl font-bold" style={{ color: theme.primary }}>
              B.Tech in Computer Science
            </h3>
          </div>
          <p style={{ color: theme.text }}>Rajiv Gandhi Proudyogiki Vishwavidyalaya</p>
          <p style={{ color: theme.muted }}>2021 - 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
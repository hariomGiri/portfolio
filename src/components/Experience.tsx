import React from 'react';
import { Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { theme, currentTheme } = useTheme();
  
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Octanet Pvt Ltd',
      period: 'April 2024 - May 2024',
      description: 'Developed a dynamic landing page using HTML, CSS, and JavaScript. Participated in development programs to enhance technical skills. Worked on an Object-Oriented Programming (OOP) model project.',
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-20 px-4"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.text }}>
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-lg relative hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: theme.cardBg,
                boxShadow: currentTheme === 'gradient' 
                  ? `0 4px 20px ${theme.primary}20`
                  : '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Briefcase 
                className="absolute top-6 right-6" 
                style={{ color: theme.primary }}
              />
              <h3 
                className="text-xl font-bold"
                style={{ color: theme.primary }}
              >
                {exp.title}
              </h3>
              <p 
                className="mb-2"
                style={{ color: theme.muted }}
              >
                {exp.company} | {exp.period}
              </p>
              <p style={{ color: theme.text }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
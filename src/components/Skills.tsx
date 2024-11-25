import React from 'react';
import { Code2, Database, Brain, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { theme, currentTheme } = useTheme();
  
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'HTML', 'CSS'],
      icon: Code2
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['NumPy', 'Pandas', 'PyQt5', 'TensorFlow'],
      icon: Database
    },
    {
      title: 'Tools',
      skills: ['Git', 'VS Code', 'Jupyter Notebooks'],
      icon: Terminal
    },
    {
      title: 'Key Concepts',
      skills: [
        'Machine Learning',
        'Data Structures and Algorithms',
        'Linear Regression',
        'K-Nearest Neighbors (KNN)',
        'Data Visualization'
      ],
      icon: Brain
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 px-4"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              style={{ 
                backgroundColor: theme.cardBg,
                boxShadow: currentTheme === 'gradient' 
                  ? `0 4px 20px ${theme.primary}20`
                  : '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
              className="p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon style={{ color: theme.primary }} className="w-6 h-6" />
                <h3 className="text-xl font-bold" style={{ color: theme.primary }}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{ 
                      backgroundColor: `${theme.primary}15`,
                      color: theme.primary,
                      borderColor: `${theme.primary}30`
                    }}
                    className="px-3 py-1 rounded-full text-sm border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
import React from 'react';
import { Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Certifications = () => {
  const { theme, currentTheme } = useTheme();

  const certifications = [
    {
      title: 'Introduction to Cybersecurity',
      organization: 'CISCO Networking Academy',
      icon: Award,
      date: '2023'
    },
    {
      title: 'Smart Hackathon 2023',
      organization: 'LNCT Group of Colleges',
      icon: Award,
      date: '2023'
    },
    {
      title: 'Mastering MERN',
      organization: 'Octanet & GITA Autonomous College',
      icon: Award,
      date: '2024'
    }
  ];

  return (
    <section 
      id="certifications" 
      className="py-20 px-4"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.text }}>
          CERTIFICATIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
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
                <Award style={{ color: theme.primary }} className="w-6 h-6" />
                <h3 className="text-xl font-bold" style={{ color: theme.primary }}>
                  {cert.title}
                </h3>
              </div>
              <p style={{ color: theme.muted }} className="mb-4">{cert.organization}</p>
              <p style={{ color: theme.text }} className="text-sm">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 
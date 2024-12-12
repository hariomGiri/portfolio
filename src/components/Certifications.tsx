import React from 'react';
import { Award, Badge, Link } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Certifications = () => {
  const { theme, currentTheme } = useTheme();

  const certifications = [
    {
      title: 'Introduction to Cybersecurity',
      organization: 'CISCO Networking Academy',
      credential: 'https://www.credly.com/badges/fb6a9486-5377-479c-9157-d769b8d1b199/public_url',
      icon: Award,
      date: '2023',
      certificate_id: 'FB6A9486-5377-479C-9157-D769B8D1B199'
    },
    {
      title: 'Smart Hackathon 2023',
      organization: 'LNCT Group of Colleges',
      credential: 'https://drive.google.com/file/d/1pBAdjF3tBgwUuLHz2xAuavFQ3r3iefN-/view?usp=drive_link',
      icon: Award,
      date: '2023',
      certificate_id: 'DV2XIO-CE000005'
    },
    {
      title: 'Mastering MERN',
      organization: 'Octanet & GITA Autonomous College',
      credential: 'https://drive.google.com/file/d/17KfT2jpTKBwwALEoQCS8KHt-FChZdhpV/view?usp=drive_link',
      icon: Award,
      date: '2024'
    },
    {
      title: 'Data Fundamentals',
      organization: 'Issued by IBM SkillsBuild',
      credential: 'https://www.credly.com/badges/e3619976-a3db-4eee-b2ac-b2785967b20d/whatsapp',
      icon: Badge,
      date: '2024',
      certificate_id: 'E3619976-A3DB-4EEE-B2AC-B2785967B20D'
    },
    {
      title: 'Python & Machine Learning 75 hours Training',
      organization: 'Issued by Robotronix ',
      credential: 'https://drive.google.com/file/d/1IK8-LlunIZ_nt2YedqdfdHQSD-YqN0D-/view?usp=drive_link',
      icon: Award,
      date: '2024',
      certificate_id: 'RX-06/LNCT-24'
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
                <cert.icon style={{ color: theme.primary }} className="w-6 h-6" />
                <h3 className="text-xl font-bold" style={{ color: theme.primary }}>
                  {cert.title}
                </h3>
              </div>
              <p style={{ color: theme.muted }} className="mb-4">{cert.organization}</p>
              <p style={{ color: theme.text }} className="text-sm mb-2">{cert.date}</p>
              
              {cert.certificate_id && (
                <p 
                  className="text-sm mb-2 italic"
                  style={{ color: theme.muted }}
                >
                  Certificate ID: {cert.certificate_id}
                </p>
              )}
              
              {cert.credential && (
                <a 
                  href={cert.credential} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm"
                  style={{ color: theme.primary }}
                >
                  <Link className="w-4 h-4" />
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 
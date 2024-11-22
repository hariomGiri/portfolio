import React from 'react';
import { Award, Medal } from 'lucide-react';

const Certifications = () => {
  const certificates = [
    {
      title: 'Introduction to Cybersecurity',
      organization: 'CISCO Networking Academy',
      icon: Award
    },
    {
      title: 'Smart Hackathon 2023',
      organization: 'LNCT Group of Colleges',
      icon: Medal
    },
    {
      title: 'Mastering MERN',
      organization: 'Octanet & GITA Autonomous College',
      icon: Award
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">CERTIFICATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1a1a3f] p-6 rounded-lg hover:shadow-purple-600/10 hover:shadow-lg transition"
            >
              <cert.icon className="text-purple-400 w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-purple-400 mb-2">{cert.title}</h3>
              <p className="text-gray-300">{cert.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 
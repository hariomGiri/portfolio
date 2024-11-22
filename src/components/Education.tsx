import React from 'react';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'RGPV, Indore, Madhya Pradesh',
      details: [
        'CGPA: 7.62/10',
        'Expected Graduation: June 2025'
      ],
      icon: GraduationCap
    },
    {
      degree: 'Intermediate (Class 12)',
      institution: 'Ghazipur, Uttar Pradesh',
      details: [
        'Board: Central Board of Secondary Education (CBSE)',
        'Percentage: 87%',
        'Year of Completion: August 2021'
      ],
      icon: School
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[#1a1a3f] p-6 rounded-lg relative hover:shadow-purple-600/10 hover:shadow-lg transition"
            >
              <edu.icon className="absolute top-6 right-6 text-purple-400 w-8 h-8" />
              <h3 className="text-xl font-bold text-purple-400 mb-2">{edu.degree}</h3>
              <p className="text-gray-300 mb-3">{edu.institution}</p>
              <div className="space-y-2">
                {edu.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-400">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
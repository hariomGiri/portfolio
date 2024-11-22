import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Octanet Pvt Ltd',
      period: 'April 2024 - May 2024',
      description: 'Developed a dynamic landing page using HTML, CSS, and JavaScript. Participated in development programs to enhance technical skills. Worked on an Object-Oriented Programming (OOP) model project.',
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1a1a3f] p-6 rounded-lg relative hover:shadow-purple-600/10 hover:shadow-lg transition"
            >
              <Briefcase className="absolute top-6 right-6 text-purple-400" />
              <h3 className="text-xl font-bold text-purple-400">{exp.title}</h3>
              <p className="text-gray-400 mb-2">{exp.company} | {exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
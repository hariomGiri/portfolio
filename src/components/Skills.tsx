import React from 'react';
import { Code2, Database, Brain, Terminal } from 'lucide-react';

const Skills = () => {
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
    <section id="skills" className="py-20 px-4 bg-[#0d0d24]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">TECHNICAL SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1a1a3f] p-6 rounded-lg hover:shadow-purple-600/10 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-purple-400 w-6 h-6" />
                <h3 className="text-xl font-bold text-purple-400">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
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
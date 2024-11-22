import React from 'react';
import { Terminal, Brain, Code2, Database } from 'lucide-react';
import profileImage from '../../assets/images/IMG_20241015_160315.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <img 
            src={profileImage} 
            alt="Hariom Giri"
            className="rounded-full w-48 h-48 object-cover mx-auto mb-8 border-4 border-purple-400"
          />
          <p className="text-gray-400 mb-2">Hello,</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            This is <span className="text-purple-400">Hariom Giri</span>,
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6">
            ML Engineer & Full Stack Developer
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            A passionate Computer Science student at RGPV, Indore, specializing in Machine Learning 
            and Software Development. Experienced in building predictive models, voice assistants, 
            and web applications using Python, ML libraries, and modern web technologies.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <Brain className="text-purple-400 w-5 h-5" />
              <span>Machine Learning</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Code2 className="text-purple-400 w-5 h-5" />
              <span>Python Development</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Terminal className="text-purple-400 w-5 h-5" />
              <span>Web Development</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Database className="text-purple-400 w-5 h-5" />
              <span>Data Analysis</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border border-purple-600 text-purple-400 hover:bg-purple-600/10 px-6 py-3 rounded-lg transition"
            >
              See My Work
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="bg-[#1a1a3f] p-6 rounded-lg shadow-xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm text-gray-300 font-mono">
              <code>{`class MLEngineer:
    def __init__(self):
        self.name = "Hariom Giri"
        self.education = "B.Tech CS @ RGPV"
        self.skills = {
            "ML": ["Scikit-learn", "Pandas", 
                  "NumPy", "Matplotlib"],
            "Development": ["Python", "HTML", 
                          "CSS", "JavaScript"],
            "Projects": ["Pragya kalp Assistant",
                       "Insurance Prediction",
                       "Brain Stroke Detection"]
        }
        self.interests = ["AI/ML", "Software Dev",
                         "Problem Solving"]
`}</code>
            </pre>
          </div>
          <Brain className="absolute -bottom-6 -right-6 text-purple-400 w-12 h-12" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
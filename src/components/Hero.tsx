import React from 'react';
import { Terminal, Brain, Code2, Database } from 'lucide-react';
import profileImage from '../assets/images/IMG_20241015_160315.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="order-2 lg:order-1 space-y-6">
          {/* Profile Image with Floating Animation */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img 
              src={profileImage} 
              alt="Hariom Giri"
              className="profile-image relative rounded-full w-40 h-40 sm:w-48 sm:h-48 object-cover mx-auto border-4 border-purple-400 shadow-lg 
                         animate-float hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4">
            <p className="text-gray-400 mb-2 animate-fade-in">Hello,</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-slide-up">
              This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Hariom Giri</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 animate-slide-up">
              ML Engineer & Full Stack Developer
            </h2>
          </div>

          <p className="text-gray-400 leading-relaxed text-center lg:text-left animate-fade-in">
            A passionate Computer Science student at RGPV, Indore, specializing in Machine Learning 
            and Software Development. Experienced in building predictive models, voice assistants, 
            and web applications using Python, ML libraries, and modern web technologies.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: Brain, text: "Machine Learning" },
              { icon: Code2, text: "Python Development" },
              { icon: Terminal, text: "Web Development" },
              { icon: Database, text: "Data Analysis" }
            ].map((skill, index) => (
              <div key={index} 
                className="flex items-center gap-2 text-gray-300 p-3 rounded-lg bg-purple-900/10 hover:bg-purple-900/20 transition-all duration-300 transform hover:scale-105">
                <skill.icon className="text-purple-400 w-5 h-5" />
                <span>{skill.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="group relative px-6 py-3 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-600 group-hover:bg-purple-700"></div>
              <span className="relative text-white">Contact Me</span>
            </a>
            <a
              href="#projects"
              className="group relative px-6 py-3 rounded-lg overflow-hidden border border-purple-600"
            >
              <div className="absolute inset-0 w-0 bg-purple-600/10 transition-all duration-300 ease-out group-hover:w-full"></div>
              <span className="relative text-purple-400">See My Work</span>
            </a>
          </div>
        </div>

        {/* Right Column - Code Card */}
        <div className="relative order-1 lg:order-2">
          <div className="code-card bg-[#1a1a3f] p-6 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
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
          <Brain className="absolute -bottom-6 -right-6 text-purple-400 w-12 h-12 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
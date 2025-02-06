import React from 'react';
import { Terminal, Brain, Code2, Database } from 'lucide-react';
import profileImage from '../assets/images/profile image.webp';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { theme, currentTheme } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Profile and Text */}
        <div className="order-2 lg:order-1 space-y-6 mt-8 lg:mt-0">
          {/* Profile Image with Floating Animation */}
          <div className="relative group flex justify-center lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img 
              src={profileImage} 
              alt="Hariom Giri"
              className="profile-image relative rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto border-4 border-purple-400 shadow-lg 
                         animate-float hover:scale-105 transition-transform duration-300"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                objectFit: 'cover',
                objectPosition: 'center',
                width: '192px',  // 48 * 4 pixels for retina displays
                height: '192px',
                maxWidth: '100%'
              }}
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4">
            <p style={{ color: currentTheme === 'light' ? '#666666' : '#9CA3AF' }} className="mb-2 animate-fade-in">
              Hello,
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 animate-slide-up px-4 sm:px-0" 
                style={{ color: currentTheme === 'light' ? '#1F2937' : theme.text }}>
              This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Hariom Giri
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-3xl mb-6 animate-slide-up"
                style={{ color: currentTheme === 'light' ? '#4B5563' : '#D1D5DB' }}>
              ML Engineer & Full Stack Developer
            </h2>
          </div>

          <p style={{ color: currentTheme === 'light' ? '#666666' : '#9CA3AF' }} 
             className="leading-relaxed text-center lg:text-left animate-fade-in">
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
                style={{ 
                  backgroundColor: currentTheme === 'light' ? '#F3F4F6' : `${theme.primary}10`,
                  borderColor: currentTheme === 'light' ? '#E5E7EB' : `${theme.primary}30`,
                }}
                className="flex items-center gap-2 p-3 rounded-lg border hover:scale-105 transition-all duration-300"
              >
                <skill.icon style={{ color: theme.primary }} className="w-5 h-5" />
                <span style={{ color: currentTheme === 'light' ? '#4B5563' : theme.text }}>
                  {skill.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="group relative px-6 py-3 rounded-lg overflow-hidden"
              style={{ 
                backgroundColor: theme.primary,
                color: theme.text,
                boxShadow: currentTheme === 'gradient' ? '0 0 20px rgba(0, 198, 255, 0.3)' : 'none'
              }}
            >
              <span className="relative">Contact Me</span>
            </a>
            <a
              href="#projects"
              className="group relative px-6 py-3 rounded-lg overflow-hidden"
              style={{ 
                borderColor: theme.primary,
                color: theme.primary 
              }}
            >
              <span className="relative">See My Work</span>
            </a>
          </div>
        </div>

        {/* Right Column - Code Card */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          <div 
            className="code-card p-6 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 w-full max-w-[500px]"
            style={{ 
              backgroundColor: currentTheme === 'light' ? '#1F2937' : theme.cardBg,
              boxShadow: currentTheme === 'gradient' 
                ? '0 0 30px rgba(0, 198, 255, 0.15)' 
                : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm font-mono overflow-x-auto" style={{ color: '#E5E7EB' }}>
              <code>{`class MLEngineer:
    def __init__(self):
        self.name = "Hariom Giri"
        self.education = "B.Tech CS @ RGPV"
        self.skills = {
            "ML": ["Scikit-learn", "Pandas", 
                  "NumPy", "Matplotlib"],
            "Development": ["Python", "HTML", 
                          "CSS", "JavaScript"]
        }
        
    def get_passion(self):
        return "Building AI Solutions"
        
    def current_focus(self):
        return "Machine Learning & Web Dev"`}</code>
            </pre>
          </div>
          <Brain className="absolute -bottom-6 -right-6 text-purple-400 w-12 h-12 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
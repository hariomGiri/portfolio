import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter, Youtube, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Skills from './components/Skills';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      <nav className="fixed top-0 w-full bg-[#0a0a1f]/80 backdrop-blur-sm z-50 border-b border-purple-900/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-purple-400">HG</a>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-purple-400 hover:text-purple-300"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop menu */}
            <div className="hidden lg:flex gap-6">
              {['ABOUT', 'EXPERIENCE', 'SKILLS', 'EDUCATION', 'PROJECTS'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
            <div className="flex flex-col space-y-4">
              {['ABOUT', 'EXPERIENCE', 'SKILLS', 'EDUCATION', 'PROJECTS'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 py-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <footer className="bg-[#080816] py-6 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition"><Github /></a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition"><Linkedin /></a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition"><Twitter /></a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition"><Youtube /></a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition"><Mail /></a>
          </div>
          <p className="text-gray-500">© 2024 Hariom Giri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
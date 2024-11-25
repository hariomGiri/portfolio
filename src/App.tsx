import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import ScrollToTop from './components/ScrollToTop';
import { useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.background }}>
      <nav 
        className="fixed w-full z-50 py-4"
        style={{ backgroundColor: theme.cardBg }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold" style={{ color: theme.text }}>
              HG
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['ABOUT', 'EXPERIENCE', 'SKILLS', 'EDUCATION', 'PROJECTS'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
              style={{ color: theme.text }}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
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
              <ThemeToggle />
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

      <footer style={{ backgroundColor: theme.cardBg }} className="py-6 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a 
              href="https://github.com/hariomGiri" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <Github />
            </a>
            <a 
              href="http://www.linkedin.com/in/hariom-giri" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <Linkedin />
            </a>
            <a 
              href="mailto:sureshgiri469@gmail.com" 
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <Mail />
            </a>
          </div>
          <p className="text-gray-500">© 2024 Hariom Giri. All rights reserved.</p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;
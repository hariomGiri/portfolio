import React, { useState, useEffect } from 'react';
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
import logo from './assets/images/logo.png'; // Ensure this path is correct
import Loader from './components/Loader'; // Import the Loader component

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true); // State to control loading
  const { theme, currentTheme } = useTheme();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <div style={{ backgroundColor: theme.background }}>
      <nav 
        className="fixed w-full z-50 py-4"
        style={{ backgroundColor: theme.cardBg }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
  <img src={logo} alt="Logo" className="h-12" />
</a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['ABOUT', 'EXPERIENCE', 'SKILLS', 'EDUCATION', 'PROJECTS','CERTIFICATIONS','CONTACT'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative py-2 text-sm font-medium transition-colors duration-300"
                  style={{ 
                    color: currentTheme === 'light' ? '#4B5563' : '#E5E7EB',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = currentTheme === 'light' ? '#4B5563' : '#E5E7EB';
                  }}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-4 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-2xl"
                style={{ color: theme.text }}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
            <div className="flex flex-col space-y-4">
              {['ABOUT', 'EXPERIENCE', 'SKILLS', 'EDUCATION', 'PROJECTS','CERTIFICATIONS','CONTACT'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2 text-sm font-medium transition-colors duration-300"
                  style={{ 
                    color: currentTheme === 'light' ? '#4B5563' : '#E5E7EB',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = currentTheme === 'light' ? '#4B5563' : '#E5E7EB';
                  }}
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
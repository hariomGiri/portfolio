import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';

interface Contact {
  icon: any;
  href: string;
  text: string;
}

const Contact = () => {
  const { theme, currentTheme } = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_wh9ihu1',
      'template_uboaw0t',
      form.current!,
      'hitt4i5eNS2h4nm-w'
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send message. Please try again.');
      console.error(error);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const contacts: Contact[] = [
    {
      icon: Mail,
      href: "mailto:sureshgiri469@gmail.com",
      text: "Email Me"
    },
    {
      icon: Github,
      href: "https://github.com/hariomGiri",
      text: "GitHub"
    },
    {
      icon: Linkedin,
      href: "http://www.linkedin.com/in/hariom-giri",
      text: "LinkedIn"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/918726862025",
      text: "WhatsApp"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 px-4"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.text }}>
          GET IN TOUCH
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            className="p-8 rounded-lg"
            style={{ 
              backgroundColor: theme.cardBg,
              boxShadow: currentTheme === 'gradient' 
                ? `0 4px 20px ${theme.primary}20`
                : '0 4px 20px rgba(0, 0, 0, 0.1)'
            }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2 text-sm font-medium"
                  style={{ color: theme.text }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  className="w-full p-3 rounded-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: `${theme.primary}10`,
                    color: theme.text,
                    borderColor: `${theme.primary}30`
                  }}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2 text-sm font-medium"
                  style={{ color: theme.text }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="w-full p-3 rounded-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: `${theme.primary}10`,
                    color: theme.text,
                    borderColor: `${theme.primary}30`
                  }}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-2 text-sm font-medium"
                  style={{ color: theme.text }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 rounded-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: `${theme.primary}10`,
                    color: theme.text,
                    borderColor: `${theme.primary}30`
                  }}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: theme.primary,
                  color: theme.text,
                  boxShadow: currentTheme === 'gradient' 
                    ? `0 0 20px ${theme.primary}40`
                    : 'none'
                }}
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: theme.cardBg,
                  boxShadow: currentTheme === 'gradient' 
                    ? `0 4px 20px ${theme.primary}20`
                    : '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
                className="p-6 rounded-lg hover:scale-105 transition-all duration-300 flex items-center gap-4"
              >
                <contact.icon style={{ color: theme.primary }} className="w-6 h-6" />
                <span style={{ color: theme.text }}>{contact.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Initialize with your new public key
    emailjs.init("hitt4i5eNS2h4nm-w");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Hariom Giri",
        reply_to: formData.email
      };

      await emailjs.send(
        'service_wh9ihu1',
        'template_uboaw0t',
        templateParams,
        'hitt4i5eNS2h4nm-w'
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      toast.success('Message sent successfully!');
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      toast.error(error.text || 'Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#0d0d24]">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">CONTACT WITH ME</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a3f] rounded-lg border border-purple-900/20 p-3 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a3f] rounded-lg border border-purple-900/20 p-3 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-[#1a1a3f] rounded-lg border border-purple-900/20 p-3 text-white focus:outline-none focus:border-purple-400"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition flex items-center gap-2 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </form>
          <div className="space-y-6">
            <div className="bg-[#1a1a3f] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6 text-gray-300">
                <div className="flex items-center gap-3">
                  <Mail className="text-purple-400" />
                  <p>sureshgiri469@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-purple-400" />
                  <p>+91 8726862025</p>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-purple-400" />
                  <a 
                    href="https://wa.me/918726862025" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    WhatsApp Me
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1a3f] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Work Availability</h3>
              <p className="text-gray-300">
                I'm currently available for full time and part time work.
                Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
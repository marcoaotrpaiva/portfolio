'use client';

import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { FaPaperPlane, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('📨 Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen bg-[#101D25] text-white px-6 md:px-32 pt-32 pb-52 flex flex-col items-center justify-center"
      >
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#1A2A33',
              color: '#F2D0CA',
              fontFamily: 'Montserrat, sans-serif',
              padding: '12px 16px',
              fontSize: '14px',
              border: '1px solid #F2D0CA',
              borderRadius: '12px',
            },
            iconTheme: {
              primary: '#F2D0CA',
              secondary: '#101D25',
            },
          }}
        />

        {/* Título + Formulário */}
        <div className="flex flex-col items-center w-full max-w-4xl space-y-40">
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-light tracking-widest text-center text-[#D4D4D4] mb-24"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Contacto
          </motion.h2>

          {/* Formulário */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="w-full flex flex-col gap-6 p-10 bg-[#0f1a22] rounded-3xl shadow-[0_10px_40px_rgba(242,208,202,0.08)] border border-[#2e3a45] backdrop-blur-md"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 px-6 py-4 rounded-xl bg-[#1C2B33] border border-[#2e3a45] text-white placeholder-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#F2D0CA]/50 focus:ring-offset-2 focus:ring-offset-[#101D25] shadow-inner"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 px-6 py-4 rounded-xl bg-[#1C2B33] border border-[#2e3a45] text-white placeholder-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#F2D0CA]/50 focus:ring-offset-2 focus:ring-offset-[#101D25] shadow-inner"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="px-6 py-4 rounded-xl bg-[#1C2B33] border border-[#2e3a45] text-white placeholder-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#F2D0CA]/50 focus:ring-offset-2 focus:ring-offset-[#101D25] shadow-inner"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="px-6 py-4 rounded-xl bg-[#1C2B33] border border-[#2e3a45] text-white placeholder-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#F2D0CA]/50 focus:ring-offset-2 focus:ring-offset-[#101D25] shadow-inner"
              required
            />

            <button
              type="submit"
              className="self-end px-8 py-3 rounded-full border border-[#F2D0CA] text-[#F2D0CA] font-semibold tracking-wider hover:bg-[#F2D0CA] hover:text-[#101D25] shadow-xl hover:shadow-[#F2D0CA]/30 transition-all duration-300 flex items-center gap-2 group"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <FaPaperPlane className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1a22] text-[#c4c4c4] text-center py-8 border-t border-[#2e3a45]">
        <div className="flex justify-center gap-6 mb-4">
          
          <a href="https://www.linkedin.com/in/marco-paiva-b7177622a/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:marcoaotrpaiva@gmail.com" className="hover:text-white transition-colors">
            <FaEnvelope size={20} />
          </a>
        </div>
        <p className="text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          &copy; {new Date().getFullYear()} Marco Paiva. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;

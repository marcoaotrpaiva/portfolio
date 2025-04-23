'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }),
      { threshold: 0.6 }
    );
    sections.forEach(sec => observer.observe(sec));
    return () => sections.forEach(sec => observer.unobserve(sec));
  }, []);

  const topButtons = [
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <section id="home" className="h-screen bg-[#101D25] relative overflow-hidden pt-32 pb-4">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-[#101D25]/70">
        <div className="container mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-20 py-4">
          <div className="text-2xl font-semibold tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif", color: '#F2D0CA' }}>
            MP
          </div>
          <nav className="hidden md:flex gap-4 text-sm">
            {topButtons.map(({ label, href }) => {
              const sectionId = href.replace('#', '');
              const isContact = label === 'Contacto';
              const isActive = activeSection === sectionId;
              return (
                <a key={label} href={href} aria-label={label}>
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                    className={`px-4 py-1 rounded-full border backdrop-blur-sm transition ${isActive ? 'border-white text-white' : 'text-[#F2D0CA] border-[#F2D0CA]'} ${isContact ? 'font-semibold bg-gradient-to-r from-[#F2D0CA] to-[#F2C3BF] text-black' : 'font-normal'}`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {label}
                  </motion.button>
                </a>
              );
            })}
          </nav>
          <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F2D0CA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F2D0CA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-[#101D25]/80 backdrop-blur-md">
            <div className="flex flex-col items-center space-y-4 py-4">
              {topButtons.map(({ label, href }) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)} className="text-lg font-medium text-[#F2D0CA] hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-20 pt-12 pb-10">
        {/* Mobile image above text */}
        <motion.div
          className="block md:hidden w-[300px] h-[300px] mx-auto relative mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/profile-picture.png"
            alt="Retrato"
            fill
            className="object-cover rounded-full drop-shadow-4xl"
          />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Text Section */}
          <motion.div
            className="w-full md:w-[60%] text-center md:text-left md:ml-[0px] md:mt-[-160px] flex flex-col items-center md:items-start"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-4xl sm:text-4xl md:text-6xl lg:text-[85px] font-thin leading-tight text-[#878483] mt-12 md:mt-0"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="font-bold text-[#F2D0CA] whitespace-nowrap md:tracking-[5px] tracking-[2px]">
                Marco Paiva
              </span>
            </h1>

            <p
              className="text-sm sm:text-base flex flex-wrap gap-3 mb-6 ml-1 justify-center md:justify-start"
              style={{ fontFamily: "'Montserrat', sans-serif", color: '#878483', opacity: 0.5, letterSpacing: '5.9px', fontSize: '17px' }}
            >
              <span className="hidden md:inline">Designer UI/UX</span>
              <span className="hidden md:inline">&</span>
              <span className="font-extralight text-[#F2D0CA]">Criador Visual</span>
            </p>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block  px-9 py-2.5 rounded-full border border-[#F2D0CA] overflow-hidden group transition-all duration-500 font-semibold tracking-wide opacity-80 mt-6 md:mt-12"
              style={{ fontFamily: "'Montserrat', sans-serif", background: 'linear-gradient(to right, rgba(242,208,202,0) 0%, rgba(242,208,202,1) 50%, rgba(242,208,202,0) 100%)', color: '#101D25' }}
            >
              <span className="relative z-10 group-hover:text-[#101D25] ">Projetos</span>
            </motion.a>
          </motion.div>

          {/* Desktop image right */}
          <motion.div
            className="hidden md:block relative w-[691px] h-[889px] translate-x-[100px] translate-y-[-80px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#101D25] to-transparent z-30" />
            <Image src="/images/profile-picture.png" alt="Retrato de Marco Paiva" fill className="object-cover rounded-[24px] drop-shadow-4xl" priority />
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#101D25] to-transparent z-30 rounded-b-[24px]" />
            <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#101D25] to-transparent z-30 rounded-r-[24px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

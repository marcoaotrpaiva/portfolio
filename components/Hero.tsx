'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const topButtons = [
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <section
      id="home"
      className="w-full overflow-x-hidden min-h-screen bg-[#101D25] relative pt-20 px-4 sm:px-6 md:px-12"
    >
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-[#101D25]/70">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-20 py-3">
          <div
            className="text-xl sm:text-2xl font-semibold tracking-widest"
            style={{ fontFamily: "'Montserrat', sans-serif", color: '#F2D0CA' }}
          >
            MP
          </div>
          <div className="flex gap-1 sm:gap-2 text-xs sm:text-sm px-1 sm:px-0">
            {topButtons.map(({ label, href }) => {
              const sectionId = href.replace('#', '');
              const isContact = label === 'Contacto';
              const isActive = activeSection === sectionId;
              return (
                <a key={label} href={href} aria-label={`Ir para a secção ${label}`}>
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                    className={`px-3 py-1 rounded-full border transition-all duration-300 backdrop-blur-sm ${
                      isActive ? 'border-white text-white' : 'text-[#F2D0CA] border-[#F2D0CA]'
                    } ${isContact ? 'font-semibold bg-gradient-to-r from-[#F2D0CA] to-[#F2C3BF] text-black' : 'font-normal'}`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {label}
                  </motion.button>
                </a>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="flex flex-col items-center justify-center gap-6 pt-10 pb-16 md:pt-28 md:flex-row md:justify-between md:items-center">
        {/* Mobile Image */}
        <motion.div
          className="block md:hidden w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/images/profile-picture.png"
            alt="Retrato de Marco Paiva"
            width={140}
            height={140}
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-[28px] sm:text-[36px] md:text-[72px] leading-snug font-thin mb-4"
            style={{ fontFamily: 'var(--font-montserrat)', color: '#878483' }}
          >
            <span className="inline-block">
              Olá!{' '}
              <span className="inline-block animate-wiggle" style={{ transformOrigin: '70% 70%' }}>
                👋
              </span>
            </span>
            <br />
            <span className="inline-block">
              Sou o{' '}
              <span className="font-bold text-[#F2D0CA]">Marco&nbsp;Paiva</span>
            </span>
          </h1>
          <p
            className="text-xs sm:text-sm flex flex-wrap justify-center md:justify-start gap-2 mb-5"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#878483',
              opacity: 0.6,
              letterSpacing: '1.5px',
            }}
          >
            <span>Designer UI/UX</span>
            <span>&</span>
            <span className="font-extralight text-[#F2D0CA]">Criador Visual</span>
          </p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full border border-[#F2D0CA] overflow-hidden group transition-all duration-500 font-semibold tracking-wider opacity-80"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              background: 'linear-gradient(to right, rgba(242, 208, 202, 0) 0%, rgba(242, 208, 202, 1) 50%, rgba(242, 208, 202, 0) 100%)',
              color: '#101D25',
            }}
          >
            <span className="relative z-10 group-hover:text-[#101D25]">Projetos</span>
            <span
              className="absolute inset-0 z-0 bg-gradient-to-r from-[#f2d0ca00] via-[#f2c3bf] to-[#f2d0ca00] bg-[length:200%] bg-left opacity-0 group-hover:opacity-100 group-hover:bg-right transition-all duration-700 rounded-full"
              aria-hidden="true"
            />
          </motion.a>
        </motion.div>

        {/* Desktop Image */}
        <motion.div
          className="hidden md:block relative w-[600px] h-[800px] translate-x-[40px] translate-y-[-30px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#101D25] to-transparent z-30" />
          <Image
            src="/images/profile-picture.png"
            alt="Retrato de Marco Paiva"
            fill
            className="object-cover rounded-[24px] drop-shadow-4xl"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#101D25] to-transparent z-30 rounded-b-[24px]" />
          <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#101D25] to-transparent z-30 rounded-r-[24px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

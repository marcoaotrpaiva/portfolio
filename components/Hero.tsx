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
      className="container mx-auto bg-[#101D25] min-h-screen pt-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32"
    >
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-[#101D25]/70">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-20 py-4">
          <div
            className="text-2xl font-semibold tracking-widest"
            style={{ fontFamily: "'Montserrat', sans-serif", color: '#F2D0CA' }}
          >
            MP
          </div>
          <div className="flex gap-2 text-xs sm:text-sm">
            {topButtons.map(({ label, href }) => {
              const sectionId = href.replace('#', '');
              const isContact = label === 'Contacto';
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={`Ir para a secção ${label}`}
                >
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                    className={`px-4 py-1 rounded-full border transition-all duration-300 backdrop-blur-sm ${
                      isActive
                        ? 'border-white text-white'
                        : 'text-[#F2D0CA] border-[#F2D0CA]'
                    } ${
                      isContact
                        ? 'font-semibold bg-gradient-to-r from-[#F2D0CA] to-[#F2C3BF] text-black'
                        : 'font-normal'
                    }`}
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
      <div className="flex flex-col items-center justify-center gap-6 pt-12 pb-20 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 md:flex-row md:justify-between">
        {/* Mobile Image */}
        <motion.div
          className="block md:hidden w-32 sm:w-40 md:w-48 lg:w-56 aspect-square rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/images/profile-picture.png"
            alt="Retrato de Marco Paiva"
            width={160}
            height={160}
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-snug font-thin mb-6"
            style={{ fontFamily: 'var(--font-montserrat)', color: '#878483' }}
          >
            <span className="inline-block">
              Olá!{' '}
              <span
                className="inline-block animate-wiggle"
                style={{ transformOrigin: '70% 70%' }}
              >
                👋
              </span>
            </span>
            <br />
            <span className="inline-block">
              Sou o{' '}
              <span className="font-bold text-[#F2D0CA]">Marco Paiva</span>
            </span>
          </h1>
          <p
            className="text-sm sm:text-base flex flex-wrap justify-center md:justify-start gap-2 mb-6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#878483',
              opacity: 0.6,
              letterSpacing: '2px',
            }}
          >
            <span>Designer UI/UX</span>
            <span>&</span>
            <span className="font-extralight text-[#F2D0CA]">
              Criador Visual
            </span>
          </p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block text-sm sm:text-base px-6 sm:px-8 py-2.5 rounded-full border border-[#F2D0CA] overflow-hidden group transition-all duration-500 font-semibold tracking-wider opacity-80"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              background:
                'linear-gradient(to right, rgba(242, 208, 202, 0) 0%, rgba(242, 208, 202, 1) 50%, rgba(242, 208, 202, 0) 100%)',
              color: '#101D25',
            }}
          >
            <span className="relative z-10 group-hover:text-[#101D25]">
              Projetos
            </span>
            <span
              className="absolute inset-0 z-0 bg-gradient-to-r from-[#f2d0ca00] via-[#f2c3bf] to-[#f2d0ca00] bg-[length:200%] bg-left opacity-0 group-hover:opacity-100 group-hover:bg-right transition-all duration-700 rounded-full"
              aria-hidden="true"
            />
          </motion.a>
        </motion.div>

        {/* Desktop Image */}
        <motion.div
          className="hidden md:block relative w-60 sm:w-72 md:w-96 lg:w-[600px] aspect-[3/4] rounded-[24px] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#101D25] to-transparent z-30" />
          <Image
            src="/images/profile-picture.png"
            alt="Retrato de Marco Paiva"
            fill
            className="object-cover"
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

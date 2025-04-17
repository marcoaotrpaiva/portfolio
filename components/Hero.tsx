'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Hero = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const topButtons = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <section className="h-screen bg-[#101D25] relative overflow-hidden pt-[80px]" id="home">
      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 z-50 px-4 sm:px-6 md:px-[90px] py-[18px] flex justify-between items-center backdrop-blur-md bg-[#101D25]/70">
        {/* Logo */}
        <div
          className="text-2xl font-semibold tracking-widest ml-0 md:ml-[260px]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: '#F2D0CA',
          }}
        >
          MP
        </div>

        {/* Desktop nav */}
        <div className="hidden sm:flex gap-5 text-sm mr-0 md:mr-[65px]">
          {topButtons.map(({ label, href }) => {
            const sectionId = href.replace('#', '');
            const isContact = label === 'Contact';
            const isActive = activeSection === sectionId;

            return (
              <a key={label} href={href} aria-label={`Ir para a secção ${label}`}>
                <motion.button
                  whileHover={{
                    scale: 1.07,
                    backgroundColor: isContact ? '#f2c3bf' : 'rgba(242, 208, 202, 0.1)',
                    color: isContact ? '#000000' : '#F2D0CA',
                    boxShadow: isContact
                      ? '0 2px 12px rgba(242, 208, 202, 0.25)'
                      : '0 1px 6px rgba(242, 208, 202, 0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                  className={`px-5 py-1.5 rounded-full border transition-all duration-300 ${
                    isActive ? 'border-white text-white' : ''
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2D0CA] ${
                    isContact ? 'font-semibold' : 'font-normal'
                  }`}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    background: isContact
                      ? 'linear-gradient(90deg, #F2D0CA, #F2C3BF)'
                      : 'transparent',
                    color: isContact ? '#000000' : '#F2D0CA',
                    borderColor: isContact ? 'transparent' : '#F2D0CA',
                  }}
                >
                  {label}
                </motion.button>
              </a>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-[#F2D0CA] text-2xl focus:outline-none"
            aria-label="Abrir/fechar menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[80px] left-0 w-full bg-[#101D25] flex flex-col items-center gap-4 py-4 sm:hidden z-40"
        >
          {topButtons.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F2D0CA] text-base font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}

      {/* Main content */}
      <div className="flex flex-col md:flex-row h-full items-center justify-center md:justify-between px-4 sm:px-6 md:px-32 pt-12 md:pt-20 pb-10 gap-6">
        {/* Left content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[540px] text-center md:text-left md:ml-[260px]"
        >
          <h1
            className="text-[26px] sm:text-[38px] md:text-[75px] font-light leading-tight"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#878483',
            }}
          >
            Olá!{' '}
            <span
              className="inline-block animate-wiggle"
              style={{ transformOrigin: '70% 70%' }}
            >
              👋
            </span>
            <br />
            Sou o{' '}
            <span
              className="font-bold whitespace-nowrap"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: '#F2D0CA',
              }}
            >
              Marco&nbsp;Paiva
            </span>
          </h1>

          {/* Subtítulo animado */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-sm sm:text-base mt-3"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#878483',
              opacity: 0.5,
              lineHeight: '1',
              display: 'flex',
              gap: '22px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              letterSpacing: '2.89px',
            }}
          >
            <span>Designer UI/UX</span>
            <span>&</span>
            <span style={{ color: '#F2D0CA', fontWeight: '200' }}>Criador Visual</span>
          </motion.p>

          {/* Botão animado */}
          <motion.a
            href="#projects"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#f2d0ca10',
              boxShadow: '0 4px 14px rgba(242, 208, 202, 0.25)',
            }}
            className="inline-block mt-10 px-6 py-2 rounded-full border border-[#F2D0CA] backdrop-blur-sm"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#F2D0CA',
              fontWeight: 500,
              letterSpacing: '2px',
            }}
          >
            Projects
          </motion.a>
        </motion.div>

        {/* Right image (desktop only) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="hidden md:block relative w-[691px] h-[889px] translate-x-[40px] translate-y-[-30px]"
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

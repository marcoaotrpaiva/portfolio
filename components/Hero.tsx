'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const [activeSection, setActiveSection] = useState('');

  const topButtons = [
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
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
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <section className="h-screen bg-[#101D25] relative overflow-hidden pt-[80px]" id="home">
      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 z-50 px-[90px] py-[18px] flex justify-between items-center backdrop-blur-md bg-[#101D25]/70 ">
        {/* Logo */}
        <div
          className="text-2xl font-semibold tracking-widest ml-[260px]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: '#F2D0CA',
          }}
        >
          MP
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-5 text-sm mr-[65px]">
          {topButtons.map(({ label, href }) => {
            const sectionId = href.replace('#', '');
            const isContact = label === 'Contacto';
            const isActive = activeSection === sectionId;

            return (
              <a key={label} href={href} aria-label={`Ir para a secção ${label}`}>
                <motion.button
  whileHover={{
    scale: 1.07,
    backgroundColor: isContact ? '#f2c3bf' : 'rgba(242, 208, 202, 0.1)',
    color: isContact ? '#000000' : '#F2D0CA',
    boxShadow: isContact
      ? '0 4px 12px rgba(242, 208, 202, 0.3)'
      : '0 2px 8px rgba(242, 208, 202, 0.15)',
  }}
  whileFocus={{
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(242, 208, 202, 0.4)',
  }}
  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
  className={`px-5 py-1.5 rounded-full border border-[#F2D0CA] transition-all duration-300 backdrop-blur-sm ${
    isActive ? 'border-white text-white' : ''
  } ${isContact ? 'font-semibold' : 'font-normal'}`}
  style={{
    fontFamily: "'Montserrat', sans-serif",
    background: isContact
      ? 'linear-gradient(90deg, #F2D0CA, #F2C3BF)'
      : 'transparent',
    color: isContact ? '#000000' : '#F2D0CA',
  }}
>
  {label}
</motion.button>

              </a>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row h-full items-center justify-between px-6 md:px-32 pt-12 pb-10 gap-1">
        {/* Left content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1920px] md:ml-55 mb-22"
        >
          <h1
  className="text-[38px] md:text-[75px] font-extralight leading-[1.05] tracking-wide"
  style={{ fontFamily: 'var(--font-montserrat)', color: '#878483' }}
>
  <span className="font-light text-[72px]" style={{lineHeight: '0'}}>Olá!</span>{' '}
  <span className="inline-block animate-wiggle" style={{ transformOrigin: '70% 70%' }}>
    👋
  </span>
            <br />
            <span className="font-light text-[72px]"> Sou o </span>
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

          <p
            className="text-base mt-2.5 ml-1"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#878483',
              opacity: 0.5,
              lineHeight: '1',
              display: 'flex',
              gap: '22px',
              flexWrap: 'wrap',
              letterSpacing: '2.89px',
            }}
          >
            <span style={{ color: '#878483' }}>Designer UI/UX</span>
            <span style={{ margin: '0 4px' }}>&</span>
            <span style={{ color: '#F2D0CA', fontWeight: '200' }}>Criador Visual</span>
          </p>

          <motion.a
  href="#projects"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="relative inline-block mt-15 ml-15 px-8 py-2.5 rounded-full border border-[#F2D0CA] overflow-hidden group transition-all duration-500"
  style={{
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    letterSpacing: '1.5px',
    background: 'linear-gradient(to right, rgba(242, 208, 202, 0) 0%, rgba(242, 208, 202, 1) 50%, rgba(242, 208, 202, 0) 100%)',
    color: '#101D25',
    opacity: 0.6,
  }}
>
  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#101D25]">
    Projetos
  </span>
  <span
    className="absolute inset-0 z-0 bg-gradient-to-r from-[#f2d0ca00] via-[#f2c3bf] to-[#f2d0ca00] bg-[length:200%] bg-left opacity-0 group-hover:opacity-100 group-hover:bg-right transition-all duration-700 rounded-full"
    aria-hidden="true"
  />
</motion.a>








        </motion.div>

        {/* Right image */}
        <motion.div
          
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
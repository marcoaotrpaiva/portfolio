'use client';

import { motion } from 'framer-motion';
import {
  FaUniversity,
  FaBriefcase,
  FaLaptopCode,
} from 'react-icons/fa';

/*  animações reutilizáveis  */
const slide = (dir: 'l' | 'r') => ({
  hidden: { opacity: 0, x: dir === 'l' ? -40 : 40 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * .15, duration: .55, ease: 'easeOut' },
  }),
});

/*  conteúdo  */
const STEPS = [
  {
    icon: FaUniversity,
    text: (
      <>
        Entusiasta do design &amp; desenvolvimento web.<br />
        Estudante da&nbsp;
        <span className="mark">Universidade do Algarve</span> —
        Licenciatura de Engenharia de Sistemas e Tecnologias Informáticas.
      </>
    ),
  },
  {
    icon: FaBriefcase,
    text: (
      <>
        Estagiário na <span className="mark">Deloitte</span> há&nbsp;
        <span className="mark">3&nbsp;anos</span>, participando em
        projectos reais que aceleraram o meu crescimento
        profissional.
      </>
    ),
  },
  {
    icon: FaLaptopCode,
    text: (
      <>
        À procura de desafios como&nbsp;
        <span className="mark">Designer UI/UX</span> ou&nbsp;
        <span className="mark">Full‑Stack&nbsp;Developer</span> ―
        apaixonado por transformar ideias em produtos belos,
        funcionais e acessíveis.
      </>
    ),
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-[#101D25] text-[#D0D0D0] px-6 sm:px-12 md:px-24 lg:px-32 py-40"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="text-center font-light tracking-[.08em] text-4xl sm:text-5xl mb-28"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Sobre Mim
      </motion.h2>

      {/* linha vertical */}
      <div className="relative mx-auto max-w-4xl">
        <span className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#F2D0CA]/40 to-transparent pointer-events-none" />

        <ul className="flex flex-col gap-24">
          {STEPS.map(({ icon: Icon, text }, i) => {
            const left = i % 2 === 0;
            return (
              <motion.li
                key={i}
                custom={i}
                variants={slide(left ? 'l' : 'r')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: .5 }}
                className={`
                  relative flex ${left ? 'pr-1' : 'pl-1'}
                  ${left ? 'md:justify-end' : 'md:justify-start'}
                `}
              >
                {/* ponto na linha */}
                <span className="absolute left-1/2 -translate-x-1/2 top-8 h-4 w-4 rounded-full bg-[#F2D0CA]" />

                {/* cartão */}
                <div
                  className={`
                    group max-w-[980px] md:w-1/2
                    rounded-2xl border border-white/8 bg-white/5
                    backdrop-blur-sm p-5 flex gap-6 items-start
                    hover:shadow-[0_6px_24px_rgba(242,208,202,.15)]
                    transition
                  `}
                >
                  {/* ícone */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#F2D0CA]/15 text-[#F2D0CA]">
                    <Icon size={34} />
                  </div>

                  {/* texto */}
                  <p
                    className="leading-relaxed tracking-wide text-[17px]"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    {text}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}



'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type Project = {
  id: number;
  title: string;
  image: string;
};

const projects: Project[] = [
  { id: 1, title: 'The best way to learn is by doing.', image: '/images/image-6.png' },
  { id: 2, title: 'Restaurante À do João', image: '/images/image-2.png' },
  { id: 3, title: 'Black Friday discounts are here', image: '/images/image-3.png' },
  { id: 4, title: 'Have great meetings effortlessly.', image: '/images/image-4.png' },
  { id: 5, title: 'Raising well-rounded children', image: '/images/image-5.png' },
  { id: 6, title: 'Spread green in your life.', image: '/images/image-1.png' },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      className="bg-[#101D25] text-white py-40 px-6 md:px-20 lg:px-28 xl:px-36"
      id="projects"
      ref={ref}
    >
      <h2 className="text-5xl sm:text-6xl font-light tracking-widest text-center text-[#D4D4D4] mb-24" style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Projetos
      </h2>

      <div className="grid max-w-[1600px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="relative w-full aspect-[5/3] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-500 ease-in-out hover:-translate-y-2 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } } : {}}
            onClick={() => setActiveProject(project)}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-75"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              quality={100}
              priority
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
  {activeProject && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setActiveProject(null)}
    >
      <motion.div
        className="relative w-full max-w-6xl max-h-[90vh] aspect-[4/3] rounded-xl overflow-hidden bg-[#101D25]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={activeProject?.image || ''}
          alt={activeProject?.title || ''}
          fill
          className="object-contain"
          sizes="90vw"
          quality={100}
          priority
        />
        <button
          onClick={() => setActiveProject(null)}
          className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/40 px-4 py-1 rounded-full text-sm transition"
        >
          Fechar
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}
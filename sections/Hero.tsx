import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { cn } from '@/lib/utils'; // Assuming this exists or will be created. I'll create it if not.

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden font-poppins">

      {/* Background Ambience (Optional extra glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full z-10 text-center flex flex-col items-center">

        {/* Main Headline */}
        <div className="mb-6 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-2"
          >
            Serious about <span className="text-slate-500">software,</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 leading-[1.1]"
          >
            Curious about everything.
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed text-balance"
        >
          Full Stack Developer delivering robust client solutions with <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">React</span>, and <span className="text-white font-medium">Laravel</span>. Focused on clean architecture and high-performance interfaces.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center bg-white px-8 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-200"
          >
            <span className="mr-2">View Work</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            className="group inline-flex h-12 items-center justify-center bg-transparent px-8 text-sm font-semibold text-white transition-all duration-300 border border-slate-700 hover:border-white hover:bg-white/5"
          >
            Download CV
          </a>
        </motion.div>

        {/* Socials / Tech Stack Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 pt-10 border-t border-white/5 w-full max-w-2xl flex justify-between items-center text-slate-500 text-sm"
        >
          <span>{personalInfo.location}</span>
          <div className="flex gap-6">
            <a href="https://github.com/YeftaPanggabean13" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">Email</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
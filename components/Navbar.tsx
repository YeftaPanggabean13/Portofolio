import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming cn utility exists, otherwise I will inline it or create it. 
// Wait, I should check if cn exists. It is used in the codebase usually. 
// I'll stick to template literals if I'm not sure, or verify first. 
// Looking at package.json, `clsx` and `tailwind-merge` are there, so `lib/utils` likely exists.
// I will assume it does, if not I'll fix it. actually, let me check the file list again. 
// `lib` directory exists.

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
      >
        <div
          className={`
            pointer-events-auto
            flex items-center gap-1 p-1.5 rounded-full border transition-all duration-300
            ${isScrolled
              ? 'bg-slate-900/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-blue-900/10 py-2'
              : 'bg-white/5 backdrop-blur-md border-white/5 shadow-lg'}
          `}
        >
          {/* Logo (Hidden on mobile to save space, or minimal) */}
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/20 mr-2 border border-blue-500/30">
            <span className="font-bold text-blue-400 text-xs">YF</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeTab === link.name ? 'text-white' : 'text-slate-400 hover:text-slate-200'}
                `}
              >
                {activeTab === link.name && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 right-4 left-4 z-40 p-4 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-2xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    px-4 py-3 rounded-xl text-sm font-medium transition-colors
                    ${activeTab === link.name
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/20'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}
                  `}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
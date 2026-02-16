import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showName, setShowName] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setShowName(true);
    }, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [lastScrollY]); 

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`
      fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none
      transition-all duration-500 ease-in-out
      ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0'}
    `}>
      <div 
        className={`
          flex items-center justify-between w-full max-w-5xl px-6 py-2.5
          rounded-full border pointer-events-auto transition-all duration-500
          ${isScrolled 
            ? 'bg-slate-900/60 backdrop-blur-md border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : 'bg-white/5 backdrop-blur-sm border-white/10 shadow-lg'}
        `}
      >
        {/* Logo & Name Container */}
        <div className="flex items-center relative h-10">
          <div className="flex h-10 w-10 items-center justify-center z-10 bg-transparent">
            <img 
              src="src/images/LogoYefta-noBG.png" 
              alt="Logo Yefta" 
              className="h-full w-full object-contain"
            />
          </div>

          <span className={`
            text-[10px] font-bold tracking-[0.25em] text-white uppercase 
            transition-all duration-1000 ease-out
            ${showName 
              ? 'opacity-100 translate-x-3 w-auto' 
              : 'opacity-0 translate-x-2.5 w-0'}
          `}>
            YEFTA Panggabean
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button className="text-slate-400 p-1 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
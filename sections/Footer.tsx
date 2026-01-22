
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter">
            YEFTA<span className="text-blue-500">.</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">About</a>
            <a href="#projects" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Contact</a>
          </div>
          
          <div className="h-px w-24 bg-slate-800"></div>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Yefta Febrianto Panggabean. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-700 font-mono uppercase tracking-[0.2em]">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { personalInfo } from '../data/portfolioData';
import Button from '../components/Button';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* PHOTO */}
          <div className="flex justify-center md:order-last">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
              
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 backdrop-blur-sm p-3">
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[1.5rem] grayscale-20 hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Status Badge
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400/90">
                Available for work
              </span>
            </div> */}

            {/* Typography Update: Text Gradient & Tight Tracking */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-7xl font-bold tracking-[-0.04em] leading-[1.05] text-white">
                Serious about <span className="text-slate-500">software,</span> <br />
                Curious about <span className="bg-linear-to-br from-blue-400 to-indigo-500 bg-clip-text text-transparent">everything.</span>
              </h1>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button
                asLink
                href="#projects"
                size="lg"
                className="rounded-full bg-white text-black hover:bg-slate-200 px-8 shadow-xl transition-all"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                }
              >
                View Work
              </Button>

              <Button 
                asLink
                href="/cv.pdf"
                external
                variant="secondary"
                size="lg"
                className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md px-8"
              >
                Download CV
              </Button>
            </div>

            {/* Socials & Location */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/5 w-full justify-center md:justify-start text-slate-500">
              <div className="flex gap-5">
                <a href="https://github.com/yeftafebrianto" target="_blank" className="hover:text-white transition-all transform hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-all transform hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </a>
              </div>
              <div className="h-4 w-px bg-white/10"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                {personalInfo.location}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
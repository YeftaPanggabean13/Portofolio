import React from 'react';
import { personalInfo } from '../data/portfolioData';
import Button from '../components/Button';
import LightRays from '@/components/LightRays';


const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 px-6 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* PHOTO */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-2 bg-blue-500/20 rounded-3xl blur-xl"></div>
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="relative w-56 h-56 md:w-64 md:h-64 object-cover rounded-3xl border border-slate-800 bg-slate-900"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-6 max-w-xl">

            <span className="text-sm font-mono uppercase tracking-widest text-blue-400">
              Hello, I’m
            </span>

            <h1 className="text-3xl md:text-4xl font-semibold text-slate-100 leading-tight">
              {personalInfo.name}
            </h1>

            <h2 className="text-lg md:text-xl text-slate-400 font-medium">
              {personalInfo.role}
            </h2>

            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Button
                asLink
                href="#projects"
                size="lg"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              >
                Download CV
              </Button>
            </div>


            <div className="flex items-center gap-5 mt-6">
              <a
                href="https://github.com/yeftafebrianto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                {/* GitHub Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {/* Mail Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>

              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                {personalInfo.location}
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute -z-10 top-1/3 right-0 w-100 h-100 bg-blue-500/10 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default Hero;

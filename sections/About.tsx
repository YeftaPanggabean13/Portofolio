
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { personalInfo, education } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="My journey in tech is driven by curiosity and a relentless desire to build meaningful digital products."
        />
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I focus on solving real-world problems through clean architecture and user-friendly interfaces. My experience spans from academic research as a Lecturer's Assistant to enterprise-level software development, giving me a unique perspective on both theory and application.
            </p>
            
            <div className="p-6 bg-slate-950/50 border border-slate-800 rounded-xl">
             <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M22 10v6" />
                <path d="M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Education
            </h3>

              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <h4 className="font-semibold text-slate-200">{education.university}</h4>
                  <p className="text-slate-400">{education.major}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg font-mono text-sm border border-blue-500/20">
                    GPA: {education.gpa}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold mb-6">Snapshots</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-blue-500">Enterprise Project</div>
                  <div className="text-slate-400">PT Sarana Multi Infrastruktur (SMI)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">Full-Stack Focus</div>
                  <div className="text-slate-400">React · Laravel · REST APIs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">Agile SCRUM</div>
                  <div className="text-slate-400">Sprint-based team collaboration</div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default About;

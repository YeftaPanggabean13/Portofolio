
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { personalInfo, education } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="Building software with clean architecture and user-centric design."
        />
        
        <div className="grid md:grid-cols-3 gap-8 items-start mt-12">
          <div className="md:col-span-2 space-y-8">
            <p className="text-lg text-slate-400 leading-relaxed">
              {personalInfo.summary}
            </p>
            
            {/* EDUCATION CARD - Standardized */}
            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-slate-700 transition-colors">
              <h3 className="text-sm uppercase tracking-widest text-blue-400 font-bold mb-6 flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5"/></svg>
                Education
              </h3>
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                <div>
                  <h4 className="text-xl font-bold text-slate-100">{education.university}</h4>
                  <p className="text-slate-400 mt-1">{education.major}</p>
                </div>
                <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full font-mono text-sm border border-blue-500/20">
                  GPA: {education.gpa}
                </span>
              </div>
            </div>
          </div>
          
          {/* SNAPSHOTS CARD - Standardized */}
          <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <h3 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-8">Snapshots</h3>
            <div className="space-y-8">
              {[
                { label: "Enterprise Project", val: "PT SMI (Persero)" },
                { label: "Full-Stack Focus", val: "React · Laravel · SQL" },
                { label: "Methodology", val: "Agile SCRUM" }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="text-xs text-slate-500 mb-1 uppercase tracking-tighter">{item.label}</div>
                  <div className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{item.val}</div>
                </div>
              ))}
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default About;

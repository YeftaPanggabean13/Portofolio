import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { skills, achievements } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* TECHNICAL SKILLS */}
        <div>
          <SectionTitle 
            title="Technical Skills" 
            subtitle="A comprehensive toolkit built to handle end-to-end software development."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors"
              >
                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-blue-400">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS & CERTIFICATIONS */}
        <div>
          <SectionTitle 
            title="Achievements & Certifications"
            subtitle="Recognitions that reflect consistency, discipline, and technical growth."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs uppercase tracking-widest text-slate-500">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-blue-400">
                    {item.year}
                  </span>
                </div>

                <h4 className="text-slate-200 font-semibold leading-snug">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  {item.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

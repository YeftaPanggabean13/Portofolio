import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { experiences } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 overflow-hidden bg-slate-950">
      <div className="max-w-6xl mx-auto space-y-24">

        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and industry contributions."
        />

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 top-0 mt-2 z-10">
                <svg className="fill-current" viewBox="0 0 12 12" width="12" height="12">
                  <path d="M12 10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8z" />
                </svg>
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-800 bg-slate-950 hover:border-blue-500/30 transition-all shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-xl text-slate-100">{exp.role}</h3>
                  <time className="font-mono text-sm text-blue-400 bg-blue-500/5 px-2 py-1 rounded">{exp.period}</time>
                </div>
                <div className="text-blue-500 font-medium mb-4">{exp.company}</div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 relative font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl">
            Selected works showcasing full-stack capabilities and architectural precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, idx) => {
            const isImageLayout = project.layout === 'image';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`
                  group relative flex flex-col overflow-hidden rounded-[2rem] 
                  bg-[#0D0D11] border border-white/5 
                  hover:border-white/10 transition-all duration-500
                `}
              >
                <div className={`p-8 flex flex-col h-full ${!isImageLayout ? 'justify-between' : ''}`}>
                  <div className={`${!isImageLayout ? 'flex justify-between items-start gap-4' : ''}`}>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {project.title}
                      </h3>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-bold text-white bg-[#1E1E1E] px-3 py-1.5 rounded-md uppercase tracking-wider"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <p className="text-[#949494] text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Logo Area for 'logo' layout */}
                    {!isImageLayout && (
                      <div className="flex-shrink-0 mt-2">
                        {project.logo ? (
                          <img src={project.logo} alt={project.title} className="w-20 opacity-80" />
                        ) : (
                          <div className="text-xl font-bold text-slate-700 italic">
                            {project.title.split(' ')[0]}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Image Area for 'image' layout */}
                  {isImageLayout && (
                    <div className="mt-auto pt-4 relative">
                      <div className="rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  )}

                  {/* Subtle Hover Link */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
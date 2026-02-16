import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A simplified look at my recent work and technical builds."
        />
        
        {/* Grid for projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              // SINGLE UNIFIED CONTAINER (The "Table")
              className="group flex flex-col h-full bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:bg-slate-900/60 transition-all duration-300"
            >
              
              {/* Image Section - Integrated directly */}
              <div className="relative aspect-video bg-slate-950 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>
              
              {/* Content Section - Sharing the same container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.liveUrl && (
                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                  )}
                </div>
                
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech & Links - All in the same flow */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-slate-500 bg-slate-950/50 px-2 py-0.5 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-5 pt-4 border-t border-slate-800/50 mt-auto">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    className="text-[11px] font-bold uppercase tracking-wider text-slate-500 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      className="text-[11px] font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                      Live
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { achievements } from '../data/portfolioData';
import LogoLoop from '../components/LogoLoop';
import {
  SiReact, SiVuedotjs, SiTailwindcss, SiBootstrap, SiCss3,
  SiJavascript, SiHtml5, SiLaravel, SiNodedotjs, SiMysql,
  SiPostgresql, SiGit, SiGithub, SiTableau, SiVite,SiNextdotjs
} from 'react-icons/si';
import { FaServer, FaChartBar } from 'react-icons/fa';

const SkillPill = ({ icon, title, color }: { icon: React.ReactNode, title: string, color: string }) => (
  <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 px-5 py-3 rounded-2xl group-hover:border-blue-500/30 transition-colors">
    <span className={`text-2xl ${color}`}>{icon}</span>
    <span className="text-slate-300 font-medium whitespace-nowrap text-sm tracking-wide">
      {title}
    </span>
  </div>
);

const row1 = [
  { node: <SkillPill icon={<SiReact />} title="React.js" color="text-[#61DAFB]" /> },
  { node: <SkillPill icon={<SiNextdotjs />} title="Next.js" color="text-white" /> },
  { node: <SkillPill icon={<SiJavascript />} title="JavaScript" color="text-[#F7DF1E]" /> },
  { node: <SkillPill icon={<SiTailwindcss />} title="Tailwind CSS" color="text-[#06B6D4]" /> },
  { node: <SkillPill icon={<SiLaravel />} title="Laravel" color="text-[#FF2D20]" /> },
  { node: <SkillPill icon={<SiNodedotjs />} title="Node.js" color="text-[#339933]" /> },
  { node: <SkillPill icon={<SiVite />} title="Vite" color="text-[#646CFF]" /> },
  { node: <SkillPill icon={<SiHtml5 />} title="HTML5" color="text-[#E34F26]" /> },
  { node: <SkillPill icon={<SiVuedotjs />} title="Vue.js" color="text-[#4FC08D]" /> },
  { node: <SkillPill icon={<SiMysql />} title="MySQL" color="text-[#4479A1]" /> },
  { node: <SkillPill icon={<SiPostgresql />} title="PostgreSQL" color="text-[#4169E1]" /> },
  { node: <SkillPill icon={<FaServer />} title="Inertia.js" color="text-slate-400" /> },
  { node: <SkillPill icon={<SiGit />} title="Git" color="text-[#F05032]" /> },
  { node: <SkillPill icon={<SiGithub />} title="GitHub" color="text-white" /> },
  { node: <SkillPill icon={<SiTableau />} title="Tableau" color="text-[#E97627]" /> },
  { node: <SkillPill icon={<FaChartBar />} title="Excel" color="text-[#1D6F42]" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 overflow-hidden bg-slate-950">
      <div className="max-w-6xl mx-auto space-y-24">
        
        <div className="space-y-12">
          <SectionTitle title="Stack & Tools" />
          <div className="relative">
            <LogoLoop
              logos={row1}
              speed={40} 
              direction="left"
              logoHeight={52}
              gap={24}
              fadeOut
              fadeOutColor="#020617" // Matches slate-950 hex exactly
            />           
          </div>
        </div>

        <div className="space-y-12">
          <SectionTitle 
            title="Recognitions"
            subtitle="Certifications and milestones achieved throughout my career."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-slate-600 group-hover:text-slate-400 transition-colors">
                    {item.year}
                  </span>
                </div>

                <h4 className="text-slate-100 font-bold text-lg leading-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                  {item.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
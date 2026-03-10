import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { achievements } from '../data/portfolioData';
import LogoLoop from '../components/LogoLoop';
import {
  SiReact, SiVuedotjs, SiTailwindcss, SiBootstrap, SiCss3,
  SiJavascript, SiHtml5, SiLaravel, SiNodedotjs, SiMysql,
  SiPostgresql, SiGit, SiGithub, SiTableau, SiVite, SiNextdotjs
} from 'react-icons/si';
import { FaServer, FaChartBar } from 'react-icons/fa';

const SkillPill = ({ icon, title, color }: { icon: React.ReactNode, title: string, color: string }) => (
  <div className="flex items-center gap-3 bg-white/5 border border-white/5 px-5 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:scale-105 cursor-default group">
    <span className={`text-xl transition-transform duration-300 group-hover:scale-110 ${color} drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]`}>{icon}</span>
    <span className="text-slate-300 font-medium whitespace-nowrap text-sm tracking-wide group-hover:text-white transition-colors">
      {title}
    </span>
  </div>
);

const allSkills = [
  { node: <SkillPill icon={<SiReact />} title="React.js" color="text-[#61DAFB]" /> },
  { node: <SkillPill icon={<SiNextdotjs />} title="Next.js" color="text-white" /> },
  { node: <SkillPill icon={<SiJavascript />} title="JavaScript" color="text-[#F7DF1E]" /> },
  { node: <SkillPill icon={<SiTailwindcss />} title="Tailwind" color="text-[#06B6D4]" /> },
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

// Split into two rows for visual interest
const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const row2 = allSkills.slice(Math.ceil(allSkills.length / 2));

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">

        <div className="space-y-12">
          <SectionTitle title="Stack & Tools" />

          <div className="relative flex flex-col gap-8 mask-linear-fade">
            {/* Opacity Mask for smooth fade edges handled by LogoLoop's fadeOut prop usually, but we can add CSS mask if needed. LogoLoop has fadeOut. */}

            <LogoLoop
              logos={row1}
              speed={35}
              direction="left"
              logoHeight={48}
              gap={20}
              pauseOnHover
              fadeOut={true}
              fadeOutColor="transparent" // relying on global mask or custom color if needed, but transparent works if overlay matches bg
              className="opacity-90 hover:opacity-100 transition-opacity"
            />

            <LogoLoop
              logos={row2}
              speed={35}
              direction="right"
              logoHeight={48}
              gap={20}
              pauseOnHover
              fadeOut={true}
              fadeOutColor="transparent"
              className="opacity-90 hover:opacity-100 transition-opacity"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 overflow-hidden transition-all duration-300 hover:bg-slate-800/60 hover:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-blue-200 transition-colors">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-blue-100 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                    {item.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
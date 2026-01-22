
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-4 tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-400 max-w-2xl text-lg">{subtitle}</p>}
      <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;

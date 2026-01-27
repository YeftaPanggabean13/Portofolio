
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// ✅ OPTIMIZED Version
const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950">
      {/* Decorative background - use pseudo-element instead for better perf */}
      <style>{`
        .bg-glow::before {
          content: '';
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at 30% -10%, rgba(37, 99, 235, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }
        .bg-glow::after {
          content: '';
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at 70% 110%, rgba(79, 70, 229, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
      
      <div className="bg-glow relative z-10">
        <Navbar />
        <main> <Hero /> <About /> <Skills /> <Experience /> <Projects /> <Contact /> </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;

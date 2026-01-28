import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import LightRays from '@/components/LightRays';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950">
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
        
        <main>
          {/* Section Wrapper untuk Hero dan LightRays */}
          <section className="relative w-full overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1}
                lightSpread={0.5}
                rayLength={3}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0}
                className="w-full h-full"
                pulsating={false}
                fadeDistance={1}
                saturation={1}
              />
            </div>
            
            {/* Hero diletakkan di atas LightRays */}
            <div className="relative z-10">
              <Hero />
            </div>
          </section>

          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact /> 
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
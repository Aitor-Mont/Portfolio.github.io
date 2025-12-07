import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0080ff]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0080ff] flex items-center justify-center overflow-hidden">
        <img
          src="/archivos/imagen_landing.png"
          alt="Background"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 to-primary-800/50"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex flex-col items-center text-center md:items-start md:text-left lg:w-2/3 lg:ml-32">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-3xl md:text-5xl font-light text-slate-200 mb-4 tracking-tight">
              Aitor Montalbán
            </h1>
            <h2 className="text-xl md:text-3xl font-light text-slate-200 mb-8">
              Full Stack Web Developer
            </h2>

            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-medium text-primary-100 bg-white/10 p-4 rounded-xl backdrop-blur-sm mb-12">
              <span>Paginas Web</span>
              <span className="text-primary-400">•</span>
              <span>Web Apps</span>
              <span className="text-primary-400">•</span>
              <span>Mobile Apps</span>
              <span className="text-primary-400">•</span>
              <span>Desktop Apps</span>
            </div>

            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary-700 bg-white hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Conóceme
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
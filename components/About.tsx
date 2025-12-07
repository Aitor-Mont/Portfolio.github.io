import React from 'react';
import { Terminal, Cpu, Building2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#345AA8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sobre mí</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photos Column */}
          <div className="flex justify-center lg:justify-start">
            {/* Childhood/Atari Photo */}
            <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl border-4 border-primary-200 hover:shadow-primary-300/50 transition-all duration-300 hover:scale-105">
              <img
                src="/archivos/bio.jpg"
                alt="Aitor joven con Atari ST"
                className="w-full h-auto object-cover"
              />
              <div className="bg-primary-900 text-white text-sm p-3 text-center font-semibold">
                🎮 Atari ST - Mis inicios a los 13 años
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:pl-10 mt-10 lg:mt-0">
            <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-2">
              <Terminal className="text-primary-600" />
              Pasión por el código
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Apasionado de la programación desde niño, comencé mi viaje tecnológico programando en un <span className="font-semibold text-primary-700">Atari ST</span> con tan solo 13 años. Lo que empezó como curiosidad se convirtió en mi profesión y vocación.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Desde entonces, no he parado de estar unido al mundo de la informática y el desarrollo de software, evolucionando con las tecnologías y enfrentando nuevos retos cada día.
            </p>

            <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary-600">
              <h4 className="font-semibold text-primary-900 mb-4 flex items-center gap-2">
                <Building2 size={20} />
                Experiencia Profesional Destacada
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  He trabajado para grandes empresas como <span className="font-bold text-slate-900">Iberdrola</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Desarrollador en proyectos para <span className="font-bold text-slate-900">ISoft</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
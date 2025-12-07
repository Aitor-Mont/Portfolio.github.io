import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Aitor Montalbán. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Aitor-Mont" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-2 bg-slate-900 rounded-full hover:bg-primary-600"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/aitormon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-2 bg-slate-900 rounded-full hover:bg-primary-600"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 text-sm hover:text-white transition-colors"
          >
            Volver arriba
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
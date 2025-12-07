import React, { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, X, Globe, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right', e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening modal when clicking arrows
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
      <div className="relative group cursor-pointer" onClick={() => onOpen(project)}>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-56 bg-slate-200"
        >
          {project.images.map((img, idx) => (
            <div key={idx} className="flex-shrink-0 w-full h-full snap-center relative">
              <img
                src={img}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={(e) => scroll('left', e)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={(e) => scroll('right', e)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={18} />
        </button>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3">{project.description}</p>

        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">+{project.technologies.length - 3}</span>
            )}
          </div>
        )}

        <div className="flex gap-4 mt-auto pt-4 border-t border-slate-50">
          <button
            onClick={() => onOpen(project)}
            className="hidden text-primary-600 hover:text-primary-800 text-sm font-bold items-center gap-1 transition-colors group"
          >
            <ExternalLink size={16} className="group-hover:scale-110 transition-transform" /> Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full text-slate-800 hover:text-red-500 transition-colors z-20 backdrop-blur-md"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-3/5 bg-slate-100 relative min-h-[300px] lg:min-h-[500px]">
            <img
              src={project.images[activeImage]}
              alt={project.title}
              className="w-full h-full object-contain absolute inset-0 bg-slate-900"
            />

            {/* Thumbnails */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === idx ? 'border-primary-500 scale-110' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/5 p-8 flex flex-col">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{project.title}</h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies?.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-slate mb-8 flex-grow">
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Sobre el proyecto</h4>
              <p className="text-slate-600 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-auto">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                >
                  <Github size={20} />
                  Ver Código
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  <Globe size={20} />
                  Ver Demo Live
                </a>
              )}
              {!project.demoUrl && !project.repoUrl && (
                <p className="text-center text-sm text-slate-400 italic">Enlaces no disponibles públicamente</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Full Stack",
      description: "Plataforma de comercio electrónico con carrito, pasarela de pago y panel de administración.",
      longDescription: "Una solución completa de comercio electrónico desarrollada desde cero. Incluye gestión de inventario en tiempo real, procesamiento de pagos seguro con Stripe, y un panel de administración intuitivo para gestionar productos y pedidos. La arquitectura asegura escalabilidad y rendimiento.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Redux"],
      images: [
        "/archivos/gameflow.jpg",
        "/archivos/gameflow2.jpeg"
      ],
      repoUrl: "https://github.com/Aitor-Mont",
      demoUrl: "https://example.com"
    },
    {
      id: 2,
      title: "Gestor de Tareas Corporativo",
      description: "Aplicación tipo Kanban para gestión de proyectos internos con autenticación y roles.",
      longDescription: "Sistema de gestión de proyectos basado en metodología Kanban. Permite a los equipos colaborar en tiempo real, asignar tareas, establecer fechas límite y visualizar el progreso mediante gráficos. Implementa autenticación segura y gestión de roles de usuario.",
      technologies: ["Angular", ".NET Core", "SQL Server", "SignalR", "Azure AD"],
      images: [
        "/archivos/Kinetic.png",
        "/archivos/kinetic2.png"
      ],
      repoUrl: "https://github.com/Aitor-Mont"
    },
    {
      id: 3,
      title: "Dashboard Analítico",
      description: "Visualización de datos en tiempo real consumiendo API REST y mostrando gráficas interactivas.",
      longDescription: "Dashboard interactivo para visualización de métricas empresariales clave (KPIs). Consume datos de múltiples fuentes a través de APIs REST y los presenta en gráficos dinámicos y tablas filtrables. Optimizado para rendimiento con grandes volúmenes de datos.",
      technologies: ["React", "D3.js", "Python", "Flask", "PostgreSQL", "Docker"],
      images: [
        "/archivos/Prisma.jpeg",
        "/archivos/prisma2.jpg"
      ],
      repoUrl: "https://github.com/Aitor-Mont"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/archivos/fondo.jpg')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Portfolio</h2>
            <div className="h-1 w-20 bg-primary-600 rounded-full"></div>
          </div>
          <a
            href="https://github.com/Aitor-Mont"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            Ver GitHub Completo
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;

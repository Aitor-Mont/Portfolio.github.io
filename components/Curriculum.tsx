import React, { useRef, useState, MouseEvent } from 'react';
import { Download, Award, Calendar, X } from 'lucide-react';

const Curriculum: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const otherCerts = [
    { title: "Programación con phyton", issuer: "Google / Coursera", date: "Feb 2021", img: "/archivos/certificado michigan.png" },
    { title: "Lenguajes de programación", issuer: "INEM", date: "2002", img: "/archivos/Lenguajes de programación.jpg" },
    { title: "Programacion, redes y telecomunicaciones", issuer: "Centro de Formación 10R", date: "1999", img: "/archivos/Master en redes.jpg" },
    { title: "Servicios de presentacion en entorno gráfico", issuer: "IFES", date: "2002", img: "/archivos/servicios de presentacion en entorno gráfico.jpg" },
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320; // card width + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="curriculum" className="py-20 bg-[#223149] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Curriculum & Titulaciones</h2>
            <img
              src="/archivos/foto profesional.JPG"
              alt="Aitor Montalbán"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary-200 shadow-lg"
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
          </div>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="text-center mb-16">
          <a
            href="/archivos/Curriculum Full Stack.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-bold shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <Download size={20} />
            Descargar CV en PDF
          </a>
        </div>

        {/* Main Degrees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-md border-l-8 border-primary-500 flex flex-col md:flex-row items-center gap-6">
            <div
              className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedImage("/archivos/Aitor Montalbán full stack1.jpg")}
            >
              <img src="/archivos/Aitor Montalbán full stack1.jpg" alt="Full Stack Certificate" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900">Full Stack Web Developer</h3>
              <p className="text-primary-600 font-semibold mb-2">The Bridge Digital Talent</p>
              <p className="text-slate-500 text-sm">Bootcamp intensivo de desarrollo web moderno (MERN Stack).</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border-l-8 border-blue-800 flex flex-col md:flex-row items-center gap-6">
            <div
              className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedImage("/archivos/Programación NET.png")}
            >
              <img src="/archivos/Programación NET.png" alt=".NET Certificate" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900">Programación .NET</h3>
              <p className="text-blue-800 font-semibold mb-2">Campus to Business</p>
              <p className="text-slate-500 text-sm">Especialización en entorno Microsoft, C# y arquitectura empresarial.</p>
            </div>
          </div>
        </div>

        {/* Other Certs Carousel */}
        <div className="relative">
          <h3 className="text-xl font-bold text-slate-700 mb-6 pl-2 border-l-4 border-slate-300">Otras Certificaciones</h3>

          <div className="relative group">
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md text-slate-700 hover:bg-white hidden md:block"
            >
              <Award className="rotate-90" size={20} />
            </button>

            <div
              ref={carouselRef}
              className={`flex overflow-x-auto gap-6 pb-8 scrollbar-hide px-4 ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'}`}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {otherCerts.map((cert, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-white rounded-xl shadow-sm overflow-hidden snap-center border border-slate-100 select-none">
                  <div
                    className="h-40 bg-slate-200 relative cursor-pointer hover:brightness-95 transition-all"
                    onClick={() => setSelectedImage(cert.img)}
                  >
                    <img src={cert.img} alt={cert.title} className="w-full h-full object-cover pointer-events-none" />
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-slate-600 flex items-center gap-1">
                      <Calendar size={12} /> {cert.date}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4
                      className="font-bold text-slate-800 mb-1 cursor-pointer hover:text-primary-600 transition-colors"
                      onClick={() => setSelectedImage(cert.img)}
                      onDoubleClick={() => setSelectedImage(cert.img)}
                    >
                      {cert.title}
                    </h4>
                    <p className="text-primary-600 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md text-slate-700 hover:bg-white hidden md:block"
            >
              <Award className="-rotate-90" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all z-10"
          >
            <X size={24} className="text-slate-900" />
          </button>
          <img
            src={selectedImage}
            alt="Certificate enlarged"
            className="max-w-[95%] max-h-[95vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Curriculum;

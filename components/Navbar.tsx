import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-transparent ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 relative">

          {/* Logo removed as requested */}
          <div></div>

          {/* Desktop Menu - Absolute Left */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-0 ml-32">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium transition-colors hover:text-primary-300 text-white bg-[rgb(30,58,138)] px-2 py-1 rounded"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Menu - Fallback for smaller screens (MD) where absolute center might overlap */}
          <div className="hidden md:flex lg:hidden items-center space-x-4 ml-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium transition-colors hover:text-primary-300 text-white bg-[rgb(30,58,138)] px-2 py-1 rounded"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Aligned Right */}
          <div className="md:hidden flex items-center z-10 ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full top-full left-0 border-t border-slate-100">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-lg font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
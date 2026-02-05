import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface HeaderProps {
  onOpenClientArea: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenClientArea }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Planos', href: '#plans' },
    { name: 'Cobertura', href: '#coverage' },
    { name: 'Vantagens', href: '#benefits' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  const handleClientAreaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    onOpenClientArea();
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b
          ${scrolled 
            ? 'bg-profiber-dark/90 backdrop-blur-xl border-white/10 shadow-lg py-2' 
            : 'bg-transparent border-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Area - Compact & Modern */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center gap-2 group">
                <img 
                  src="https://i.ibb.co/pvNn2Rcv/IMG-1778.png" 
                  alt="Profiber Telecom" 
                  className={`w-auto transition-all duration-300 ${scrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'}`}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white relative group transition-colors rounded-full hover:bg-white/5"
                >
                  {link.name}
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-profiber-sky transition-all duration-300 ease-out group-hover:w-1/2"></span>
                </a>
              ))}
              
              {/* Área do Cliente Button */}
              <button 
                onClick={handleClientAreaClick}
                className="ml-4 px-4 py-2 rounded-full border border-white/20 hover:border-profiber-sky/50 text-gray-200 hover:text-white hover:bg-white/5 text-sm font-medium transition-all flex items-center gap-2 group cursor-pointer"
              >
                <User className="w-4 h-4 group-hover:text-profiber-sky transition-colors" />
                Área do Cliente
              </button>
              
              {/* Desktop CTA Button */}
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="ml-3 px-5 py-2 rounded-full bg-profiber-royal hover:bg-blue-600 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transform hover:-translate-y-0.5"
              >
                Assinar Agora
              </a>
            </nav>

            {/* Mobile Menu Button - Rounded & Tactile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full transition-all duration-300 focus:outline-none ring-1 ring-white/10
                  ${isMenuOpen ? 'bg-white text-profiber-dark rotate-90' : 'bg-white/10 text-white hover:bg-white/20'}
                `}
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Floating Card Style (Detached from header) */}
      <div 
        className={`fixed inset-x-0 top-[70px] z-40 md:hidden transition-all duration-300 ease-out px-4 pointer-events-none
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
        `}
      >
        <div className={`bg-profiber-dark/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto
            ${isMenuOpen ? 'block' : 'hidden'}
        `}>
          <div className="p-4 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all border border-transparent hover:border-white/5 active:scale-[0.98]"
              >
                {link.name}
                <span className="w-1.5 h-1.5 rounded-full bg-profiber-royal opacity-0 group-hover:opacity-100"></span>
              </a>
            ))}
            
            <div className="pt-2 mt-2 border-t border-white/10 space-y-3">
              {/* Mobile Client Area Button */}
              <button
                 onClick={handleClientAreaClick}
                 className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors cursor-pointer"
              >
                <User className="w-4 h-4" />
                Área do Cliente
              </button>

              <a 
                 href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                 target="_blank"
                 rel="noreferrer"
                 className="block w-full text-center py-3.5 rounded-xl bg-profiber-royal text-white font-bold shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-transform"
              >
                Assinar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};
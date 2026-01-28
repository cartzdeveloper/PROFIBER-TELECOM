import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Planos', href: '#plans' },
    { name: 'Cobertura', href: '#coverage' },
    { name: 'Vantagens', href: '#benefits' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-profiber-dark/95 backdrop-blur-md border-b border-white/5 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Left: Logo Area (sized for balance) */}
          <div className="flex-shrink-0 flex items-center w-[160px] md:w-[220px]">
            <a href="#" className="flex items-center gap-2 group">
              <img 
                src="https://profiber.net.br/arquivos_publicos/profiber_logo_brancaedit.png" 
                alt="Profiber Telecom" 
                className="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Center: Desktop Navigation (Absolutely Centered) */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-300 hover:text-white px-1 py-2 text-sm font-medium relative group transition-colors uppercase tracking-wide"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-profiber-sky transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right: Mobile Menu & Spacer for Balance */}
          <div className="flex items-center justify-end w-[160px] md:w-[220px]">
             {/* Invisible spacer to balance the logo width on desktop if needed, or put CTA here */}
             <div className="hidden md:block"></div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-profiber-dark border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-3 rounded-xl text-base font-bold text-gray-300 hover:text-white hover:bg-white/10 text-center transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
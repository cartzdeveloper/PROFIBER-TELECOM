import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface HeaderProps {
  // No props needed anymore for client area
}

export const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      <header 
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4`}
      >
        <div className={`
          relative w-full max-w-7xl mx-auto flex items-center justify-between
          transition-all duration-300 ease-out
          ${scrolled 
            ? 'bg-profiber-dark/70 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-2xl py-2.5 px-6' 
            : 'bg-transparent py-4 px-2 border border-transparent'
          }
        `}>
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <img 
                src="https://i.ibb.co/pvNn2Rcv/IMG-1778.png" 
                alt="Profiber Telecom" 
                className={`w-auto transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/5 mr-4 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <a 
              href="https://ixc.profiber.net.br"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white transition-colors mr-4"
              title="Central do Assinante"
            >
              <User className="w-5 h-5" />
            </a>
            
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-xl bg-profiber-royal text-white text-sm font-semibold transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-95 flex items-center gap-2 border border-blue-400/30"
            >
              Assinar Agora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-profiber-dark/95 backdrop-blur-xl md:hidden transition-all duration-500 flex flex-col items-center justify-center space-y-8
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        <button 
           onClick={() => setIsMenuOpen(false)}
           className="absolute top-8 right-8 p-2 bg-white/10 rounded-full text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            onClick={() => setIsMenuOpen(false)} 
            className="text-3xl font-bold text-white hover:text-profiber-sky transition-colors tracking-tight"
          >
            {link.name}
          </a>
        ))}
        
        <div className="pt-8 flex flex-col gap-4 w-64">
           <a 
              href="https://ixc.profiber.net.br"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-xl border border-white/20 text-center text-white font-medium"
           >
             Central do Assinante
           </a>
           <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-xl bg-profiber-royal text-center text-white font-bold shadow-lg shadow-blue-900/40"
           >
             Assinar Agora
           </a>
        </div>
      </div>
    </>
  );
};
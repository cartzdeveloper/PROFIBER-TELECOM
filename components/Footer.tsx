import React from 'react';
import { Instagram, Phone, MapPin, MessageCircle, FileText, Shield, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="bg-profiber-dark text-white border-t border-white/10 pt-16 pb-6 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <img 
              src="https://i.ibb.co/pvNn2Rcv/IMG-1778.png" 
              alt="Profiber Telecom" 
              className="h-10 w-auto"
            />
            <div className="text-slate-400 space-y-2">
              <p className="font-semibold text-white">{CONTACT_INFO.companyName}</p>
              <p>CNPJ: {CONTACT_INFO.cnpj}</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white text-slate-300 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white text-slate-300 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-profiber-sky transition-colors">Início</a></li>
              <li><a href="#plans" className="text-slate-400 hover:text-profiber-sky transition-colors">Planos</a></li>
              <li><a href="#coverage" className="text-slate-400 hover:text-profiber-sky transition-colors">Cobertura</a></li>
              <li>
                <a 
                  href="https://ixc.profiber.net.br" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-profiber-sky hover:text-white transition-colors flex items-center gap-2 font-medium"
                >
                  <Globe className="w-3.5 h-3.5" />
                  Central do Assinante
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={onOpenTerms} className="flex items-center gap-2 text-slate-400 hover:text-profiber-sky transition-colors text-left">
                  <FileText className="w-4 h-4" /> Termos de Uso
                </button>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="flex items-center gap-2 text-slate-400 hover:text-profiber-sky transition-colors text-left">
                  <Shield className="w-4 h-4" /> Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Atendimento</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-profiber-sky" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase font-bold">Comercial</span>
                    <a href={`tel:${CONTACT_INFO.whatsapp}`} className="text-slate-300 hover:text-white transition-colors">
                        (82) 98219-0187
                    </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-profiber-sky" />
                </div>
                 <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase font-bold">Endereço</span>
                    <span className="text-slate-300 leading-relaxed">
                        {CONTACT_INFO.address}
                    </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-center md:text-left">
            © 2018 - {new Date().getFullYear()} PROFIBER TELECOM. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <span>Desenvolvido por</span>
            <a 
              href="https://www.hypertechal.com.br" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white font-bold hover:text-profiber-sky transition-colors px-3 py-1 bg-white/5 rounded-full border border-white/10 flex items-center gap-1 group"
            >
              <span className="w-2 h-2 rounded-full bg-profiber-sky group-hover:animate-pulse"></span>
              HYPER TECH
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
import React from 'react';
import { X, ExternalLink, Globe } from 'lucide-react';

interface ClientAreaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientAreaModal: React.FC<ClientAreaModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-0 sm:p-4 md:p-6">
        <div className="bg-white w-full max-w-7xl h-full sm:h-[90vh] sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
          
          {/* Modal Header */}
          <div className="bg-profiber-royal px-4 py-3 flex justify-between items-center shrink-0 shadow-md z-20">
            <div className="flex items-center gap-2 text-white">
              <Globe className="w-5 h-5" />
              <h3 className="font-bold text-lg">Central do Assinante</h3>
            </div>
            
            <div className="flex items-center gap-3">
                <a 
                  href="https://central.profiber.net.br" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-blue-200 hover:text-white bg-blue-800/50 hover:bg-blue-800 px-3 py-1.5 rounded-full transition-colors"
                >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Abrir em nova aba
                </a>
                <button 
                  onClick={onClose}
                  className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors focus:outline-none"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
            </div>
          </div>

          {/* Iframe Content */}
          <div className="flex-grow bg-slate-50 relative w-full h-full">
             <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-profiber-royal"></div>
             </div>
             <iframe 
                src="https://central.profiber.net.br" 
                className="w-full h-full border-0"
                title="Área do Cliente Profiber"
                allow="payment; fullscreen; clipboard-read; clipboard-write"
                loading="lazy"
             />
          </div>
        </div>
      </div>
    </div>
  );
};
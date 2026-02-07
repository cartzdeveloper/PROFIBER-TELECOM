import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  icon: React.ElementType;
}

export const LegalModal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, icon: Icon }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" 
          aria-hidden="true"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal Content */}
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl w-full">
          <div className="bg-profiber-royal px-6 py-4 flex justify-between items-center">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Icon className="w-6 h-6" />
              {title}
            </h3>
            <button 
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors focus:outline-none bg-white/10 rounded-full p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="px-6 py-6 max-h-[70vh] overflow-y-auto">
            <div className="prose prose-blue max-w-none text-slate-600 whitespace-pre-line">
              {content}
            </div>
          </div>
          
          <div className="bg-slate-50 px-6 py-4 flex justify-end">
            <button
              type="button"
              className="inline-flex justify-center rounded-lg border border-transparent shadow-sm px-6 py-2 bg-profiber-royal text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:text-sm"
              onClick={onClose}
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
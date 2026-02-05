import React from 'react';
import { MapPin } from 'lucide-react';
import { CITIES } from '../constants';

export const Coverage: React.FC = () => {
  return (
    <section id="coverage" className="py-24 relative overflow-hidden bg-profiber-dark border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
                <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-3">Área de Cobertura</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Onde a <span className="text-gradient-premium">Profiber</span> Chega
                </h3>
                <p className="text-lg text-slate-400">
                    Levando tecnologia de ponta e ultra velocidade para diversos municípios.
                </p>
            </div>
            <div className="hidden md:block">
                <div className="flex -space-x-4">
                     {[1,2,3,4].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-medium">
                             {i}k+
                         </div>
                     ))}
                     <div className="w-auto pl-6 flex items-center text-slate-400 text-sm font-medium">Clientes conectados</div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CITIES.map((city, index) => (
            <div 
              key={index} 
              className="group bg-slate-900/50 border border-white/5 p-5 rounded-xl flex items-center gap-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-800"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-profiber-royal transition-colors duration-300">
                <MapPin className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-medium text-slate-300 text-base group-hover:text-white">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
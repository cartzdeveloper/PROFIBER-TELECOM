import React from 'react';
import { CITIES } from '../constants';

export const Coverage: React.FC = () => {
  return (
    <section id="coverage" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative background map pattern (simulated with CSS) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-100 px-4 py-1.5 rounded-full shadow-sm mb-4">
            <i className="fa-solid fa-satellite-dish text-blue-600"></i>
            Área de Atuação
          </span>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Onde a Profiber Chega
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Levando tecnologia de ponta e ultra velocidade para diversos municípios. Verifique se sua cidade já está conectada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CITIES.map((city, index) => (
            <div 
              key={index} 
              className="group bg-slate-50 border border-slate-200/70 p-5 rounded-2xl flex items-center justify-between transition-all duration-300 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 hover:bg-white cursor-default"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-100/80 flex items-center justify-center flex-shrink-0 group-hover:bg-profiber-royal transition-colors duration-300 shadow-sm">
                  <i className="fa-solid fa-location-dot text-profiber-royal group-hover:text-white transition-colors duration-300 text-lg"></i>
                </div>
                <div>
                  <span className="font-bold text-slate-800 text-base group-hover:text-blue-900 block leading-tight">{city}</span>
                  <span className="text-[11px] text-slate-500 font-medium">Fibra Óptica</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Ativa
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

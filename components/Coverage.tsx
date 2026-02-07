import React from 'react';
import { MapPin } from 'lucide-react';
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
          <h2 className="text-profiber-royal font-bold tracking-wide uppercase text-sm mb-2">Área de Atuação</h2>
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
              className="group bg-slate-50 border border-slate-100 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 hover:bg-white"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-profiber-royal transition-colors duration-300">
                <MapPin className="w-6 h-6 text-profiber-royal group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-semibold text-slate-700 text-lg group-hover:text-slate-900">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

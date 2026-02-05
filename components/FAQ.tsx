import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 text-slate-400 mb-6 border border-white/5">
              <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Dúvidas Frequentes</h2>
          <p className="text-slate-400">
            Tudo o que você precisa saber sobre nossos serviços.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
                key={index} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden
                    ${openIndex === index 
                        ? 'bg-slate-900/80 border-blue-500/30 shadow-lg shadow-blue-900/10' 
                        : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-slate-900/30'
                    }
                `}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-base font-medium transition-colors ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                    {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              >
                <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
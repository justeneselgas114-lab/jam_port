import React from 'react';
import { Activity } from 'lucide-react';

const Experience = () => (
  <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-900/10 via-blue-600/5 to-blue-900/10 border-y border-gray-800/50">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-16 text-center md:text-left">
        <div className="flex-1 space-y-4 text-white">
          <div className="inline-flex items-center gap-2 text-blue-400 font-black text-[10px] sm:text-xs uppercase tracking-[0.3em]">
            <Activity size={18} className="text-blue-500" /> Battle-Tested Performance
          </div>
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight">Real Experience. Real Systems.</h3>
          <p className="text-gray-400 text-sm sm:text-lg max-w-xl">
            This isn't just about clicking buttons. It's about a year and a half of solving complex technical hurdles for businesses that depend on their CRM to survive.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 w-full md:w-auto">
          {[
            { value: "100+", label: "Workflows Built", sub: "End-to-end logic" },
            { value: "50+", label: "Funnel Pages", sub: "Designed for conversion" },
            { value: "24/7", label: "Instant Response", sub: "Messenger qualifying" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2 group text-white">
              <div className="text-3xl sm:text-5xl font-black text-white group-hover:text-blue-500 transition-colors duration-500">{stat.value}</div>
              <div className="space-y-1">
                <div className="text-[11px] uppercase font-black text-gray-500 tracking-widest">{stat.label}</div>
                <div className="text-[9px] text-gray-600 font-bold uppercase tracking-tighter">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;

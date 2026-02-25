import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const IdealClient = () => (
  <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
    <div className="max-w-3xl mx-auto text-center space-y-10 sm:space-y-16">
      <div className="inline-flex items-center gap-2 text-blue-500 bg-blue-500/10 px-6 py-2 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] mx-auto border border-blue-500/20 shadow-lg shadow-blue-500/5">
        <Star size={14} className="fill-current" /> Partnership Fit
      </div>
      <h3 className="text-4xl sm:text-6xl font-black tracking-tighter text-white">Is Justene Automation Right for You?</h3>
      <div className="grid gap-4 sm:gap-6 text-left">
        {[
          "You use GoHighLevel but know you're barely scratching the surface.",
          "You're tired of manual follow-ups and losing leads in a messy CRM.",
          "You need systems that scale your workload, not increase it.",
          "You value deep strategy and architectural thinking over basic tasks.",
          "You need a partner who executes independently and solves bottlenecks."
        ].map((item, i) => (
          <div key={i} className="flex gap-6 items-center bg-gray-900/50 p-6 sm:p-8 rounded-[1.5rem] border border-white/5 hover:border-blue-500/40 transition-all group">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center shrink-0 border border-green-500/30 group-hover:bg-green-500 transition-colors duration-500 shadow-lg shadow-green-500/10">
              <CheckCircle2 className="text-green-500 group-hover:text-white transition-colors duration-500" size={24} />
            </div>
            <span className="text-base sm:text-xl text-gray-300 font-bold leading-tight group-hover:text-white transition-colors">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IdealClient;

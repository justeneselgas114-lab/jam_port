import React from 'react';
import { SKILLS } from '../../constants';

const Expertise = () => (
  <section id="expertise" className="py-20 sm:py-32 px-4 sm:px-6 relative">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
        <h2 className="text-xs sm:text-sm font-black tracking-[0.3em] text-blue-500 uppercase">Technical Mastery</h2>
        <h3 className="text-3xl sm:text-5xl font-black text-white">Full-Stack Development & Deep Platform Expertise</h3>
        <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto">
          I leverage modern web technologies and the full GoHighLevel suite to create comprehensive solutions that bridge cutting-edge development with business automation.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {SKILLS.map((item, idx) => (
          <div key={idx} className="glass-card p-8 rounded-[2.5rem] border-white/5 hover:border-blue-500/50 transition-all duration-500 group hover:-translate-y-2">
            <div className="mb-6 w-14 h-14 bg-gray-800/50 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:bg-blue-600 transition-all duration-500 shadow-xl group-hover:shadow-blue-600/40">
              <div className="text-white transition-colors duration-500">{item.icon}</div>
            </div>
            <h4 className="text-xl font-black mb-4 group-hover:text-blue-400 transition-colors text-white">{item.title}</h4>
            <ul className="space-y-3">
              {item.skills.map((s, i) => (
                <li key={i} className="text-[13px] text-gray-400 flex items-start gap-3 leading-tight group-hover:text-gray-300 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0 shadow-[0_0_8px_#3b82f6]"></div>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;

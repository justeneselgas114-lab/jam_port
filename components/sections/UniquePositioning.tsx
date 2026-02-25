import React from 'react';

const UniquePositioning = () => (
  <section className="py-20 sm:py-32 px-4 sm:px-6 bg-blue-600 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 relative z-10">
      <div className="max-w-2xl space-y-8 text-center lg:text-left">
        <h3 className="text-4xl sm:text-6xl font-black italic uppercase leading-[0.95] tracking-tighter text-white">
          "Most VAs complete tasks. <br />
          <span className="text-black opacity-30">I build systems that run businesses automatically."</span>
        </h3>
        <p className="text-xl sm:text-2xl text-blue-100 font-bold opacity-90 max-w-xl mx-auto lg:mx-0 leading-tight">
          When you hire Justene Automation, you aren't paying for hours—you're investing in an infrastructure that clones you.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full sm:w-auto">
        {[
          { label: "Manual Data Entry", value: "0%" },
          { label: "Lead Capture Nurture", value: "24/7" },
          { label: "Follow-Up Speed", value: "10X" },
          { label: "Overall Scalability", value: "100%" }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 sm:p-8 rounded-[2rem] border border-white/20 text-center shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
            <div className="text-3xl sm:text-4xl font-black mb-1 text-blue-600 group-hover:scale-110 transition-transform">{item.value}</div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.1em] font-black text-gray-500 opacity-80">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UniquePositioning;

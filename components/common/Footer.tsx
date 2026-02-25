import React from 'react';
import { scrollToId } from '../../utils/scrollUtils';

const Footer = () => (
  <footer className="py-12 sm:py-20 px-4 sm:px-6 border-t border-gray-900 bg-black">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white shadow-2xl shadow-blue-600/20">J</div>
            <span className="text-xl font-black tracking-tighter text-white">JUSTENE <span className="text-blue-500 italic uppercase">Automation</span></span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-[11px] sm:text-xs uppercase font-black tracking-[0.2em] text-gray-500">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToId('about'); }} className="hover:text-white transition-colors">About</a>
          <a href="#expertise" onClick={(e) => { e.preventDefault(); scrollToId('expertise'); }} className="hover:text-white transition-colors">Expertise</a>
          <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToId('portfolio'); }} className="hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact'); }} className="hover:text-white transition-colors font-black text-blue-500 underline decoration-blue-500/20 underline-offset-8">Work With Me</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full pt-12 border-t border-gray-900 gap-8">
        <div className="text-gray-600 text-[11px] text-center md:text-left leading-relaxed max-w-lg font-bold">
          © {new Date().getFullYear()} Justene Automation. Built for international high-ticket scale. <br/>
          Designed & Architected for CRM optimization and maximum yield.
        </div>
        <div className="flex gap-8 text-[11px] text-gray-700 font-black uppercase tracking-widest">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

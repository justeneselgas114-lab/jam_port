import React from 'react';
import { 
  ArrowRight, 
  Zap,
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { scrollToId } from '../../utils/scrollUtils';

const Hero = () => (
  <section id="home" className="pt-32 pb-16 sm:pt-40 sm:pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
    <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-blue-600/10 blur-[100px] sm:blur-[150px] rounded-full"></div>
    <div className="absolute bottom-0 left-0 -z-10 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-purple-600/10 blur-[80px] sm:blur-[120px] rounded-full"></div>
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
      <div className="space-y-6 sm:space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] animate-pulse mx-auto md:mx-0">
          <Zap size={14} className="fill-current" /> High-Performance GHL Systems
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
          Stop Chasing Leads. <br />
          <span className="gradient-text">Start Automating Growth.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed mx-auto md:mx-0">
          I build scalable CRM infrastructures for international clients. Convert traffic to profit with behavior-based automation and high-conversion funnels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              scrollToId('contact');
            }}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/30 group"
          >
            Book Discovery Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => {
              e.preventDefault();
              scrollToId('portfolio');
            }}
            className="flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 bg-gray-900/40 px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all active:scale-95 text-white"
          >
            View My Work
          </a>
        </div>
        
        {/* Social Media Links */}
        <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Connect:</span>
          <div className="flex gap-3">
            <a 
              href="https://wa.me/639638296973" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-green-600/20 hover:border-green-500 transition-all group"
              aria-label="WhatsApp"
            >
              <MessageCircle className="text-gray-400 group-hover:text-green-500 transition-colors" size={18} />
            </a>
            <a 
              href="https://www.facebook.com/Just10AiAutomation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500 transition-all group"
              aria-label="Facebook"
            >
              <Facebook className="text-gray-400 group-hover:text-blue-500 transition-colors" size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/justene-selgas-152052377/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500 transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-gray-400 group-hover:text-blue-500 transition-colors" size={18} />
            </a>
            <a 
              href="mailto:justeneselgas.work@gmail.com" 
              className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500 transition-all group"
              aria-label="Email"
            >
              <Mail className="text-gray-400 group-hover:text-blue-500 transition-colors" size={18} />
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-center md:justify-start gap-6 pt-4 opacity-50">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Certified In:</span>
          <div className="flex items-center gap-4 text-white">
            <div className="flex items-center gap-2">
              <img src="https://gohighlevel.com/favicon.ico" className="w-5 h-5" alt="GHL" loading="lazy" />
              <span className="text-[11px] font-mono font-bold whitespace-nowrap">GoHighLevel</span>
            </div>
            <div className="w-px h-4 bg-gray-800"></div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-yellow-500" />
              <span className="text-[11px] font-mono font-bold whitespace-nowrap">Zapier Expert</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-12 md:mt-0 px-2 sm:px-0">
        <div className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border-blue-500/20 shadow-2xl relative z-10 overflow-hidden group">
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
            </div>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">automation_engine.config</span>
          </div>
          <div className="space-y-4 font-mono text-[12px] sm:text-[14px] leading-relaxed text-white">
            <div className="text-blue-500 font-bold mb-2"># JUSTENE_SYSTEM_INIT</div>
            <div className="flex gap-4 group-hover:translate-x-1 transition-transform">
              <span className="text-gray-700 select-none">01</span>
              <span><span className="text-purple-400">const</span> specialist = <span className="text-green-400">"CRM Architect"</span>;</span>
            </div>
            <div className="flex gap-4 group-hover:translate-x-1 transition-transform delay-75">
              <span className="text-gray-700 select-none">02</span>
              <span><span className="text-purple-400">const</span> objective = <span className="text-green-400">"Convert traffic to profit"</span>;</span>
            </div>
            <div className="flex gap-4 group-hover:translate-x-1 transition-transform delay-100">
              <span className="text-gray-700 select-none">03</span>
              <span><span className="text-purple-400">const</span> techStack = [<span className="text-blue-300">"GHL"</span>, <span className="text-blue-300">"Zapier"</span>];</span>
            </div>
            <div className="flex gap-4 group-hover:translate-x-1 transition-transform delay-150">
              <span className="text-gray-700 select-none">04</span>
              <span><span className="text-purple-400">function</span> scaleClientBusiness() {'{'}</span>
            </div>
            <div className="flex gap-4 group-hover:translate-x-1 transition-transform delay-200">
              <span className="text-gray-700 select-none">05</span>
              <span className="ml-6 sm:ml-8 text-gray-300">mapClientJourney();</span>
            </div>
            <div className="flex gap-4 group-hover:translate-x-1 transition-transform delay-300">
              <span className="text-gray-700 select-none">06</span>
              <span className="ml-6 sm:ml-8 text-blue-400">deployAutomatedNurture();</span>
            </div>
            <div className="flex gap-4 group-hover:translate-x-1 transition-transform delay-500">
              <span className="text-gray-700 select-none">07</span>
              <span>{'}'}</span>
            </div>
          </div>
        </div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>
      </div>
    </div>
  </section>
);

export default Hero;

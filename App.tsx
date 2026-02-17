import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Star,
  Linkedin,
  Github,
  Mail,
  Calendar,
  Activity,
  Play,
  Clock,
  ShieldAlert,
  RotateCcw
} from 'lucide-react';
import { SKILLS, SERVICES, CASE_STUDIES } from './constants';
import { CaseStudy } from './types';

// Shared utility for smooth scrolling to an element by ID with an offset
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80; 
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef<HTMLDivElement>(null);
  
  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Expertise', href: '#expertise', id: 'expertise' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Lock body scroll and prevent overscroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', 
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sectionIds = ['home', ...navItems.map(item => item.id)];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    // Use a small timeout to allow state update to propagate and scroll cleanly
    requestAnimationFrame(() => {
      scrollToId(id);
    });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out ${scrolled || isOpen ? 'bg-gray-950/98 backdrop-blur-xl border-b border-white/10 py-3 sm:py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center relative z-[120]">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2 group relative z-[130]"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg sm:text-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-600/20">J</div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white">JUSTENE <span className="text-blue-500 italic">AUTOMATION</span></span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1 items-center font-medium text-[10px] lg:text-[11px] tracking-widest uppercase text-gray-400 relative bg-gray-900/40 p-1 rounded-full border border-gray-800/50">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4 py-2 rounded-full transition-all duration-500 relative z-10 ${isActive ? 'text-white' : 'hover:text-gray-200'}`}
              >
                {item.name}
                {isActive && (
                  <div className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-lg shadow-blue-600/20 transition-all duration-500 ease-out border border-blue-400/30"></div>
                )}
              </a>
            );
          })}
          <div className="w-px h-4 bg-gray-800 mx-2"></div>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bg-white text-black px-5 py-2 rounded-full transition-all text-[11px] font-black shadow-xl hover:bg-blue-600 hover:text-white active:scale-95"
          >
            Discovery Call
          </a>
        </div>

        {/* Hamburger Trigger */}
        <button 
          className="md:hidden text-white p-2 relative z-[130] rounded-lg hover:bg-gray-800/50 transition-colors focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Robust Layout */}
      <div 
        ref={menuRef}
        className={`md:hidden fixed inset-0 bg-gray-950 z-[110] transition-all duration-500 transform-gpu ease-in-out flex flex-col items-stretch ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
        style={{ height: '100dvh', width: '100vw' }}
      >
        <div className="flex flex-col h-full pt-24 sm:pt-32 pb-10 px-8 overflow-y-auto">
          <div className="text-[10px] font-bold text-blue-500 tracking-[0.4em] uppercase mb-10 opacity-60">System Navigation</div>
          
          <div className="flex flex-col gap-8 flex-grow">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.id)} 
                className={`text-5xl font-black uppercase tracking-tighter flex items-center gap-5 transition-all duration-300 ${activeSection === item.id ? 'text-white translate-x-2' : 'text-gray-800 hover:text-gray-400'}`}
              >
                {activeSection === item.id && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full shadow-[0_0_20px_#2563eb]"></div>}
                {item.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-10 border-t border-gray-900 flex flex-col gap-6">
             <a 
               href="#contact" 
               onClick={(e) => handleNavClick(e, 'contact')} 
               className="bg-blue-600 text-center text-white py-6 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-blue-600/40 active:scale-95 transition-transform text-sm"
             >
               Start Project Initialisation
             </a>
             <div className="flex justify-center gap-10 pt-4 grayscale opacity-30 text-white">
               <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={32} /></a>
               <a href="#" className="hover:text-blue-500 transition-colors"><Github size={32} /></a>
               <a href="#" className="hover:text-blue-500 transition-colors"><Mail size={32} /></a>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

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
          <a href="#contact" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/30 group">
            Book Discovery Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 bg-gray-900/40 px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all active:scale-95 text-white">
            View My Work
          </a>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-6 pt-4 opacity-50">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Certified In:</span>
          <div className="flex items-center gap-4 text-white">
            <div className="flex items-center gap-2">
              <img src="https://gohighlevel.com/favicon.ico" className="w-5 h-5" alt="GHL" />
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

const About = () => (
  <section id="about" className="py-20 sm:py-32 bg-gray-900/40 px-4 sm:px-6 relative">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-center">
        <div className="relative group max-w-sm mx-auto md:max-w-none">
          <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-all duration-500 -z-10 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-3xl -z-5"></div>
          <img src="https://picsum.photos/seed/justene/800/1000" alt="Justene" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700" />
          <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl border-blue-500/30 shadow-2xl shadow-black">
            <div className="text-4xl sm:text-5xl font-black text-blue-500 mb-1">16+</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-black text-gray-400">Months of Deep GHL Systems Execution</div>
          </div>
        </div>
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-black tracking-[0.3em] text-blue-500 uppercase">Expert Profile</h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white">The Architect Behind Your Automation.</h3>
          </div>
          <div className="space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed">
            <p>
              I specialize in transforming complex business operations into seamless, automated ecosystems. For me, GoHighLevel isn't just a tool—it's the engine for your growth.
            </p>
            <p>
              As <span className="text-white font-black italic">Justene Automation</span>, I work at the intersection of marketing strategy and technical architecture. I don't just "set up accounts"; I design conversion pathways that capture, qualify, and close leads 24/7.
            </p>
            <p className="border-l-4 border-blue-600 pl-6 py-2 bg-blue-600/5 text-blue-100 italic">
              "My mission is to delete manual work from your schedule so you can focus on high-level scaling."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-4 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/30 transition-colors">
              <div className="text-white font-black flex items-center gap-2 mb-2"><CheckCircle2 className="text-blue-500" size={18} /> Strategist</div>
              <p className="text-[11px] text-gray-500 leading-tight uppercase tracking-wider">Mapping your entire customer journey.</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/30 transition-colors">
              <div className="text-white font-black flex items-center gap-2 mb-2"><CheckCircle2 className="text-blue-500" size={18} /> Architect</div>
              <p className="text-[11px] text-gray-500 leading-tight uppercase tracking-wider">Building unbreakable GHL infrastructures.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Expertise = () => (
  <section id="expertise" className="py-20 sm:py-32 px-4 sm:px-6 relative">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
        <h2 className="text-xs sm:text-sm font-black tracking-[0.3em] text-blue-500 uppercase">Technical Mastery</h2>
        <h3 className="text-3xl sm:text-5xl font-black text-white">Deep Platform Expertise</h3>
        <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto">
          I leverage the full GoHighLevel suite to create a proprietary competitive advantage for your business.
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

const ServiceOffers = () => (
  <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 bg-gray-900/20 relative">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
        <h2 className="text-xs sm:text-sm font-black tracking-[0.3em] text-blue-500 uppercase">Our Solutions</h2>
        <h3 className="text-3xl sm:text-5xl font-black text-white">Ready-to-Deploy Systems</h3>
        <p className="text-gray-400 text-base sm:text-xl">
          Standard virtual assistance ends where my automation begins. Select a path to total business optimization.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="bg-gray-900/60 border border-gray-800 rounded-[2.5rem] p-8 sm:p-12 flex flex-col hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>
            <h4 className="text-2xl sm:text-3xl font-black mb-6 group-hover:text-blue-400 transition-colors text-white">{service.title}</h4>
            <p className="text-gray-400 text-sm sm:text-base mb-10 leading-relaxed font-medium">
              {service.description}
            </p>
            <div className="space-y-5 mb-12 flex-grow">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-bold text-gray-300">
                  <div className="w-5 h-5 bg-blue-600/20 rounded-md flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600/40 transition-colors">
                    <CheckCircle2 className="text-blue-500" size={14} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="text-center bg-gray-800 group-hover:bg-blue-600 text-white font-black py-4 sm:py-5 rounded-2xl transition-all uppercase text-[11px] tracking-[0.2em] shadow-xl shadow-black/40">
              Inquire Now
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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

const ProjectModal = ({ project, onClose }: { project: CaseStudy | null, onClose: () => void }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative glass-card w-full max-w-5xl rounded-[2rem] sm:rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-500 h-full max-h-[90vh]">
        <div className="p-6 sm:p-10 flex justify-between items-center border-b border-white/5 bg-gray-900/40 shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="bg-blue-600 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full text-white">{project.category}</span>
              <span className="text-blue-500 font-mono text-xs uppercase tracking-widest font-bold">#Walkthrough_Enabled</span>
            </div>
            <h4 className="text-2xl sm:text-4xl font-black text-white tracking-tight">{project.title}</h4>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border border-white/10 group shrink-0"
          >
            <X className="text-white group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto custom-scrollbar">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-4">
                <h5 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Project Objective</h5>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">{project.description}</p>
              </div>
              <div className="space-y-4">
                <h5 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Technical Highlights</h5>
                <ul className="space-y-3">
                  {["System Architecture Mapping", "GHL Custom Logic Build", "Error-Free Routing", "Performance Monitoring"].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                 <div className="flex items-center gap-3 mb-2">
                   <Zap size={20} className="text-blue-500" />
                   <span className="font-black text-white text-xs uppercase tracking-widest">Automation Yield</span>
                 </div>
                 <p className="text-sm text-gray-400 font-bold italic">This specific implementation saved the client an estimated 14 hours per week of manual data entry and follow-up.</p>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-black border border-white/10 shadow-2xl group/video">
                {project.videoUrl ? (
                  <video 
                    controls 
                    className="w-full h-full object-contain"
                    poster={project.imagePlaceholder}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                    <Play size={64} className="text-gray-800" />
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Video Content Restricted</span>
                  </div>
                )}
                {!project.videoUrl && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-8 text-center">
                    <p className="text-white text-lg font-bold">For proprietary reasons, full logic walkthroughs are demonstrated live during strategy calls.</p>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center text-[10px] text-gray-600 font-black uppercase tracking-widest">
                <div className="flex items-center gap-2">
                   <Globe size={14} /> Global Standard Deployment
                </div>
                <div className="flex items-center gap-2">
                   <Clock size={14} /> 14m 22s Walkthrough
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 sm:px-10 py-8 bg-gray-900/60 border-t border-white/5 flex flex-col sm:flex-row gap-6 justify-between items-center shrink-0">
           <p className="text-gray-500 text-sm font-bold max-w-md text-center sm:text-left leading-relaxed">
             Inspired by this system? Let's discuss how we can map a similar architecture for your business.
           </p>
           <a 
             href="#contact" 
             onClick={(e) => { 
               e.preventDefault();
               onClose(); 
               scrollToId('contact'); 
             }} 
             className="bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-4 rounded-xl uppercase text-xs tracking-[0.2em] shadow-xl shadow-blue-600/30 transition-all active:scale-95 whitespace-nowrap"
           >
             Book Strategy Call
           </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <section id="portfolio" className="py-20 sm:py-32 px-4 sm:px-6 bg-gray-900/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 sm:mb-24 gap-6 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-xs sm:text-sm font-black tracking-[0.3em] text-blue-500 uppercase">Proof of Concept</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-white">Strategic Implementations</h3>
          </div>
          <p className="text-gray-400 max-w-sm text-sm sm:text-lg font-medium">
            A collection of high-impact CRM systems built to solve specific conversion friction.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 sm:gap-14">
          {CASE_STUDIES.map((study, idx) => (
            <div key={idx} className="group cursor-pointer" onClick={() => setSelectedProject(study)}>
              <div className="relative overflow-hidden rounded-[2.5rem] mb-8 aspect-video bg-gray-800 flex items-center justify-center border border-white/5 shadow-2xl shadow-black/50">
                 <img src={study.imagePlaceholder} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] opacity-40 group-hover:opacity-100 grayscale hover:grayscale-0" />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-blue-600/80 backdrop-blur-sm px-6 text-center">
                   <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <span className="bg-white text-black px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest shadow-2xl flex items-center gap-2">
                       <Play size={14} className="fill-current" /> View Logic Walkthrough
                     </span>
                   </div>
                 </div>
                 <div className="absolute top-6 left-6">
                   <span className="bg-blue-600 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl backdrop-blur-xl shadow-2xl border border-blue-400/30 text-white">{study.category}</span>
                 </div>
              </div>
              <h4 className="text-2xl sm:text-3xl font-black group-hover:text-blue-500 transition-colors mb-3 tracking-tight text-white">{study.title}</h4>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-medium">{study.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 sm:mt-32 p-10 sm:p-16 rounded-[3rem] border border-dashed border-gray-700 text-center space-y-6 bg-gray-900/40 relative overflow-hidden group">
          <div className="absolute -z-10 top-0 left-0 w-full h-full bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <p className="text-gray-500 text-sm sm:text-base italic max-w-2xl mx-auto font-medium">
            "Confidentiality is a priority. Technical system maps and proprietary logic for previous clients are shared during strategy calls to showcase implementation depth."
          </p>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact'); }} className="inline-flex items-center gap-2 text-blue-500 font-black uppercase text-xs tracking-[0.3em] hover:text-white transition-colors">
            Book a technical walkthrough <ChevronRight size={18} />
          </a>
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

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

const Contact = () => {
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Math challenge for simple human verification
  const challenge = useMemo(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    return { a, b, answer: a + b };
  }, [formStatus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Security checks
    const honeypot = (e.target as any).website?.value;
    if (honeypot) {
      console.warn('Bot detected');
      return;
    }

    if (parseInt(captchaAnswer) !== challenge.answer) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    setFormStatus('submitting');
    // Simulated submission
    setTimeout(() => {
      setFormStatus('success');
      setCaptchaAnswer('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent to-blue-900/20">
      <div className="max-w-7xl mx-auto glass-card rounded-[3rem] sm:rounded-[4rem] p-8 sm:p-14 md:p-20 lg:p-24 overflow-hidden relative border border-white/5">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 blur-[100px] sm:blur-[150px] rounded-full -z-10"></div>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-7xl font-black leading-[0.9] tracking-tighter text-white">Let's Build Your <br/><span className="gradient-text">Profit Machine.</span></h2>
              <p className="text-lg sm:text-2xl text-gray-400 font-medium max-w-md mx-auto lg:mx-0">
                Stop hiring assistants to do tasks. Hire an architect to build your future.
              </p>
            </div>
            <div className="space-y-6 text-left max-w-md mx-auto lg:mx-0">
              {[
                { icon: <Calendar size={22} />, text: "Available for 30-min Strategy Calls", color: "text-blue-400", bg: "bg-blue-600/10", border: "border-blue-500/20" },
                { icon: <Globe size={22} />, text: "Serving Clients in US, UK, EU & AU", color: "text-purple-400", bg: "bg-purple-600/10", border: "border-purple-500/20" },
                { icon: <ShieldCheck size={22} />, text: "GDPR Compliant & Secure Operations", color: "text-green-400", bg: "bg-green-600/10", border: "border-green-500/20" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 text-base sm:text-lg font-bold group text-white">
                  <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} border ${item.border} shrink-0 shadow-2xl group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center lg:justify-start gap-6 pt-6">
              <a href="#" className="p-4 bg-gray-800 rounded-2xl hover:bg-blue-600 transition-all shadow-2xl active:scale-90 border border-white/5 text-white" aria-label="LinkedIn"><Linkedin size={24} /></a>
              <a href="#" className="p-4 bg-gray-800 rounded-2xl hover:bg-blue-600 transition-all shadow-2xl active:scale-90 border border-white/5 text-white" aria-label="Github"><Github size={24} /></a>
              <a href="mailto:hello@justeneautomation.com" className="p-4 bg-gray-800 rounded-2xl hover:bg-blue-600 transition-all shadow-2xl active:scale-90 border border-white/5 text-white" aria-label="Email"><Mail size={24} /></a>
            </div>
          </div>
          <div className="bg-gray-900/60 p-8 sm:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black relative group">
             <div className="absolute inset-0 bg-blue-600/5 rounded-[2.5rem] -z-10 group-hover:bg-blue-600/10 transition-all duration-700"></div>
             
             {formStatus === 'success' ? (
               <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/40">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h4 className="text-3xl font-black text-white">System Initialized</h4>
                  <p className="text-gray-400 font-bold max-w-xs">Your inquiry has been routed to my prioritization queue. I'll reach out within 24 hours.</p>
                  <button onClick={() => setFormStatus('idle')} className="text-blue-500 font-black uppercase text-xs tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                    <RotateCcw size={16} /> Send Another Inquiry
                  </button>
               </div>
             ) : (
               <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                 {/* Honeypot field - hidden from users */}
                 <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">First Name</label>
                     <input required type="text" className="w-full bg-black/60 border border-gray-700 rounded-2xl px-6 py-4 sm:py-5 focus:border-blue-500 outline-none transition-all placeholder:text-gray-700 text-base font-bold text-white shadow-inner" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Business Name</label>
                     <input required type="text" className="w-full bg-black/60 border border-gray-700 rounded-2xl px-6 py-4 sm:py-5 focus:border-blue-500 outline-none transition-all placeholder:text-gray-700 text-base font-bold text-white shadow-inner" placeholder="Acme Growth" />
                   </div>
                 </div>
                 <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Email Address</label>
                     <input required type="email" className="w-full bg-black/60 border border-gray-700 rounded-2xl px-6 py-4 sm:py-5 focus:border-blue-500 outline-none transition-all placeholder:text-gray-700 text-base font-bold text-white shadow-inner" placeholder="john@growth.com" />
                   </div>
                 <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Current GHL Status</label>
                     <div className="relative">
                       <select className="w-full bg-black/60 border border-gray-700 rounded-2xl px-6 py-4 sm:py-5 focus:border-blue-500 outline-none transition-all appearance-none text-base font-bold text-gray-300 cursor-pointer shadow-inner">
                         <option>Already Using GHL</option>
                         <option>Thinking of Switching</option>
                         <option>Need Brand New Setup</option>
                         <option>Complex Migration Need</option>
                         <option>Snapshot Development</option>
                       </select>
                       <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-blue-500">
                         <ChevronRight size={20} className="rotate-90" />
                       </div>
                     </div>
                   </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">How can I help?</label>
                   <textarea required className="w-full bg-black/60 border border-gray-700 rounded-2xl px-6 py-4 sm:py-5 h-32 sm:h-40 focus:border-blue-500 outline-none transition-all placeholder:text-gray-700 text-base font-bold text-white shadow-inner resize-none" placeholder="Tell me about your bottlenecks..."></textarea>
                 </div>

                 {/* Human Verification (Captcha) */}
                 <div className={`p-6 rounded-2xl border transition-all ${formStatus === 'error' ? 'bg-red-500/10 border-red-500/40' : 'bg-blue-600/5 border-blue-500/20'}`}>
                    <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
                      <div className="space-y-1 text-center sm:text-left shrink-0">
                        <div className="flex items-center gap-2 justify-center sm:justify-start">
                          <ShieldCheck size={16} className={formStatus === 'error' ? 'text-red-500' : 'text-blue-500'} />
                          <span className={`text-[10px] font-black uppercase tracking-widest ${formStatus === 'error' ? 'text-red-400' : 'text-gray-400'}`}>
                            {formStatus === 'error' ? 'Verification Failed' : 'System Verification'}
                          </span>
                        </div>
                        <p className="text-sm text-white font-black italic">What is {challenge.a} + {challenge.b}?</p>
                      </div>
                      <div className="relative w-full sm:w-28">
                        <input 
                          type="number" 
                          value={captchaAnswer}
                          onChange={(e) => setCaptchaAnswer(e.target.value)}
                          className={`w-full bg-black/80 border rounded-xl px-4 py-3 outline-none text-center font-black text-white ${formStatus === 'error' ? 'border-red-500' : 'border-gray-700 focus:border-blue-500'}`}
                          placeholder="?"
                          required
                        />
                      </div>
                    </div>
                 </div>

                 <button 
                   disabled={formStatus === 'submitting'}
                   className={`w-full text-white font-black py-5 sm:py-6 rounded-2xl uppercase text-xs sm:text-sm tracking-[0.3em] transition-all transform hover:scale-[1.02] active:scale-95 shadow-2xl mt-4 border border-blue-400/20 flex items-center justify-center gap-3 ${formStatus === 'submitting' ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/40'}`}
                 >
                   {formStatus === 'submitting' ? (
                     <>Initialising Secure Connection...</>
                   ) : (
                     <>Initialize Collaboration</>
                   )}
                 </button>
                 
                 {formStatus === 'error' && (
                   <p className="text-center text-red-500 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 animate-bounce">
                     <ShieldAlert size={14} /> Incorrect Verification Answer
                   </p>
                 )}
               </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

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
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToId('services'); }} className="hover:text-white transition-colors">Services</a>
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

const WhatsAppButton = () => {
  const phoneNumber = "639638296973"; 
  const message = "Hi Justene, I'm interested in automating my business systems. Let's talk!";
  // Using api.whatsapp.com instead of wa.me to bypass common local network certificate errors
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[200] group flex items-center gap-3"
      aria-label="Chat with Justene on WhatsApp"
    >
      <div className="bg-gray-900/90 backdrop-blur-xl text-white border border-white/10 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl opacity-80 sm:opacity-60 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500 pointer-events-none hidden sm:flex items-center gap-3 border-l-4 border-l-[#25D366]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_8px_#25D366]"></div>
        Secure Direct WhatsApp Access
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-[1.5rem] blur-2xl opacity-40 animate-pulse group-hover:opacity-70 transition-opacity"></div>
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl shadow-[#25D366]/40 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 border border-white/20">
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 fill-current" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-[3px] border-[#030712] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-red-500 animate-ping opacity-75"></div>
        </div>
      </div>
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <ServiceOffers />
        <UniquePositioning />
        <Portfolio />
        <IdealClient />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

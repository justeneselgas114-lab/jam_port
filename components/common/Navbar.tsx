import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Linkedin,
  Github,
  Mail,
} from 'lucide-react';
import { scrollToId } from '../../utils/scrollUtils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef<HTMLDivElement>(null);
  
  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Expertise', href: '#expertise', id: 'expertise' },
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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out ${scrolled || isOpen ? 'bg-gray-950 border-b border-white/10 py-3 sm:py-4 shadow-2xl' : 'bg-black/20 backdrop-blur-sm py-6'}`}>
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
        <div className="hidden md:flex gap-1 items-center font-medium text-[10px] lg:text-[11px] tracking-widest uppercase text-white relative bg-gray-900/60 p-1 rounded-full border border-gray-700/50">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4 py-2 rounded-full transition-all duration-500 relative z-10 ${isActive ? 'text-white font-black' : 'text-gray-300 hover:text-white'}`}
              >
                {item.name}
                {isActive && (
                  <div className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-lg shadow-blue-600/20 transition-all duration-500 ease-out border border-blue-400/30"></div>
                )}
              </a>
            );
          })}
          <div className="w-px h-4 bg-gray-700 mx-2"></div>
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
          <div className="text-[10px] font-bold text-blue-500 tracking-[0.4em] uppercase mb-10 opacity-80">System Navigation</div>
          
          <div className="flex flex-col gap-8 flex-grow">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.id)} 
                className={`text-5xl font-black uppercase tracking-tighter flex items-center gap-5 transition-all duration-300 ${activeSection === item.id ? 'text-white translate-x-2' : 'text-white/40 hover:text-white'}`}
              >
                {activeSection === item.id && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full shadow-[0_0_20px_#2563eb]"></div>}
                {item.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-10 border-t border-gray-800 flex flex-col gap-6">
             <a 
               href="#contact" 
               onClick={(e) => handleNavClick(e, 'contact')} 
               className="bg-blue-600 text-center text-white py-6 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-blue-600/40 active:scale-95 transition-transform text-sm"
             >
               Start Project Initialisation
             </a>
             <div className="flex justify-center gap-10 pt-4 grayscale opacity-50 text-white">
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

export default Navbar;

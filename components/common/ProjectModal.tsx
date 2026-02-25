import React, { useState, useEffect } from 'react';
import { X, Globe, Clock, Zap } from 'lucide-react';
import { CaseStudy } from '../../types';

interface ProjectModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [fullSizeImage, setFullSizeImage] = useState<string | null>(null);

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

  const isFunnelProject = project.title === "High-Ticket Funnel Architecture";

  const openFullSizeImage = (imageUrl: string) => {
    setFullSizeImage(imageUrl);
  };

  const closeFullSizeImage = () => {
    setFullSizeImage(null);
  };

  return (
    <>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-300">
        <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
        <div className="relative glass-card w-full max-w-5xl rounded-[2rem] sm:rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-500 h-full max-h-[90vh]">
          <div className="p-6 sm:p-10 flex justify-between items-center border-b border-white/5 bg-gray-900/40 shrink-0">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-blue-600 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full text-white">{project.category}</span>
                <span className="text-blue-500 font-mono text-xs uppercase tracking-widest font-bold">#Image_Preview</span>
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
            {isFunnelProject ? (
              // Funnel Building Specific Content
              <div className="space-y-10">
                <div className="text-center space-y-4">
                  <h5 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Funnel Building Expertise</h5>
                  <p className="text-gray-400 text-lg leading-relaxed font-medium max-w-3xl mx-auto">
                    Comprehensive funnel development services that transform traffic into qualified leads and appointments through strategic page architecture and automation sequences.
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-gray-700/30">
                  <div className="flex animate-scroll-x">
                    {/* First set of images */}
                    <div className="relative flex-shrink-0 w-80 h-48 overflow-hidden border border-gray-700 shadow-2xl group">
                      <img 
                        src="https://i.postimg.cc/dtCwwh0r/1.png" 
                        alt="Landing Page Design"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={() => openFullSizeImage("https://i.postimg.cc/dtCwwh0r/1.png")}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-colors"
                        >
                          View Image
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0 w-80 h-48 overflow-hidden border border-gray-700 shadow-2xl group">
                      <img 
                        src="https://i.postimg.cc/PJphLxzg/2.png" 
                        alt="Application Form"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={() => openFullSizeImage("https://i.postimg.cc/PJphLxzg/2.png")}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-colors"
                        >
                          View Image
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0 w-80 h-48 overflow-hidden border border-gray-700 shadow-2xl group">
                      <img 
                        src="https://i.postimg.cc/59TbhBfJ/3.png" 
                        alt="Thank You Page"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={() => openFullSizeImage("https://i.postimg.cc/59TbhBfJ/3.png")}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-colors"
                        >
                          View Image
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0 w-80 h-48 overflow-hidden border border-gray-700 shadow-2xl group">
                      <img 
                        src="https://i.postimg.cc/cCgZKHBt/4.png" 
                        alt="Email Automation"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={() => openFullSizeImage("https://i.postimg.cc/cCgZKHBt/4.png")}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-colors"
                        >
                          View Image
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0 w-80 h-48 overflow-hidden border border-gray-700 shadow-2xl group">
                      <img 
                        src="https://i.postimg.cc/qqh0tRxH/5.png" 
                        alt="Dashboard Analytics"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={() => openFullSizeImage("https://i.postimg.cc/qqh0tRxH/5.png")}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-colors"
                        >
                          View Image
                        </button>
                      </div>
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="relative flex-shrink-0 w-80 h-48 overflow-hidden border border-gray-700 shadow-2xl group">
                      <img 
                        src="https://i.postimg.cc/dtCwwh0r/1.png" 
                        alt="Landing Page Design"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={() => openFullSizeImage("https://i.postimg.cc/dtCwwh0r/1.png")}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-colors"
                        >
                          View Image
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0 w-80 h-48 overflow-hidden border border-gray-700 shadow-2xl group">
                      <img 
                        src="https://i.postimg.cc/PJphLxzg/2.png" 
                        alt="Application Form"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={() => openFullSizeImage("https://i.postimg.cc/PJphLxzg/2.png")}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-colors"
                        >
                          View Image
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0 w-80 h-48 overflow-hidden border border-gray-700 shadow-2xl group">
                      <img 
                        src="https://i.postimg.cc/59TbhBfJ/3.png" 
                        alt="Thank You Page"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={() => openFullSizeImage("https://i.postimg.cc/59TbhBfJ/3.png")}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-colors"
                        >
                          View Image
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0 w-80 h-48 overflow-hidden border border-gray-700 shadow-2xl group">
                      <img 
                        src="https://i.postimg.cc/cCgZKHBt/4.png" 
                        alt="Email Automation"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={() => openFullSizeImage("https://i.postimg.cc/cCgZKHBt/4.png")}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-colors"
                        >
                          View Image
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0 w-80 h-48 overflow-hidden border border-gray-700 shadow-2xl group">
                      <img 
                        src="https://i.postimg.cc/qqh0tRxH/5.png" 
                        alt="Dashboard Analytics"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={() => openFullSizeImage("https://i.postimg.cc/qqh0tRxH/5.png")}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-colors"
                        >
                          View Image
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl border border-blue-500/20">
                  <div className="text-center space-y-4">
                    <h6 className="text-xl font-black text-white">Funnel Performance Metrics</h6>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { metric: "40-60%", label: "Landing Page Conversion" },
                        { metric: "70-85%", label: "Application Completion" },
                        { metric: "24-48hrs", label: "Lead Response Time" },
                        { metric: "3-5X", label: "ROI Increase" }
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl sm:text-3xl font-black text-blue-400">{stat.metric}</div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Default Project Content
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="space-y-6">
                  <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                    <h5 className="font-black text-white mb-4">Project Overview</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
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
                    <img 
                      src={project.imagePlaceholder} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
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
            )}
          </div>
          <div className="p-6 sm:px-10 py-8 bg-gray-900/60 border-t border-white/5 flex flex-col sm:flex-row gap-6 justify-between items-center shrink-0">
             <p className="text-gray-500 text-sm font-bold max-w-md text-center sm:text-left leading-relaxed">
               {isFunnelProject ? 
                 "Ready to build a high-converting funnel system for your business? Let's map out your conversion architecture." :
                 "Inspired by this system? Let's discuss how we can map a similar architecture for your business."
               }
             </p>
             <a 
               href="#contact" 
               onClick={(e) => { 
                 e.preventDefault();
                 onClose();
                 // Scroll to contact after modal closes
                 setTimeout(() => {
                   const el = document.getElementById('contact');
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
                 }, 100);
               }}
               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/30 text-center"
             >
               Start Similar Project
             </a>
          </div>
        </div>
      </div>

      {/* Full Size Image Modal */}
      {fullSizeImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={closeFullSizeImage}></div>
          <div className="relative max-w-6xl max-h-[90vh]">
            <img 
              src={fullSizeImage} 
              alt="Full size preview"
              className="w-full h-full object-contain rounded-2xl"
            />
            <button 
              onClick={closeFullSizeImage}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all border border-white/20"
            >
              <X className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;

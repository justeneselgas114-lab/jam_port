import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Play, Star, CheckCircle2, X } from 'lucide-react';
import { CASE_STUDIES } from '../../constants';
import { CaseStudy } from '../../types';
import { scrollToId } from '../../utils/scrollUtils';

const Portfolio = () => {
  const [fullSizeImage, setFullSizeImage] = useState<string | null>(null);
  const [currentProject, setCurrentProject] = useState<string>('');
  const [currentImageAlt, setCurrentImageAlt] = useState<string>('');
  
  // Slider states
  const [funnelIndex, setFunnelIndex] = useState(0);
  const [workflowIndex, setWorkflowIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Touch states for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const funnelSliderRef = useRef<HTMLDivElement>(null);
  const workflowSliderRef = useRef<HTMLDivElement>(null);

  // Funnel Building carousel data
  const funnelImages = [
    { src: "https://i.postimg.cc/dtCwwh0r/1.png", alt: "Application Form", project: "High-Ticket Funnel Architecture" },
    { src: "https://i.postimg.cc/PJphLxzg/2.png", alt: "Landing Page Design", project: "High-Ticket Funnel Architecture" },
    { src: "https://i.postimg.cc/59TbhBfJ/3.png", alt: "Thank You Page", project: "High-Ticket Funnel Architecture" },
    { src: "https://i.postimg.cc/cCgZKHBt/4.png", alt: "Email Automation", project: "High-Ticket Funnel Architecture" },
    { src: "https://i.postimg.cc/qqh0tRxH/5.png", alt: "Dashboard Analytics", project: "High-Ticket Funnel Architecture" }
  ];

  // Workflow carousel data
  const workflowImages = [
    {
      src: "https://i.postimg.cc/YCRXVLVj/02441972_e902_4ffb_8765_70e64fc5e8b5.jpg",
      alt: "Lead Nurturing Workflow",
      title: "Lead Nurturing Workflow",
      project: "Workflow Automations"
    },
    {
      src: "https://i.postimg.cc/zG7dMHMy/229a70ad_b8da_4a8c_b385_0b401b3c99e5.jpg", 
      alt: "Behavior-Based Triggers",
      title: "Behavior-Based Triggers",
      project: "Workflow Automations"
    },
    {
      src: "https://i.postimg.cc/BnphyPyx/31211e1c_7033_44e5_b969_f02f2dde8c78.jpg",
      alt: "Smart Lead Routing",
      title: "Smart Lead Routing",
      project: "Workflow Automations"
    },
    {
      src: "https://i.postimg.cc/6QQHN5JZ/3b072825_8474_4290_8f8f_6cf2cfbd13de.jpg",
      alt: "Automated Follow-up",
      title: "Automated Follow-up",
      project: "Workflow Automations"
    },
    {
      src: "https://i.postimg.cc/jSc89n9f/3bd868bf_64cb_4fb9_901e_b1f6c579f4d7.jpg",
      alt: "Conversion Analytics",
      title: "Conversion Analytics",
      project: "Workflow Automations"
    },
    {
      src: "https://i.postimg.cc/7LLByY8C/6f1acd38_91c3_4eb7_9744_348fd688995e.jpg",
      alt: "Email Sequences",
      title: "Email Sequences",
      project: "Workflow Automations"
    },
    {
      src: "https://i.postimg.cc/JhhTW4VB/a76b9b5f_fc19_404c_9643_2021ff644585.jpg",
      alt: "Lead Scoring",
      title: "Lead Scoring",
      project: "Workflow Automations"
    },
    {
      src: "https://i.postimg.cc/mgjdq1qM/a8fcddeb_db58_4ce1_89b6_7b1fccac3a5f.jpg",
      alt: "CRM Integration",
      title: "CRM Integration",
      project: "Workflow Automations"
    },
    {
      src: "https://i.postimg.cc/2SGHJLJ5/c5373370_30c2_4dc4_89bd_f1e86c65f44c.jpg",
      alt: "Multi-Channel Campaigns",
      title: "Multi-Channel Campaigns",
      project: "Workflow Automations"
    },
    {
      src: "https://i.postimg.cc/zG7dMHMB/cc58ca55_6a78_4724_9b5a_b0be3e8089ba.jpg",
      alt: "Performance Tracking",
      title: "Performance Tracking",
      project: "Workflow Automations"
    },
    {
      src: "https://i.postimg.cc/Dw6CD4D1/f50eec5e_9d20_482a_bb9a_252510d5c46f.jpg",
      alt: "A/B Testing Workflows",
      title: "A/B Testing Workflows",
      project: "Workflow Automations"
    },
    {
      src: "https://i.postimg.cc/t4krfnfY/f6649252_5b9b_4ec5_84fe_0acb3abd4f8d.jpg",
      alt: "Customer Journey Mapping",
      title: "Customer Journey Mapping",
      project: "Workflow Automations"
    }
  ];

  const openFullSizeImage = (imageUrl: string, projectName: string, imageAlt: string) => {
    setFullSizeImage(imageUrl);
    setCurrentProject(projectName);
    setCurrentImageAlt(imageAlt);
  };

  const closeFullSizeImage = () => {
    setFullSizeImage(null);
    setCurrentProject('');
    setCurrentImageAlt('');
  };

  const getWebsiteLink = (imageAlt: string) => {
    // Map based on the exact image alt text
    const links: { [key: string]: string } = {
      // Funnel images - exact mapping as requested
      'Application Form': 'https://orquestra-ph.vercel.app/',
      'Landing Page Design': 'https://napmi-website.vercel.app/ ',
      'Thank You Page': 'https://bigboss-buffet.vercel.app/',
      'Email Automation': 'https://app.funnels.so/v2/preview/LNmzwyeOu4pQU0teYT7T',
      'Dashboard Analytics': 'https://iron-forge-gym.vercel.app/'
    };
    return links[imageAlt] || '#contact';
  };

  const handleExperienceWebsite = (imageAlt: string) => {
    const link = getWebsiteLink(imageAlt);
    closeFullSizeImage();
    if (link !== '#contact') {
      window.open(link, '_blank');
    } else {
      scrollToId('contact');
    }
  };

  // Slider navigation functions
  const nextFunnel = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setFunnelIndex((prev) => (prev === funnelImages.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevFunnel = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setFunnelIndex((prev) => (prev === 0 ? funnelImages.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextWorkflow = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setWorkflowIndex((prev) => (prev === workflowImages.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevWorkflow = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setWorkflowIndex((prev) => (prev === 0 ? workflowImages.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (sliderType: 'funnel' | 'workflow') => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      sliderType === 'funnel' ? nextFunnel() : nextWorkflow();
    } else if (isRightSwipe) {
      sliderType === 'funnel' ? prevFunnel() : prevWorkflow();
    }
  };

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
        
        {/* Funnel Building Showcase - Slider */}
        <div className="mb-20">
          <div className="text-center space-y-6 mb-12">
            <h4 className="text-2xl sm:text-3xl font-black text-white">Funnel Builds</h4>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Comprehensive funnel development services that transform traffic into qualified leads and appointments through strategic page architecture and automation sequences.
            </p>
          </div>

          <div className="relative rounded-3xl border border-gray-700/30 bg-gradient-to-br from-gray-800 to-gray-900 mx-auto w-[calc(100%-2rem)] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <div 
              ref={funnelSliderRef}
              className="flex transition-transform duration-700 ease-out h-full items-center"
              style={{ transform: `translateX(-${funnelIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd('funnel')}
            >
              {funnelImages.map((image, idx) => (
                <div key={idx} className="flex-shrink-0 w-full h-full flex items-center justify-center p-2 sm:p-4">
                  <div className={`relative w-full h-full border-2 shadow-2xl overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                    idx === funnelIndex 
                      ? 'scale-100 opacity-100 border-blue-500 shadow-blue-500/30 shadow-2xl z-20' 
                      : 'scale-70 opacity-40 border-gray-600'
                  }`}
                  onClick={() => openFullSizeImage(image.src, image.project, image.alt)}>
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced navigation arrows */}
            <button
              onClick={prevFunnel}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/90 hover:bg-black backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20 shadow-2xl shadow-black/50 z-30 transform hover:scale-110"
              disabled={isTransitioning}
            >
              <ChevronLeft className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextFunnel}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/90 hover:bg-black backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20 shadow-2xl shadow-black/50 z-30 transform hover:scale-110"
              disabled={isTransitioning}
            >
              <ChevronRight className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            
            {/* Enhanced dots indicator */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
              {funnelImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setFunnelIndex(idx);
                    setTimeout(() => setIsTransitioning(false), 700);
                  }}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 transform hover:scale-125 ${
                    idx === funnelIndex 
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600 w-6 sm:w-8 shadow-lg shadow-blue-500/50' 
                      : 'bg-white/30 hover:bg-white/50 w-1.5 sm:w-2'
                  }`}
                  disabled={isTransitioning}
                />
              ))}
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

        {/* Workflow Automations Showcase - Slider */}
        <div className="mb-20">
          <div className="text-center space-y-6 mb-12">
            <h4 className="text-2xl sm:text-3xl font-black text-white">Workflow Automations</h4>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Complex automation handling lead nurturing for 6 months post-optin with behavior-based triggers and intelligent routing systems.
            </p>
          </div>

          <div className="relative rounded-3xl border border-gray-700/30 bg-gradient-to-br from-gray-800 to-gray-900 mx-auto w-[calc(100%-2rem)] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <div 
              ref={workflowSliderRef}
              className="flex transition-transform duration-700 ease-out h-full items-center"
              style={{ transform: `translateX(-${workflowIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd('workflow')}
            >
              {workflowImages.map((workflow, idx) => (
                <div key={idx} className="flex-shrink-0 w-full h-full flex items-center justify-center p-2 sm:p-4">
                  <div className={`relative w-full h-full border-2 shadow-2xl overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                    idx === workflowIndex 
                      ? 'scale-100 opacity-100 border-blue-500 shadow-blue-500/30 shadow-2xl z-20' 
                      : 'scale-70 opacity-40 border-gray-600'
                  }`}
                  onClick={() => openFullSizeImage(workflow.src, workflow.project, workflow.alt)}>
                    <img 
                      src={workflow.src} 
                      alt={workflow.alt}
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced navigation arrows */}
            <button
              onClick={prevWorkflow}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/90 hover:bg-black backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20 shadow-2xl shadow-black/50 z-30 transform hover:scale-110"
              disabled={isTransitioning}
            >
              <ChevronLeft className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextWorkflow}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/90 hover:bg-black backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20 shadow-2xl shadow-black/50 z-30 transform hover:scale-110"
              disabled={isTransitioning}
            >
              <ChevronRight className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            
            {/* Enhanced dots indicator */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
              {workflowImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setWorkflowIndex(idx);
                    setTimeout(() => setIsTransitioning(false), 700);
                  }}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 transform hover:scale-125 ${
                    idx === workflowIndex 
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600 w-6 sm:w-8 shadow-lg shadow-blue-500/50' 
                      : 'bg-white/30 hover:bg-white/50 w-1.5 sm:w-2'
                  }`}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-3xl border border-green-500/20">
            <div className="text-center space-y-4">
              <h6 className="text-xl font-black text-white">Automation Performance Metrics</h6>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { metric: "6 Months", label: "Automated Nurturing" },
                  { metric: "95%", label: "Lead Engagement" },
                  { metric: "0 Manual", label: "Human Intervention" },
                  { metric: "24/7", label: "System Availability" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-black text-green-400">{stat.metric}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

      {/* Full Size Image Modal */}
      {fullSizeImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeFullSizeImage();
            }
          }}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl animate-fade-in"></div>
          
          {/* Close Button - Top Left */}
          <button 
            onClick={closeFullSizeImage}
            className="absolute top-6 left-6 z-[210] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 border border-white/20 backdrop-blur-sm group animate-scale-in"
            aria-label="Close image"
          >
            <X className="text-white w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
          </button>
          
          {/* Image Container */}
          <div className="relative max-w-7xl max-h-[85vh] flex flex-col items-center animate-scale-in-delay">
            <div className="relative w-full h-full max-h-[75vh]">
              <img 
                src={fullSizeImage} 
                alt="Full size preview"
                className="w-full h-full object-contain rounded-2xl shadow-2xl animate-fade-in-delay"
              />
            </div>
            
            {/* Project Info */}
            <div className="mt-6 text-center space-y-4 animate-slide-up">
              <h3 className="text-xl sm:text-2xl font-black text-white">{currentProject}</h3>
              {currentProject === 'High-Ticket Funnel Architecture' ? (
                <button 
                  onClick={() => handleExperienceWebsite(currentImageAlt)}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-green-600/30"
                >
                  Experience Website
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

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
  <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 -z-10 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] bg-blue-600/10 blur-[60px] sm:blur-[100px] md:blur-[150px] lg:blur-[180px] rounded-full"></div>
    <div className="absolute bottom-0 left-0 -z-10 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-purple-600/10 blur-[50px] sm:blur-[80px] md:blur-[120px] lg:blur-[150px] rounded-full"></div>
    
    <div className="max-w-6xl xl:max-w-7xl mx-auto w-full">
      <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center h-full min-h-[500px] lg:min-h-[600px]">
        <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left flex flex-col justify-center pt-20 sm:pt-24 lg:pt-32">
          <div className="inline-flex items-center justify-center gap-1 sm:gap-2 lg:gap-1 lg:justify-start mx-auto lg:mx-0 relative">
              <div className="relative">
                <Zap size={6} className="sm:size-10 lg:size-6 text-yellow-400 animate-pulse" />
                <div className="absolute inset-0 blur-sm bg-yellow-400/50 animate-ping"></div>
              </div>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-xs sm:text-sm lg:text-[10px] font-bold uppercase tracking-[0.05em] whitespace-nowrap">
                GHL Automation Expert
              </span>
          </div>
          <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight text-white">
            <span className="gradient-text">Don’t Chase It.</span>
          </h1>
          <p className="hero-text text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl lg:max-w-xl leading-relaxed mx-auto lg:mx-0">
            I build scalable CRM infrastructures for international clients. Convert traffic to profit with behavior-based automation and high-conversion funnels.
          </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start">
            {/* Google Calendar Appointment Scheduling */}
            <div 
              id="calendar-button-container"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl font-black uppercase text-xs sm:text-xs tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/30 cursor-pointer w-full sm:w-auto min-w-[140px] sm:min-w-[160px] lg:min-w-[200px]"
            >
              <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
              <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    (function() {
                      window.addEventListener('load', function() {
                        calendar.schedulingButton.load({
                          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Z3dNDyksL2i03DjZAUqgDko01GjTD92HjV5mqPY3EmitnzGc-H4hKLur2MDpUfNAD4izpXRqt?gv=true',
                          color: '#039BE5',
                          label: 'Book Discovery Call',
                          target: document.getElementById('calendar-button-container')
                        });
                      });
                    })();
                  `
                }}
              />
              <span className="flex items-center gap-2 text-xs sm:text-xs">
                Book Discovery Call
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
            <a 
              href="#portfolio" 
              onClick={(e) => {
                e.preventDefault();
                scrollToId('portfolio');
              }}
              className="flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 bg-gray-900/40 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl font-black uppercase text-xs sm:text-xs tracking-widest transition-all active:scale-95 text-white w-full sm:w-auto"
            >
              View My Work
            </a>
          </div>
        
        {/* Social Media Links */}
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4 pt-1 sm:pt-2 lg:pt-3">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Connect:</span>
            <div className="flex gap-2 sm:gap-3">
              <a 
                href="https://wa.me/639638296973" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-green-600/20 hover:border-green-500 transition-all group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="text-gray-400 group-hover:text-green-500 transition-colors" size={16} />
              </a>
              <a 
                href="https://www.facebook.com/Just10AiAutomation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500 transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="text-gray-400 group-hover:text-blue-500 transition-colors" size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/in/justene-selgas-152052377/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-gray-400 group-hover:text-blue-500 transition-colors" size={16} />
              </a>
              <a 
                href="mailto:justeneselgas.work@gmail.com" 
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500 transition-all group"
                aria-label="Email"
              >
                <Mail className="text-gray-400 group-hover:text-blue-500 transition-colors" size={16} />
              </a>
            </div>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-3 lg:pt-4 opacity-50">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Certified In:</span>
            <div className="flex items-center gap-3 sm:gap-4 text-white">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="#2563EB"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono font-bold whitespace-nowrap">GoHighLevel</span>
              </div>
              <div className="w-px h-3 sm:h-4 lg:h-5 bg-gray-800"></div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Zap size={6} className="lg:size-6 text-yellow-500" />
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-mono font-bold whitespace-nowrap">Zapier Expert</span>
              </div>
            </div>
          </div>
        </div>
      <div className="relative mt-4 sm:mt-6 lg:mt-0 px-2 sm:px-0 flex items-center justify-center">
          <div className="glass-card rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 xl:p-10 border-blue-500/20 shadow-2xl relative z-10 overflow-hidden group max-w-md lg:max-w-none mx-auto lg:mx-0 w-full lg:w-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-6 lg:mb-8">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/40"></div>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">automation_engine.config</span>
            </div>
            <div className="space-y-2.5 sm:space-y-3 lg:space-y-4 font-mono code-card text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-relaxed text-white">
              <div className="text-blue-500 font-bold mb-2 sm:mb-3"># JUSTENE_SYSTEM_INIT</div>
              <div className="flex gap-3 sm:gap-4 group-hover:translate-x-1 transition-transform">
                <span className="text-gray-700 select-none">01</span>
                <span><span className="text-purple-400">const</span> specialist = <span className="text-green-400">"CRM Architect"</span>;</span>
              </div>
              <div className="flex gap-3 sm:gap-4 group-hover:translate-x-1 transition-transform delay-75">
                <span className="text-gray-700 select-none">02</span>
                <span><span className="text-purple-400">const</span> objective = <span className="text-green-400">"Convert traffic to profit"</span>;</span>
              </div>
              <div className="flex gap-3 sm:gap-4 group-hover:translate-x-1 transition-transform delay-100">
                <span className="text-gray-700 select-none">03</span>
                <span><span className="text-purple-400">const</span> techStack = [<span className="text-blue-300">"GHL"</span>, <span className="text-blue-300">"Zapier"</span>];</span>
              </div>
              <div className="flex gap-3 sm:gap-4 group-hover:translate-x-1 transition-transform delay-150">
                <span className="text-gray-700 select-none">04</span>
                <span><span className="text-purple-400">function</span> scaleClientBusiness() {'{'}</span>
              </div>
              <div className="flex gap-3 sm:gap-4 group-hover:translate-x-1 transition-transform delay-200">
                <span className="text-gray-700 select-none">05</span>
                <span className="ml-4 sm:ml-6 lg:ml-8 text-gray-300">mapClientJourney();</span>
              </div>
              <div className="flex gap-3 sm:gap-4 group-hover:translate-x-1 transition-transform delay-300">
                <span className="text-gray-700 select-none">06</span>
                <span className="ml-4 sm:ml-6 lg:ml-8 text-blue-400">deployAutomatedNurture();</span>
              </div>
              <div className="flex gap-3 sm:gap-4 group-hover:translate-x-1 transition-transform delay-500">
                <span className="text-gray-700 select-none">07</span>
                <span>{'}'}</span>
              </div>
            </div>
          </div>
          <div className="absolute -top-8 sm:-top-10 lg:-top-12 -right-8 sm:-right-10 lg:-right-12 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-blue-600/20 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] -z-10"></div>
          <div className="absolute -bottom-8 sm:-bottom-10 lg:-bottom-12 -left-8 sm:-left-10 lg:-left-12 w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 bg-purple-600/20 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

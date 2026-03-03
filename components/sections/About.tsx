import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => (
  <section id="about" className="py-20 sm:py-32 bg-gray-900/40 px-4 sm:px-6 relative">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-center">
        <div className="relative group max-w-sm mx-auto md:max-w-none">
          <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-all duration-500 -z-10 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-3xl -z-5"></div>
          <img src="https://i.postimg.cc/9frQwZHd/25fc8346-e602-435c-83f5-2cbc3e156405.jpg" alt="Justene" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]" loading="lazy" />
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
              I specialize in transforming complex business operations into seamless, automated ecosystems. With expertise spanning from modern web development to advanced CRM architecture, I bridge the gap between cutting-edge technology and business automation.
            </p>
            <p>
              Previously, I've contributed my automation and development expertise at <span className="text-white font-black">PropulseVA.com</span>—a leading VA agency specializing in AI-powered execution systems—and <span className="text-white font-black">Zappify.io</span>, an all-in-one AI marketing & automation platform. These experiences have given me deep insights into scalable automation architectures and AI-driven business solutions.
            </p>
            <p>
              As <span className="text-white font-black italic">Justene Automation</span>, I work at the intersection of web development, marketing strategy, and technical architecture. I don't just "set up accounts"; I build comprehensive solutions—from responsive websites and React applications to conversion pathways that capture, qualify, and close leads 24/7 through GoHighLevel systems.
            </p>
            <p className="border-l-4 border-blue-600 pl-6 py-2 bg-blue-600/5 text-blue-100 italic">
              "My mission is to delete manual work from your schedule so you can focus on high-level scaling—whether that's through custom web applications or automated CRM systems."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

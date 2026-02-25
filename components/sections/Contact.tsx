import React, { useState, useMemo } from 'react';
import { CheckCircle2, ShieldCheck, RotateCcw, MessageSquare, Workflow, ShieldAlert, Layout, Facebook, Mail, Linkedin, MessageCircle } from 'lucide-react';

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
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    // Format WhatsApp message
    const whatsappMessage = `🚀 *New Lead from Justene Automation Portfolio* 🚀

*Name:* ${name}
*Email:* ${email}
${phone ? `*Phone:* ${phone}` : ''}
*Message:* ${message}

---
*Sent via portfolio contact form*`;

    // Send to WhatsApp
    const whatsappNumber = '639638296973'; // Your number with country code
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Simulated submission delay, then open WhatsApp
    setTimeout(() => {
      setFormStatus('success');
      setCaptchaAnswer('');
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
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
                { icon: <ShieldCheck className="text-blue-500" size={24} />, title: "Enterprise-Grade Security", desc: "Your data and systems are protected with industry-leading security protocols." },
                { icon: <RotateCcw className="text-green-500" size={24} />, title: "Rapid Implementation", desc: "Most systems deployed within 7-14 days, not months." },
                { icon: <MessageSquare className="text-purple-500" size={24} />, title: "24/7 Support", desc: "Direct access to me for critical issues and system optimization." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-700 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-black mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="text-center lg:text-left space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Start Your Automation Journey</h3>
              <p className="text-gray-400">Book a complimentary strategy call to map your conversion architecture.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Full Name" 
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>
              
              <div>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number (Optional)" 
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              <div>
                <textarea 
                  name="message"
                  placeholder="Tell me about your current systems and goals..." 
                  rows={4}
                  required
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                />
              </div>

              {/* Honeypot field */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              
              {/* Simple Math Captcha */}
              <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <ShieldAlert className="text-blue-500" size={20} />
                    <span className="text-white text-sm font-medium">Human verification: {challenge.a} + {challenge.b} = ?</span>
                  </div>
                  <input 
                    type="text" 
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    placeholder="Answer" 
                    className="w-20 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-center placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>
              
              {formStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm">
                  Incorrect answer. Please try again.
                </div>
              )}
              
              {formStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl text-sm">
                  🎉 Perfect! Opening WhatsApp to connect you directly with Justene...
                </div>
              )}
              
              <button 
                type="submit"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/30"
              >
                {formStatus === 'submitting' ? 'Connecting to WhatsApp...' : formStatus === 'success' ? 'WhatsApp Opened!' : 'Connect via WhatsApp'}
              </button>
            </form>
            
            {/* Social Contact Options */}
            <div className="text-center space-y-4 pt-8 border-t border-gray-700/50">
              <p className="text-gray-400 text-sm">Or connect directly:</p>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://wa.me/639638296973" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-green-600/20 hover:border-green-500 transition-all group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="text-gray-400 group-hover:text-green-500 transition-colors" size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/Just10AiAutomation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500 transition-all group"
                  aria-label="Facebook"
                >
                  <Facebook className="text-gray-400 group-hover:text-blue-500 transition-colors" size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/justene-selgas-152052377/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500 transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-gray-400 group-hover:text-blue-500 transition-colors" size={20} />
                </a>
                <a 
                  href="mailto:justeneselgas.work@gmail.com" 
                  className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500 transition-all group"
                  aria-label="Email"
                >
                  <Mail className="text-gray-400 group-hover:text-blue-500 transition-colors" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

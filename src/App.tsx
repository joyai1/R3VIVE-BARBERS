import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Check, 
  Instagram, 
  Scissors, 
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { HAIRCUT_STYLES, BEARD_STYLES, SERVICES, TOOLS, REVIEWS } from './constants';
import { StyleOption } from './types';

const R3VIVE_PHONE = "+44 7459 045325";
const R3VIVE_ADDRESS = "86 Park Ln, Bradford BD5 0JR";

export default function App() {
  const [selectedHaircut, setSelectedHaircut] = useState<StyleOption | null>(HAIRCUT_STYLES.find(s => s.popular) || null);
  const [selectedBeard, setSelectedBeard] = useState<StyleOption | null>(BEARD_STYLES.find(s => s.popular) || null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello R3VIVE! I'd like to book an appointment.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Haircut:* ${selectedHaircut?.name}%0A*Beard:* ${selectedBeard?.name}%0A*Preferred Time:* ${time}`;
    window.open(`https://wa.me/${R3VIVE_PHONE.replace(/\s+/g, '')}?text=${message}`, '_blank');
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  const handleCall = () => {
    window.location.href = `tel:${R3VIVE_PHONE.replace(/\s+/g, '')}`;
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-gold selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Header */}
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center transform rotate-12 group hover:rotate-0 transition-transform">
              <Scissors className="w-6 h-6 text-brand-gold" />
            </div>
            <span className="text-2xl font-display font-black tracking-tighter uppercase italic">
              R3VIVE<span className="text-brand-red font-bold">BARBERS</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
            <a href="#styles" className="hover:text-brand-gold transition-colors">Styles</a>
            <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
            <a href="#pricing" className="hover:text-brand-gold transition-colors">Pricing</a>
            <a href="#location" className="hover:text-brand-gold transition-colors">Location</a>
          </div>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden sm:flex items-center gap-2 bg-brand-gold text-black px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-all transform hover:scale-105"
          >
            <Calendar className="w-4 h-4" /> Book Appointment
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-black/60 via-black/40 to-black pointer-events-none" />
        <div className="absolute inset-0 z-0 scale-110">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1920" 
            alt="R3VIVE Barbers Hero" 
            className="w-full h-full object-cover animate-pulse-slow brightness-50"
            referrerPolicy="no-referrer"
          />
          {/* Subtle Red/Gold Overlay */}
          <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-brand-gold/5 mix-blend-overlay" />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9] mb-8">
              Sharp fades. <br />
              <span className="text-gradient-gold">Clean cuts.</span> <br />
              <span className="text-white/40">Barbers you trust.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-medium">
              Book your haircut in under 60 seconds. <br className="hidden md:block" />
              Serving Bradford with consistency and skill since day one.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('styles')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-black rounded-lg font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                Book Appointment <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleCall}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white/20 transition-all active:scale-95"
              >
                <Phone className="w-5 h-5 text-brand-gold" /> Call Now
              </button>
              <button 
                onClick={handleWhatsAppBooking}
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-[#25D366]/20 transition-all active:scale-95 text-[#25D366]"
              >
                <MessageSquare className="w-5 h-5" /> WhatsApp
              </button>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all border-t border-white/10 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />)}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Rated 5.0 on Google</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-gold" /> Fast Service
              </span>
              <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-gold" /> Sharp Results
              </span>
              <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-gold" /> Consistent Quality
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-brand-gold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Style Selection Section */}
      <section id="styles" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-red/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-red font-black uppercase tracking-[0.2em] text-xs">Step 1: Choose Your Vibe</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 italic tracking-tighter uppercase">Haircut <span className="text-brand-red">Styles</span></h2>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar -mx-4 px-4 snap-x">
            {HAIRCUT_STYLES.map((style) => (
              <motion.div 
                key={style.id}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedHaircut(style)}
                className={`flex-none w-72 snap-center rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 border-2 ${
                  selectedHaircut?.id === style.id ? 'border-brand-gold gold-glow scale-105' : 'border-white/5 grayscale hover:grayscale-0'
                }`}
              >
                <div className="aspect-3/4 relative overflow-hidden">
                  <img 
                    src={style.image} 
                    alt={style.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                  {style.popular && (
                    <div className="absolute top-4 right-4 bg-brand-gold text-black text-[10px] font-black uppercase px-2 py-1 rounded">
                      Most Popular
                    </div>
                  )}
                  {selectedHaircut?.id === style.id && (
                    <div className="absolute inset-0 bg-brand-gold/20 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center animate-bounce-short">
                        <Check className="w-6 h-6 text-black" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm border-t border-white/10 h-full">
                  <h3 className="text-xl font-black uppercase italic mb-2 tracking-tight group-hover:text-brand-gold transition-colors">{style.name}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{style.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20 mb-16">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">Beard <span className="text-brand-gold">Styles</span></h2>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar -mx-4 px-4 snap-x">
            {BEARD_STYLES.map((style) => (
              <motion.div 
                key={style.id}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedBeard(style)}
                className={`flex-none w-72 snap-center rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 border-2 ${
                  selectedBeard?.id === style.id ? 'border-brand-gold gold-glow scale-105' : 'border-white/5 grayscale hover:grayscale-0'
                }`}
              >
                <div className="aspect-3/4 relative overflow-hidden">
                  <img 
                    src={style.image} 
                    alt={style.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                  {selectedBeard?.id === style.id && (
                    <div className="absolute inset-0 bg-brand-gold/20 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center animate-bounce-short">
                        <Check className="w-6 h-6 text-black" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm border-t border-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-black uppercase italic tracking-tight group-hover:text-brand-gold transition-colors">{style.name}</h3>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1 h-3 rounded-full ${i < (style.sharpness || 0) ? 'bg-brand-gold' : 'bg-white/20'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Maintenance:</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">{style.maintenance}</span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{style.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Preview Panel */}
          <div className="mt-16 max-w-3xl mx-auto animate-fade-in">
            <div className="bg-brand-red p-1 rounded-2xl">
              <div className="bg-black rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-2 block">Your Selection</span>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">
                    {selectedHaircut?.name} <span className="text-white/20 text-xl mx-2">+</span> {selectedBeard?.name}
                  </h3>
                  <p className="text-white/50 text-sm mt-2">Perfect combo. You'll walk out looking dangerous.</p>
                </div>
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-brand-red text-white py-4 px-10 rounded-xl font-black uppercase tracking-tighter text-lg hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 active:scale-95 whitespace-nowrap"
                >
                  Finalise Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section id="booking" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-black uppercase tracking-[0.2em] text-xs">Fast Track</span>
            <h2 className="text-4xl md:text-7xl font-black mt-4 italic tracking-tighter uppercase whitespace-pre-line">
              Book in <span className="text-gradient-gold">60 Seconds</span>
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 blur-3xl -z-10" />

            <form onSubmit={handleWhatsAppBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-gold focus:outline-none focus:ring-0 transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7000 000000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-gold focus:outline-none focus:ring-0 transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Haircut</label>
                  <div className="bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-brand-gold font-bold uppercase text-sm">
                    {selectedHaircut ? selectedHaircut.name : 'Select a style above'}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Beard</label>
                  <div className="bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-brand-gold font-bold uppercase text-sm">
                    {selectedBeard ? selectedBeard.name : 'Select a style above'}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Preferred Time</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Morning', 'Early Afternoon', 'Late Afternoon', 'Evening'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`py-3 px-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                        time === t ? 'bg-brand-red border-brand-red text-white' : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full bg-brand-gold text-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-lg flex items-center justify-center gap-4 hover:bg-white hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_50px_rgba(212,175,55,0.3)]"
                >
                  <MessageSquare className="w-6 h-6" /> Send WhatsApp Request
                </button>
              </div>

              <p className="text-center text-[10px] text-white/30 font-medium uppercase tracking-[3px] mt-8">
                Instant confirmation via WhatsApp message
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section id="services" className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-brand-red font-black uppercase tracking-[0.2em] text-xs">Our Menu</span>
              <h2 className="text-4xl md:text-7xl font-black mt-4 italic tracking-tighter uppercase leading-[0.9]">
                Professional <br /><span className="text-brand-gold">Services.</span>
              </h2>
              <p className="text-white/50 mt-8 text-lg leading-relaxed max-w-md">
                We don't just cut hair; we sculpt confidence. Every service includes a consultation to ensure we nail the look you desire.
              </p>
              
              <div className="mt-12 space-y-6">
                {SERVICES.map((service) => (
                  <div key={service.id} className="group relative">
                    <div className="flex items-center justify-between py-4 border-b border-white/10 group-hover:border-brand-gold transition-colors">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-black uppercase italic tracking-tight">{service.name}</h3>
                          {service.popular && (
                            <span className="bg-brand-red text-white text-[8px] font-black px-2 py-0.5 rounded tracking-widest uppercase">Popular</span>
                          )}
                        </div>
                        <span className="text-xs text-white/30 font-bold uppercase tracking-widest">{service.time}</span>
                      </div>
                      <div className="text-3xl font-black text-brand-gold tracking-tighter">£{service.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32">
                <div className="aspect-square relative rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(139,0,0,0.3)] border-2 border-brand-red/20 transform rotate-3">
                  <img 
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000" 
                    alt="Service Experience" 
                    className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-red/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-center bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <p className="text-brand-gold font-black uppercase tracking-widest text-xs mb-2 italic">Best Value</p>
                    <h4 className="text-3xl font-black uppercase italic tracking-tighter shadow-sm">Haircut + Beard</h4>
                    <div className="text-4xl font-black text-white mt-2">£20</div>
                    <button 
                      onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                      className="mt-4 w-full bg-white text-black py-3 rounded-lg font-black uppercase text-xs tracking-widest hover:bg-brand-gold transition-all"
                    >
                      Pick This Style
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-brand-gold font-black uppercase tracking-[0.2em] text-xs">Precision Instruments</span>
              <h2 className="text-4xl md:text-6xl font-black mt-4 italic tracking-tighter uppercase whitespace-pre-line">
                The <span className="text-brand-gold">Tools</span> of the Trade
              </h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest leading-relaxed">
              We invest in the best equipment to ensure every cut is surgically precise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {TOOLS.map((tool) => (
              <motion.div 
                key={tool.id}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-6 group transition-all"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-6 bg-black relative">
                  <img 
                    src={tool.image} 
                    alt={tool.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-gold/10 group-hover:bg-transparent transition-all" />
                </div>
                <h3 className="text-xl font-black uppercase italic mb-3 group-hover:text-brand-gold transition-colors">{tool.name}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold block mb-1">Purpose</span>
                    <p className="text-xs text-white/50">{tool.purpose}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block mb-1">Precision Effect</span>
                    <p className="text-xs text-white/50 italic">{tool.effect}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase">Real <span className="text-brand-red">Work.</span> Real <span className="text-brand-gold">Results.</span></h2>
            <p className="text-white/40 mt-4 uppercase tracking-[0.3em] text-xs font-bold">No filters. No bullshit. Just sharp pride.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/5">
                <img src="https://images.unsplash.com/photo-1596362483833-2895f32fe7cc?q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/5">
                <img src="https://images.unsplash.com/photo-1621605815971-fbc388ad6f0c?q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/5">
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/5">
                <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/5">
                <img src="https://images.unsplash.com/photo-1605497746444-1ca0720a400c?q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/5">
                <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/5">
                <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/5">
                <img src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">Client Stories</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-brand-gold transition-colors group">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-white/80 italic mb-6 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-black uppercase italic tracking-tighter">{review.author}</span>
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full border-2 border-brand-gold/30 rounded-3xl -rotate-3 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&q=80&w=1000" 
              alt="About R3VIVE" 
              className="rounded-3xl shadow-2xl relative z-10 brightness-75 hover:brightness-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-brand-red font-black uppercase tracking-[0.2em] text-xs">Since Day One</span>
            <h2 className="text-4xl md:text-7xl font-black mt-4 italic tracking-tighter uppercase leading-[0.9]">
              Consistency <br /><span className="text-brand-gold">Is Our Brand.</span>
            </h2>
            <div className="mt-8 space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                R3VIVE BARBERS was born out of a desire for extreme precision and unwavering consistency. Located in the heart of Bradford, we specialize in modern urban styles from surgical skin fades to sharp beard reconstructions.
              </p>
              <p>
                Our philosophy is simple: clean environment, high-end tools, and zero compromise on quality. Whether you have a booked appointment or a walk-in, we guarantee a sharp finish that lasts.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <span className="text-4xl font-black text-white italic">14+</span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <span className="text-4xl font-black text-white italic">5.0</span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-brand-gold font-black uppercase tracking-[0.2em] text-xs">Find Us</span>
              <h2 className="text-4xl md:text-7xl font-black mt-4 italic tracking-tighter uppercase leading-[0.9]">
                The Shop <br /><span className="text-brand-red">Location.</span>
              </h2>
              
              <div className="mt-12 space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase italic tracking-tight">Full Address</h4>
                    <p className="text-white/50 text-lg">{R3VIVE_ADDRESS}</p>
                    <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mt-2">Free Parking Available Nearby</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase italic tracking-tight">Opening Hours</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
                      <div className="flex justify-between text-sm"><span className="text-white/40 uppercase font-bold tracking-widest">Mon - Fri</span> <span className="font-black italic">09:00 - 19:00</span></div>
                      <div className="flex justify-between text-sm"><span className="text-white/40 uppercase font-bold tracking-widest">Saturday</span> <span className="font-black italic">09:00 - 18:00</span></div>
                      <div className="flex justify-between text-sm"><span className="text-white/40 uppercase font-bold tracking-widest">Sunday</span> <span className="font-black italic text-brand-red">CLOSED</span></div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-red/10 border border-brand-red/30 p-6 rounded-2xl">
                  <p className="text-brand-red text-xs font-black uppercase tracking-widest mb-2">Service Areas</p>
                  <p className="text-white/70 text-sm italic">Proudly serving clients from Little Horton, West Bowling, and the wider Bradford community.</p>
                </div>
              </div>
            </div>

            <div className="h-[400px] lg:h-auto rounded-3xl overflow-hidden border-2 border-white/10 relative grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.9190103756847!2d-1.7610660232490714!3d53.7845347723908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be6939b4d4b8d%3A0xe6a8b79f045c7b3!2s86%20Park%20Ln%2C%20Bradford%20BD5%200JR%2C%20UK!5e0!3m2!1sen!2sus!4v1715850000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-brand-gold" />
                </div>
                <span className="text-xl font-display font-black tracking-tighter uppercase italic">
                  R3VIVE<span className="text-brand-red font-bold">BARBERS</span>
                </span>
              </div>
              <p className="text-white/30 text-xs font-bold uppercase tracking-[0.3em]">Sharp Fades. Clean Cuts. Bradford.</p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-brand-red transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={`tel:${R3VIVE_PHONE}`} className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-brand-gold transition-all hover:text-black">
                <Phone className="w-6 h-6" />
              </a>
              <a href={`https://wa.me/${R3VIVE_PHONE}`} className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-[#25D366] transition-all">
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-2">Designed for Conversion</p>
              <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">© 2024 R3VIVE BARBERS. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            className="fixed bottom-8 left-8 right-8 z-50 flex flex-col items-end gap-4 pointer-events-none"
          >
            <a 
              href={`https://wa.me/${R3VIVE_PHONE}`}
              className="w-16 h-16 bg-[#25D366] rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center pointer-events-auto transform hover:scale-110 active:scale-95 transition-all group"
            >
              <MessageSquare className="w-8 h-8 text-white" />
              <span className="absolute right-20 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-white/10">
                Chat on WhatsApp
              </span>
            </a>
            
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-brand-gold text-black py-4 px-8 rounded-full font-black uppercase text-sm tracking-[0.2em] shadow-[0_0_50px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3 pointer-events-auto hover:bg-white transition-all transform hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" /> Quick Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirmation Toast */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] bg-brand-gold text-black font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-2xl flex items-center gap-4 border-2 border-white"
          >
            <Check className="w-6 h-6" /> Booking Request Sent!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

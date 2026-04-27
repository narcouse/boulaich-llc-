import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920"
          alt="Modern Agency Office"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold opacity-10 rounded-full blur-[120px] z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-8 glass rounded-3xl p-8 md:p-16 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl"></div>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 text-white">
            <span className="italic font-serif opacity-90 block">Delivering</span>
            Digital <span className="text-gold">Excellence</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
            Specializing in custom websites and innovative marketing strategies designed to elevate your brand's digital presence in an evolving market.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-hover text-navy px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg active:scale-95"
            >
              Start Your Project
            </Link>
            <a
              href="#services"
              className="px-10 py-4 border border-gold/30 text-gold hover:bg-gold/5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

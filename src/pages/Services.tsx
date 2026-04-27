import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-navy min-h-screen font-sans">
       {/* Page Header */}
       <section className="px-6 mb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold opacity-5 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Our Expertise</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 mx-auto max-w-5xl leading-tight">
              Solutions that <span className="italic-serif text-gold">Scale</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              We provide a comprehensive suite of digital services designed to solve complex business challenges with uncompromising quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {SERVICES.map((service, idx) => {
            // @ts-ignore
            const Icon = Icons[service.icon];
            const isEven = idx % 2 === 0;
            
            return (
              <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <div className="bg-gold/10 p-4 rounded-2xl inline-block mb-8 ring-1 ring-gold/20">
                    <Icon className="text-gold w-8 h-8" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{service.title}</h2>
                  <p className="text-slate-400 font-light text-lg mb-8 leading-relaxed">
                    {service.description} Our approach ensures that your {service.title.toLowerCase()} is not only aesthetically pleasing but also highly functional and optimized for maximum impact in a competitive market.
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {["Customized Strategy", "Performance Optimization", "Secure Implementation", "Data-Driven Insights"].map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-slate-300 font-medium text-sm">
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                          <Check size={10} className="text-gold" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="group bg-gold hover:bg-gold-hover text-navy px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all inline-flex items-center gap-3 shadow-lg"
                  >
                    Discuss This Service
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 relative"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-3xl glass p-4 relative z-10 border-gold/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold opacity-5 rounded-full blur-3xl z-0"></div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 mt-32">
         <div className="max-w-4xl mx-auto glass rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden border-gold/10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Need a <span className="italic-serif text-gold">Custom</span> Package?</h2>
            <p className="text-slate-400 mb-12 font-light leading-relaxed text-lg max-w-2xl mx-auto">
              Every business is unique. We offer flexible packages tailored to your specific goals, budget, and timeline to ensure maximum ROI.
            </p>
            <Link
              to="/contact"
              className="bg-gold text-navy px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all inline-block hover:scale-105 active:scale-95 shadow-xl"
            >
              Get a Custom Quote
            </Link>
         </div>
      </section>
    </div>
  );
}

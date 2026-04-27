import { motion } from 'motion/react';
import { SERVICES } from '../../constants';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesOverview() {
  return (
    <section id="services" className="py-24 px-6 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">Tailored <span className="italic-serif text-gold">Digital</span> Solutions</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:max-w-md text-slate-400 font-light"
          >
            From conceptualization to execution, we provide end-to-end digital services designed to scale your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            // @ts-ignore
            const IconComponent = Icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group glass rounded-3xl overflow-hidden hover:border-gold/40 transition-all duration-500"
              >
                <div className="h-64 relative overflow-hidden p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-gold/10 p-3 rounded-xl inline-block mb-6 ring-1 ring-gold/20">
                    <IconComponent className="text-gold w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-slate-400 mb-8 font-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group/link"
                  >
                    Explore Service <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

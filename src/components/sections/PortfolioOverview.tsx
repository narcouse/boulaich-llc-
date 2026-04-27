import { motion } from 'motion/react';
import { PORTFOLIO } from '../../constants';
import { Plus } from 'lucide-react';

export default function PortfolioOverview() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Showcase</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">Recent <span className="italic-serif text-gold">Work</span></h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[500px] overflow-hidden rounded-3xl glass p-4 cursor-pointer"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-gold text-[10px] uppercase font-bold tracking-widest mb-2 block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center justify-between translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    <div>
                      <span className="text-[8px] uppercase text-slate-400 tracking-widest block mb-1">Impact</span>
                      <span className="text-gold font-bold text-lg">{project.result}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full glass border-gold/20 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all duration-300">
                      <Plus size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

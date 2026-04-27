import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../../constants';
import { Search, Compass, Palette, Rocket, Zap } from 'lucide-react';

const ICONS = [Search, Compass, Palette, Rocket, Zap];

export default function ProcessOverview() {
  return (
    <section className="py-24 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Execution</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white">Our <span className="italic-serif text-gold">Proven</span> Process</h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = ICONS[idx];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative z-10 glass p-8 rounded-3xl"
                >
                  <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative group hover:bg-gold transition-colors duration-300 ring-1 ring-gold/20">
                    <Icon className="text-gold w-6 h-6 group-hover:text-navy group-hover:scale-110 transition-all" />
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-navy flex items-center justify-center text-[10px] font-bold ring-4 ring-navy">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-[10px] uppercase font-medium leading-relaxed tracking-wider px-2">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

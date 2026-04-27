import { motion } from 'motion/react';
import { CheckCircle2, Zap, Rocket, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const REASONS = [
  {
    title: "Vast Experience",
    description: "Over a decade of navigating the digital landscape across multiple industries.",
    icon: ShieldCheck
  },
  {
    title: "Creative Approach",
    description: "We don't settle for the standard. Every project is a unique piece of digital art.",
    icon: Zap
  },
  {
    title: "Custom Solutions",
    description: "Tailored strategies and code that fit your specific business needs perfectly.",
    icon: Rocket
  },
  {
    title: "Reliable Support",
    description: "We are your long-term partner, standing by your side even after the launch.",
    icon: CheckCircle2
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Differentiation</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">Beyond the <span className="italic-serif text-gold">Standard</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {REASONS.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 ring-1 ring-gold/20">
                <reason.icon className="text-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

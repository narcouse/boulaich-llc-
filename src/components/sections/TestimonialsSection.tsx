import { motion } from 'motion/react';
import { TESTIMONIALS } from '../../constants';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Trust</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white">Client <span className="italic-serif text-gold">Voices</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-10 rounded-3xl relative"
            >
              <Quote className="text-gold/20 w-10 h-10 absolute top-6 right-6" />
              <div className="mb-6 flex gap-1">
                {[1, 2, 3, 4, 5].map(star => (
                   <span key={star} className="text-gold text-sm">★</span>
                ))}
              </div>
              <p className="text-slate-300 font-light italic text-lg leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div>
                <h4 className="text-white font-bold text-base">{t.name}</h4>
                <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

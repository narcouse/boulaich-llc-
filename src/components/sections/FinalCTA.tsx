import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-navy relative overflow-hidden">
      <div className="max-w-4xl mx-auto glass rounded-[40px] p-12 md:p-20 text-center relative z-10 border-gold/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Build Your <br/><span className="italic-serif text-gold">Digital Future</span>?
          </h2>
          <p className="text-slate-400 text-lg mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Take the first step towards a commanding digital presence. Our team is ready to transform your vision into an impactful reality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-hover text-navy px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-xl hover:-translate-y-1"
            >
              Contact Us Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

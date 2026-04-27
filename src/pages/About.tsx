import { motion } from 'motion/react';
import { TEAM, COMPANY_NAME } from '../constants';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-navy min-h-screen font-sans">
      {/* Page Header */}
      <section className="px-6 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-5 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Our Story</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 mx-auto max-w-5xl leading-tight">
              Excellence Through <br/><span className="italic-serif text-gold">Innovation</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Since 2018, {COMPANY_NAME} has been redefining the digital landscape by blending technical mastery with high-end creative brilliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 py-24 bg-navy/50 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">Our <span className="italic-serif text-gold">Philosophy</span></h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg">
              <p>
                We believe that every data point, every line of code, and every aesthetic choice should serve a higher purpose: driving success for our partners.
              </p>
              <p>
                Innovation is not just a buzzword for us; it's our default state. We constantly challenge conventions to find more efficient, more beautiful, and more effective ways to solve complex digital problems.
              </p>
              <p>
                Reliability defines our relationships. When you partner with {COMPANY_NAME}, you're gaining an extension of your own team that is as committed to your long-term success as you are.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square rounded-[40px] overflow-hidden glass p-4"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover rounded-[32px]"
              alt="Team Workshop"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Meet the <span className="italic-serif text-gold">Experts</span></h2>
            <p className="text-slate-500 uppercase tracking-[0.3em] text-[10px] font-bold">The minds behind your digital dominance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group glass p-6 rounded-[32px] hover:border-gold/30 transition-all duration-500"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-[24px] mb-8 relative">
                   <img
                    src={member.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={member.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy/40 mix-blend-overlay group-hover:bg-transparent transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6">{member.role}</p>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  With a deep passion for digital excellence, {member.name.split(' ')[0]} brings years of high-end expertise in driving measurable results.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

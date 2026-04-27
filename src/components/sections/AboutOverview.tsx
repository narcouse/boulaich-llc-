import { motion } from 'motion/react';
import { TEAM } from '../../constants';

export default function AboutOverview() {
  return (
    <section className="py-24 px-6 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">About Boulaich LLC</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Pioneering the <br/><span className="italic-serif text-gold">Digital Frontier</span>
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed font-light text-lg">
              <p>
                At Boulaich LLC, our mission is built on three core pillars: innovation, reliability, and creativity. We don't just build websites; we craft digital experiences that resonate with your audience and drive tangible growth.
              </p>
              <p>
                Our philosophy centers on deep collaboration. We imbed ourselves in your brand's DNA to understand the nuances that make you unique, allowing us to deliver solutions that are as strategic as they are beautiful.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-4 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover rounded-2xl"
                alt="Digital Collaboration"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold opacity-5 rounded-full blur-[100px] z-0" />
          </motion.div>
        </div>

        {/* Team Skills Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-3xl p-6"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="space-y-4">
                    {member.skills.map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-[10px] text-white mb-1 uppercase tracking-widest">
                          <span>{skill.name}</span>
                          <span className="text-gold">{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gold"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">{member.name}</h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold text-center mt-2">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

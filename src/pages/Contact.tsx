import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-navy min-h-screen">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Let's <span className="italic-serif text-gold">Elevate</span> Your Brand
            </h1>
            <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed max-w-xl">
              Have a project in mind or just want to say hello? Our team is ready to listen and help you find the best path forward for your digital journey.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Us', value: 'hello@boulaich.com' },
                { icon: Phone, label: 'Call Us', value: '+212 (0) 512 345 678' },
                { icon: MapPin, label: 'Our Office', value: '1001 S MAIN ST, STE 600, KALISPELL, MT 59901-1498' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-all duration-300 border-gold/10">
                    <item.icon className="text-gold group-hover:text-navy w-6 h-6 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.label}</h4>
                    <p className="text-slate-400 font-light">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-10 md:p-16 rounded-[40px] relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold opacity-5 rounded-full blur-3xl"></div>
            
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 relative z-10">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6 ring-1 ring-gold/40">
                  <Send className="text-gold w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-slate-400 font-light">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-8 text-gold text-xs font-bold uppercase tracking-widest border-b border-gold/30 hover:border-gold transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-2 ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold transition-colors font-light placeholder:text-white/10"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-2 ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold transition-colors font-light placeholder:text-white/10"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-2 ml-1">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold transition-colors font-light appearance-none">
                    <option className="bg-navy">Website Project</option>
                    <option className="bg-navy">Marketing Strategy</option>
                    <option className="bg-navy">Partnership</option>
                    <option className="bg-navy">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-2 ml-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold transition-colors resize-none font-light placeholder:text-white/10"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-hover disabled:bg-gold/50 text-navy font-bold uppercase tracking-widest py-6 rounded-2xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-6 h-[500px]">
        <div className="max-w-7xl mx-auto h-full rounded-[40px] overflow-hidden glass p-4 relative border-gold/5">
           <div className="absolute inset-0 z-20 flex items-center justify-center p-6 bg-navy/40 backdrop-blur-[2px]">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full glass border-gold/20 flex items-center justify-center text-gold mx-auto mb-6">
                  <Globe size={32} />
                </div>
                <h3 className="text-white font-bold text-2xl mb-2">Our Global Hub</h3>
                <p className="text-slate-400 font-light uppercase tracking-widest text-[10px]">Kalispell, MT 59901</p>
              </div>
           </div>
           <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover rounded-[32px] grayscale opacity-40 transition-all duration-700 hover:grayscale-0 hover:opacity-100" 
            alt="Kalispell Map"
           />
        </div>
      </section>
    </div>
  );
}

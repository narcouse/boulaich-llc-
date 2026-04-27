import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    title: "The Future of Web Design in 2026",
    category: "Design",
    date: "May 12, 2026",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "SEO Strategies for Competitive Markets",
    category: "Marketing",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Leveraging High-End Visuals for Branding",
    category: "Brand",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1581351123004-757df051db8e?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogHighlights() {
  return (
    <section className="py-24 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Knowledge</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">Insights & <span className="italic-serif text-gold">Thinking</span></h2>
          </motion.div>
          <button className="text-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors pb-1 border-b border-gold hover:border-white">
            View All Posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer glass rounded-[32px] p-4 border-transparent hover:border-gold/20 transition-all font-sans"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[24px] mb-6 relative">
                <img
                  src={post.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={post.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-4 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">{post.category}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gold transition-colors leading-tight">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowUpRight size={14} className="text-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

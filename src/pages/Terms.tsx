import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="pt-32 pb-24 bg-navy min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="markdown-body"
        >
          <h1 className="text-white font-bold text-5xl mb-12">Terms of Service</h1>
          <p className="text-slate-400 font-light mb-8 italic-serif text-gold">Last Updated: April 27, 2026</p>
          
          <section className="space-y-6 text-slate-300 leading-relaxed font-light">
            <p>
              Welcome to Boulaich LLC. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10">1. Agreement to Terms</h2>
            <p>
              These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Boulaich LLC, concerning your access to and use of our website.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Website are owned or controlled by us.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10">3. User Representations</h2>
            <p>
              By using the Website, you represent and warrant that all registration information you submit will be true, accurate, current, and complete.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10">4. Prohibited Activities</h2>
            <p>
              You may not access or use the Website for any purpose other than that for which we make the Website available.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

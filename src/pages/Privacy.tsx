import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24 bg-navy min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="markdown-body"
        >
          <h1 className="text-white font-bold text-5xl mb-12">Privacy Policy</h1>
          <p className="text-slate-400 font-light mb-8 italic-serif text-gold">Last Updated: April 27, 2026</p>
          
          <section className="space-y-6 text-slate-300 leading-relaxed font-light">
            <p>
              At Boulaich LLC, we are committed to protecting the privacy and security of our clients and visitors. This policy outlines how we collect, use, and safeguard your data.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10">1. Information Collection</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10">2. How We Use Your Information</h2>
            <p>
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10">3. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10">4. Your Rights</h2>
            <p>
              In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

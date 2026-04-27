import { COMPANY_NAME, NAV_LINKS } from '../../constants';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center font-bold text-navy group-hover:rotate-12 transition-transform">
                B
              </div>
              <span className="font-sans text-xl font-bold tracking-tight text-white uppercase">
                Boulaich <span className="text-gold">LLC</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Elevating brands through high-end digital marketing and bespoke web development. Excellence in every pixel, strategy in every click.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass border-gold/10 flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-4 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Core Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-1" />
                <span className="text-slate-400 text-sm">123 Digital Way, Suite 500, Casablanca</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span className="text-slate-400 text-sm">+212 (0) 512 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span className="text-slate-400 text-sm">hello@boulaich.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-slate-400 text-xs mb-6 leading-relaxed">
              Subscribe to stay updated with the latest digital marketing trends.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-hover text-navy font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-slate-500 hover:text-gold text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-gold text-[10px] uppercase tracking-widest transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

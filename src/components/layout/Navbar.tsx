import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY_NAME } from '../../constants';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className={cn(
        "max-w-7xl mx-auto glass rounded-2xl px-8 py-4 flex items-center justify-between transition-all duration-300",
        isScrolled ? "py-3 bg-navy/80" : "py-4"
      )}>
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center font-bold text-navy group-hover:rotate-12 transition-transform">
            B
          </div>
          <span className="font-sans text-xl font-bold tracking-tight text-white">
            BOULAICH <span className="text-gold">LLC</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-xs font-semibold uppercase tracking-widest transition-all",
                location.pathname === link.href ? "text-gold" : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gold hover:bg-gold-hover text-navy px-5 py-2 rounded-full text-xs font-bold uppercase tracking-tighter transition-all transform hover:scale-105"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-navy border-t border-paper/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 items-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-paper hover:text-gold text-lg font-serif tracking-widest uppercase transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-gold text-navy px-8 py-3 rounded-sm font-bold uppercase w-full text-center"
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

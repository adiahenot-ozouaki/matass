import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0F2A1D]/95 backdrop-blur-lg shadow-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              className="text-2xl tracking-tighter"
              style={{ fontFamily: 'Inter Tight, sans-serif' }}
            >
              {/* Version mobile */}
              <span className="md:hidden text-white font-bold">MATASS</span>
              
              {/* Version desktop (grands écrans) */}
              <span className="hidden md:inline">
                <span className="text-white font-bold">MATASS</span>
                <span className="text-[#F2A900] ml-1">Transport</span>
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a 
              href="#services" 
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Services
            </a>
            <a 
              href="#fleet" 
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Flotte
            </a>
            <a 
              href="#about" 
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="bg-[#F2A900] text-[#0F2A1D] px-7 py-2.5 rounded-full font-medium 
                         hover:bg-[#D69400] active:scale-95 transition-all shadow-lg shadow-[#F2A900]/30"
            >
              Demander un devis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-6 border-t border-white/10 bg-[#0F2A1D]/95 backdrop-blur-lg"
          >
            <div className="flex flex-col space-y-6 text-lg">
              <a 
                href="#services" 
                className="text-white/80 hover:text-[#F2A900] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#fleet" 
                className="text-white/80 hover:text-[#F2A900] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Notre flotte
              </a>
              <a 
                href="#about" 
                className="text-white/80 hover:text-[#F2A900] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                À propos
              </a>
              <a 
                href="#contact"
                className="bg-[#F2A900] text-[#0F2A1D] px-6 py-3.5 rounded-2xl font-medium text-center hover:bg-[#D69400]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demander un devis
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
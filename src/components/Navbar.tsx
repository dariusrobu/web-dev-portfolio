'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass rounded-full px-6 transition-all duration-300 ${scrolled ? 'shadow-2xl shadow-primary/10 border-white/10' : ''}`}>
          <div className="flex items-center justify-between h-14">
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold text-xl tracking-tighter text-white">
                <span className="text-primary">&lt;</span>
                DevR
                <span className="text-primary">/&gt;</span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="#services" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  Services
                </Link>
                <Link href="#portfolio" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                   Work
                </Link>
                <Link href="#about" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  Philosophy
                </Link>
                <Link href="#contact" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2" id="mobile-menu">
          <div className="glass rounded-2xl p-6 space-y-4 shadow-2xl border-white/10">
            <Link href="#services" onClick={toggleMenu} className="block text-lg font-medium text-gray-400 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#portfolio" onClick={toggleMenu} className="block text-lg font-medium text-gray-400 hover:text-white transition-colors">
               Work
            </Link>
            <Link href="#about" onClick={toggleMenu} className="block text-lg font-medium text-gray-400 hover:text-white transition-colors">
              Philosophy
            </Link>
            <Link href="#contact" onClick={toggleMenu} className="block text-lg font-medium text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

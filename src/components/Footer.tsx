'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background text-white py-20 border-t border-white/[0.05]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-2xl tracking-tighter text-white mb-6 block">
              <span className="text-primary">&lt;</span>
              DevR
              <span className="text-primary">/&gt;</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Senior Full-Stack Architect specializing in high-performance digital experiences. 
              Turning complex requirements into elegant, scalable solutions.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/dariusrobu" target="_blank" className="p-3 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-primary transition-all">
                <Github size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/darius-robu-095997386" target="_blank" className="p-3 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-primary transition-all">
                <Linkedin size={20} />
              </Link>
              <Link href="mailto:robu.i.darius@gmail.com" className="p-3 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-primary transition-all">
                <Mail size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Work</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">Philosophy</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="relative">
            <h3 className="font-bold text-lg mb-6">Location</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Based in Cluj-Napoca, Romania.<br />
              Working worldwide.<br />
              <span className="text-white font-medium">0784463810</span>
            </p>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors"
            >
              Back to Top <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>&copy; {new Date().getFullYear()} DevR. All rights reserved.</div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

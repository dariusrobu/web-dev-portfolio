import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          <span>Available for New Projects</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white">
          Architecting <span className="text-gradient">High-Performance</span>
          <br /> Digital Solutions
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
          I'm a Senior Full-Stack Architect specializing in building premium web applications that blend sophisticated design with absolute technical excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="#portfolio" className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-gradient-brand rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20">
            Explore My Work
          </Link>
          <Link href="#contact" className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white glass rounded-full hover:bg-white/10 transition-all duration-300">
            Let's Connect <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/3 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}

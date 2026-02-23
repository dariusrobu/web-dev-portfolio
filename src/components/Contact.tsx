import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background text-white relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Currently accepting new projects and collaborations. 
              Reach out through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="mailto:robu.i.darius@gmail.com"
              className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(99,102,241,0.3)]"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400 text-sm break-all">robu.i.darius@gmail.com</p>
            </Link>

            <Link 
              href="tel:0784463810"
              className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(99,102,241,0.3)]"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">0784463810</p>
            </Link>

            <div 
              className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(99,102,241,0.3)]"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-400 text-sm">Cluj-Napoca, Romania</p>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
             <Link 
              href="https://github.com/dariusrobu" 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Github size={20} className="text-primary" />
              <span className="font-bold">GitHub</span>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/darius-robu-095997386" 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} className="text-primary" />
              <span className="font-bold">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

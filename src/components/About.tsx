import NextImage from 'next/image';
import { Terminal, Code2, Cpu, Globe2, Sparkles, User } from 'lucide-react';

const skills = [
  { name: "Full-Stack Architecture", icon: <Cpu className="w-4 h-4" /> },
  { name: "TypeScript Mastery", icon: <Code2 className="w-4 h-4" /> },
  { name: "Next.js & React", icon: <Globe2 className="w-4 h-4" /> },
  { name: "Scalable Systems", icon: <Terminal className="w-4 h-4" /> },
  { name: "Design Engineering", icon: <Sparkles className="w-4 h-4" /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-5/12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass border border-white/10">
                <NextImage 
                  src="/assets/me copy.jpg" 
                  alt="Robu Darius" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6">
                   <span className="text-xs font-medium tracking-widest uppercase text-white/70 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                     Senior Architect
                   </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-6">
              <span>My Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Engineering <span className="text-gradient">Excellence</span> <br />
              One Interaction at a Time.
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I don't just build websites; I architect digital ecosystem that prioritize performance, security, and exceptional user experience. My approach combines rigorous engineering principles with a deep appreciation for high-end aesthetics.
            </p>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Based in the heart of Transylvania's tech hub, I collaborate with forward-thinking brands worldwide to translate complex technical challenges into seamless digital realities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-primary/20 transition-colors group">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-white/90">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

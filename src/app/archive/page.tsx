'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github, Layout, ShoppingBag, Utensils, Zap, User, Home as HomeIcon, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Foodify - Recipe Discovery",
    category: "Recipe Platform",
    year: "2024",
    description: "A premium recipe discovery platform with dynamic image fetching, local asset library, and cross-device sync capabilities.",
    image: "/projects/foodify.png",
    gallery: [
      "/projects/foodify/Screenshot 2026-02-23 at 17.28.54.png",
      "/projects/foodify/Screenshot 2026-02-23 at 16.27.28.png",
      "/projects/foodify/Screenshot 2026-02-23 at 16.27.33.png"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    demoUrl: "#",
    repoUrl: "https://github.com/dariusrobu",
    icon: <Utensils className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "E-commerce Perfume Store",
    category: "E-commerce",
    year: "2024",
    description: "A sophisticated online store for luxury fragrances, featuring a sleek dark mode, interactive product displays, and secure checkout.",
    image: "/projects/perfume.png",
    gallery: [
      "/projects/perfume/Screenshot 2026-02-23 at 21.08.12.png",
      "/projects/perfume/Screenshot 2026-02-23 at 21.08.48.png",
      "/projects/perfume/Screenshot 2026-02-23 at 21.08.20.png",
      "/projects/perfume/Screenshot 2026-02-23 at 21.08.26.png"
    ],
    technologies: ["Next.js", "FastAPI", "SQLite", "Tailwind"],
    demoUrl: "#",
    repoUrl: "https://github.com/dariusrobu",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Carpenter Services Portfolio",
    category: "Service Showcase",
    year: "2023",
    description: "A professional portfolio for a high-end carpentry business, highlighting craftsmanship with a clean, grid-based gallery.",
    image: "/projects/carpenter.png",
    gallery: [
      "/projects/carpenter/Screenshot 2026-02-23 at 17.35.10.png",
      "/projects/carpenter/Screenshot 2026-02-23 at 17.35.06.png"
    ],
    technologies: ["React", "Framer Motion", "Lucide React"],
    demoUrl: "#",
    repoUrl: "https://github.com/dariusrobu",
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Vila Rodica - Guesthouse",
    category: "Hospitality Website",
    year: "2023",
    description: "A beautiful landing page for a boutique guesthouse, featuring smooth transitions and high-resolution visual storytelling.",
    image: "/projects/vilarodica.png",
    gallery: [
      "/projects/vilarodica/Screenshot 2026-02-23 at 17.35.32.png",
      "/projects/vilarodica/Screenshot 2026-02-23 at 17.35.44.png",
      "/projects/vilarodica/Screenshot 2026-02-23 at 17.35.50.png"
    ],
    technologies: ["React", "Tailwind CSS", "Next.js"],
    demoUrl: "#",
    repoUrl: "https://github.com/dariusrobu",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "Personal Portfolio v1",
    category: "Personal Brand",
    year: "2022",
    description: "A previous iteration of a developer portfolio focusing on minimalist design and dark mode aesthetics.",
    image: "/projects/portfolio-v1.png",
    gallery: [
      "/projects/portfolio-v1/Screenshot 2026-02-23 at 21.11.53.png",
      "/projects/portfolio-v1/Screenshot 2026-02-23 at 21.11.58.png",
      "/projects/portfolio-v1/Screenshot 2026-02-23 at 21.11.29.png"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Lucide"],
    demoUrl: "#",
    repoUrl: "https://github.com/dariusrobu",
    icon: <User className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "FreeCodeCamp Quiz App",
    category: "Educational Tool",
    year: "2022",
    description: "An interactive quiz platform designed for developers to test their knowledge across various programming disciplines.",
    image: "/projects/quiz.png",
    gallery: [
      "/projects/quiz/Screenshot 2026-02-23 at 17.34.46.png"
    ],
    technologies: ["React", "TypeScript", "State Management"],
    demoUrl: "#",
    repoUrl: "https://github.com/dariusrobu",
    icon: <Layout className="w-5 h-5" />,
  },
];

export default function ArchivePage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <main className="min-h-screen bg-background text-white py-24 relative">
      <div className="container px-4 mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Project <span className="text-gradient">Archive</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive list of projects. Click on any row to view more images and a brief description.
          </p>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm uppercase tracking-widest font-bold">
                <th className="py-4 pr-4">Year</th>
                <th className="py-4 px-4">Project</th>
                <th className="py-4 px-4 hidden md:table-cell">Category</th>
                <th className="py-4 px-4 hidden lg:table-cell">Built with</th>
                <th className="py-4 pl-4 text-right">Links</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr 
                  key={project.id} 
                  onClick={() => setSelectedId(project.id)}
                  className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors group cursor-pointer"
                >
                  <td className="py-8 pr-4 text-primary font-mono text-sm">{project.year}</td>
                  <td className="py-8 px-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                        <Image src={project.image} alt={project.title} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-lg group-hover:text-primary transition-colors">{project.title}</span>
                        <span className="text-[10px] text-primary md:hidden">Tap for Details</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-8 px-4 text-gray-400 hidden md:table-cell text-sm">{project.category}</td>
                  <td className="py-8 px-4 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-white/30 bg-white/[0.05] px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-8 pl-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link 
                        href={project.repoUrl} 
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        <Github size={18} />
                      </Link>
                      <Link 
                        href={project.demoUrl} 
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        <ExternalLink size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={() => setSelectedId(null)}
          />
          
          <div className="relative w-full max-w-4xl bg-dark-slate border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button 
                onClick={() => setSelectedId(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-8">
              <div className="space-y-8">
                {/* Brief Description */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Gallery Images */}
                <div className="grid grid-cols-1 gap-6">
                  {selectedProject.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                      <Image 
                        src={img} 
                        alt={`${selectedProject.title} screen ${i + 1}`} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Minimal Footer */}
            <div className="p-6 border-t border-white/10 bg-white/[0.02] flex justify-end">
               <button 
                onClick={() => setSelectedId(null)}
                className="px-6 py-2 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

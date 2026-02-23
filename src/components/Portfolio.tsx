import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Layout,
  ShoppingBag,
  Utensils,
  Zap,
  User,
  Home as HomeIcon,
} from "lucide-react";

const projects = [
  {
    title: "Foodify - Recipe Discovery",
    category: "Recipe Platform",
    description:
      "A premium recipe discovery platform with dynamic image fetching, local asset library, and cross-device sync capabilities.",
    image: "/projects/foodify.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    demoUrl: "#",
    repoUrl: "#",
    icon: <Utensils className="w-5 h-5" />,
  },
  {
    title: "E-commerce Perfume Store",
    category: "E-commerce",
    description:
      "A sophisticated online store for luxury fragrances, featuring a sleek dark mode, interactive product displays, and secure checkout.",
    image: "/projects/perfume.png",
    technologies: ["Next.js", "FastAPI", "SQLite", "Tailwind"],
    demoUrl: "#",
    repoUrl: "#",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  {
    title: "Carpenter Services Portfolio",
    category: "Service Showcase",
    description:
      "A professional portfolio for a high-end carpentry business, highlighting craftsmanship with a clean, grid-based gallery.",
    image: "/projects/carpenter.png",
    technologies: ["React", "Framer Motion", "Lucide React"],
    demoUrl: "#",
    repoUrl: "#",
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    title: "Vila Rodica - Guesthouse",
    category: "Hospitality Website",
    description:
      "A beautiful landing page for a boutique guesthouse, featuring smooth transitions and high-resolution visual storytelling.",
    image: "/projects/vilarodica.png",
    technologies: ["React", "Tailwind CSS", "Next.js"],
    demoUrl: "#",
    repoUrl: "#",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Personal Portfolio v1",
    category: "Personal Brand",
    description:
      "A previous iteration of a developer portfolio focusing on minimalist design and dark mode aesthetics.",
    image: "/projects/portfolio-v1.png",
    technologies: ["Next.js", "Tailwind CSS", "Lucide"],
    demoUrl: "#",
    repoUrl: "#",
    icon: <User className="w-5 h-5" />,
  },
  {
    title: "FreeCodeCamp Quiz App",
    category: "Educational Tool",
    description:
      "An interactive quiz platform designed for developers to test their knowledge across various programming disciplines.",
    image: "/projects/quiz.png",
    technologies: ["React", "TypeScript", "State Management"],
    demoUrl: "#",
    repoUrl: "#",
    icon: <Layout className="w-5 h-5" />,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background text-white overflow-hidden">
      <div className="container px-4 mx-auto relative">
        {/* Abstract Background Element */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Crafted <span className="text-gradient">Digital Experiences</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A selection of projects where I've blended high-performance code
            with premium design aesthetics. From e-commerce platforms to bespoke
            service websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(99,102,241,0.3)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Visual Accent */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 backdrop-blur-md border border-white/10 text-xs font-medium text-white/90">
                  <span className="text-primary">{project.icon}</span>
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.05]">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wider font-bold text-white/40 bg-white/[0.05] px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href="/archive"
            className="group inline-flex items-center px-8 py-4 bg-gradient-brand text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20"
          >
            Explore Full Archive
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/content';
import OrbitalLogo from './OrbitalLogo';
import SectionBlur from './SectionBlur';

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-20 px-6 border-t border-white/10">
      <SectionBlur />
      <div className="relative z-10 max-w-6xl mx-auto">
        <span className="block text-xs font-bold uppercase tracking-[0.3em] text-violet-400 mb-3">
          Портфолио
        </span>
        <h2 className="text-5xl font-bold text-white mb-4">
          Все <span className="text-violet-400">проекты</span>
        </h2>
        <p className="text-white/50 mb-12">Избранные проекты, над которыми я работал</p>

        <div className="space-y-6">
          {projects.map((project) => {
            const hovered = hoveredId === project.id;
            return (
              <article
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId((id) => (id === project.id ? null : id))}
                className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-10 rounded-2xl border bg-[#111116]/90 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 ${
                  hovered
                    ? '-translate-y-1 border-violet-500/40 shadow-[0_20px_60px_-25px_rgba(139,92,246,0.5)]'
                    : 'border-white/10'
                }`}
              >
                <div className="flex justify-center md:w-[30%]">
                  <OrbitalLogo logo={project.logo} hovered={hovered} wide={project.logo === 'momentum'} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">{project.brand}</h3>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-violet-300 bg-violet-500/10 border border-violet-500/25 rounded-full px-3 py-1">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xl">{project.description}</p>

                  <div className="grid grid-cols-3 gap-x-3 gap-y-1 mb-6 max-w-md">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="min-w-0">
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/40 mt-1 break-words leading-snug">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-white/5 text-white/60 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 justify-center md:justify-end">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-violet-500/30 px-5 py-2.5 text-sm font-semibold text-violet-300 transition-all duration-300 ease-out hover:scale-[1.05] hover:border-violet-400/70 hover:bg-violet-500/10 hover:text-violet-200"
                  >
                    Подробнее <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

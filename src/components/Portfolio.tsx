import { projects } from '../data/content';
import ProjectLogo from './ProjectLogo';
import SectionBlur from './SectionBlur';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 px-6 border-t border-white/10">
      <SectionBlur />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-4">Портфолио</h2>
        <p className="text-white/60 mb-12">Избранные проекты, над которыми я работал</p>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition"
            >
              <div className="grid md:grid-cols-3 gap-0">
                <div
                  className={`bg-gradient-to-br ${project.color} h-64 md:h-96 flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/25 backdrop-blur-sm text-white shadow-lg shadow-black/20">
                      <ProjectLogo name={project.logo} className="h-8 w-8" />
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                      {project.brand}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 p-8 flex flex-col justify-between bg-black/50 backdrop-blur-sm">
                  <div>
                    <span className="text-xs font-bold text-white/50 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-3 mb-3">{project.title}</h3>
                    <p className="text-white/60 text-sm mb-6">{project.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-white/50 uppercase mb-3">Технологии</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-white/10 text-white/80 rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

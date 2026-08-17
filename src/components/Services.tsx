import { services } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-4">Услуги</h2>
        <p className="text-white/60 mb-12">Что я могу для вас сделать</p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/10 transition group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { contacts } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-xl font-bold mb-4">{contacts.brand.toUpperCase()}</div>
            <p className="text-white/40 text-sm">
              Full stack разработка веб-приложений и интеграций
            </p>
          </div>
          <div>
            <div className="font-bold text-white mb-4">Навыки</div>
            <div className="text-sm text-white/60 space-y-1">
              <p>React, Next.js, Vue.js</p>
              <p>Node.js, Python, Java</p>
              <p>PostgreSQL, MongoDB, Redis</p>
              <p>AWS, Docker, Kubernetes</p>
            </div>
          </div>
          <div>
            <div className="font-bold text-white mb-4">Статистика</div>
            <div className="text-sm text-white/60 space-y-1">
              <p>50+ успешных проектов</p>
              <p>200+ часов разработки</p>
              <p>15+ лет в IT индустрии</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} {contacts.brand.toUpperCase()}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

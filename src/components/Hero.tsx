import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Full Stack
            <br />
            разработчик
          </h1>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            Создаю высоконагруженные веб-приложения, SaaS платформы и интеграции.
            Специализируюсь на масштабировании и производительности.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 ease-out hover:scale-[1.15]"
            >
              Заказать консультацию
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3 border border-white/30 text-white font-semibold hover:border-white transition-all duration-300 ease-out hover:scale-[1.15] flex items-center gap-2"
            >
              Смотреть работы <ChevronRight size={18} />
            </a>
          </div>
        </div>
        <div className="relative h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-white/30">
            <div className="text-center">
              <div className="text-4xl mb-4">{'</>'}</div>
              <p className="text-sm">Full Stack Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ChevronRight } from 'lucide-react';
import { process } from '../data/content';
import SectionBlur from './SectionBlur';

export default function Process() {
  return (
    <section id="process" className="relative py-20 px-6 border-t border-white/10">
      <SectionBlur />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-4">Процесс работы</h2>
        <p className="text-white/60 mb-12">Как я работаю с клиентами</p>

        <div className="grid md:grid-cols-3 gap-6">
          {process.map((item, idx) => (
            <div key={item.step} className="relative">
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg h-full">
                <div className="text-4xl font-bold text-white/20 mb-3">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
              {idx < process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ChevronRight className="text-white/20" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

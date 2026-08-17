import { useState } from 'react';
import { Send, ArrowUpRight } from 'lucide-react';
import { contacts } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Новый проект от ${formData.name || 'клиента'}`);
    const body = encodeURIComponent(
      `Имя / компания: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${contacts.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-6 border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-4">Готовы начать проект?</h2>
        <p className="text-white/60 mb-10">
          Напишите мне о вашей идее, и я помогу воплотить её в жизнь
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя / Название компании"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition"
          />
          <textarea
            name="message"
            placeholder="О вашем проекте. Что нужно? Сроки? Бюджет?"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition resize-none"
          />
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-white/90 transition flex items-center justify-center gap-2"
          >
            Отправить запрос <Send size={18} />
          </button>
        </form>

        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-sm text-white/50 mb-4">Другие способы связи:</p>
          <div className="flex flex-wrap gap-6">
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition font-semibold flex items-center gap-2"
            >
              Telegram <ArrowUpRight size={16} />
            </a>
            <a
              href={`mailto:${contacts.email}`}
              className="text-white/60 hover:text-white transition font-semibold flex items-center gap-2"
            >
              Email <ArrowUpRight size={16} />
            </a>
            <a
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition font-semibold flex items-center gap-2"
            >
              GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { contacts } from '../data/content';

const links = [
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#services', label: 'Услуги' },
  { href: '#process', label: 'Процесс' },
  { href: '#contact', label: 'Контакт' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-wider">
          {contacts.brand.toUpperCase()}
        </a>

        <div className="hidden md:flex gap-8 text-sm text-white/60">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden text-white"
          aria-label="Меню"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

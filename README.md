# dev-portfolio

Портфолио full stack разработчика. Чёрно-белый дизайн, 6 кейсов, услуги, процесс работы и форма контакта.

## Стек

- [Vite](https://vitejs.dev/)
- React 18 + TypeScript
- Tailwind CSS
- [lucide-react](https://lucide.dev/) — иконки

Тот же стек, что и в остальных проектах: Vite + React + TS + Tailwind.

## Разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Деплой

Пуш в `master` автоматически собирает и публикует сайт на GitHub Pages через
[.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Настройка под себя

Данные (проекты, услуги, контакты) лежат в [src/data/content.ts](src/data/content.ts).

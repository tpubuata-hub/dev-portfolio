import type { LogoKey } from '../components/ProjectLogo';

export interface Project {
  id: number;
  brand: string;
  logo: LogoKey;
  title: string;
  category: string;
  description: string;
  stats: { label: string; value: string }[];
  tech: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    brand: 'Vortex',
    logo: 'vortex',
    title: 'Vortex — SaaS платформа для управления проектами',
    category: 'SaaS / Full Stack',
    description:
      'Облачная платформа для управления проектами с real-time синхронизацией, интеграциями со Slack, GitHub и Jira.',
    stats: [
      { label: 'Пользователей', value: '12K+' },
      { label: 'Производительность', value: '98%' },
      { label: 'Рост MRR', value: '+156%' },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'AWS'],
    color: 'from-purple-600 to-indigo-600',
  },
  {
    id: 2,
    brand: 'Nexo',
    logo: 'nexo',
    title: 'Nexo — E-commerce для электроники',
    category: 'E-commerce / Frontend',
    description:
      'Высокопроизводительный интернет-магазин электроники с AI-рекомендациями, интеграцией с 1C и системами платежей.',
    stats: [
      { label: 'Конверсия', value: '+89%' },
      { label: 'Скорость загрузки', value: '1.2s' },
      { label: 'Средний чек', value: '+45%' },
    ],
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Elasticsearch', 'Redis'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 3,
    brand: 'Momentum',
    logo: 'momentum',
    title: 'Momentum — Аналитическая платформа для маркетологов',
    category: 'Analytics / Dashboard',
    description:
      'Real-time дашборд для анализа маркетинг-кампаний с интеграциями в Facebook, Google Ads, TikTok, Яндекс.',
    stats: [
      { label: 'Обработка данных', value: '1M+ /день' },
      { label: 'Задержка обновления', value: '<5 сек' },
      { label: 'Клиентов', value: '850+' },
    ],
    tech: ['React', 'D3.js', 'Python', 'BigQuery', 'Kafka'],
    color: 'from-emerald-600 to-green-600',
  },
  {
    id: 4,
    brand: 'Luna',
    logo: 'luna',
    title: 'Luna — Мобильное приложение для фитнеса',
    category: 'React Native / Mobile',
    description:
      'Кроссплатформенное приложение для тренировок с AR-функциями, синхронизацией с Apple Watch и умными часами.',
    stats: [
      { label: 'Скачиваний', value: '250K+' },
      { label: 'Рейтинг', value: '4.8★' },
      { label: 'Дневные активные', value: '45K' },
    ],
    tech: ['React Native', 'TypeScript', 'Firebase', 'Stripe', 'AWS Lambda'],
    color: 'from-pink-600 to-rose-600',
  },
  {
    id: 5,
    brand: 'Horizon',
    logo: 'horizon',
    title: 'Horizon — Корпоративный портал для финтеха',
    category: 'Enterprise / Security',
    description:
      'Защищённый корпоративный портал банка с двухфакторной аутентификацией, интеграциями в SWIFT и другие платёжные системы.',
    stats: [
      { label: 'Безопасность', value: 'FIDO2' },
      { label: 'Доступность', value: '99.99%' },
      { label: 'Пользователей', value: '50K+' },
    ],
    tech: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Kubernetes'],
    color: 'from-orange-600 to-red-600',
  },
  {
    id: 6,
    brand: 'Sync',
    logo: 'sync',
    title: 'Sync — CRM система для B2B продаж',
    category: 'CRM / Backend',
    description:
      'Полнофункциональная CRM с автоматизацией продаж, интеграциями в Email, Telegram, WhatsApp и системы аналитики.',
    stats: [
      { label: 'Сделок обработано', value: '500K+' },
      { label: 'Автоматизация', value: '78%' },
      { label: 'ROI улучшение', value: '+320%' },
    ],
    tech: ['Vue.js', 'Django', 'MongoDB', 'Celery', 'Docker'],
    color: 'from-yellow-500 to-amber-600',
  },
];

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: 'Веб-сайты и веб-приложения',
    description: 'От лендингов до полнофункциональных SaaS платформ. React, Vue, Next.js, современный стек.',
    icon: '🌐',
  },
  {
    title: 'Интеграции и API',
    description: 'Подключение Stripe, Telegram, WhatsApp, 1C, CRM, платёжных систем и любых сервисов.',
    icon: '🔗',
  },
  {
    title: 'Мобильные приложения',
    description: 'React Native или нативные приложения для iOS и Android с максимальной производительностью.',
    icon: '📱',
  },
  {
    title: 'Архитектура и масштабирование',
    description: 'Проектирование систем для миллионов пользователей. Microservices, Cloud, DevOps.',
    icon: '⚙️',
  },
  {
    title: 'Аналитика и оптимизация',
    description: 'Дашборды, real-time аналитика, улучшение производительности, SEO оптимизация.',
    icon: '📊',
  },
  {
    title: 'Безопасность и Compliance',
    description: 'GDPR, PCI-DSS, двухфакторная аутентификация, шифрование, защита от атак.',
    icon: '🔒',
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  { step: '1', title: 'Консультация', description: 'Обсуждаем идею, требования, сроки и бюджет' },
  { step: '2', title: 'Проектирование', description: 'Дизайн, архитектура, выбор технологий' },
  { step: '3', title: 'Разработка', description: 'Спринты, регулярное обновление статуса, демо' },
  { step: '4', title: 'Тестирование', description: 'QA, нагрузочное тестирование, безопасность' },
  { step: '5', title: 'Развёртывание', description: 'Настройка сервера, CI/CD, monitoring' },
  { step: '6', title: 'Поддержка', description: 'Обслуживание, обновления, масштабирование' },
];

export const contacts = {
  brand: 'tpubuata-hub',
  telegram: 'https://t.me/VaIidCvv',
  email: 'tpubuata@gmail.com',
  github: 'https://github.com/tpubuata-hub',
};

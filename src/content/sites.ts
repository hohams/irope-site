import { ropeAccess, servicePages } from './irope-catalog';
import type { ServicePage } from './irope-pages';

export type SiteConfig = {
  id: 'irope' | 'ispec' | 'mobile-kids';
  name: string;
  tagline: string;
  locale: string;
  email: string;
  phone: string;
  address: string;
  sectionIds: { services: string; work?: string; about: string; contact: string };
  nav: { label: string; href: string }[];
  hero: { eyebrow: string; title: string; text: string; primaryAction: string };
  services: { title: string; text: string; page?: ServicePage }[];
  trust: string[];
  seo?: { title: string; description: string; image?: string };
};

export const sites: Record<SiteConfig['id'], SiteConfig> = {
  irope: {
    id: 'irope', name: 'iRope', tagline: 'Pramoninis alpinizmas Lietuvoje', locale: 'lt-LT',
    email: 'info@irope.lt', phone: '+370 695 16 562', address: 'Vilnius, visa Lietuva',
    sectionIds: { services: 'paslaugos', work: 'darbai', about: 'apie', contact: 'kontaktai' },
    nav: [{ label: ropeAccess.name, href: `/paslaugos/${ropeAccess.slug}/` }, { label: 'Paslaugos', href: '#paslaugos' }, { label: 'Darbai', href: '#darbai' }, { label: 'Apie mus', href: '#apie' }, { label: 'Kontaktai', href: '#kontaktai' }],
    hero: { eyebrow: 'Vilnius · visa Lietuva', title: 'Pramoninis alpinizmas ir aukštuminiai darbai', text: 'Kai darbui ant stogo, fasado ar konstrukcijos reikia aukštalipių, kreipkitės į iRope. Remontuojame stogus, tvarkome lietaus nuvedimo sistemas, plauname langus ir fasadus.', primaryAction: 'Gauti pasiūlymą' },
    services: servicePages.map((page) => ({ title: page.name, text: page.summary, page })),
    trust: ['21 metų patirtis', 'Dirbame visoje Lietuvoje', 'Nemokamas darbų įvertinimas vietoje'],
    seo: {
      title: 'Pramoninis alpinizmas ir aukštuminiai darbai Lietuvoje | iRope',
      description: 'iRope aukštalipiai Vilniuje ir visoje Lietuvoje. Pramoninis alpinizmas, stogų remontas, latakų priežiūra, langų ir fasadų plovimas bei montavimas aukštyje.',
      image: '/images/irope/facade-high-rise.jpg'
    }
  },
  ispec: {
    id: 'ispec', name: 'iSpec', tagline: 'Экспертиза и технические решения', locale: 'ru-RU',
    email: 'hello@ispec.pro', phone: '+7 000 000 00 00', address: 'Россия',
    sectionIds: { services: 'services', about: 'about', contact: 'contact' },
    nav: [{ label: 'Услуги', href: '#services' }, { label: 'О компании', href: '#about' }, { label: 'Контакты', href: '#contact' }],
    hero: { eyebrow: 'Технические решения', title: 'Экспертиза, на которую можно опереться', text: 'Место для краткого описания специализации iSpec и ключевой пользы для клиента.', primaryAction: 'Обсудить задачу' },
    services: [{ title: 'Услуга 1', text: 'Добавьте описание.' }, { title: 'Услуга 2', text: 'Добавьте описание.' }, { title: 'Услуга 3', text: 'Добавьте описание.' }],
    trust: ['Понятный процесс', 'Профессиональный подход', 'Индивидуальные решения']
  },
  'mobile-kids': {
    id: 'mobile-kids', name: 'Mobile Kids', tagline: 'Пространство для детских событий', locale: 'ru-RU',
    email: 'hello@example.com', phone: '+7 000 000 00 00', address: 'Укажите город',
    sectionIds: { services: 'services', about: 'about', contact: 'contact' },
    nav: [{ label: 'Форматы', href: '#services' }, { label: 'О нас', href: '#about' }, { label: 'Контакты', href: '#contact' }],
    hero: { eyebrow: 'Детские события', title: 'Праздники, которые дети запоминают', text: 'Место для живого описания Mobile Kids, форматов и географии работы.', primaryAction: 'Оставить заявку' },
    services: [{ title: 'Формат 1', text: 'Добавьте описание.' }, { title: 'Формат 2', text: 'Добавьте описание.' }, { title: 'Формат 3', text: 'Добавьте описание.' }],
    trust: ['Заботливая команда', 'Понятная организация', 'Яркие впечатления']
  }
};

export function activeSite(): SiteConfig {
  const id = (import.meta.env.PUBLIC_SITE_ID || 'irope') as SiteConfig['id'];
  return sites[id] || sites.irope;
}

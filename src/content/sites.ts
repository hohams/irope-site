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
  services: { title: string; text: string }[];
  trust: string[];
  seo?: { title: string; description: string; image?: string };
};

export const sites: Record<SiteConfig['id'], SiteConfig> = {
  irope: {
    id: 'irope', name: 'iRope', tagline: 'Pramoninis alpinizmas Lietuvoje', locale: 'lt-LT',
    email: 'info@irope.lt', phone: '+370 695 16 562', address: 'Vilnius, visa Lietuva',
    sectionIds: { services: 'paslaugos', work: 'darbai', about: 'apie', contact: 'kontaktai' },
    nav: [{ label: 'Paslaugos', href: '#paslaugos' }, { label: 'Darbai', href: '#darbai' }, { label: 'Apie mus', href: '#apie' }, { label: 'Kontaktai', href: '#kontaktai' }],
    hero: { eyebrow: 'Vilnius · visa Lietuva', title: 'Patikimi darbai aukštyje', text: 'Pramoninis alpinizmas, stogų priežiūra ir fasadų valymas ten, kur įprastos priemonės nepasiekia.', primaryAction: 'Gauti pasiūlymą' },
    services: [
      { title: 'Stogų apžiūra ir remontas', text: 'Apžiūrime stogus ir remontuojame metalinę, čerpinę bei prilydomą ritininę stogo dangą.' },
      { title: 'Stogų valymas ir plovimas', text: 'Valome samanas ir kitus nešvarumus, plauname stogų dangas.' },
      { title: 'Latakų ir lietvamzdžių priežiūra', text: 'Valome, montuojame ir remontuojame lietaus vandens latakus bei lietvamzdžius.' },
      { title: 'Sniegas, ledas ir stogų apsauga', text: 'Šaliname sniegą, ledą ir varveklius. Montuojame sniego užtvaras ir stogų bei lietaus nuvedimo sistemų šildymo kabelius.' },
      { title: 'Langų, fasadų ir pramoninių konstrukcijų valymas', text: 'Plauname langus, fasadus, kupolus ir atriumų stiklus. Atliekame pramoninių konstrukcijų valymo darbus aukštyje.' },
      { title: 'Fasadų ir ventiliacijos šachtų remontas', text: 'Remontuojame ir dažome fasadus, remontuojame ventiliacijos šachtas.' },
      { title: 'Dūmtraukių ir pramoninių vamzdžių apžiūra', text: 'Apžiūrime dūmtraukius, pramoninius vamzdžius ir pramoninių objektų konstrukcijas. Remontuojame dūmtraukius ir jų viršutines dalis.' },
      { title: 'Montavimo ir elektros darbai aukštyje', text: 'Montuojame ir išmontuojame konstrukcijas, iškabas, reklaminius stendus ir antenas. Atliekame elektros montavimo darbus aukštyje.' },
      { title: 'Šventinės dekoracijos ir apsauga nuo paukščių', text: 'Montuojame ir išmontuojame šventines dekoracijas. Įrengiame apsaugos nuo paukščių sistemas.' }
    ],
    trust: ['21 metų patirtis', 'Dirbame visoje Lietuvoje', 'Nemokamas darbų įvertinimas vietoje'],
    seo: {
      title: 'iRope | Pramoninis alpinizmas Lietuvoje',
      description: 'Pramoninis alpinizmas, stogų priežiūra ir fasadų valymas Vilniuje ir visoje Lietuvoje.',
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

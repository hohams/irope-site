import type { PhotoKey } from './irope-photos';
export type ServicePage = {
  slug: string;
  name: string;
  summary: string;
  photos?: PhotoKey[];
  description: string;
  introduction: string;
  sections: { heading: string; text: string }[];
  request: string;
};

export const gutterCleaning: ServicePage = {
  photos: ['gutter-work', 'snow-load'],
  slug: 'lataku-lietvamzdziu-valymas',
  name: 'Latakų ir lietvamzdžių valymas',
  summary: 'Valome sąnašas iš stogo latakų ir lietvamzdžių, kuriais nuteka lietaus vanduo.',
  description: 'Valome stogų latakus ir lietvamzdžius Vilniuje ir Vilniaus rajone. Sužinokite, kokių duomenų reikia darbų apimčiai ir kainai įvertinti.',
  introduction: 'Jei lyjant vanduo liejasi per latako kraštą, atkreipkite dėmesį, kur tai vyksta: ties lietvamzdžio įlaja, per sujungimą ar per visą latako ilgį. Ši informacija padeda įvertinti, ar pirmiausia reikia valyti lataką, ar apžiūrėti pačią konstrukciją.',
  sections: [
    { heading: 'Ką valome', text: 'Valome lietaus vandenį nuo stogo surenkančius latakus ir lietvamzdžius. Užklausoje pažymėkite, ar lapai ir sąnašos matyti atvirame latake, ar vanduo susilaiko lietvamzdyje.' },
    { heading: 'Kas lemia valymo kainą', text: 'Svarbu latakų ilgis, lietvamzdžių skaičius, pastato aukštis ir galimybė prieiti nuo stogo ar žemės. Jeigu matyti atsiskyrusi jungtis arba sulinkęs latakas, pažymėkite tai atskirai: tokiu atveju gali reikėti ir remonto.' },
  ],
  request: 'Nurodykite objekto adresą, aukštų skaičių ir apytikslį latakų ilgį. Jei galite, el. paštu atsiųskite bendrą fasado vaizdą ir vietos, kurioje persipila vanduo, nuotrauką.',
};

export const gutterRepair: ServicePage = {
  photos: ['gutter-work', 'snow-load'],
  slug: 'lataku-remontas',
  name: 'Latakų ir lietvamzdžių remontas',
  summary: 'Remontuojame pažeistas lietaus nuvedimo sistemos dalis ir montuojame naujus latakus bei lietvamzdžius.',
  description: 'Remontuojame ir montuojame lietaus latakus bei lietvamzdžius Vilniuje ir Vilniaus rajone. Ką nurodyti, jei prakiuro jungtis ar atsikabino vamzdis.',
  introduction: 'Atsikabinęs lietvamzdis, pasviręs latakas ir vandens nuotėkis per jungtį gali atrodyti panašiai iš kiemo, tačiau darbų apimtis skiriasi. Remontuojame ir montuojame lietaus nuvedimo sistemos elementus aukštyje.',
  sections: [
    { heading: 'Remontas ar naujos atkarpos montavimas?', text: 'Jeigu dalis pažeista, nurodykite, kurią atkarpą reikia tvarkyti. Jei lietvamzdžio ar latako trūksta, pažymėkite jo vietą ir apytikslį ilgį. Turimos sistemos forma, matmenys ir medžiaga padeda parinkti tinkamą elementą.' },
    { heading: 'Kaip įvertinama darbų apimtis', text: 'Vienos jungties remontas skiriasi nuo viso fasado lietvamzdžių keitimo. Vertiname remontuojamų vietų skaičių, jų aukštį, priėjimą ir esamų tvirtinimų būklę. Kai vanduo tiesiog persipila, pirmiausia verta įvertinti, ar latake nėra susikaupusių sąnašų.' },
  ],
  request: 'Atsiųskite adresą, bendrą fasado vaizdą ir pažeistos vietos nuotrauką. Jei žinote, pridėkite latako ar lietvamzdžio matmenis bei reikalingos atkarpos ilgį.',
};

export const roofSnow: ServicePage = {
  photos: ['snow-load'],
  slug: 'sniego-valymas',
  name: 'Sniego, ledo ir varveklių šalinimas nuo stogų',
  summary: 'Šaliname sniegą, ledą ir varveklius nuo stogų bei karnizų.',
  description: 'Sniego ir ledo valymas nuo stogų, varveklių šalinimas Vilniuje ir Vilniaus rajone. Užklausai svarbūs stogo plotas, jo danga ir vieta po karnizu.',
  introduction: 'Šaliname nuo stogų susikaupusį sniegą, ledą ir prie karnizų susidariusius varveklius. Užklausoje išskirkite, ar reikia nuvalyti stogo plotą, ar sutvarkyti konkretų kraštą virš įėjimo, šaligatvio ar automobilių stovėjimo vietos.',
  sections: [
    { heading: 'Stogo plotas ir karnizo ilgis', text: 'Sniego valymo apimtį padeda nusakyti stogo plotas, o varveklių šalinimo apimtį – karnizo ilgis ir aukštis. Jeigu reikia tvarkyti kelias pastato puses, nurodykite jas atskirai.' },
    { heading: 'Priėjimas prie pastato', text: 'Darbų galimybę ir laiką vertiname pagal oro sąlygas, stogo dangą, priėjimą ir erdvę apačioje. Nurodykite, ar po karnizu yra įėjimų, praėjimų arba vietų, kuriomis nuolat naudojasi žmonės.' },
  ],
  request: 'Parašykite adresą ir kuri stogo dalis kelia problemų. Nuotrauką galite atsiųsti nuo žemės. Dėl nuotraukų lipti ant apsnigto stogo nereikia.',
};

export const holidayLights: ServicePage = {
  slug: 'kalediniu-dekoraciju-montavimas',
  name: 'Kalėdinių dekoracijų montavimas aukštyje',
  summary: 'Montuojame šventines dekoracijas aukštyje ir nuimame jas pasibaigus sezonui.',
  description: 'Montuojame ir išmontuojame šventines dekoracijas aukštyje Vilniuje ir Vilniaus rajone. Ką nurodyti apie tvirtinimo vietas, dekoracijas ir datas.',
  introduction: 'Montuojame šventines dekoracijas aukštyje ir nuimame jas pasibaigus sezonui. Planuojant darbus svarbu žinoti, kur bus tvirtinama kiekviena dekoracija ir kaip tą vietą galima pasiekti.',
  sections: [
    { heading: 'Kokios informacijos reikia apie dekoracijas?', text: 'Nurodykite dekoracijų skaičių, matmenis ir, jei žinote, svorį. Fasado nuotraukoje pažymėtos montavimo vietos padeda įvertinti aukštį, atstumus tarp elementų ir tvirtinimo pagrindą.' },
    { heading: 'Montavimas ir nuėmimas', text: 'Užklausoje galima nurodyti abi datas: kada dekoracijos turi būti sumontuotos ir kada jas planuojate nuimti. Apšviečiamoms dekoracijoms atskirai pažymėkite elektros prijungimo vietą ir ar reikalingi elektros montavimo darbai.' },
  ],
  request: 'Parašykite objekto adresą, pageidaujamas datas ir ar dekoracijas jau turite. El. paštu galite atsiųsti fasado vaizdą, dekoracijų nuotraukas ir jų išdėstymo schemą.',
};

export const roofRepair: ServicePage = {
  photos: ['roof-access', 'roof-cleaning'],
  slug: 'stogu-remontas',
  name: 'Stogų apžiūra ir remontas',
  summary: 'Apžiūrime ir remontuojame metalinę, čerpinę bei prilydomą ritininę stogo dangą.',
  description: 'Metalinių, čerpinių ir prilydoma danga dengtų stogų apžiūra ir remontas Vilniuje bei Vilniaus rajone. Kaip apibūdinti nuotėkį ir pateikti užklausą.',
  introduction: 'Apžiūrime ir remontuojame metalinius, čerpinius bei prilydoma ritinine danga dengtus stogus. Jei viduje matyti drėgmė, nurodykite, kada ji atsiranda: po ilgo lietaus, pučiant vėjui ar tirpstant sniegui. Vandens patekimo vieta gali skirtis nuo dėmės vietos patalpoje.',
  sections: [
    { heading: 'Metalinė stogo danga', text: 'Jei matyti pakilęs lakšto kraštas, pažeistas tvirtinimas ar tarpas prie kamino, nurodykite jo vietą. Bendras šlaito vaizdas padeda suprasti, kur pažeidimas yra kraigo ir karnizo atžvilgiu.' },
    { heading: 'Čerpinė stogo danga', text: 'Parašykite, ar matyti pasislinkusių arba skilusių čerpių ir ar pažeidimas yra prie kraigo, kamino ar latako. Jei turite tos pačios rūšies atsarginių čerpių, tai taip pat naudinga žinoti prieš apžiūrą.' },
    { heading: 'Prilydoma ritininė stogo danga', text: 'Jei pastebėjote atsivėrusią siūlę, pūslę ar pažeidimą prie parapeto, užklausoje nurodykite vietą ir apytikslį plotą. Remonto būdą ir apimtį tiksliname pagal dangos būklę.' },
  ],
  request: 'Nurodykite adresą, stogo dangą, jei ją žinote, ir kaip pasiekiamas stogas. Pridėkite turimas nuotraukas ir aprašykite, kur bei kada pastebėjote problemą.',
};

import { gutterCleaning, gutterRepair, holidayLights, roofRepair, roofSnow, type ServicePage } from './irope-pages';

const roofCleaning: ServicePage = {
  slug: 'stogu-valymas-ir-plovimas',
  name: 'Stogų valymas ir plovimas',
  summary: 'Valome samanas ir kitus nešvarumus nuo stogų, plauname stogo dangą.',
  description: 'Stogų valymas ir plovimas Vilniuje. Ką nurodyti apie dangą, šlaito plotą ir samanų ar kitų nešvarumų pažeistas vietas.',
  introduction: 'Jei samanomis apaugusi tik viena stogo pusė, užklausoje pažymėkite būtent tą šlaitą. Valymo apimtį vertiname pagal dangos rūšį, jos būklę ir tai, kaip pasiekiama darbo vieta.',
  sections: [
    { heading: 'Visas stogas ar atskiras šlaitas?', text: 'Nurodykite, ar reikia plauti visą dangą, ar tik konkrečią jos dalį. Parašykite, iš ko pagaminta danga ir ar pastebėjote atsilaisvinusių arba pažeistų elementų.' },
  ],
  request: 'Atsiųskite adresą, apytikslį valomą plotą ir stogo vaizdą nuo žemės. Jei žinote, nurodykite, ar prie pastato yra vandens tiekimo vieta.',
  photos: ['roof-cleaning', 'roof-washing'],
};

const snowGuards: ServicePage = {
  slug: 'sniego-uztvaru-montavimas',
  name: 'Sniego užtvarų montavimas',
  summary: 'Montuojame sniego užtvaras ant šlaitinių stogų.',
  description: 'Sniego užtvarų montavimas Vilniuje. Kokie stogo dangos, šlaito ir karnizo matmenys reikalingi pasiūlymui.',
  introduction: 'Užtvarų vietą pradedame vertinti nuo to, kur nuo stogo slenka sniegas: virš įėjimo, praėjimo ar stovėjimo vietos. Montavimo apimtis priklauso nuo konkretaus šlaito ir jo dangos.',
  sections: [
    { heading: 'Kurią stogo dalį norite apsaugoti?', text: 'Nurodykite karnizo ilgį, šlaito ilgį ir nuolydį, jei jį žinote. Jei danga profiliuota, naudinga dangos profilio nuotrauka arba gamintojo nurodytas modelis.' },
  ],
  request: 'Parašykite objekto adresą ir pažymėkite norimą užtvarų vietą nuotraukoje. Jei užtvaras jau turite, pridėkite jų modelį.',
};

const roofHeating: ServicePage = {
  slug: 'stogu-ir-lataku-sildymo-kabeliu-montavimas',
  name: 'Stogų ir latakų šildymo kabelių montavimas',
  summary: 'Montuojame šildymo kabelius stogo pakraščiuose, latakuose ir lietvamzdžiuose.',
  description: 'Šildymo kabelių montavimas ant stogų ir lietaus nuvedimo sistemose Vilniuje. Kaip aprašyti apledėjimo vietą ir numatomą kabelio trasą.',
  introduction: 'Kabelių gali reikėti tik ties įlaja arba ilgesnėje atkarpoje nuo karnizo iki lietvamzdžio apačios. Kad galėtume įvertinti montavimo apimtį, nurodykite, kur žiemą kaupiasi ledas.',
  sections: [
    { heading: 'Esama sistema ir nauja trasa', text: 'Pažymėkite, ar šildymą norite įrengti pirmą kartą, ar papildyti jau esamą sistemą. Jei yra kabelių ar valdiklis, pridėkite jų žymėjimą, jeigu jis žinomas.' },
  ],
  request: 'Nurodykite adresą, numatomos trasos ilgį, lietvamzdžių skaičių ir elektros prijungimo vietą, jei ją žinote.',
};

const windowCleaning: ServicePage = {
  slug: 'langu-ir-stiklo-konstrukciju-valymas',
  name: 'Langų ir stiklo konstrukcijų valymas aukštyje',
  summary: 'Plauname langus, įstiklintus atriumus ir stiklinius kupolus.',
  description: 'Langų, atriumų ir stiklinių kupolų plovimas aukštyje Vilniuje. Kaip įvertinti stiklo plotą, pasiekiamumą ir plaunamą pusę.',
  introduction: 'Langų eilių, stiklinio kupolo ir atriumo plovimą planuojame skirtingai. Svarbu, ar stiklas pasiekiamas iš lauko, iš pastato vidaus, ar reikia nuplauti abi puses.',
  sections: [
    { heading: 'Kokį stiklo plotą reikia plauti?', text: 'Jei ploto nežinote, nurodykite langų eilių ar stiklo sekcijų skaičių ir aukštą. Atriumui pridėkite bendrą vaizdą, kuriame matytųsi erdvė po stiklu.' },
  ],
  request: 'Parašykite adresą, norimą plovimo pusę ir laiką, kada galima patekti prie langų.',
  photos: ['facade-work', 'facade-high-rise'],
};

const facadeWashing: ServicePage = {
  slug: 'fasadu-plovimas',
  name: 'Fasadų plovimas',
  summary: 'Plauname fasadus ir sunkiai pasiekiamus jų paviršius.',
  description: 'Fasadų plovimas aukštyje Vilniuje. Kokią informaciją pateikti apie apdailą, nešvarumus ir plaunamą fasado dalį.',
  introduction: 'Planuojant fasado plovimą, svarbu žinoti apdailos medžiagą ir atskirti paviršiaus nešvarumus nuo nusilupusių dažų ar pažeistos apdailos.',
  sections: [
    { heading: 'Visas fasadas ar konkreti vieta?', text: 'Bendrame pastato vaizde pažymėkite plaunamą pusę, o nuotraukoje iš arčiau parodykite nešvarumus. Jei fasadas sudarytas iš skirtingų medžiagų, nurodykite, kurias dalis reikia plauti.' },
  ],
  request: 'Atsiųskite adresą, fasado nuotraukas ir apytikslį plaunamą plotą arba pastato aukštų skaičių.',
  photos: ['facade-high-rise'],
};

const industrialCleaning: ServicePage = {
  slug: 'pramoniniu-konstrukciju-valymas',
  name: 'Pramoninių konstrukcijų valymas aukštyje',
  summary: 'Valome sunkiai pasiekiamas pramoninių pastatų konstrukcijas.',
  description: 'Pramoninių konstrukcijų valymas aukštyje Vilniuje. Kaip aprašyti valomas konstrukcijas, jų aukštį ir darbo sąlygas objekte.',
  introduction: 'Užklausoje įvardykite valomas sijas, atramas ar kitus konstrukcijų elementus. Pažymėkite, ar darbai numatomi pastato viduje, ar lauke.',
  sections: [
    { heading: 'Darbo vieta ir prieiga', text: 'Vertiname konstrukcijų išdėstymą, valomų vietų skaičių ir jų pasiekiamumą. Nurodykite, ar po jomis yra įrenginių, ar darbo laiką reikės derinti su objekto veikla.' },
  ],
  request: 'Parašykite adresą, darbo vietos aukštį, kokius nešvarumus reikia pašalinti, ir pridėkite bendrą konstrukcijų vaizdą.',
};

const facadeRepair: ServicePage = {
  slug: 'fasadu-remontas-ir-dazymas',
  name: 'Fasadų remontas ir dažymas',
  summary: 'Remontuojame ir dažome pažeistas fasado vietas aukštyje.',
  description: 'Fasadų remontas ir dažymas Vilniuje. Ką pateikti vertinant pažeistą apdailą, fasado aukštį ir dažomą plotą.',
  introduction: 'Aprašykite, ar reikia sutvarkyti vieną pažeistą vietą, ar perdažyti visą fasado dalį. Jei apdaila atšokusi, nuotraukoje pažymėkite pažeidimo ribas.',
  sections: [
    { heading: 'Remontuojamas ir dažomas plotas', text: 'Pažeistos vietos plotas gali būti mažesnis už norimą nudažyti paviršių. Nurodykite abu plotus atskirai ir pridėkite turimą informaciją apie esamą dangą ar spalvą.' },
  ],
  request: 'Atsiųskite adresą, bendrą fasado vaizdą, pažeidimo nuotrauką ir aukštą, kuriame numatomi darbai.',
};

const ventRepair: ServicePage = {
  slug: 'ventiliacijos-sachtu-remontas',
  name: 'Ventiliacijos šachtų remontas',
  summary: 'Remontuojame sunkiai pasiekiamas ventiliacijos šachtų dalis.',
  description: 'Ventiliacijos šachtų remontas aukštyje Vilniuje. Kaip apibūdinti pažeistą šachtos dalį, jos vietą ir priėjimą.',
  introduction: 'Kad galėtume įvertinti remontą, svarbu matyti, kuri šachtos dalis pažeista ir kaip ją galima pasiekti. Nurodykite, ar šachta yra ant stogo, ar prie fasado.',
  sections: [
    { heading: 'Viena šachta ar kelios?', text: 'Jei remontuojamos kelios šachtos, išvardykite jas atskirai. Nuotraukose pažymėkite matomus pažeidimus ir nurodykite apytikslius matmenis, jei juos turite.' },
  ],
  request: 'Parašykite adresą, pastato aukštį ir kaip galima patekti prie šachtų. Pridėkite turimas nuotraukas.',
};

const chimneyInspection: ServicePage = {
  slug: 'dumtraukiu-ir-pramoniniu-vamzdziu-apziura',
  name: 'Dūmtraukių ir pramoninių vamzdžių apžiūra',
  summary: 'Apžiūrime dūmtraukius, pramoninius vamzdžius ir šalia esančias konstrukcijas aukštyje.',
  description: 'Dūmtraukių ir pramoninių vamzdžių apžiūra aukštyje Vilniuje. Ką nurodyti apie objekto konstrukciją ir apžiūros tikslą.',
  introduction: 'Apžiūra gali būti reikalinga dėl matomo pažeidimo arba prieš planuojant remontą. Užklausoje pažymėkite, ar reikia apžiūrėti visą konstrukciją, konkrečią vamzdžio atkarpą ar dūmtraukio viršų.',
  sections: [
    { heading: 'Ką norite išsiaiškinti?', text: 'Nurodykite, kas sukėlė įtarimų ir kur tai pastebėta. Pravartu pridėti senesnę ir naujesnę tos pačios vietos nuotrauką, jei jas turite.' },
  ],
  request: 'Atsiųskite objekto adresą, aukštį, vamzdžio arba dūmtraukio medžiagą, jei ją žinote, ir vietos nuotrauką.',
  photos: ['industrial-height'],
};

const chimneyRepair: ServicePage = {
  slug: 'dumtraukiu-virsutiniu-daliu-remontas',
  name: 'Dūmtraukių ir jų viršutinių dalių remontas',
  summary: 'Remontuojame dūmtraukius ir virš stogo esančias jų dalis.',
  description: 'Dūmtraukių viršutinių dalių remontas Vilniuje. Ką nurodyti apie pažeistą mūrą, dūmtraukio aukštį ir stogo dangą.',
  introduction: 'Jei virš stogo esančioje dalyje matyti aptrupėjęs mūras ar pažeistas dūmtraukio viršus, nurodykite, kurioje pusėje tai pastebėjote. Remonto apimtį tiksliname pagal esamą būklę.',
  sections: [
    { heading: 'Pažeistos vietos matmenys', text: 'Svarbus ne vien dūmtraukių skaičius. Pažymėkite, kokia kiekvieno dūmtraukio dalis pažeista ir kaip aukštai ji iškilusi virš stogo.' },
  ],
  request: 'Nurodykite adresą, stogo dangą ir pridėkite turimas dūmtraukio nuotraukas. Jei matmenų nežinote, dėl jų ant stogo lipti nereikia.',
};

const heightMounting: ServicePage = {
  slug: 'konstrukciju-ir-iskabu-montavimas',
  name: 'Konstrukcijų ir iškabų montavimas aukštyje',
  summary: 'Montuojame ir išmontuojame konstrukcijas, iškabas bei reklaminius stendus.',
  description: 'Konstrukcijų, iškabų ir reklaminių stendų montavimas bei išmontavimas Vilniuje. Ką nurodyti apie elementą ir tvirtinimo vietą.',
  introduction: 'Naujos iškabos montavimui ir senos konstrukcijos nuėmimui reikia skirtingos informacijos. Vienu atveju svarbūs naujo elemento matmenys, kitu – tai, kaip jis dabar pritvirtintas.',
  sections: [
    { heading: 'Elementas ir tvirtinimo pagrindas', text: 'Jei žinote, nurodykite svorį, matmenis ir pagrindo medžiagą. Pridėkite fasado nuotrauką su pažymėta vieta, kurioje elementas bus tvirtinamas arba nuimamas.' },
  ],
  request: 'Parašykite adresą, montavimo aukštį, elementų skaičių ir ar reikalingas montavimas, išmontavimas, ar abu darbai.',
};

const antennas: ServicePage = {
  slug: 'antenu-montavimas',
  name: 'Antenų montavimas ir išmontavimas',
  summary: 'Montuojame ir nuimame antenas ant stogų bei konstrukcijų.',
  description: 'Antenų montavimas ir išmontavimas aukštyje Vilniuje. Kokius duomenis pateikti apie anteną, tvirtinimą ir vietą ant pastato.',
  introduction: 'Užklausoje nurodykite, ar montuojama nauja antena, keičiama esama, ar ją reikia nuimti. Tvirtinimo vietą padeda įvertinti bendras stogo ar konstrukcijos vaizdas.',
  sections: [
    { heading: 'Antena ir esamas tvirtinimas', text: 'Pridėkite antenos modelį arba matmenis, jei juos žinote. Jei seną anteną reikia nuimti, parodykite, kaip ji pritvirtinta ir kur yra kabelis.' },
  ],
  request: 'Parašykite adresą, pastato aukštį, kaip pasiekiama tvirtinimo vieta ir ar anteną bei laikiklį jau turite.',
};

const electrics: ServicePage = {
  slug: 'elektros-montavimo-darbai-aukstyje',
  name: 'Elektros montavimo darbai aukštyje',
  summary: 'Atliekame elektros montavimo darbus sunkiai pasiekiamose vietose.',
  description: 'Elektros montavimo darbai aukštyje Vilniuje. Kokią informaciją pateikti apie montuojamą įrangą, kabelio trasą ir prieigą.',
  introduction: 'Aprašykite, kokią įrangą reikia sumontuoti ir kur ji bus įrengta. Jei darbai susiję su kabeliu, nurodykite planuojamos trasos pradžią ir pabaigą.',
  sections: [
    { heading: 'Kas jau paruošta objekte?', text: 'Svarbu žinoti, ar yra numatyta prijungimo vieta, ar įranga jau pristatyta ir kokiame aukštyje teks dirbti. Jei turite schemą, pridėkite ją kartu su darbo vietos vaizdu.' },
  ],
  request: 'Nurodykite adresą, įrangą, montavimo aukštį ir darbų apimtį. Turimas nuotraukas ar schemą galite atsiųsti el. paštu.',
};

const birds: ServicePage = {
  slug: 'apsaugos-nuo-pauksciu-montavimas',
  name: 'Apsaugos nuo paukščių montavimas',
  summary: 'Įrengiame apsaugos nuo paukščių sistemas ant pastato.',
  description: 'Apsaugos nuo paukščių montavimas Vilniuje. Kaip apibūdinti saugomą karnizą, nišą ar kitą pastato vietą.',
  introduction: 'Pažymėkite vietas, kuriose tupia ar įsitaiso paukščiai: ant karnizo, palangės, nišoje ar prie konstrukcijų. Nuo vietos formos ir ploto priklauso, kokį sprendimą galima įrengti.',
  sections: [
    { heading: 'Saugomos vietos ilgis arba plotas', text: 'Ilgą karnizą patogu apibūdinti jo ilgiu, o nišą – angos aukščiu ir pločiu. Nurodykite, ar ten jau yra apsaugos priemonių ir ar jas reikia pakeisti.' },
  ],
  request: 'Parašykite adresą, apytikslius matmenis ir pridėkite pastato bei konkrečios vietos nuotraukas iš saugiai pasiekiamo taško.',
};

export const serviceGroups: { name: string; pages: ServicePage[] }[] = [
  { name: 'Stogai ir apsauga žiemą', pages: [roofRepair, roofCleaning, roofSnow, snowGuards, roofHeating] },
  { name: 'Lietaus nuvedimo sistemos', pages: [gutterCleaning, gutterRepair] },
  { name: 'Fasadai, stiklas ir konstrukcijos', pages: [windowCleaning, facadeWashing, industrialCleaning, facadeRepair, ventRepair] },
  { name: 'Dūmtraukiai ir pramoniniai vamzdžiai', pages: [chimneyInspection, chimneyRepair] },
  { name: 'Montavimas aukštyje', pages: [heightMounting, antennas, electrics, holidayLights, birds] },
];

export const servicePages = serviceGroups.flatMap((group) => group.pages);

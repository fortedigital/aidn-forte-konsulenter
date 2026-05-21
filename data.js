// ─── Pool of consultants ───────────────────────────────────────────────────
// Each consultant entry:
//   id, flowcaseId, name, role {no, en}, skills[], years, defaultRate, photo
//   bio {no, en}, education {no, en}
//
// Status, dates, team and "talking" flag are per-offer config in DEFAULT_CONFIG.
window.CONSULTANT_POOL = [

  // ─── Active at Aidn ───────────────────────────────────────────────────────
  {
    id: "danijel",
    flowcaseId: "638daf583eacb50ff2ab342f",
    name: "Danijel Simeunovic",
    role: { no: "Teknisk arkitekt", en: "Technical Architect" },
    skills: [".NET", "C#", "OpenID Connect", "OAuth 2.0", "Kubernetes"],
    years: 23,
    defaultRate: 1650,
    photo: "assets/photos/danijel.jpg",
    education: {
      no: "JC Vocational school, Electrical Installation (1991)",
      en: "JC Vocational school, Electrical Installation (1991)",
    },
    bio: {
      no: "Teknisk arkitekt med 20+ års erfaring fra programvareutvikling. Spisskompetanse på identitet og sikkerhet — OpenID Connect, OAuth 2.0, IdentityServer — og moderne skybaserte plattformer på Kubernetes. Kombinerer teknisk dybde med strategisk overblikk.",
      en: "Technical architect with 20+ years of software development experience. Specialist in identity and security — OpenID Connect, OAuth 2.0, IdentityServer — and modern cloud-native platforms on Kubernetes. Combines deep technical skill with strategic perspective.",
    },
  },
  {
    id: "fredrik",
    flowcaseId: "5d6929fd04da5b0e77ddda72",
    name: "Fredrik Kalseth",
    role: { no: "Sjefsarkitekt", en: "Chief Architect" },
    skills: ["C#", ".NET", "IdentityServer4", "OAuth 2.0", "FHIR"],
    years: 21,
    defaultRate: 1650,
    photo: "assets/photos/fredrik.jpg",
    education: {
      no: "B.Sc. informatikk, University of Sheffield (2005)",
      en: "B.Sc. Computer Science, University of Sheffield (2005)",
    },
    bio: {
      no: "Sjefsarkitekt hos Forte Digital med over 20 års erfaring i programvareutvikling. Leder Forte Architecture Academy og er Fortes fremste ressurs på identitet og integrasjon — IdentityServer4, OAuth 2.0 og FHIR. Bred erfaring fra Capgemini og Creuna, nå med fokus på løsningsarkitektur i Azure og API-design for offentlig og helsefaglig sektor.",
      en: "Chief Architect at Forte Digital with over 20 years of software development experience. Leads Forte Architecture Academy and is Forte's top resource on identity and integration — IdentityServer4, OAuth 2.0 and FHIR. Wide experience from Capgemini and Creuna, now focused on solution architecture in Azure and API design for public sector and healthcare.",
    },
  },
  {
    id: "frode",
    flowcaseId: "621f4725e14af3111d37fad4",
    name: "Frode Selnes Haugarne",
    role: { no: "Senior backend-utvikler", en: "Senior Backend Developer" },
    skills: ["C#", ".NET", "Azure", "SQL", "Terraform"],
    years: 13,
    defaultRate: 1400,
    photo: "assets/photos/frode.jpg",
    education: {
      no: "B.Sc. automatisering/kybernetikk, HiOA (2013)",
      en: "B.Sc. Automation & Cybernetics, HiOA (2013)",
    },
    bio: {
      no: "Senior backend-utvikler med bakgrunn fra industrielle systemer og skytjenester. Kom til Forte fra Fortum Oslo Varme, der han i seks år driftet og videreutviklet SCADA-systemet for Oslos fjernvarme. Sterk i .NET/C#, Azure (Functions, Service Bus, Cosmos DB) og Terraform — med en uvanlig kombinasjon av driftsansvar og utviklerkompetanse.",
      en: "Senior backend developer with a background spanning industrial systems and cloud services. Joined Forte from Fortum Oslo Varme, where he spent six years operating and developing the SCADA system for Oslo's district heating network. Strong in .NET/C#, Azure (Functions, Service Bus, Cosmos DB) and Terraform — with an unusual combination of operational ownership and development skills.",
    },
  },

  // ─── Available – tilgjengelig nå ──────────────────────────────────────────
  {
    id: "sindre",
    flowcaseId: "61efeb3f8ed286114dd23f5c",
    name: "Sindre Løvseth Larsen",
    role: { no: "Senior digital designer", en: "Senior Digital Designer" },
    skills: ["Figma", "Design System", "UX/UI Design", "Brukertesting", "Interaksjonsdesign"],
    years: 20,
    defaultRate: 1400,
    photo: "assets/photos/sindre.jpg",
    education: {
      no: "B.A. visuell kommunikasjon, University for the Creative Arts (2001)",
      en: "B.A. Visual Communication, University for the Creative Arts (2001)",
    },
    bio: {
      no: "Senior digital designer med 20+ år i krysningspunktet mellom grafisk design, merkevare og digital produktutvikling. Kom til Forte i 2022 etter 13 år hos Signex og perioder hos Uniform og Iteo. Sterk på design systems, visuell identitet og Figma — og leverer trygt fra konsept til klar komponent.",
      en: "Senior digital designer with 20+ years at the intersection of graphic design, brand and digital product development. Joined Forte in 2022 after 13 years at Signex and stints at Uniform and Iteo. Strong in design systems, visual identity and Figma — and comfortable delivering from concept to production-ready component.",
    },
  },
  {
    id: "aslak",
    flowcaseId: "683f00dedf8e42003ba98b22",
    name: "Aslak Ege",
    role: { no: "Teknologidirektør", en: "Technology Director" },
    skills: ["Virksomhetsarkitektur", "IT-governance", "Endringsledelse", "Organisasjonsdesign", "NIS2/DORA"],
    years: 22,
    defaultRate: 1737,
    photo: "assets/photos/aslak.jpg",
    education: {
      no: "Sivilingeniør datateknikk, NTNU (2004) · Master of Management, BI (2009)",
      en: "M.Sc. Computer Engineering, NTNU (2004) · Master of Management, BI (2009)",
    },
    bio: {
      no: "Teknologidirektør hos Forte og tidligere konsernleder i Capra Group. Over 20 år med strategisk rådgivning, organisasjonsdesign og teknologiledelse — blant annet som daglig leder og principal consultant i Capra Consulting og seniorkonsulent hos Det Norske Veritas. Sterk på IT-governance, virksomhetsarkitektur og endringsledelse.",
      en: "Technology Director at Forte and former Group CEO of Capra Group. 20+ years of strategic advisory, organisational design and technology leadership — including as Managing Director and Principal Consultant at Capra Consulting and Senior Consultant at Det Norske Veritas. Strong in IT governance, enterprise architecture and change management.",
    },
  },
  {
    id: "pal",
    flowcaseId: "5fd2042fc964df10fe7df15b",
    name: "Pål Werdenhoff",
    role: { no: "Leveransedirektør", en: "Head of Delivery" },
    skills: ["Leveranseledelse", "Strategisk rådgivning", "Agile/Scrum", "Endringsledelse", "Produktledelse"],
    years: 21,
    defaultRate: 1737,
    photo: "assets/photos/pal.jpg",
    education: {
      no: "MSc Distributed Systems, Heriot-Watt University (2005) · B.Sc. informatikk, HiO (2004)",
      en: "MSc Distributed Systems, Heriot-Watt University (2005) · B.Sc. Computer Science, HiO (2004)",
    },
    bio: {
      no: "Leveransedirektør i Forte Digital med 20 år fra digitale leveranser og kunderelasjoner. Tidligere daglig leder for Futurice Norge og Client Director i Making Waves Sverige. Sterk på leveranseledelse, smidig metodikk og det å bygge team som leverer over tid.",
      en: "Head of Delivery at Forte Digital with 20 years of experience in digital delivery and client relationships. Former Managing Director of Futurice Norway and Client Director at Making Waves Sweden. Strong in delivery management, agile methodology and building high-performing teams.",
    },
  },
  {
    id: "heidi",
    flowcaseId: "5dcaae27d3915c0ea03a3539",
    name: "Heidi Wilhelmsen",
    role: { no: "Design Director (80%)", en: "Design Director (80%)" },
    skills: ["Merkevarestrategi", "Merkevareidentitet", "Brand strategi", "UX", "Figma"],
    years: 22,
    defaultRate: 1737,
    photo: "assets/photos/heidi.png",
    education: {
      no: "Art Director, Westerdals School of Communication (2003)",
      en: "Art Director, Westerdals School of Communication (2003)",
    },
    bio: {
      no: "Design Director og leder for digital design og merkevareopplevelse i Forte. Bakgrunn fra Anti (strategisk rådgiver og partner), Bleed Designstudio og Scandinavian Design Group. Over 20 år med merkevare- og designstrategi for norske og internasjonale selskaper. Tilgjengelig 80%.",
      en: "Design Director and Head of Digital Design & Brand Experience at Forte. Background from Anti (Strategic Director and Partner), Bleed Designstudio and Scandinavian Design Group. 20+ years in brand and design strategy for Norwegian and international companies. Available 80%.",
    },
  },

  // ─── Available – fra 1. juni 2026 ─────────────────────────────────────────
  {
    id: "damian",
    flowcaseId: "5d692b4be32c480e8dce0992",
    name: "Damian Hamre",
    role: { no: "Senior full-stack utvikler", en: "Senior Full-Stack Developer" },
    skills: ["C#", ".NET", "TypeScript", "React", "Full-stack"],
    years: 9,
    defaultRate: 1400,
    photo: "assets/photos/damian.jpg",
    education: {
      no: "B.Sc. dataingeniør, NTNU (2017)",
      en: "B.Sc. Computer Engineering, NTNU (2017)",
    },
    bio: {
      no: "Senior full-stack utvikler med solid bakgrunn i .NET/C# backend og React/TypeScript frontend. Kom til Forte fra Telenor, der han i tre år jobbet på CDN-teamet, og før det Viaplay Group. Trives i produktnære team og er vant til å eie både frontend og backend.",
      en: "Senior full-stack developer with strong .NET/C# backend and React/TypeScript frontend skills. Joined Forte from Telenor's CDN team (3 years), previously at Viaplay Group. Comfortable in product-focused teams and used to owning both front and backend.",
    },
  },
  {
    id: "henrik-farstad",
    flowcaseId: "6385d856fb271e0fde94ccaf",
    name: "Henrik Farstad",
    role: { no: "Senior frontend-utvikler", en: "Senior Frontend Developer" },
    skills: ["TypeScript", "React", "Next.js", "WCAG", "GraphQL"],
    years: 13,
    defaultRate: 1400,
    photo: "assets/photos/henrik-farstad.jpg",
    education: {
      no: "M.Sc. datateknikk, NTNU (2013)",
      en: "M.Sc. Computer Engineering, NTNU (2013)",
    },
    bio: {
      no: "Senior frontend-utvikler med 13 år og sterk kompetanse i React, TypeScript og universell utforming (WCAG). Hos Forte siden 2019, med bakgrunn fra Sopra Steria. Trives med komplekse grensesnitt der ytelse og tilgjengelighet begge teller — og har full-stack-erfaring via Node.js og C#.",
      en: "Senior frontend developer with 13 years of experience, strong in React, TypeScript and accessibility (WCAG). At Forte since 2019, previously at Sopra Steria. Thrives on complex interfaces where performance and accessibility both matter — and brings full-stack experience via Node.js and C#.",
    },
  },
  {
    id: "anders",
    flowcaseId: "68ada0617994cd01fad10ad0",
    name: "Anders Matre",
    role: { no: "Lead UX-designer", en: "Lead UX Designer" },
    skills: ["UX Design", "Tjenestedesign", "Fasilitering", "Brukertesting", "Atferdsdesign"],
    years: 14,
    defaultRate: 1737,
    photo: "assets/photos/anders.jpg",
    education: {
      no: "Master i Menneske-Maskin Interaksjon (informatikk), NTNU (2012)",
      en: "M.Sc. Human-Computer Interaction (Computer Science), NTNU (2012)",
    },
    bio: {
      no: "Lead UX-designer med 14 år i tjenestedesign, atferdsdesign og brukerinnsikt. Sju år som fagleder i Mindshift, med oppdrag for SpareBank 1, Statped og Statens Pensjonskasse. Forte siden 2025. Kjent for å kombinere metodisk innsiktsarbeid med praktisk fasilitering som faktisk beveger prosjekter fremover.",
      en: "Lead UX designer with 14 years in service design, behavioural design and user research. Seven years as discipline lead at Mindshift, with engagements at SpareBank 1, Statped and the Norwegian Public Service Pension Fund. At Forte since 2025. Known for combining rigorous research with practical facilitation that moves projects forward.",
    },
  },

  // ─── Available – fra 1. august 2026 ───────────────────────────────────────
  {
    id: "lise",
    flowcaseId: "6909d3aaafa2936e2c192de7",
    name: "Lise Grønland",
    role: { no: "Graduate — frontend & UX", en: "Graduate — Frontend & UX" },
    skills: ["React", "TypeScript", "Python", "Figma", "UX Design"],
    years: 2,
    defaultRate: 1000,
    photo: "assets/photos/lise.jpeg",
    education: {
      no: "M.Sc. Informatikk (programmering og systemarkitektur), UiO (2026) · B.Sc. Informatikk (design og interaksjon), UiO (2024)",
      en: "M.Sc. Computer Science (programming & system architecture), UiO (2026) · B.Sc. Computer Science (design & interaction), UiO (2024)",
    },
    bio: {
      no: "Graduate med dobbel bakgrunn i informatikk og samfunnsøkonomi fra Universitetet i Oslo. Masteroppgave om energigjeld i kode. Bred teknisk profil: React, TypeScript og Python kombinert med sterk UX-sans og Figma. Internship hos Telenor (full-stack og UX) og Storebrand (innsiktsarbeid og brukertesting). Kobler teknisk utvikling med brukerforståelse.",
      en: "Graduate with dual degrees in computer science and economics from the University of Oslo. Master's thesis on energy debt in code. Broad technical profile: React, TypeScript and Python combined with strong UX skills and Figma. Internships at Telenor (full-stack and UX) and Storebrand (user research and testing). Bridges technical development with user understanding.",
    },
  },
  {
    id: "silje",
    flowcaseId: "68e4f4bc32fb21abce60653b",
    name: "Silje Larsen",
    role: { no: "Senior produktleder", en: "Senior Product Manager" },
    skills: ["Produktledelse", "Produktstrategi", "Continuous Discovery", "Stakeholder management", "Lean"],
    years: 11,
    defaultRate: 1400,
    photo: "assets/photos/silje.jpg",
    education: {
      no: "Bachelor økonomi og administrasjon, BI Oslo (2015)",
      en: "B.Sc. Business Administration, BI Oslo (2015)",
    },
    bio: {
      no: "Senior produktleder med internasjonal bakgrunn fra humanitær teknologi og fintech. Kom til Forte fra IFRC/Røde Kors, der hun ledet ferdigstillingen av et globalt helseinformasjonssystem for nødhjelpsoperasjoner. Tidligere produktansvarlig i Tietoevry (digitale låneløsninger, 20+ banker). Sterk i Continuous Discovery, produktstrategi og å koble brukerbehov til teknisk retning.",
      en: "Senior product manager with an international background in humanitarian technology and fintech. Joined Forte from IFRC/Red Cross, where she led the completion of a global health information system for emergency response units. Previously Product Manager at Tietoevry (digital lending, 20+ banks). Strong in Continuous Discovery, product strategy and bridging user needs to technical direction.",
    },
  },
];

// ─── Bilingual copy ────────────────────────────────────────────────────────
window.COPY = {
  no: {
    badgeFor: "Laget for",
    headline: "Folkene vi har klare for {client}.",
    updated: "Sist oppdatert",
    section1: "Hos dere nå",
    section1Sub: "Konsulenter som allerede er i team hos {client}.",
    section2: "Klare for nytt oppdrag",
    section2Sub: "Tilgjengelige nå eller med kjent startdato. Andre kunder ser den samme listen — si fra om noen treffer, så reserverer vi.",
    cta: "Be om intro",
    ctaShort: "Intro",
    available: "Tilgjengelig",
    availableNow: "Tilgjengelig nå",
    from: "Fra",
    talking: "I samtale med andre",
    years: "års erfaring",
    rate: "kr/time",
    skills: "Kompetanse",
    education: "Utdanning",
    contact: "Kontaktperson hos Forte",
    bookCta: "Book en 20-min intro",
    bookCopy: "Vi setter opp et kort kall med konsulenten og din team-lead. Velg en eller flere — vi finner tid.",
    selected: "valgt",
    sendRequest: "Send forespørsel",
    cancel: "Avbryt",
    requestSent: "Forespørsel sendt. Vi melder fra om tider innen 24 timer.",
  },
  en: {
    badgeFor: "Made for",
    headline: "The people we have ready for {client}.",
    updated: "Last updated",
    section1: "With you now",
    section1Sub: "Consultants already embedded in {client} teams.",
    section2: "Ready for a new engagement",
    section2Sub: "Available now or with a known start date. Other clients see the same list — ping us on anyone that fits and we'll hold them.",
    cta: "Request intro",
    ctaShort: "Intro",
    available: "Available",
    availableNow: "Available now",
    from: "From",
    talking: "In talks with others",
    years: "yrs experience",
    rate: "NOK/hour",
    skills: "Skills",
    education: "Education",
    contact: "Your Forte contact",
    bookCta: "Book a 20-min intro",
    bookCopy: "We set up a short call with the consultant and your team lead. Pick one or more — we'll find a time.",
    selected: "selected",
    sendRequest: "Send request",
    cancel: "Cancel",
    requestSent: "Request sent. We'll come back with times within 24 hours.",
  },
};

// ─── Default page config ───────────────────────────────────────────────────
window.DEFAULT_CONFIG = {
  client: "Aidn",
  contact: {
    name: "Pål Werdenhoff",
    role: { no: "Operations Director, Forte Oslo", en: "Operations Director, Forte Oslo" },
    email: "pal.werdenhoff@fortedigital.com",
    phone: "+47 907 25 404",
  },
  activeIds: ["danijel", "fredrik", "frode"],
  availableIds: ["damian", "henrik-farstad", "lise", "sindre", "aslak", "pal", "heidi", "anders", "silje"],
  rates: {},
  since: {
    danijel: "",
    fredrik: "",
    frode: "",
  },
  team: {
    danijel: { no: "", en: "" },
    fredrik: { no: "", en: "" },
    frode:   { no: "", en: "" },
  },
  availableFrom: {
    damian:          { no: "1. juni 2026",    en: "Jun 1, 2026"  },
    "henrik-farstad": { no: "1. juni 2026",   en: "Jun 1, 2026"  },
    anders:          { no: "1. juni 2026",    en: "Jun 1, 2026"  },
    lise:            { no: "1. september 2026", en: "Sep 1, 2026"  },
    silje:           { no: "1. august 2026",  en: "Aug 1, 2026"  },
  },
  talking: {},
};

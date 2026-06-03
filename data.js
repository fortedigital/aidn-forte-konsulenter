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
    years: 28,
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
    role: { no: "Seniorutvikler", en: "Senior Developer" },
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
    years: 24,
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
  // ─── Available – fra 1. juni 2026 ─────────────────────────────────────────
  {
    id: "damian",
    flowcaseId: "5d692b4be32c480e8dce0992",
    name: "Damian Hamre",
    role: { no: "Senior frontend-utvikler", en: "Senior Frontend Developer" },
    skills: ["React", "TypeScript", "JavaScript", "C#", ".NET"],
    years: 13,
    defaultRate: 1400,
    photo: "assets/photos/damian.jpg",
    education: {
      no: "M.Sc. Sivilingeniør Datateknikk, NTNU (2013) · B.Sc. Ingeniør data, Høgskolen i Østfold (2011)",
      en: "M.Sc. Computer Engineering, NTNU (2013) · B.Sc. Engineering (Computer Science), Østfold University College (2011)",
    },
    bio: {
      no: "Senior frontend-utvikler hos Forte siden 2019. Kom fra Sopra Steria der han i seks år jobbet som Software Engineer — primært med SharePoint-utvikling. Sterk på React, TypeScript og JavaScript, med full-stack-kapasitet via .NET/C#.",
      en: "Senior frontend developer at Forte since 2019. Joined from Sopra Steria where he spent six years as a Software Engineer, primarily on SharePoint development. Strong in React, TypeScript and JavaScript, with full-stack capability via .NET/C#.",
    },
  },
  {
    id: "henrik-farstad",
    flowcaseId: "6385d856fb271e0fde94ccaf",
    name: "Henrik Farstad",
    role: { no: "Senior frontend-utvikler", en: "Senior Frontend Developer" },
    skills: ["TypeScript", "React", "Next.js", "WCAG", "GraphQL"],
    years: 9,
    defaultRate: 1400,
    photo: "assets/photos/henrik-farstad.jpg",
    education: {
      no: "B.Sc. Dataingeniør, NTNU (2017)",
      en: "B.Sc. Computer Engineering, NTNU (2017)",
    },
    bio: {
      no: "Senior frontend-utvikler hos Forte siden mars 2023. Kom fra Telenor der han tre år jobbet som full-stack-utvikler på CDN-teamet. Før det tre år hos Viaplay Group som ansvarlig utvikler på intern SalesBox-applikasjon. Sterk i React, TypeScript og Next.js, med fokus på tilgjengelighet (WCAG).",
      en: "Senior frontend developer at Forte since March 2023. Joined from Telenor where he spent three years as a full-stack developer on the CDN team. Before that, three years at Viaplay Group as lead developer on their in-house SalesBox application. Strong in React, TypeScript and Next.js, with a focus on accessibility (WCAG).",
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

  // ─── Andre tilgjengelige konsulenter ──────────────────────────────────────
  {
    id: "nadia-tokerud",
    flowcaseId: "67e5354eadb155004989ee69",
    name: "Nadia Tokerud",
    role: { no: "Senior UX-designer", en: "Senior UX Designer" },
    skills: ["UX Design", "UI Design", "Figma", "Brukertesting", "WCAG"],
    years: 17,
    defaultRate: 1400,
    photo: "assets/photos/nadia.jpg",
    education: {
      no: "Interaksjonsdesign og brukervennlighet, Høyskolen i Volda (2019) · BA(hons) Graphic Design, Arts University Bournemouth (2008)",
      en: "Interaction Design & Usability, Høyskolen i Volda (2019) · BA(hons) Graphic Design, Arts University Bournemouth (2008)",
    },
    bio: {
      no: "Senior UX-designer hos Forte siden mai 2025. Kom fra Buypass der hun tre år ledet UX-arbeidet på tvers av alle produkter og tjenester. Før det tre år hos Norsk Rikstoto som interaksjonsdesigner. Sterk på innsiktsarbeid, kundereiser og universell utforming (WCAG).",
      en: "Senior UX designer at Forte since May 2025. Joined from Buypass where she spent three years leading UX across all products and services. Previously three years at Norsk Rikstoto as interaction designer. Strong in user research, customer journeys and accessibility (WCAG).",
    },
  },
  {
    id: "goril",
    flowcaseId: "60e1e470e338b50fbf560e61",
    name: "Gøril Johnstad Hansen",
    role: { no: "Senior digital designer", en: "Senior Digital Designer" },
    skills: ["Figma", "Branding", "UI Design", "Visuell identitet", "Design System"],
    years: 22,
    defaultRate: 1400,
    photo: "assets/photos/goril.jpeg",
    education: {
      no: "B.Sc. Graphic Design, Swinburne National School of Design (2002) · 2-årig fagskole Design, Westerdals (2001)",
      en: "B.Sc. Graphic Design, Swinburne National School of Design (2002) · 2-year Design programme, Westerdals (2001)",
    },
    bio: {
      no: "Senior digital designer hos Forte siden 2021. Over 20 år i designbransjen — fra Itera Gazette via Havnevik og Gerilja Hansen. Bred erfaring med visuell identitet, UI/UX og art direction for kunder som NHO, Nationaltheatret og Røde Kors.",
      en: "Senior digital designer at Forte since 2021. Over 20 years in the design industry — from Itera Gazette via Havnevik and Gerilja Hansen. Deep experience in visual identity, UI/UX and art direction for clients including NHO, Nationaltheatret and the Red Cross.",
    },
  },
  {
    id: "anne-gundersen",
    flowcaseId: "605db4156c425a0e27b1f106",
    name: "Anne Gundersen",
    role: { no: "Design Director", en: "Design Director" },
    skills: ["Business Design", "Strategisk rådgivning", "Design Thinking", "UX", "Forretningsutvikling"],
    years: 19,
    defaultRate: 1737,
    photo: "assets/photos/anne.jpg",
    education: {
      no: "B.Hons Design, Unitec Institute of Technology, Auckland (2005)",
      en: "B.Hons Design, Unitec Institute of Technology, Auckland (2005)",
    },
    bio: {
      no: "Design Director hos Forte siden 2021. Kom fra SpareBank 1 Utvikling der hun fem år jobbet som UX-strateg og ledet innovasjonsprosesser og digital strategi på tvers av SpareBank 1-bankene. Bred erfaring fra Noa Ignite (tidl. Making Waves) og strategisk rådgivning for offentlig og privat sektor.",
      en: "Design Director at Forte since 2021. Joined from SpareBank 1 Utvikling where she spent five years as UX strategist leading innovation processes and digital strategy across the SpareBank 1 banks. Extensive experience from Noa Ignite (fmr. Making Waves) and strategic advisory for public and private sector.",
    },
  },
  {
    id: "gaute-rossnes",
    flowcaseId: "5ee70a059ed42d10f091b5b5",
    name: "Gaute Rossnes",
    role: { no: "Senior produktleder", en: "Senior Product Manager" },
    skills: ["Produktledelse", "Scrum Master", "OKR", "Agil metodikk", "Azure DevOps"],
    years: 22,
    defaultRate: 1400,
    photo: "assets/photos/gaute.jpg",
    education: {
      no: "European Masters in Management (Siviløkonom), ESCP Europe Paris–Oxford–Berlin (1999)",
      en: "European Masters in Management, ESCP Europe Paris–Oxford–Berlin (1999)",
    },
    bio: {
      no: "Senior produktleder hos Forte siden 2020. Har jobbet som leveranseleder og Scrum Master for OBOS og Norgesgruppen/ASKO. Bred bakgrunn fra Bekk Consulting og som prosjektleder i Nordic Choice Hotels. Sterk i agil metodikk, OKR og å lede tverrfaglige team fra innsikt til levering.",
      en: "Senior product manager at Forte since 2020. Has worked as delivery lead and Scrum Master for OBOS and Norgesgruppen/ASKO. Wide background from Bekk Consulting and as project manager at Nordic Choice Hotels. Strong in agile methods, OKR and leading cross-functional teams from insight to delivery.",
    },
  },
  {
    id: "gabriella",
    flowcaseId: "627b7af1d1bcb51039c9e6c4",
    name: "Gabriella Horne",
    role: { no: "Tjenestedesigner", en: "Service Designer" },
    skills: ["Tjenestedesign", "UX Design", "Figma", "Brukertesting", "Innsiktsarbeid"],
    years: 4,
    defaultRate: 1400,
    photo: "assets/photos/gabriella.jpeg",
    education: {
      no: "B.Sc. Tjenestedesign, Høyskolen Kristiania/Westerdals (2022)",
      en: "B.Sc. Service Design, Høyskolen Kristiania/Westerdals (2022)",
    },
    bio: {
      no: "Tjenestedesigner hos Forte siden 2022. Metodisk bakgrunn i brukerorienter utvikling og tjenesteinnovasjon. Sterk på kundereisekartlegging, service blueprints og innsiktsarbeid — og jobber godt i tverrfaglige team.",
      en: "Service designer at Forte since 2022. Methodical background in user-centred development and service innovation. Strong in customer journey mapping, service blueprints and user research — and works well in cross-functional teams.",
    },
  },
  {
    id: "ola",
    flowcaseId: "673486931cd36f0041748295",
    name: "Ola Skarphol",
    role: { no: "Fullstack-utvikler", en: "Full-Stack Developer" },
    skills: ["React", "TypeScript", "Next.js", "Python", "JavaScript"],
    years: 5,
    defaultRate: 1000,
    photo: "assets/photos/ola.jpg",
    education: {
      no: "B.Sc. Informatikk, Universitetet i Oslo (2020)",
      en: "B.Sc. Computer Science, University of Oslo (2020)",
    },
    bio: {
      no: "Fullstack-utvikler hos Forte siden januar 2025. Kom fra Funcom der han fire år jobbet med utviklingstesting og QA. B.Sc. Informatikk fra UiO. Sterk i React, TypeScript og Next.js, med Python-bakgrunn fra studiene.",
      en: "Full-stack developer at Forte since January 2025. Joined from Funcom where he spent four years in dev testing and QA. B.Sc. Computer Science from UiO. Strong in React, TypeScript and Next.js, with Python background from studies.",
    },
  },
  {
    id: "sigurd",
    flowcaseId: "6909d02927d38a1eb4f41345",
    name: "Sigurd Heggemoen",
    role: { no: "Graduate — AI & Data Science", en: "Graduate — AI & Data Science" },
    skills: ["Python", "Machine Learning", "LLMs", "React", "TypeScript"],
    years: 2,
    defaultRate: 1000,
    photo: "assets/photos/sigurd.jpg",
    education: {
      no: "M.Sc. Sivilingeniør Data Science (maskinlæring), UiS (2026) · B.Sc. Dataingeniør, UiS (2024)",
      en: "M.Sc. Data Science (machine learning), UiS (2026) · B.Sc. Computer Engineering, UiS (2024)",
    },
    bio: {
      no: "Nyutdannet sivilingeniør i Data Science fra UiS med spesialisering i maskinlæring. Masteroppgave om gruppebasert beslutningstaking i agentbaserte språkmodeller for kliniske oppgaver. Bred teknisk profil: Python, LLMs og full-stack-kapasitet via React og TypeScript. Sommerjobber som fullstack-utvikler hos Gurusoft.",
      en: "Newly graduated M.Sc. in Data Science from UiS, specialising in machine learning. Master's thesis on group-based decision making in agent-based language models for clinical tasks. Broad technical profile: Python, LLMs and full-stack capability via React and TypeScript. Summer roles as full-stack developer at Gurusoft.",
    },
  },

  // ─── Available – fra 1. august 2026 ───────────────────────────────────────
  {
    id: "guro",
    flowcaseId: "68ada1c77e4f98671bdd0965",
    name: "Guro Vassend",
    role: { no: "Data Scientist", en: "Data Scientist" },
    skills: ["GA4", "Google Tag Manager", "BigQuery", "Google Cloud", "Power BI"],
    years: 7,
    defaultRate: 1400,
    photo: "assets/photos/guro.png",
    education: {
      no: "Siv.ing Maskin, prosess- og produktutvikling, NMBU (2018)",
      en: "M.Sc. Mechanical Engineering (process & product development), NMBU (2018)",
    },
    bio: {
      no: "Director of Data & AI hos Forte med fem år som Data Scientist i Knowit Experience. Bred kompetanse i digital analyse og datadrevet optimalisering: GA4, GTM, BigQuery og Google Cloud. Har ledet implementeringer og workshops for kunder i netthandel og industri, med særlig styrke på konverteringsoptimalisering, KPI-rammeverk og innsiktsarbeid.",
      en: "Director of Data & AI at Forte with five years as a Data Scientist at Knowit Experience. Broad expertise in digital analytics and data-driven optimisation: GA4, GTM, BigQuery and Google Cloud. Has led implementations and workshops for clients in e-commerce and industry, with particular strength in conversion optimisation, KPI frameworks and user insights.",
    },
  },
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
      no: "M.Sc. Informatikk (programmering og systemarkitektur), UiO (2026) · B.Sc. Informatikk (design, bruk og interaksjon), UiO (2024)",
      en: "M.Sc. Computer Science (programming & system architecture), UiO (2026) · B.Sc. Computer Science (design, use & interaction), UiO (2024)",
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
      no: "Senior produktleder med internasjonal bakgrunn fra humanitær teknologi og fintech. Kom til Forte fra IFRC/Røde Kors, der hun ledet ferdigstillingen av et globalt helseinformasjonssystem for nødhjelpsoperasjoner. Tidligere produktansvarlig i Tietoevry (digitale låneløsninger, over 20 kunder). Sterk i Continuous Discovery, produktstrategi og å koble brukerbehov til teknisk retning.",
      en: "Senior product manager with an international background in humanitarian technology and fintech. Joined Forte from IFRC/Red Cross, where she led the completion of a global health information system for emergency response units. Previously Product Manager at Tietoevry (digital lending, 20+ clients). Strong in Continuous Discovery, product strategy and bridging user needs to technical direction.",
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
  availableIds: ["henrik-farstad", "lise", null, "guro", "sindre", "silje", "nadia-tokerud", "goril", "anne-gundersen", "gaute-rossnes", "gabriella", "ola", "sigurd"],
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
    "henrik-farstad": { no: "1. juni 2026",   en: "Jun 1, 2026"  },
    guro:            { no: "1. august 2026",    en: "Aug 1, 2026"  },
    lise:            { no: "1. september 2026", en: "Sep 1, 2026"  },
    silje:           { no: "1. august 2026",  en: "Aug 1, 2026"  },
    sigurd:          { no: "1. august 2026",  en: "Aug 1, 2026"  },
  },
  talking: {},
};

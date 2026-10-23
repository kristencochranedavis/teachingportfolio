/**
 * Every interface string, in English and French.
 *
 * French follows Canadian (OQLF) typography: a non-breaking space (U+00A0) before ":"
 * and inside « », no space before ; ! ?. Written for the site and pending Kristen's
 * check.
 *
 * Content (charts, resources, her philosophy) is not here: it comes from
 * src/content (English) and src/content/fr (French).
 */

export type Lang = "en" | "fr";

const NB = " "; // non-breaking space (OQLF: before ":" and inside « »)

const en = {
  skip: "Skip to content",
  siteTitle: "Kristen Davis, teaching portfolio",
  pageTitle: (what: string) => `${what} | Kristen Davis`,
  notFoundTitle: "Not found",

  // header
  youAreIn: "You are in: ",
  motion: "Motion",
  motionOn: "on",
  motionOff: "off",
  language: "Language / Langue",
  floorPlan: "Floor plan",
  close: "Close",

  // places and scenes
  entrance: "Entrance",
  who: "Who is Kristen",
  philosophyScene: "Philosophy of education",
  roomsScene: "The rooms",
  readingScene: "The Reading Room",
  exitScene: "Exit",
  readingPlace: "Reading Room",
  room: (n: number) => `Room ${n}`,
  roomNamed: (n: number, name: string) => `Room ${n}: ${name}`,
  roomOf: "of 8",
  shortNames: {
    1: "Theories of learning",
    2: "Learning environment",
    3: "Curriculum and research",
    4: "Child development",
    5: "Language learners",
    6: "Special needs",
    7: "Mental health and belonging",
    8: "Law and standards",
  } as Record<number, string>,

  // floor plan
  youAreHere: "You are here",
  visited: "Visited",
  srYouAreHere: " (you are here)",
  srVisited: " (visited)",
  planInMenu: "Floor plan, in the menu",
  planAtEntrance: "Floor plan, at the entrance",
  planAtExit: "Floor plan, at the exit",

  // entrance
  teachingPortfolio: "Teaching portfolio",
  course: "GRED 562, Ontario Education, 2026",

  // section headings (the other language's version is the subtitle)
  hWho: "Who is Kristen?",
  hPhilosophy: "Disciplined progressive",
  hRooms: "The rooms",
  hReading: "The Reading Room",
  hExit: "Thank you for visiting",
  hElements: "The elements",
  hLesson: "Mini-lesson",
  hPartTwo: "Part 2",
  hTicket: "Exit ticket",
  hLibrary: "The theory library",
  hReflections: "Reflections",
  hPortfolio: "Teaching portfolio",

  // Photo descriptions (what is visible; no place or school named)
  photoMuseumAlt: "Kristen in a gallery with pale blue-green walls, looking closely at a gilt-framed winter landscape painting.",
  photoOverlookAlt: "Kristen in a white blouse at a terrace railing, a city and a blue sky behind her.",
  photoSnowAlt: "Kristen in a hood, scarf and sunglasses on a snowy day, bare trees behind her.",

  // Who is Kristen
  bioLede:
    "Kristen Davis is training to teach elementary school in Ottawa. She’s completing a Master of Science in Teaching in Childhood Education at SUNY Potsdam, working toward certification to teach up to Grade 6.",
  bio: [
    {
      runin: "From the seminar room to the classroom.",
      text: "She left a humanities PhD program and started substitute teaching in March 2024. Since then she has taught French Immersion social studies and arts in the primary grades, and covered long-term humanities and social sciences classes in high school.",
    },
    {
      runin: "Two languages.",
      text: "A native French speaker, she also holds a master’s degree in Cultural Studies.",
    },
  ],
  bioProgressive: {
    runin: "A disciplined progressive.",
    before: "Kristen believes children learn best, and take to rigorous teaching most readily, once they feel they belong. She takes the ",
    why: "why",
    middle: " from John Dewey: start from the child’s own experience. She takes the ",
    how: "how",
    after1: " from William Chandler Bagley: teaching is a craft you master on purpose. In her classroom that looks like ",
    sunshine: "Sunshine Emails",
    and: " and ",
    glow: "Glow Notes",
    after2:
      " sent home, real conversations on recess duty, and French corrected consistently and with intention, so it stays with her students.",
    open: "",
    closeQ: "",
  },
  quoteCaption: "Kristen, in her own words",

  // philosophy
  theWhy: "The why",
  theHow: "The how",

  // rooms index
  roomsIntro:
    "Eight rooms, one for each Elements Chart. Each room hangs the chart’s elements as wall labels, then its lesson wall and exit ticket.",
  elementsCount: (n: number) => `${n} elements`,
  firstLabel: "First label",

  // reading room
  readingIntro:
    "The resources that sit behind the charts, R1 to R8: law and policy, strategies, mental health, the jigsaw theory library, reflections, curriculum links, French-language education and certification steps.",
  readHere: "Read here",
  openLibrary: "Open the theory library",
  readReflections: "Read the reflections",
  openOwnPage: (code: string) => `Open ${code} on its own page`,
  week: (n: number) => `Week ${n}`,
  libraryByWeek: "The theory library, week by week",
  fromWeeks: (title: string) => `From ${title}, weeks 1 to 8.`,
  backToReading: "Back to the Reading Room",
  printPage: "Print this page or save as PDF",

  // exit
  exitLede: "Every room stays open. Pick up where you left off.",
  exitPrint: "Each room can be printed or saved as a PDF from its own page.",
  references: "References",
  colophon: "Kristen Davis, teaching portfolio for GRED 562: Ontario Education, SUNY Potsdam.",

  // room page
  source: "Source: ",
  wallLabels: (n: number) => `${n} wall labels`,
  printRoom: "Print this room or save as PDF",
  inThisRoom: "In this room",
  theory: "Theory",
  practice: "Practice",
  wouldSee: "What you’d see in the classroom",
  example: "Example",
  element: (n: number) => `Element ${n}: `,
  hintPin: "Keep scrolling to walk along the wall.",
  hintSwipe: "Swipe or scroll sideways along the wall.",
  subtopic: "Subtopic",
  objective: "Objective",
  curriculum: "Ontario curriculum",
  grade: (g: string) => `Grade ${g}`,
  stage: (n: number) => `Stage ${n}: `,
  stageByStage: (title: string) => `${title}, stage by stage`,
  learned: "things I learned",
  interesting: "things I found interesting",
  wonder: "thing I still wonder about",
  lessonRefs: "References for this lesson",
  ticketRefs: "References for this exit ticket",
  otherRooms: "Other rooms",
  previous: "Previous",
  next: "Next",
  backTo: "Back to",
  onTo: "On to",

  // not found
  notFound: "There’s no room here",
  notFoundLede: "This address doesn’t match a room. Pick one from the floor plan.",

  // fallback
  inEnglish: "",
};

export type UI = typeof en;

const fr: UI = {
  skip: "Passer au contenu",
  siteTitle: "Kristen Davis, portfolio d’enseignement",
  pageTitle: (what: string) => `${what} | Kristen Davis`,
  notFoundTitle: "Page introuvable",

  youAreIn: `Vous êtes ici${NB}: `,
  motion: "Animations",
  motionOn: "oui",
  motionOff: "non",
  language: "Language / Langue",
  floorPlan: "Plan des salles",
  close: "Fermer",

  entrance: "Entrée",
  who: "Qui est Kristen",
  philosophyScene: "Philosophie de l’éducation",
  roomsScene: "Les salles",
  readingScene: "La salle de lecture",
  exitScene: "Sortie",
  readingPlace: "Salle de lecture",
  room: (n: number) => `Salle ${n}`,
  roomNamed: (n: number, name: string) => `Salle ${n}${NB}: ${name}`,
  roomOf: "sur 8",
  shortNames: {
    1: "Théories de l’apprentissage",
    2: "Environnement d’apprentissage",
    3: "Curriculum et recherche",
    4: "Développement de l’enfant",
    5: "Apprentissage des langues",
    6: "Besoins particuliers",
    7: "Santé mentale et appartenance",
    8: "Droit et normes",
  },

  youAreHere: "Vous êtes ici",
  visited: "Déjà visité",
  srYouAreHere: " (vous êtes ici)",
  srVisited: " (déjà visité)",
  planInMenu: "Plan des salles, dans le menu",
  planAtEntrance: "Plan des salles, à l’entrée",
  planAtExit: "Plan des salles, à la sortie",

  teachingPortfolio: "Portfolio d’enseignement",
  course: "GRED 562, Ontario Education, 2026",

  hWho: "Qui est Kristen?",
  hPhilosophy: "Une progressiste disciplinée",
  hRooms: "Les salles",
  hReading: "La salle de lecture",
  hExit: "Merci de votre visite",
  hElements: "Les éléments",
  hLesson: "La mini-leçon",
  hPartTwo: "Deuxième partie",
  hTicket: "Billet de sortie",
  hLibrary: "La bibliothèque des théories",
  hReflections: "Réflexions",
  hPortfolio: "Portfolio d’enseignement",

  photoMuseumAlt: "Kristen dans une galerie aux murs bleu-vert pâle, qui observe de près un paysage d’hiver dans un cadre doré.",
  photoOverlookAlt: "Kristen en blouse blanche, à la balustrade d’une terrasse, avec une ville et un ciel bleu derrière elle.",
  photoSnowAlt: "Kristen portant un capuchon, une écharpe et des lunettes de soleil, un jour de neige, avec des arbres dénudés derrière elle.",

  bioLede: `Kristen Davis se prépare à enseigner à l’élémentaire à Ottawa. Elle termine une maîtrise ès sciences en enseignement (Master of Science in Teaching), en éducation de l’enfance, à SUNY Potsdam, en vue d’obtenir sa certification pour enseigner jusqu’en 6e${NB}année.`,
  bio: [
    {
      runin: "Du séminaire à la salle de classe.",
      text: "Elle a quitté un programme de doctorat en lettres et sciences humaines et a commencé la suppléance en mars 2024. Depuis, elle a enseigné les études sociales et les arts en immersion française au cycle primaire, et assuré des suppléances à long terme en sciences humaines et sociales au secondaire.",
    },
    {
      runin: "Deux langues.",
      text: "Francophone de langue maternelle, elle est aussi titulaire d’une maîtrise en études culturelles (Cultural Studies).",
    },
  ],
  bioProgressive: {
    runin: "Une progressiste disciplinée.",
    before:
      "Kristen croit que les enfants apprennent le mieux, et acceptent le plus volontiers un enseignement exigeant, lorsqu’ils sentent qu’ils ont leur place. Elle emprunte le ",
    why: "pourquoi",
    middle: ` à John Dewey${NB}: partir de l’expérience de l’enfant. Elle emprunte le `,
    how: "comment",
    after1: ` à William Chandler Bagley${NB}: l’enseignement est un métier qu’on maîtrise délibérément. En classe, cela se traduit par des `,
    sunshine: "Sunshine Emails",
    and: ` et des `,
    glow: "Glow Notes",
    after2:
      " envoyés aux familles, de vraies conversations pendant la surveillance de la récréation, et un français corrigé avec constance et intention, pour qu’il reste acquis chez ses élèves.",
    open: `«${NB}`,
    closeQ: `${NB}»`,
  },
  quoteCaption: "Kristen, dans ses mots",

  theWhy: "Le pourquoi",
  theHow: "Le comment",

  roomsIntro:
    "Huit salles, une par tableau des éléments (Elements Chart). Chaque salle présente les éléments du tableau sous forme de cartels, puis son mur de leçon et son billet de sortie.",
  elementsCount: (n: number) => `${n} éléments`,
  firstLabel: "Premier cartel",

  readingIntro: `Les ressources qui accompagnent les tableaux, de R1 à R8${NB}: droit et politiques, stratégies, santé mentale, bibliothèque des théories (jigsaw), réflexions, liens vers le curriculum, éducation en langue française et étapes de la certification.`,
  readHere: "Lire ici",
  openLibrary: "Ouvrir la bibliothèque des théories",
  readReflections: "Lire les réflexions",
  openOwnPage: (code: string) => `Ouvrir ${code} dans sa propre page`,
  week: (n: number) => `Semaine ${n}`,
  libraryByWeek: "La bibliothèque des théories, semaine par semaine",
  fromWeeks: (title: string) => `Tiré de ${title}, semaines 1 à 8.`,
  backToReading: "Retour à la salle de lecture",
  printPage: "Imprimer cette page ou l’enregistrer en PDF",

  exitLede: "Toutes les salles restent ouvertes. Reprenez où vous en étiez.",
  exitPrint: "Chaque salle peut être imprimée ou enregistrée en PDF depuis sa propre page.",
  references: "Références",
  colophon: `Kristen Davis, portfolio d’enseignement pour le cours GRED 562${NB}: Ontario Education, SUNY Potsdam.`,

  source: `Source${NB}: `,
  wallLabels: (n: number) => `${n} cartels`,
  printRoom: "Imprimer cette salle ou l’enregistrer en PDF",
  inThisRoom: "Dans cette salle",
  theory: "Théorie",
  practice: "Pratique",
  wouldSee: "Ce qu’on verrait en classe",
  example: "Exemple",
  element: (n: number) => `Élément ${n}${NB}: `,
  hintPin: "Continuez à faire défiler pour longer le mur.",
  hintSwipe: "Balayez ou faites défiler le mur de côté.",
  subtopic: "Sous-thème",
  objective: "Objectif",
  curriculum: "Curriculum de l’Ontario",
  grade: (g: string) => (/^\d+$/.test(g) ? `${g}${g === "1" ? "re" : "e"}${NB}année` : g),
  stage: (n: number) => `Étape ${n}${NB}: `,
  stageByStage: (title: string) => `${title}, étape par étape`,
  learned: "choses que j’ai apprises",
  interesting: "choses que j’ai trouvées intéressantes",
  wonder: "question que je me pose encore",
  lessonRefs: "Références de cette leçon",
  ticketRefs: "Références de ce billet de sortie",
  otherRooms: "Autres salles",
  previous: "Précédente",
  next: "Suivante",
  backTo: "Retour à",
  onTo: "Vers",

  notFound: "Il n’y a pas de salle ici",
  notFoundLede: "Cette adresse ne correspond à aucune salle. Choisissez-en une dans le plan.",

  inEnglish: "Contenu présenté en anglais",
};

export const UI_STRINGS: Record<Lang, UI> = { en, fr };

export const other = (lang: Lang): Lang => (lang === "en" ? "fr" : "en");

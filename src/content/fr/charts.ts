import type { Chart } from "../types";

export const charts: Chart[] = [
  {
    slug: `01-theories-of-learning`,
    number: 1,
    title: `Théories de l’apprentissage et de l’enseignement, et différenciation pédagogique`,
    source: `Guide de ressources sur l’agrément de l’Ordre des enseignantes et des enseignants de l’Ontario (2023)`,
    summary: `Les personnes candidates à l’enseignement acquerront une compréhension solide et fondée sur la recherche de la façon dont les élèves apprennent, en étudiant les théories de l’apprentissage et la différenciation pédagogique. Elles s’appuieront sur les théories éducatives, cognitives et sociales fondamentales pour concevoir un enseignement efficace pour tous les élèves. En cours de route, elles construiront leur identité professionnelle, affineront leur jugement et prendront des décisions réfléchies sur l’éducation en Ontario.`,
    elements: [
      {
        n: 1,
        statement: `Diverses théories de l’apprentissage et divers concepts fondés sur la recherche, ainsi que les pratiques pédagogiques qui s’y rattachent, pour élaborer l’enseignement et l’évaluation destinés à chaque élève, aux groupes et aux classes`,
        theory: `Selon la théorie socioconstructiviste de Vygotsky et sa zone proximale de développement (ZPD), les élèves construisent leurs connaissances par l’interaction sociale, et l’apprentissage est le plus efficace lorsqu’une personne enseignante ou un pair plus compétent offre le bon niveau de soutien.`,
        practice: `L’étayage, jumelé à la différenciation pédagogique, donne aux élèves le soutien dont ils ont besoin, puis le retire graduellement à mesure qu’ils gagnent en autonomie, en reconnaissant que les élèves d’une même classe peuvent avoir besoin de différents niveaux d’aide et de différentes formes d’évaluation.`,
        example: `Pendant une leçon de mathématiques, la personne enseignante pourrait d’abord modeler un problème à plusieurs étapes devant toute la classe, puis faire pratiquer les élèves en petits groupes pendant qu’elle circule et pose des questions d’orientation au besoin. À mesure que les élèves montrent qu’ils comprennent, elle se retire et les laisse terminer les problèmes de façon autonome, en alternant entre le travail en grand groupe, en petits groupes et individuel selon où en est chaque élève.`,
        credit: `H/T: SP`,
        citations: [
          `Santrock, J. W., Deater-Deckard, K., & Lansford, J. (2023). Child development: An introduction (16th ed.). McGraw-Hill Higher Education.`,
        ],
      },
      {
        n: 2,
        statement: `Les éléments et les pratiques de la conception universelle de l’apprentissage (CUA) ou de la différenciation pédagogique qui sont équitables et inclusifs, pour soutenir l’apprentissage de tous les élèves.`,
        theory: `La CUA et la différenciation pédagogique s’inscrivent dans le constructivisme. Les élèves construisent leurs connaissances à partir de leurs expériences antérieures, de l’interaction et de multiples façons d’aborder le contenu, ce qui reflète les théories de Piaget et de Vygotsky.`,
        practice: `La CUA offre aux élèves différentes façons de s’engager, d’assimiler l’information et de montrer ce qu’ils ont appris. La différenciation pédagogique consiste à ajuster le contenu, le processus, la production ou l’environnement selon les besoins de chaque élève, ce qui exige une observation et des ajustements continus de la part du personnel enseignant.`,
        example: `Les élèves multilingues pourraient utiliser un outil de traduction pour accéder au contenu, ou démontrer leur compréhension par un dessin plutôt que par l’écrit. Ils peuvent ainsi montrer ce qu’ils savent sans être limités par la langue.`,
        credit: `H/T: CP`,
        citations: [
          `Pace, K. (2025, June 23). Five educational learning theories. Western Governors University. https://www.wgu.edu/blog/five-educational-learning-theories2005.html`,
          `Starck, B. (2026, August 19). 7 ways to put UDL into action in the elementary grades. Edutopia. https://www.edutopia.org/article/implementing-udl-elementary-classroom`,
          `Weselby, C. (2022, November 9). Differentiated instruction: Examples & classroom strategies. Resilient Educator. https://resilienteducator.com/classroom-resources/examples-of-differentiated-instruction/`,
          `WGU. (2026, May 26). What is constructivism? Western Governors University. https://www.wgu.edu/blog/what-constructivism2005.html`,
        ],
      },
      {
        n: 3,
        statement: `La compréhension de l’élève et l’utilisation des données pour orienter un enseignement et une évaluation pertinents et adaptés sur le plan culturel, ancrés dans des pratiques anti-oppressives et antiracistes.`,
        theory: `Le cadre de l’enseignement culturellement adapté (CRT) de Zaretta Hammond encourage le personnel enseignant à miser sur les connaissances culturelles et familiales des élèves, et à établir des routines de réflexion constantes au moyen d’une démarche d’enquête régulière.`,
        practice: `Regarder au-delà des seules données scolaires pour comprendre les élèves dans leur globalité, et se servir de cette compréhension pour façonner l’enseignement.`,
        example: `Pour introduire une unité sur le portrait ou l’autoportrait, la personne enseignante pourrait d’abord inviter les élèves à parler de la façon dont les gens sont représentés dans l’art de leur propre culture ou communauté, par exemple au moyen de photos de famille, d’images religieuses ou de styles vestimentaires qui ont un sens pour eux. Cette discussion aurait lieu avant d’examiner des portraits du canon habituel de l’histoire de l’art. Les élèves peuvent ensuite créer un autoportrait qui intègre délibérément un symbole personnel ou culturel important pour eux, plutôt que de partir d’une consigne purement technique ou fondée sur l’histoire de l’art occidental.`,
        citations: [
          `Caravan, E. (2022, August 3). 5 tips for culturally responsive teaching in the math classroom. Edutopia. https://www.edutopia.org/article/5-tips-culturally-responsive-teaching-math-classroom/`,
          `Lee, L. (2020, June 15). The value of culturally responsive teaching in distance learning. Edutopia. https://www.edutopia.org/article/value-culturally-responsive-teaching-distance-learning/`,
        ],
      },
      {
        n: 4,
        statement: `La conscience que les apprenantes et les apprenants ont des capacités et des préférences différentes, y compris des préférences culturelles pour certaines stratégies d’enseignement (p. ex., discussions, collaboration, récit, apprentissage expérientiel et apprentissage ancré dans le milieu).`,
        theory: `Selon la théorie socioculturelle de Vygotsky, l’apprentissage se fait par l’interaction sociale et il est façonné par la culture et l’environnement. Les élèves apportent donc en classe des parcours, des capacités et des points de vue différents.`,
        practice: `Le personnel enseignant peut offrir aux élèves des façons variées de participer et d’apprendre, comme la collaboration, le récit et l’apprentissage expérientiel ou ancré dans le milieu, afin de répondre à des besoins et à des préférences d’apprentissage différents.`,
        example: `Les élèves pourraient travailler en petits groupes pour discuter et résoudre des problèmes ensemble (collaboration), raconter une histoire familiale ou culturelle liée à la leçon (récit), ou explorer un parc ou un espace communautaire du quartier et relier leurs observations à ce qu’ils apprennent en classe (apprentissage ancré dans le milieu).`,
        credit: `H/T: NA`,
        citations: [
          `CAST. (2024). CAST Universal Design for Learning Guidelines version 3.0. https://udlguidelines.cast.org`,
          `John-Steiner, V., & Mahn, H. (1996). Sociocultural approaches to learning and development: A Vygotskian framework. Educational Psychologist, 31(3-4), 191-206. https://www.tandfonline.com/doi/abs/10.1080/00461520.1996.9653266`,
        ],
      },
      {
        n: 5,
        statement: `Le rôle de la métacognition, de la mentalité de croissance et de la conscience de soi pour soutenir l’autorégulation et l’apprentissage socioémotionnel des élèves.`,
        theory: `L’humanisme de Carl Rogers, qui place au centre le développement global de l’élève et l’apprentissage autodirigé.`,
        practice: `Apprendre aux élèves à planifier leur façon d’aborder une tâche, à surveiller leur compréhension pendant le travail et à y réfléchir par la suite, afin qu’ils s’approprient davantage leur apprentissage au fil du temps.`,
        example: `Une fois un travail terminé, la personne enseignante pourrait demander aux élèves d’écrire à quel moment ils ont bloqué et comment ils s’en sont sortis, puis de se demander s’ils aborderaient la tâche autrement la prochaine fois.`,
        credit: `H/T: JD`,
        citations: [
          `Education Endowment Foundation. (2025, May). Metacognition and self-regulation. Teaching and Learning Toolkit. https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/metacognition-and-self-regulation`,
          `Pace, K. (2025, June 23). Five educational learning theories. Western Governors University. https://www.wgu.edu/blog/five-educational-learning-theories2005.html`,
        ],
      },
    ],
    lesson: {
      title: `Qui je suis : un autoportrait ancré dans ma culture`,
      grade: `4`,
      subject: `Arts visuels`,
      objective: `Les élèves créeront un autoportrait qui intègre un symbole personnel ou culturel important pour eux, en reliant l’expression artistique à leur propre identité et à leur parcours.`,
      curriculumLink: `Arts visuels, domaine D1 (Création et présentation) : appliquer le processus de création pour produire des œuvres d’art qui expriment des idées, des sentiments et des points de vue personnels, en puisant dans diverses sources culturelles.`,
      stages: [
        {
          name: `Mise en situation`,
          body: `Montrer quelques exemples de la façon dont les gens représentent leur identité au moyen d’images ou d’objets dans différentes cultures (photos de famille, images cérémonielles, motifs textiles). Demander aux élèves de se tourner vers une ou un camarade pour en discuter : « Comment les gens montrent-ils qui ils sont au moyen d’images ou d’objets? »`,
        },
        {
          name: `Modelage`,
          body: `Présenter son propre exemple d’autoportrait comprenant un symbole personnel ou culturel (p. ex., un objet de famille transmis de génération en génération, un motif lié à ses origines, une couleur qui a une signification personnelle), en expliquant pourquoi on l’a choisi et ce qu’il représente.`,
        },
        {
          name: `Vérification de la compréhension`,
          body: `Vérification rapide avec le pouce levé, à l’horizontale ou baissé (demander aux élèves de fermer les yeux, par souci de confidentialité et pour préserver leur assurance). Demander aux élèves de nommer un objet ou un symbole qui les représente, en vérifiant qu’ils comprennent qu’un « symbole » peut représenter l’identité, et pas seulement décorer une image.`,
        },
        {
          name: `Pratique guidée`,
          body: `Les élèves font un remue-méninges pour dresser une liste de symboles, d’objets ou de motifs liés à leur famille, à leur culture ou à leurs intérêts, et esquissent leurs premières idées pendant que la personne enseignante circule et offre du soutien.`,
        },
        {
          name: `Objectivation`,
          body: `Rassembler la classe. Chaque élève présente le symbole qu’il prévoit d’inclure et explique brièvement son choix. Récapituler le lien entre l’identité personnelle et les choix artistiques.`,
        },
        {
          name: `Pratique autonome`,
          body: `Les élèves terminent leur autoportrait final en y intégrant le symbole personnel ou culturel choisi, avec le médium de leur choix (crayon, peinture ou collage).`,
        },
      ],
    },
    exitTicket: {
      learned: [
        `La conception universelle de l’apprentissage (CUA) et la différenciation pédagogique ont toutes deux leurs racines dans la théorie constructiviste. Les élèves construisent leur compréhension par l’expérience plutôt qu’en recevant passivement de l’information.`,
        `La zone proximale de développement (ZPD) de Vygotsky explique pourquoi l’étayage fonctionne. Le soutien doit rejoindre l’élève là où il en est, puis être retiré graduellement à mesure qu’il gagne en autonomie.`,
        `L’enseignement culturellement adapté (CRT) ne se limite pas à la représentation. Il consiste aussi à utiliser activement les connaissances culturelles et communautaires des élèves comme point de départ des nouveaux apprentissages, et non comme un ajout.`,
      ],
      interesting: [
        `Le chevauchement entre la CUA, la différenciation pédagogique et la ZPD de Vygotsky. Toutes trois reposent sur l’idée de concevoir en fonction de la variabilité. Dans une école secondaire où j’ai fait deux contrats à long terme, une personne formidable qui me servait de mentor en éducation de l’enfance en difficulté m’a dit que la CUA et la différenciation pédagogique sont « cousines » et qu’il faut bien connaître ce qui les distingue.`,
        `Au départ, la méthode du casse-tête me laissait perplexe et je craignais qu’elle freine ma progression, mais je vois maintenant à quel point elle étaye et construit le contenu du cours. La répétition m’aide à retenir l’information.`,
      ],
      wonder: [
        `Comment trouver l’équilibre entre offrir assez de structure aux élèves qui en ont besoin et laisser de la place à une exploration ouverte, menée par les élèves. Par exemple, les élèves qui profitent d’une approche « essentialiste » par rapport à ceux qui profitent d’une approche « progressiste ». L’an dernier, en études sociales dans une classe de 3e-4e année, certains de mes élèves semblaient apprécier l’approche axée sur la discussion que nous adoptions souvent (je voulais répondre à toutes leurs questions et les aider à penser de façon critique sans imposer mes opinions), mais d’autres se sont plaints en privé que j’entrais trop dans les détails (ce qui est une bonne rétroaction et une donnée utile). J’adore enseigner les études sociales (ma maîtrise est en études culturelles) et je veux savoir comment rendre cette matière agréable pour le plus grand nombre d’élèves possible.`,
      ],
    },
  },
  {
    slug: `02-learning-environment`,
    number: 2,
    title: `Milieu d’apprentissage et organisation`,
    source: `Guide de ressources sur l’agrément de l’Ordre des enseignantes et des enseignants de l’Ontario (2023)`,
    summary: `Un milieu d’apprentissage efficace doit être stimulant et équitable pour tous les élèves. Nous apprenons tôt qu’une classe n’est vraiment efficace que lorsque chaque élève sent qu’il peut prendre des risques sans être jugé. Le personnel enseignant doit appliquer des méthodes éprouvées et faire preuve d’un jugement professionnel éclairé pour créer un milieu sécuritaire et stimulant, en faisant chaque jour des choix intentionnels qui favorisent la réussite scolaire.`,
    elements: [
      {
        n: 1,
        statement: `Des stratégies culturellement appropriées et anti-oppressives pour créer des communautés d’apprentissage stimulantes qui favorisent la sécurité physique et affective.`,
        theory: `La théorie du développement social et la zone proximale de développement de Lev Vygotsky (1896-1935). Vygotsky soutenait que l’interaction sociale est essentielle au développement cognitif, et que l’apprentissage est profondément façonné par le contexte culturel et social d’où vient l’élève, et pas seulement par ses capacités individuelles.`,
        practice: `L’enseignement culturellement adapté de Geneva Gay. Partant de l’idée que la culture façonne l’apprentissage, le cadre de Gay préconise d’intégrer activement le bagage culturel, les styles de communication et les expériences vécues des élèves dans la pratique quotidienne en classe, plutôt que de traiter la culture comme une chose distincte de l’enseignement ou sans rapport avec lui.`,
        example: `Discussions en petits groupes ancrées dans la culture (cadre de l’enseignement culturellement adapté) : la personne enseignante structure délibérément des discussions en petits groupes pour que des élèves de différentes origines culturelles et linguistiques puissent expliquer comment leur famille ou leur communauté aborde un sujet (p. ex., la façon de résoudre un conflit ou de raconter traditionnellement une histoire), avant de relier ces points de vue à la leçon. On montre ainsi que les connaissances culturelles de l’élève sont une ressource valable et valorisée pour l’apprentissage, et on bâtit une culture de classe où les différences culturelles renforcent la communauté.`,
        citations: [
          `Gay, G. (2018). Culturally responsive teaching: Theory, research, and practice (3rd ed.). Teachers College Press.`,
          `Oregon Teacher Pathway. (n.d.). About OTP. Eastern Oregon University. https://www.eou.edu/oregon-teacher-pathway/about/`,
          `Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.`,
        ],
      },
      {
        n: 2,
        statement: `Éléments clés d’un enseignement efficace : des leçons significatives et pertinentes qui se rattachent aux expériences des élèves. Des stratégies d’enseignement qui font participer activement les élèves, qui soutiennent et favorisent une bonne santé mentale, et qui nourrissent le sentiment d’appartenance. L’élimination des obstacles à l’apprentissage, y compris les difficultés d’accessibilité et les lacunes sur le plan de l’expérience.`,
        theory: `Le constructivisme de Jerome Bruner (1960). Selon le constructivisme de Bruner, les élèves donnent un sens à une nouvelle matière en la reliant à leurs connaissances antérieures et à leur vécu; les leçons sont donc plus efficaces lorsque la personne enseignante comprend d’abord d’où vient l’élève.`,
        practice: `La conception universelle de l’apprentissage (CAST, 2018). La CUA prolonge cette idée en offrant un cadre concret pour éliminer les obstacles à l’apprentissage : elle fournit de multiples moyens d’engagement, de représentation et d’action et d’expression, afin qu’un enseignement rigide et uniforme ne devienne pas un obstacle. Les recherches de Peterson et al. (2026) confirment la valeur de cette approche souple et culturellement adaptée, en la reliant à une identité et à un sentiment d’appartenance plus forts chez les artistes sous-représentés.`,
        example: `Conception de leçons souples pour l’accessibilité et l’appartenance (cadre de la CUA) : dans une leçon d’études sociales sur l’histoire locale, la personne enseignante laisse les élèves choisir comment aborder la matière (p. ex., lire un texte, écouter une entrevue audio ou regarder un court extrait de documentaire), puis comment démontrer leurs apprentissages (p. ex., par écrit, par une présentation orale ou par un projet visuel). Comme aucun format unique n’est imposé, les obstacles liés à l’accessibilité et à l’expérience sont réduits au minimum. Chaque élève peut aussi trouver une façon de participer avec plus d’assurance et de se sentir valorisé dans la leçon.`,
        credit: `H/T: AS`,
        citations: [
          `Algonquin College, Learning and Teachign Services. (n.d.). UDL: The how. https://www.algonquincollege.com/lts/udl/the-how/`,
          `CAST (2018). Universal design for learning guidelines version 2.2 https://udlguidelines.cast.org`,
          `Peterson, M. E., Miller, H. A., Hernandez, P. R., Woodcock, A., & Schultz, P. W. (2026). Culturally responsive teaching can protect STEM identity among underrepresented students. Social Psychology of Education, 29, Article 54. https://link.springer.com/10.1007/s11218-026-10224-y`,
        ],
      },
      {
        n: 3,
        statement: `Un répertoire de stratégies pour créer un sentiment d’appartenance et contribuer à une communauté d’apprentissage où tous les élèves ont le sentiment d’avoir leur place.`,
        theory: `Le sentiment d’efficacité personnelle d’Albert Bandura (1986). Bandura soutenait que les gens apprennent dans un contexte social, et que l’apprentissage est facilité par le modelage, l’observation et l’imitation des personnes qui les entourent.`,
        practice: `Le rassemblement du matin (Morning Meeting) du programme Responsive Classroom. Partant de l’idée que les élèves développent leur confiance et leur sentiment d’appartenance grâce au modelage social, cette pratique propose une routine quotidienne structurée, composée d’une salutation, d’un partage, d’une activité de groupe et d’un message du matin, conçue pour bâtir la communauté et donner à chaque élève un rôle constant et visible au sein de celle-ci (Kriete & Davis, 2017).`,
        example: `Rassemblement quotidien du matin (cadre Responsive Classroom) : au début de chaque journée, la classe se réunit en cercle pour un rassemblement du matin structuré. Les élèves se saluent par leur prénom, partagent à tour de rôle quelque chose de personnel, participent à une courte activité de groupe et lisent ensemble un message du matin. Comme chaque élève est salué individuellement et a l’espace voulu pour s’exprimer, chacun a une petite occasion régulière d’être vu et de contribuer, ce qui renforce son appartenance à la communauté de la classe, quels que soient ses capacités ou son parcours.`,
        citations: [
          `Bandura, A. (1986). Social foundations of thought and action: A social cognitive theory. Prentice-Hall.`,
          `Kriete, R., & Davis, C. (2017). The morning meeting book (3rd ed). Center for Responsive Schools.`,
          `Lopez-Garrido, G. (2026). Bandura’s self-efficacy theory of motivation in psychology. Simply Psychology. https://www.simplypsychology.org/self-efficacy.html`,
        ],
      },
      {
        n: 4,
        statement: `Une compréhension des effets des obstacles systémiques qui peuvent nuire au bien-être et au rendement des élèves, et de la nécessité de favoriser des relations positives et un milieu d’apprentissage sécuritaire, équitable, inclusif et respectueux.`,
        theory: `L’apprentissage expérientiel de John Dewey (1938). Dewey soutenait que l’apprentissage se fait par des expériences concrètes de la vie quotidienne qui modifient les connaissances et les comportements d’une personne. Appliquée aux obstacles systémiques, cette idée laisse entendre que le vécu d’un élève, y compris les expériences d’exclusion, d’iniquité ou d’insécurité, façonne directement sa participation et sa réussite en classe, et pas seulement ses capacités innées.`,
        practice: `Les pratiques réparatrices. Partant de l’idée que le vécu façonne l’apprentissage, les pratiques réparatrices s’attaquent aux iniquités systémiques en matière de discipline en réparant les relations et en bâtissant la communauté, plutôt qu’en misant sur des mesures punitives, qui nuisent de façon disproportionnée aux élèves marginalisés (Gregory et al., 2021).`,
        example: `Cercles réparateurs pour résoudre les conflits (cadre des pratiques réparatrices) : au lieu d’envoyer un élève au bureau après un conflit, la personne enseignante réunit les personnes concernées dans un cercle réparateur, où chacune explique comment l’incident l’a touchée et où toutes travaillent ensemble à réparer le tort causé. On observerait des élèves qui prennent la parole à tour de rôle, une écoute active et un plan commun pour aller de l’avant, plutôt qu’un seul élève qui reçoit une punition isolée. On renforce ainsi l’idée que tous les élèves demeurent des membres valorisés de la communauté de la classe, même après un conflit.`,
        citations: [
          `Dewey, J. (1938). Experience and Education. Macmillan.`,
          `Gregory, A., Huang, F. L., & Ward-Siedel, A. R. (2021). Evaluation of the whole school restorative practices project: One-year implementation and impact on discipline incidents [Technical report]. Rutgers University.`,
          `Schools for Children (2020, February 12). A Q&A on the benefits of restorative practices. https://schoolsforchildreninc.org/a-qa-on-the-benefits-of-restorative-practices/`,
        ],
      },
      {
        n: 5,
        statement: `Une compréhension d’un éventail de stratégies pour rediriger les élèves et les aider à se recentrer au besoin.`,
        theory: `La métacognition de John Flavell (1976). Flavell définissait la métacognition comme la « connaissance de la connaissance », c’est-à-dire la capacité de surveiller son propre apprentissage et sa propre compréhension. Appliquée à la redirection des comportements, cette idée laisse entendre que les élèves capables de reconnaître et de nommer leur état intérieur sont mieux outillés pour se reprendre avant de décrocher de la tâche, plutôt que de compter uniquement sur les corrections extérieures de la personne enseignante.`,
        practice: `Les zones de régulation. Partant de l’idée que la conscience de soi favorise l’autogestion, ce cadre apprend aux élèves à reconnaître leur état émotionnel et leur niveau d’énergie à l’aide de quatre « zones » de couleur, puis à choisir une stratégie pour revenir à un état propice à l’apprentissage (Kuypers, 2011).`,
        example: `Vérification de la zone et redirection (cadre des zones de régulation) : lorsque la personne enseignante remarque qu’un élève devient distrait ou agité, au lieu de le rediriger tout de suite verbalement, elle pointe discrètement l’affiche des zones et lui demande de dire dans quelle zone il se trouve. On verrait l’élève prendre une pause, nommer son état (p. ex., « zone jaune ») et choisir de façon autonome une courte stratégie, comme s’étirer ou boire de l’eau, avant de retourner à sa tâche. L’élève prend ainsi en main son propre recentrage, plutôt que de suivre un ordre venant de la personne enseignante.`,
        citations: [
          `Flavell, J. H. (1976). Metacognitive aspects of problem solving. In L. B. Resnick (Ed.), The nature of intelligence (pp. 231-235). Lawrence Erlbaum Associates.`,
          `Garrang Wilam Primary School. (n.d.). Zones of regulation. https://garrangwilamps.vic.edu.au/wellbeing/zones-of-regulation/`,
          `Kuypers, L. M. (2011). The zones of regulation: A curriculum designed to foster self-regulation and emotional control. Think Social Publishing.`,
        ],
      },
      {
        n: 6,
        statement: `Une conscience de soi critique de la façon dont ses propres biais peuvent influencer sa perception des élèves et ses interactions avec eux. Un engagement à continuer d’apprendre au sujet des élèves, avec eux, d’eux et en leur nom.`,
        theory: `L’humanisme de Carl Rogers (1961). La théorie de Rogers place l’élève dans sa globalité au centre et préconise une considération positive inconditionnelle, c’est-à-dire l’acceptation d’une personne sans jugement ni condition (McLeod, 2025). Pour l’offrir de façon authentique, le personnel enseignant doit d’abord reconnaître ses propres biais et présupposés, plutôt que de les laisser façonner inconsciemment sa perception des élèves et ses interactions avec eux.`,
        practice: `L’outil de réflexion sur les biais implicites (Implicit Bias Reflection Tool, IBRT). Un protocole de journal de bord dans lequel le personnel enseignant prend un temps d’arrêt après un moment vécu en classe pour examiner quel biais a pu influencer sa réaction, puis ajuste sa pratique pour la suite (McRay & Sisk-Hilton, 2024).`,
        example: `Noter à qui l’on donne la parole (l’IBRT en pratique) : pendant une semaine, la personne enseignante tient un simple registre des élèves à qui elle donne la parole, qu’elle encourage ou à qui elle offre de l’aide en classe. En examinant ensuite ces tendances, elle peut découvrir un favoritisme inconscient dont elle ne s’était pas rendu compte sur le moment, comme le fait de toujours interroger les mêmes quelques élèves. On observerait la personne enseignante noter rapidement des initiales sur une planchette à pince tout au long de la journée. Le soir venu, elle passe le décompte en revue en privé pour voir quels élèves ont été le moins interrogés, puis se sert de cette information pour décider auprès de qui elle prendra intentionnellement des nouvelles le lendemain (Kanani, 2019).`,
        citations: [
          `Anderson, T. (2021, March 25). What is implicit bias? South Lakes Sentinel. https://www.southlakessentinel.com/news/2021/03/25/what-is-implicit-bias/`,
          `McLeod, S. (2025, April 28). Carl Rogers humanistic theory and contribution to psychology. Simply Psychology. https://www.simplypsychology.org/carl-rogers.html`,
          `McRay, S., & Sisk-Hilton, S. (2024, March 1). Checking your biases. Educational Leadership, 81(6). https://www.ascd.org/el/articles/checking-your-biases`,
        ],
      },
      {
        n: 7,
        statement: `La connaissance de stratégies pertinentes et adaptées sur le plan culturel qui permettent aux élèves de se reconnaître dans le curriculum (p. ex., celles qui reflètent les façons d’être et de savoir traditionnelles des Autochtones; celles qui reconnaissent la diversité des identités culturelles et intersectionnelles et des expériences vécues des élèves).`,
        theory: `Les intelligences multiples de Howard Gardner (1983). Selon la théorie de Gardner, chaque personne possède plusieurs formes d’intelligence distinctes, plutôt qu’une seule capacité générale mesurable. Appliquée à un curriculum culturellement adapté, cette idée laisse entendre que les élèves abordent la matière différemment selon leurs forces et leur bagage culturel; une approche unique et normalisée du curriculum empêchera donc inévitablement certains élèves de s’y reconnaître ou d’y voir leurs forces reflétées.`,
        practice: `L’approche à double perspective (Etuaptmumk, ou Two-Eyed Seeing). Proposée par l’Aîné mi’kmaw Albert Marshall, cette approche réunit côte à côte les forces des savoirs autochtones et des savoirs occidentaux, plutôt que d’exiger que l’un remplace ou domine l’autre (Bartlett, Marshall, & Marshall, 2012).`,
        example: `Leçon de sciences à double perspective (cadre Etuaptmumk) : dans une unité sur les écosystèmes, la personne enseignante présente à la fois le modèle scientifique occidental du réseau alimentaire et une compréhension autochtone locale des mêmes relations entre le territoire, les animaux et les personnes. On observerait les élèves comparer les deux points de vue côte à côte et discuter de ce que chacun apporte de précieux, plutôt que de considérer l’explication scientifique occidentale comme la seule valable. Les élèves dont le bagage se rattache à l’une ou l’autre tradition peuvent ainsi voir leurs propres connaissances comme légitimes.`,
        citations: [
          `Bartlett, C., Marshall, M., & Marshall, A. (2012). Two-eyed seeing and other lessons learned within a co-learning journey of bringing together Indigenous and mainstream knowledges and ways of knowing. Journal of Environmental Studies and Sciences, 2(4), 331-340. https://link.springer.com/article/10.1007/s13412-012-0086-8`,
          `Gardner, H. (1983). Frames of mind: The theory of multiple intelligences. Basic Books.`,
          `University of British Columbia, Indigenous Studies in Kinesiology. (n.d.). Community-based initiatives. https://indigenous.kin.educ.ubc.ca/research-statement/community-based-initiatives/`,
        ],
      },
    ],
    lesson: {
      title: `Deux façons de voir un écosystème`,
      grade: `4`,
      subject: `Sciences`,
      objective: `Les élèves seront capables de décrire les relations entre les organismes d’un habitat à l’aide d’un modèle scientifique occidental (le réseau alimentaire) et d’une perspective autochtone sur l’interdépendance dans la nature.`,
      curriculumLink: `Domaine B : Systèmes vivants (Habitats et communautés). Les élèves démontrent leur compréhension des habitats et des communautés, ainsi que des relations entre les organismes qui y vivent.`,
      stages: [
        {
          name: `Mise en situation`,
          body: `La personne enseignante montre aux élèves une image d’un étang ou d’une forêt de la région et demande : « Qu’est-ce qui vit ici, et comment ces êtres vivants dépendent-ils les uns des autres, selon vous? » Les élèves échangent leurs idées avec une ou un partenaire avant que la personne enseignante présente l’objectif du jour : examiner ces relations de deux façons différentes.`,
        },
        {
          name: `Modelage`,
          body: `« Je fais ». La personne enseignante affiche un schéma simple du réseau alimentaire d’un habitat local (p. ex., l’écosystème d’un étang) et explique comment l’énergie passe des plantes aux animaux. Elle présente ensuite un court enseignement autochtone, adapté à l’âge des élèves, sur l’interdépendance dans la nature (par exemple, un récit ou un enseignement d’une Première Nation locale, utilisé avec la permission appropriée et à partir de ressources validées par la communauté), en montrant comment cette vision décrit les mêmes relations en termes d’équilibre, de respect et de réciprocité plutôt que comme une chaîne à sens unique. La personne enseignante présente explicitement les deux visions comme des façons valables et précieuses de comprendre le même écosystème (Bartlett, Marshall, & Marshall, 2012).`,
        },
        {
          name: `Vérification de la compréhension`,
          body: `« Avec votre partenaire, prenez 30 secondes pour expliquer une ressemblance et une différence entre le schéma du réseau alimentaire et l’enseignement que nous venons d’entendre. » La personne enseignante circule, écoute pour vérifier la compréhension et invite une équipe à partager ses idées avant de poursuivre.`,
        },
        {
          name: `Pratique guidée`,
          body: `« Nous faisons ». En groupe classe, les élèves aident la personne enseignante à annoter un grand schéma d’habitat à l’aide d’un système de flèches représentant le réseau alimentaire et de papillons adhésifs reliés entre eux qui décrivent les relations en termes d’équilibre et d’interdépendance, en discutant au fur et à mesure de la façon dont chaque ajout reflète l’une ou l’autre perspective, ou les deux.`,
        },
        {
          name: `Objectivation`,
          body: `La personne enseignante rappelle qu’on peut comprendre les écosystèmes sous plus d’un angle valable, et que la science occidentale comme les savoirs autochtones offrent des outils importants pour comprendre le monde naturel.`,
        },
        {
          name: `Pratique autonome`,
          body: `« Tu fais ». Les élèves choisissent un habitat (forêt, étang ou cour arrière) et créent leur propre schéma simple ou un court texte qui montre les relations entre les organismes, en utilisant des éléments des deux perspectives abordées en classe. La personne enseignante circule pour soutenir les élèves au besoin.`,
        },
      ],
      references: [
        `Bartlett, C., Marshall, M., & Marshall, A. (2012). Two-eyed seeing and other lessons learned within a co-learning journey of bringing together Indigenous and mainstream knowledges and ways of knowing. Journal of Environmental Studies and Sciences, 2(4), 331-340. https://link.springer.com/article/10.1007/s13412-012-0086-8`,
      ],
    },
    exitTicket: {
      learned: [
        `L’enseignement culturellement adapté (CRT) et des théories comme la théorie du développement social de Vygotsky m’ont confirmé l’idée suivante : l’apprentissage n’est jamais séparé du contexte social et culturel de l’élève. Bâtir une communauté inclusive est fondamental. Je suis née à la campagne, mais je suis maintenant plutôt une personne de la « ville ». L’an dernier, j’ai enseigné dans une communauté très rurale. J’ai intégré la culture du hockey et de la pêche à nos leçons et à nos conversations, parce que ces sujets façonnaient l’identité de mes élèves et de leurs communautés. Cela nous a aidés à bâtir une communauté et à franchir des étapes d’apprentissage essentielles, aussi « ridicule » que cela puisse paraître aux yeux de quelqu’un de l’extérieur!`,
        `Des cadres comme la CUA et les zones de régulation offrent des structures concrètes et pratiques pour réduire au minimum les obstacles (je ne crois pas qu’on puisse toujours éliminer tous les obstacles, même si nous aimerions nous y efforcer) et pour soutenir l’autorégulation, plutôt que de laisser l’inclusion et la redirection à notre simple instinct.`,
        `L’approche à double perspective m’a confirmé qu’un curriculum culturellement pertinent ne consiste pas à remplacer une vision du monde par une autre. Nous pouvons plutôt considérer les savoirs occidentaux et autochtones comme également valables en même temps. Bien sûr, et c’est essentiel, ce ne sont pas les seules visions du monde. Il existe aussi différentes formes d’autochtonie (p. ex., en Amérique latine, en Océanie, en Asie de l’Est, etc.). Je pense qu’il est important de reconnaître que l’autochtonie n’est pas uniforme non plus, qu’on parle du paysage canadien ou de celui d’un autre pays. Ce sera important au Canada, puisque nous connaissons une grande vague d’immigration et que nos communautés changent (pour le mieux : j’adore la façon dont ma communauté en Ontario a évolué sur le plan culturel).`,
      ],
      interesting: [
        `Comment trouver et valider des enseignements et des ressources autochtones de façon respectueuse et appropriée en tant qu’éducatrice non autochtone.`,
        `Des scripts de pratiques réparatrices ou des formats de cercle plus concrets que je pourrais utiliser comme enseignante suppléante qui arrive dans une classe inconnue pour une seule journée, ou même pour une seule période.`,
      ],
      wonder: [
        `Comment bâtir de vraies relations et une communauté (comme le rassemblement du matin) en tant qu’enseignante suppléante qui ne passe parfois qu’une journée dans une classe, plutôt que toute l’année?`,
      ],
    },
  },
  {
    slug: `03-ontario-curriculum-research-data`,
    number: 3,
    title: `Le curriculum de l’Ontario et l’utilisation de la recherche en éducation et de l’analyse des données`,
    source: `Guide de ressources sur l’agrément de l’Ordre des enseignantes et des enseignants de l’Ontario (2023)`,
    summary: `Le curriculum de l’Ontario vise à guider le personnel enseignant dans la conception des activités d’apprentissage, des leçons et des unités, ainsi que dans l’évaluation des progrès des élèves. L’exploration de ce thème permet d’acquérir des connaissances, des habiletés, des perspectives et des pratiques liées à cet élément.

La recherche en éducation et l’analyse des données sont essentielles pour déterminer les pratiques et les prochaines étapes nécessaires pour faciliter l’apprentissage des élèves. Adopter une posture d’enquête, individuellement et en collaboration avec ses collègues, forme des professionnelles et des professionnels actifs et curieux qui peaufinent sans cesse leur planification, leur enseignement et leur évaluation.`,
    elements: [
      {
        n: 1,
        statement: `La structure et les objectifs du curriculum actuel de l’Ontario et des politiques provinciales relatives aux élèves ayant des besoins particuliers en matière d’éducation, et leur utilisation dans la planification d’un enseignement et d’une évaluation inclusifs (p. ex., technologies d’aide et technologies adaptées), ainsi que, pour les écoles de langue française, la Politique d’aménagement linguistique (PAL) et ses attentes.`,
        theory: `L’interdépendance linguistique de Jim Cummins : Cummins soutenait que la maîtrise de la langue première d’un élève se transfère à sa langue seconde et en soutient le développement; maintenir une identité et un enseignement solides en français renforce donc la réussite scolaire globale au lieu de lui nuire.`,
        practice: `La politique ontarienne en matière d’éducation de l’enfance en difficulté (Loi sur l’éducation, L’apprentissage pour tous, NPP 8) présente l’inclusion comme un droit, en exigeant des plans d’enseignement individualisés (PEI) et des adaptations fondées sur la CUA pour que les élèves aient accès aux mêmes attentes du curriculum plutôt qu’à des objectifs modifiés. La PAL impose une attente parallèle aux écoles de langue française : l’enseignement doit à la fois développer les compétences scolaires et l’identité linguistique et culturelle francophone.`,
        example: `Adaptations bilingues du PEI (cadres de la PAL et de la CUA) : la personne enseignante planifie ses évaluations en prévoyant des adaptations comme du temps supplémentaire ou d’autres formats, pour que l’évaluation mesure l’apprentissage plutôt que le handicap. Dans une école de langue française, on observerait ces mêmes adaptations offertes explicitement en français, ce qui reflète la double attente de la PAL, plutôt qu’un recours par défaut à des soutiens en anglais.`,
        credit: `H/T: AR`,
        citations: [
          `Cummins, J. (1979). Linguistic Interdependence and the educational development of bilingual children. Review of Educational Research, 49(2), 222-251.`,
          `Ontario Ministry of Education. (n.d.). Special Education laws and policies. https://www.ontario.ca/page/special-education-laws-and-policies`,
          `Ontario Ministry of Education. (n.d.). Policies for French-language education. https://www.ontario.ca/page/policies-french-language-education`,
        ],
      },
      {
        n: 2,
        statement: `L’utilisation explicite de la terminologie et des pratiques professionnelles dans la planification des programmes. L’évaluation du travail des élèves et la communication à son sujet. Par exemple :
domaines d’étude
attentes et contenus d’apprentissage
conception universelle de l’apprentissage (CUA), pratiques antiracistes et anti-oppressives, pédagogie pertinente et adaptée sur le plan culturel, collaboration`,
        theory: `Les intelligences multiples de Howard Gardner : Gardner soutenait que les élèves possèdent plusieurs formes d’intelligence distinctes plutôt qu’une seule capacité générale mesurable; un format unique et normalisé d’enseignement ou d’évaluation favorisera donc inévitablement les forces de certains élèves tout en empêchant d’autres de démontrer ce qu’ils savent.`,
        practice: `La conception universelle de l’apprentissage (CAST, 2018) traduit l’intuition de Gardner en un cadre concret, qui exige de multiples moyens de représentation, d’action et d’expression, et d’engagement dans la planification et l’évaluation. Le personnel enseignant l’applique, avec une pédagogie pertinente et adaptée sur le plan culturel, lorsqu’il planifie le travail des élèves et communique à son sujet, en veillant à ce que le matériel et les formats d’évaluation reflètent la diversité des identités des élèves et permettent plusieurs façons valables de démontrer leur compréhension.`,
        example: `Choix des textes et des réponses (cadre de la CUA) : en planifiant une unité de littératie, la personne enseignante choisit des textes qui représentent des cultures variées (p. ex., les titres en lice pour le prix Blue Spruce de l’Ontario) et invite les élèves à les relier à leurs propres expériences. On observerait les élèves démontrer leur compréhension sous des formes variées (p. ex., écrite, orale ou visuelle), tandis que l’évaluation reste ancrée dans les mêmes attentes du curriculum, quel que soit le format choisi.`,
        credit: `H/T: CB`,
        citations: [
          `Gardner, H. (1983). Frames of mind: The theory of multiple intelligences. Basic Books.`,
          `CAST. (2018). Universal design for learning guidelines version 2.2. https://udlguidelines.cast.org`,
        ],
      },
      {
        n: 3,
        statement: `Les éléments intégrés et transversaux du curriculum, des cadres et des stratégies, notamment l’impact humain et l’éducation environnementale et en développement durable, la sécurité dans les écoles, les systèmes de savoirs autochtones, l’équité et l’éducation inclusive, la pensée critique, les littératies critiques, le bien-être, la littératie financière, l’apprentissage socioémotionnel et les STIM/STIAM. (En choisir un)`,
        theory: `La théorie du développement social et la zone proximale de développement de Lev Vygotsky : Vygotsky soutenait que l’interaction sociale est essentielle au développement cognitif, qui se produit dans une « zone proximale de développement », c’est-à-dire l’écart entre ce qu’un apprenant peut faire seul et ce qu’il peut faire avec l’aide des autres (Vygotsky, 1978).`,
        practice: `Les 3 pratiques phares en apprentissage socioémotionnel (SEL 3 Signature Practices) du CASEL (Collaborative for Academic, Social, and Emotional Learning) offrent une méthode concrète pour intégrer les compétences socioémotionnelles à l’enseignement quotidien, par exemple en commençant les leçons par de courtes routines structurées qui développent les relations et la conscience de soi avant d’aborder le contenu scolaire. Cela rejoint la façon dont l’Ontario intègre des compétences équivalentes à l’apprentissage socioémotionnel, les « habiletés d’apprentissage et habitudes de travail » (fiabilité, sens de l’organisation, autonomie, esprit de collaboration, sens de l’initiative, autorégulation), directement dans les attentes des matières plutôt que dans un domaine distinct (CASEL, 2019; Ontario Ministry of Education, 2010, pp. 9-10).`,
        example: `Résolution de problèmes en dyades avec habileté nommée (cadre des 3 pratiques phares) : dans une leçon de mathématiques de 3e année, la personne enseignante jumelle les élèves pour qu’ils résolvent un problème ensemble, en nommant explicitement l’« esprit de collaboration » comme habileté travaillée. On observerait les élèves négocier une démarche commune plutôt que de travailler chacun de leur côté, ce qui illustre comment l’interaction guidée entre pairs permet à l’élève d’aller au-delà de ce qu’il pourrait faire seul.`,
        citations: [
          `CASEL. (2019). SEL 3 signature practices playbook. https://schoolguide.casel.org/uploads/sites/2/2020/10/Summary-The-SEL-3-Signature-Practices.pdf`,
          `Ontario Ministry of Education. (2010). Growing success: Assessment, evaluation, and reporting in Ontario schools. https://www.edu.gov.on.ca/eng/policyfunding/growsuccess.pdf`,
          `Vygotsky, L. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.`,
        ],
      },
      {
        n: 4,
        statement: `Les connaissances curriculaires propres à la matière, p. ex., le rôle de l’apprentissage socioémotionnel en mathématiques; l’éducation à la citoyenneté responsable en études sociales, en histoire et en géographie; les approches fondées sur des données probantes pour enseigner la lecture dans une langue; l’investigation et la résolution de problèmes technologiques en sciences et technologie.`,
        theory: `La théorie cognitive de l’apprentissage de Jerome Bruner : Bruner a introduit la notion de « disposition à apprendre » et le curriculum en spirale, en soutenant qu’on peut enseigner n’importe quelle matière à n’importe quel stade du développement, d’une façon adaptée aux capacités cognitives de l’enfant, en revenant à plusieurs reprises sur les idées essentielles avec une complexité croissante (1960).`,
        practice: `Le modèle d’enseignement 5E (Engager, Explorer, Expliquer, Élaborer, Évaluer) applique le curriculum en spirale de Bruner en sciences et technologie : il fournit au personnel enseignant une structure concrète et reproductible pour introduire simplement les habiletés d’investigation et de résolution de problèmes technologiques dans les premières années, puis y revenir avec plus de complexité dans les années suivantes (Bybee et al., 2006).`,
        example: `Investigations en spirale sur les forces et le mouvement (cadre du modèle 5E) : une unité de sciences de 4e année sur les forces et le mouvement commence par une simple activité « Engager » (les élèves prédisent ce qui se passe quand ils poussent une petite voiture), passe par « Explorer » (l’investigation du poids qui tombe, avec des rondelles) et aboutit à « Élaborer », où les élèves appliquent les mêmes notions de force à une situation nouvelle et plus complexe, comme la conception d’une rampe. On observerait la leçon gagner en complexité d’une phase à l’autre, plutôt que d’introduire tout le contenu d’un coup.`,
        citations: [
          `Bruner, J. S. (1960). The process of education. Harvard University Press.`,
          `Bybee, R. W., Taylor, J. A., Gardner, A., Van Scotter, P., Powell, J. C., Westbrook, A., & Landes, N. (2006). The BSCS 5E instructional model: Origins, effectiveness, and applications. BSCS.`,
        ],
      },
      {
        n: 5,
        statement: `L’utilisation de l’identité, du vécu et des connaissances des élèves, et leur mise en lien avec le curriculum de façons différenciées, culturellement pertinentes, adaptées et valorisantes.`,
        theory: `Le capital culturel de Pierre Bourdieu. Bourdieu soutenait que le capital n’est pas seulement économique, mais aussi culturel, incarné dans les goûts, la langue et les façons de connaître le monde, et que l’école récompense souvent le capital culturel du groupe dominant tout en traitant les connaissances des autres élèves comme non pertinentes.`,
        practice: `L’approche des fonds de connaissances (Moll et al., 1992) concrétise cette idée en demandant au personnel enseignant de repérer activement les connaissances, les habiletés et les pratiques présentes dans les foyers et les communautés des élèves, et de s’en servir, en reliant les évaluations et les activités de littératie à la famille, aux traditions et à la langue plutôt qu’en traitant ces connaissances comme distinctes du curriculum (Folk, 2018).`,
        example: `Les savoirs familiaux comme point de départ de la recherche (cadre des fonds de connaissances) : la personne enseignante conçoit un travail de recherche dans lequel les élèves s’appuient sur la langue, les traditions ou les connaissances communautaires de leur famille comme points de départ légitimes de leur enquête. On observerait les élèves présenter à voix haute un contexte personnel ou culturel avant de le relier au contenu de la leçon, plutôt que de travailler uniquement à partir du matériel fourni par la personne enseignante.`,
        credit: `H/T: SC`,
        citations: [
          `Bourdieu, P. (1986). The forms of capital. In J. Richardson (Ed.), Handbook of theory and research for the sociology of education (pp. 241-258). Greenwood.`,
          `Moll, L. C., Amanti, C., Neff, D., & Gonzalez, N. (1992). Funds of knowledge for teaching: Using a qualitative approach to connect homes and classrooms. Theory Into Practice, 31(2), 132-141.`,
          `Folk, A. L. (2018). Drawing on students’ funds of knowledge: Using identity and lived experience to join the conversation in research assignments. Journal of Information Literacy, 12(2), 44-59. https://doi.org/10.11645/12.2.2468`,
        ],
      },
      {
        n: 6,
        statement: `La façon dont les programmes-cadres peuvent être intégrés efficacement (p. ex., diverses littératies dans l’ensemble du curriculum) pour satisfaire aux attentes de plusieurs matières et soutenir l’apprentissage, le bien-être et le rendement des élèves.`,
        theory: `Le lien entre la lecture et l’écriture de Nancy Nelson Spivey : selon la théorie constructiviste de Spivey, la lecture et l’écriture ne sont pas des habiletés distinctes, mais des processus cognitifs interdépendants; renforcer l’une renforce donc l’autre sur le plan cognitif, sans qu’il faille les enseigner séparément.`,
        practice: `L’écriture dans toutes les matières (Writing Across the Curriculum, WAC) concrétise cette idée en intégrant des tâches d’écriture directement à l’enseignement des matières autres que la langue, ce qui permet aux élèves de pratiquer leurs habiletés en littératie dans les domaines de contenu. Les recherches de Tierney et Shanahan (1991) appuient cette approche : elles montrent qu’intégrer l’enseignement de la lecture et de l’écriture au contenu d’autres matières améliore les résultats en littératie, ce que renforce le curriculum de langue de l’Ontario, qui exige que les habiletés langagières soient appliquées dans le contexte des différentes matières (Bazerman et al., 2005; Ontario Ministry of Education, 2023).`,
        example: `Intégration des sciences et de l’écriture (cadre de l’écriture dans toutes les matières) : la personne enseignante relie une attente de sciences de 3e année sur les besoins des plantes à une tâche d’écriture en langue, en demandant aux élèves de rédiger un paragraphe informatif sur ce dont les plantes ont besoin pour survivre. On observerait une seule leçon qui répond à la fois aux attentes de sciences et de langue, plutôt que deux blocs d’enseignement distincts.`,
        credit: `H/T: SD`,
        citations: [
          `Bazerman, C., Little, J., Bethel, L., Chavkin, T., Fouquette, D., & Garufis, J. (2005). Reference guide to writing across the curriculum. WAC Clearinghouse.`,
          `Ontario Ministry of Education. (2023). The Ontario Curriculum, Grades 1-8: Language. https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-language`,
          `Spivey, N. N. (1997). The constructivist metaphor: Reading, writing, and the making of meaning. Academic Press.`,
          `Tierney, R. J., & Shanahan, T. (1991). Research on the reading-writing relationship: Interactions, transactions, and outcomes. In R. Barr, M. L. Kamil, P. Mosenthal, & P. D. Pearson (Eds.), Handbook of reading research (Vol. 2, pp. 246-280). Longman.`,
        ],
      },
      {
        n: 7,
        statement: `Une compréhension des façons dont le curriculum favorise l’acquisition de compétences transférables, ainsi que la planification d’apprentissage, de carrière et de vie.`,
        theory: `Le sentiment d’efficacité personnelle d’Albert Bandura : Bandura soutenait que les gens apprennent dans un contexte social et développent la croyance en leurs propres capacités grâce au modelage, à l’observation et aux expériences de maîtrise. Cette croyance se transfère d’un domaine à l’autre, y compris aux décisions futures sur la carrière et la vie.`,
        practice: `De la maternelle à la 6e année, la politique ontarienne Tracer son itinéraire vers la réussite met cela en œuvre au moyen du portfolio « Tout sur moi », dans lequel les élèves réfléchissent à leurs forces, à leurs intérêts et à leurs habiletés en développement et les documentent dans quatre domaines d’apprentissage (Se connaître, Explorer les possibilités, Prendre des décisions et établir des objectifs, Atteindre ses objectifs et effectuer des transitions). Ils accumulent ainsi les expériences de maîtrise et la connaissance de soi décrites par Bandura bien avant que la planification de carrière formelle commence en 7e année (Ontario Ministry of Education, 2013).`,
        example: `Réflexion sur l’établissement d’objectifs (cadre du portfolio « Tout sur moi ») : après avoir terminé un projet de classe de leur choix, les élèves de 3e année ajoutent à leur portfolio « Tout sur moi » une réflexion sur une habileté dont ils sont fiers et sur une autre qu’ils veulent travailler ensuite. On observerait la personne enseignante susciter cette réflexion au moyen de questions ouvertes plutôt que d’attribuer une note, ce qui renforce chez les élèves le sentiment grandissant de leurs propres capacités plutôt que de mesurer un résultat figé.`,
        citations: [
          `Bandura, A. (1986). Social foundations of thought and action: A social cognitive theory. Prentice-Hall.`,
          `Ontario Ministry of Education. (2013). Creating pathways to success: An education and career/life planning program for Ontario schools. https://www.edu.gov.on.ca/eng/document/policy/cps/creatingpathwayssuccess.pdf`,
        ],
      },
      {
        n: 8,
        statement: `La façon d’accéder à la littérature de recherche en éducation, de l’interpréter, de l’évaluer et de l’utiliser pour prendre des décisions éclairées lors de la planification d’un enseignement efficace (enseignement et évaluation différenciés, équitables, accessibles et inclusifs).`,
        theory: `Les styles d’apprentissage de David Kolb : le cycle en quatre étapes de Kolb (expérience concrète, observation réfléchie, conceptualisation abstraite, expérimentation active) laisse entendre que les élèves s’investissent le plus pleinement dans l’enseignement lorsque plusieurs modes de traitement leur sont offerts, et non un seul (1984).`,
        practice: `La différenciation pédagogique (Tomlinson, 2001) fournit au personnel enseignant une méthode concrète pour appliquer l’intuition de Kolb : elle utilise les données d’évaluation continue pour modifier le contenu, le processus et la production selon le niveau de préparation, les intérêts et le profil d’apprentissage des élèves, plutôt que de s’en tenir par défaut à un format d’enseignement unique pour toute la classe.`,
        example: `Options de réponse souples (cadre de la différenciation pédagogique) : une ou un élève qui a de la difficulté avec les réponses écrites a plutôt la possibilité d’expliquer sa compréhension oralement ou au moyen d’un schéma. On observerait la personne enseignante offrir ce choix dès le départ, et non seulement après que l’élève a éprouvé des difficultés, ce qui reflète une planification différenciée éclairée par la recherche.`,
        credit: `H/T: NM`,
        citations: [
          `Kolb, D. A. (1984). Experiential learning: Experience as the source of learning and development. Prentice-Hall.`,
          `Tomlinson, C. A. (2001). How to differentiate instruction in mixed-ability classrooms (2nd ed.). ASCD.`,
        ],
      },
      {
        n: 9,
        statement: `La collecte et l’utilisation de données pour prendre des décisions pédagogiques qui assurent un enseignement efficace et qui améliorent ou assurent l’apprentissage des élèves.`,
        theory: `La taxonomie des objectifs pédagogiques de Benjamin Bloom : la taxonomie de Bloom (connaissance, compréhension, application, analyse, synthèse, évaluation) donne au personnel enseignant une structure pour déterminer avec précision le niveau de compréhension que révèle une donnée, plutôt que de traiter toute trace de difficulté comme le même type de lacune (1956).`,
        practice: `La réponse à l’intervention (RAI) traduit cette idée en une méthode à paliers : le personnel enseignant recueille des données continues (observations, conversations, échantillons de travaux), détermine à quel niveau de la taxonomie de Bloom l’élève éprouve des difficultés et ajuste l’intensité du soutien en conséquence, en ne passant à un palier supérieur que lorsque les données montrent que l’élève ne répond pas à un niveau d’intervention donné (Fuchs & Fuchs, 2006).`,
        example: `Réenseignement ciblé à partir de l’observation (cadre de la réponse à l’intervention) : une personne enseignante qui observe que des élèves ont de la difficulté à reconnaître les lettres (une lacune au niveau de la connaissance dans la taxonomie de Bloom) offre un soutien ciblé de palier 2 et de la pratique supplémentaire à ce niveau de base avant de passer à des tâches plus complexes. On observerait la personne enseignante réunir un petit groupe pour du réenseignement dès qu’elle remarque cette tendance, plutôt que d’attendre qu’un test formel la confirme.`,
        credit: `H/T: CP`,
        citations: [
          `Bloom, B. S. (Ed.). (1956). Taxonomy of educational objectives: The classification of educational goals. Longmans, Green.`,
          `Fuchs, D., & Fuchs, L. S. (2006). Introduction to response to intervention: What, why, and how valid is it? Reading Research Quarterly, 41(1), 93-99.`,
        ],
      },
      {
        n: 10,
        statement: `S’engager et collaborer avec des collègues lors de l’examen de données probantes, de la recherche en éducation, de la théorie ou d’autres corpus de connaissances, afin de prendre des décisions pédagogiques précises et personnalisées dans la planification de l’enseignement.`,
        theory: `Les communautés de pratique d’Etienne Wenger. Wenger soutenait que les professionnels construisent le plus efficacement leurs connaissances par un engagement partagé autour d’une préoccupation commune, en apprenant en collaboration plutôt qu’isolément.`,
        practice: `Les communautés d’apprentissage professionnelles (CAP) en offrent une structure concrète : elles organisent les réunions d’équipe-niveau autour de ressources communes comme Faire croître le succès et L’apprentissage pour tous, pour que le personnel enseignant compare ses approches, examine ensemble les données probantes et développe au fil du temps une expertise commune, plutôt que de planifier seul (DuFour, 2004).`,
        example: `Examen collaboratif d’échantillons de travaux (cadre des communautés d’apprentissage professionnelles) : une équipe-niveau examine ensemble des échantillons de travaux d’élèves, applique les stratégies d’évaluation de L’apprentissage pour tous et décide collectivement des prochaines étapes de l’enseignement. On observerait les membres du personnel enseignant consulter le même document commun et s’appuyer sur les observations les uns des autres, plutôt que de planifier chacun de leur côté selon leurs propres présupposés.`,
        credit: `H/T: SP`,
        citations: [
          `Wenger, E. (1998). Communities of practice: Learning, meaning, and identity. Cambridge University Press.`,
          `DuFour, R. (2004). What is a professional learning community? Educational Leadership, 61(8), 6-11.`,
          `Ontario Ministry of Education. (2010). Growing success: Assessment, evaluation, and reporting in Ontario schools. https://www.edu.gov.on.ca/eng/policyfunding/growsuccess.pdf`,
          `Ontario Ministry of Education. (2013). Learning for all: A guide to effective assessment and instruction for all students, kindergarten to Grade 12. https://www.ontario.ca/page/learning-all-guide-effective-assessment-and-instruction-all-students-kindergarten-grade-12`,
        ],
      },
    ],
    lesson: {
      subtopic: `L’utilisation de l’identité, du vécu et des connaissances des élèves, et leur mise en lien avec le curriculum de façons différenciées, culturellement pertinentes, adaptées et valorisantes.`,
      title: `Entrevue sur les savoirs familiaux`,
      grade: `4`,
      subject: `Langue`,
      objective: `Les élèves réaliseront une entrevue avec un membre de leur famille ou de leur communauté au sujet d’une habileté, d’une tradition ou d’une connaissance importante pour leur famille, puis rédigeront un court texte qui relie ce savoir à un thème ou à un texte étudié en classe.`,
      curriculumLink: `Le curriculum de l’Ontario, de la 1re à la 8e année : Langue (2023), domaine A : Liens et applications en littératie, A3. Applications, liens et contributions : les élèves établissent des liens entre ce qu’ils apprennent en classe et divers aspects de leur vie, de leur communauté et du monde qui les entoure.`,
      stages: [
        {
          name: `Mise en situation`,
          body: `La personne enseignante raconte une courte histoire personnelle au sujet d’une habileté ou d’une tradition apprise dans sa propre famille (p. ex., une recette, un jeu, une façon de réparer quelque chose), montrant ainsi que les savoirs familiaux ont leur place aux côtés de ce qu’on enseigne à l’école.`,
        },
        {
          name: `Modelage`,
          body: `La personne enseignante affiche un organisateur graphique simple accompagné de questions (« À qui as-tu parlé? », « Qu’est-ce que cette personne t’a appris? », « Quel lien y a-t-il avec quelque chose que nous avons appris en classe? ») et montre à voix haute comment remplir une section à partir de sa propre anecdote.`,
        },
        {
          name: `Vérification de la compréhension`,
          body: `Se tourner et discuter : les élèves nomment à une ou un partenaire une personne qu’ils pourraient interviewer à la maison (grand-parent, parent, voisine ou voisin, etc.) et une question qu’ils pourraient lui poser.`,
        },
        {
          name: `Pratique guidée`,
          body: `En groupe classe, les élèves dressent ensemble une liste de questions d’entrevue (p. ex., « Qu’est-ce que tu sais faire et que tu as appris de ta famille? », « Pourquoi est-ce important pour toi? »), que la personne enseignante note sur une grande feuille pour que les élèves puissent s’en inspirer.`,
        },
        {
          name: `Objectivation`,
          body: `La personne enseignante revoit la tâche d’entrevue et rappelle aux élèves que toutes les formes de savoirs familiaux (recettes, récits, habiletés de réparation, jeux, langues) sont tout aussi valables et valorisées dans ce travail.`,
        },
        {
          name: `Pratique autonome`,
          body: `Les élèves font leur entrevue à la maison, puis rédigent un court paragraphe ou créent un support visuel qui relie ce qu’ils ont appris à un thème ou à un texte étudié en classe; ils le présenteront en petits groupes le lendemain.`,
        },
      ],
    },
    exitTicket: {
      learned: [
        `La réponse à l’intervention (RAI) offre une structure à paliers pour ajuster l’intensité du soutien à ce dont l’élève a réellement besoin selon les données, plutôt que de traiter toutes les difficultés de la même façon.`,
        `La politique ontarienne en matière d’éducation de l’enfance en difficulté (la Loi sur l’éducation, L’apprentissage pour tous, la NPP 8) présente l’inclusion comme un droit de l’élève, la NPP 8 encadrant précisément la façon dont les troubles d’apprentissage sont identifiés et traduits dans la planification du PEI.`,
        `L’écriture dans toutes les matières montre que les habiletés en littératie peuvent être intégrées directement aux autres matières, plutôt que d’être confinées à un bloc de littératie distinct.`,
      ],
      interesting: [
        `L’approche des fonds de connaissances présente les savoirs familiaux et communautaires comme une ressource légitime du curriculum, plutôt que comme quelque chose de distinct du « véritable » apprentissage scolaire.`,
        `Le modèle d’enseignement 5E offre une structure concrète et reproductible pour appliquer le curriculum en spirale de Bruner en sciences, en revenant sur les mêmes idées essentielles avec une complexité étonnante d’une année à l’autre.`,
      ],
      wonder: [
        `Comme enseignante suppléante qui arrive dans une classe pour une seule journée, comment pourrais-je appliquer de façon réaliste une approche à paliers comme la RAI, sans l’historique de données que la personne titulaire de la classe accumule au fil du temps?`,
      ],
    },
  },
  {
    slug: `04-child-adolescent-development`,
    number: 4,
    title: `Développement de l’enfant et de l’adolescent et transitions des élèves`,
    source: `Guide de ressources sur l’agrément de l’Ordre des enseignantes et des enseignants de l’Ontario (2023)`,
    summary: `Les personnes candidates à l’enseignement acquerront une compréhension claire, éclairée par la recherche, de la façon dont les enfants et les adolescents grandissent, apprennent et éprouvent parfois des difficultés. Elles se pencheront aussi sur les grandes recherches en psychologie du développement, en santé et en psychologie cognitive, ainsi que sur les contextes socioculturels qui façonnent l’apprentissage. Elles utiliseront ces connaissances pour créer des classes attentives aux besoins des élèves et pour orienter les élèves vers les soutiens appropriés.`,
    elements: [
      {
        n: 1,
        statement: `Les théories du développement humain et l’interdépendance des domaines physique, social, affectif, cognitif, et de la communication et du langage`,
        theory: `La hiérarchie des besoins d’Abraham Maslow. Maslow (1943) soutenait que les besoins humains s’appuient les uns sur les autres, des besoins physiologiques (p. ex., nourriture, sommeil) et de sécurité jusqu’aux besoins d’appartenance et d’estime, puis enfin à l’accomplissement de soi. Appliquée au développement, cette idée laisse entendre que les domaines sont interreliés : un enfant qui a faim, qui ne se sent pas en sécurité ou qui est isolé socialement aura du mal à s’engager sur le plan cognitif, parce que les besoins physiques et affectifs non comblés passent avant l’apprentissage.`,
        practice: `Le modèle Whole School, Whole Community, Whole Child (WSCC). Partant de l’idée que l’apprentissage dépend de la satisfaction des besoins de l’enfant dans sa globalité, ce cadre coordonne la santé, la nutrition, l’activité physique, le climat socioémotionnel et la participation des familles et de la communauté avec l’enseignement scolaire, plutôt que de traiter le bien-être physique et affectif de l’élève comme distinct de son apprentissage (Lewallen et al., 2015).`,
        example: `Accueil du matin et pause collation (cadre WSCC)
Une personne enseignante de 3e année commence chaque journée par un rapide bilan des émotions : les élèves pointent sur une affiche l’émotion qui correspond à leur état. Lorsqu’un élève indique qu’il est fatigué et qu’il a faim, elle lui offre discrètement une collation du programme de nutrition de l’école (p. ex., le bac à collations) et quelques minutes de calme avant le début de la leçon de mathématiques. On observerait l’élève revenir à la tâche prêt à participer, ce qui montre que répondre d’abord aux besoins physiques et affectifs favorise l’engagement cognitif.`,
        citations: [
          `Lewallen, T. C., Hunt, H., Potts-Datema, W., Zaza, S., & Giles, W. (2015). The Whole School, Whole Community, Whole Child model: A new approach for improving educational attainment and healthy development for students. Journal of School Health, 85(11), 729-739.`,
          `Maslow, A. H. (1943). A theory of human motivation. Psychological Review, 50(4), 370-396.`,
        ],
      },
      {
        n: 2,
        statement: `Les conceptions autochtones du développement humain, de la croissance et/ou des liens entre l’esprit, les émotions, l’intellect, le corps, les autres espèces et le territoire.`,
        theory: `L’apprentissage holistique autochtone selon Marie Battiste. Battiste (2002), chercheuse mi’kmaw, décrit le savoir autochtone comme holistique : il conçoit le développement humain comme la croissance de la personne entière (esprit, émotions, intellect et corps) en relation avec la famille, la communauté, les autres êtres vivants et le territoire, plutôt que comme des domaines distincts qui se développent isolément.`,
        practice: `L’apprentissage axé sur le territoire. Dans le prolongement de cette vision holistique, l’apprentissage axé sur le territoire, éclairé par les enseignements de la roue de médecine décrits par Toulouse (2008), mobilise les dimensions physique, émotionnelle, mentale et spirituelle de l’apprenant grâce à un apprentissage sur le territoire et à partir de celui-ci. Comme les enseignements diffèrent d’une Nation à l’autre, ce sont les Aînés, les gardiennes et gardiens du savoir et des ressources validées par la communauté qui orientent ce qui est partagé (First Nations, Métis and Inuit Education Association of Ontario, s.d.).`,
        example: `Promenade saisonnière sur le territoire et cercle de partage (cadre de l’apprentissage axé sur le territoire)
Avec l’aide d’une gardienne ou d’un gardien du savoir de la région, la classe parcourt la cour d’école ou un parc voisin à chaque saison pour observer les changements chez les plantes et les animaux, puis se réunit en cercle de partage pour réfléchir à ce que les élèves ont remarqué, à ce qu’ils ont ressenti et aux responsabilités qu’ils ont envers le territoire. On observerait les élèves bouger, observer, discuter et réfléchir dans une seule et même activité, plutôt que de traiter le corps, l’esprit et les émotions dans des leçons séparées.`,
        citations: [
          `Battiste, M. (2002). Indigenous knowledge and pedagogy in First Nations education: A literature review with recommendations. Indian and Northern Affairs Canada.`,
          `First Nations, Métis and Inuit Education Association of Ontario. (n.d.). Public resources. https://fnmieao.com/public-resources/`,
          `Toulouse, P. R. (2008). Integrating Aboriginal teaching and values into the classroom (What Works? Research into Practice, Monograph No. 11). Ontario Literacy and Numeracy Secretariat.`,
        ],
      },
      {
        n: 3,
        statement: `Réfléchir à la façon dont les systèmes d’oppression ont influé sur les choix d’itinéraires et les transitions de certains groupes d’élèves. Réfléchir à la façon dont les principes d’équité, d’accessibilité, d’antiracisme et d’anti-oppression améliorent les résultats d’apprentissage des élèves qui subissent des inégalités systémiques au sein du système d’éducation`,
        theory: `La pédagogie critique de Paulo Freire. Freire (1970) soutenait que l’éducation n’est jamais neutre : soit elle reproduit les inégalités sociales existantes, soit elle aide les apprenants à les remettre en question et à les transformer. Sa critique du « modèle bancaire », où les élèves reçoivent passivement le savoir d’une autorité, aide à comprendre comment des structures comme le cloisonnement des cours peuvent orienter les élèves vers des avenirs déterminés par la race et la classe sociale plutôt que par leurs capacités.`,
        practice: `Le décloisonnement et l’examen anti-oppressif des recommandations d’itinéraire. Partant de l’idée que les structures scolaires peuvent reproduire les inégalités, une recherche menée dans la région du Grand Toronto a révélé que les élèves noirs étaient placés de façon disproportionnée dans des cours appliqués et des cours de base, ce qui limitait leurs options postsecondaires (James & Turner, 2017). En réponse, le décloisonnement retarde le classement des élèves dans des niveaux de cours distincts, afin que tous aient accès au même programme théorique, tandis que l’examen anti-oppressif demande au personnel éducatif d’examiner les recommandations de programmes et d’itinéraires pour y déceler des tendances fondées sur la race, la classe sociale ou d’autres identités, et d’associer les familles à ces décisions.`,
        example: `Atténuer les biais dans les recommandations de programmes (pratique anti-oppressive)
Avant de recommander des élèves pour une évaluation de la douance, des activités d’enrichissement ou des programmes spécialisés de 7e année, le personnel enseignant de 6e année passe ses recommandations en revue en équipe pour vérifier que personne n’est oublié. On observerait le personnel enseignant vérifier s’il existe des tendances liées à des catégories identitaires. On le verrait aussi inviter les familles à discuter de toutes les options offertes à leurs enfants, plutôt que de tenir des choses pour acquises.`,
        citations: [
          `Freire, P. (1970). Pedagogy of the oppressed. Herder and Herder.`,
          `James, C. E., & Turner, T. (2017). Towards race and equity in education: The schooling of Black students in the Greater Toronto area. York University.`,
        ],
      },
      {
        n: 4,
        statement: `L’utilisation des théories du développement et de l’apprentissage comme des guides, et non comme des règles, pour façonner l’enseignement. Les théories offrent des cadres utiles, mais un enseignement efficace naît de leur combinaison avec l’observation, le contexte et la connaissance de chaque élève.`,
        theory: `Les stades du développement cognitif de Jean Piaget (1973). Les quatre stades de Piaget décrivent comment la pensée des enfants passe du concret à l’abstrait, mais les tranches d’âge sont approximatives (Sprouts, 2018). Comme les enfants se développent à des rythmes différents, les théories fonctionnent mieux comme des cadres qui aident le personnel enseignant à choisir des approches selon les besoins de ses élèves (Pace, 2025).`,
        practice: `La planification adaptée au développement. Partant de l’idée que les stades sont des guides plutôt que des règles, l’exercice des regroupements par date de naissance (Birthday Cluster Exercise) amène le personnel enseignant à classer la liste de la classe par âge, à comparer ces âges avec les stades de développement, puis à ajuster la planification, l’espace ou l’approche pour chaque élève et pour l’ensemble de la classe (Responsive Classroom, 2025).`,
        example: `Du regroupement par date de naissance à l’observation, puis à la différenciation (cadre de la planification adaptée au développement)
Le regroupement par date de naissance d’une enseignante de 4e année montre que la plupart des élèves ont neuf ans; elle planifie donc une leçon de multiplication concrète avec des jetons. Pendant la leçon, elle observe qu’un élève raisonne déjà de façon abstraite et lui propose un prolongement fondé sur des équations, tandis que les autres continuent de construire des dispositions rectangulaires. On observerait l’enseignante s’ajuster sur le moment selon ce que montrent les élèves, plutôt que de garder tous les élèves sur la même tâche en raison de leur âge.`,
        citations: [
          `Pace, K. (2025, June 12). Five educational learning theories. Western Governors University. https://www.wgu.edu/blog/five-educational-learning-theories2005.html`,
          `Piaget, J. (1973). The child and reality: Problems of genetic psychology. Grossman.`,
          `Responsive Classroom. (2025, June 10). Know your students: Developmentally responsive planning. https://www.responsiveclassroom.org/know-students-developmentally-responsive-planning/`,
          `Sprouts. (2018, August 1). Piaget’s theory of cognitive development [Video]. YouTube. https://youtu.be/IhcgYgx7aAA?si=KImKB03FICCZK4Rr`,
        ],
      },
      {
        n: 5,
        statement: `Comprendre que les élèves vivent de nombreuses transitions : au cours de la journée scolaire, d’une année d’études et d’une école à l’autre, et vers les itinéraires postsecondaires. Comprendre ces changements et accompagner les élèves dans des options comme la formation en apprentissage, le collège, l’université, l’entrée sur le marché du travail, la vie communautaire et les programmes spécialisés pour les élèves ayant des besoins particuliers en matière d’éducation favorise leur réussite.`,
        theory: `La théorie de la transition de Nancy Schlossberg. Schlossberg (1981) soutenait que la capacité d’une personne à faire face à une transition dépend de quatre facteurs, les « 4 S » : la situation, le soi, les soutiens et les stratégies. Comme les transitions touchent les élèves sur les plans scolaire, social et affectif, la préparation et le soutien comptent à chaque étape (Evans et al., 2018).`,
        practice: `Le programme de planification d’apprentissage, de carrière et de vie de l’Ontario. Partant des facteurs de Schlossberg, ce cadre de la maternelle à la 12e année renforce les facteurs « soi » et « stratégies ». De la maternelle à la 6e année, les élèves consignent leurs forces, leurs intérêts et leurs objectifs dans un portfolio « Tout sur moi », qui devient la base du plan d’itinéraire d’études (PIE) qu’ils commencent en 7e année (Ontario Ministry of Education, 2013).`,
        example: `Réflexion de fin d’année sur le portfolio (cadre de la planification d’apprentissage, de carrière et de vie)
À la fin de la 6e année, les élèves revoient leur portfolio « Tout sur moi », déterminent comment leurs forces et leurs intérêts ont évolué depuis la maternelle et se fixent un objectif pour la 7e année. On observerait les élèves réfléchir à leur cheminement sur plusieurs années et emporter leurs objectifs dans leur nouvelle école, plutôt que de repartir à zéro à chaque transition.`,
        credit: `H/T: NA; H/T: SS`,
        citations: [
          `Evans, D., Borriello, G. A., & Field, A. P. (2018). A review of the academic and psychological impact of the transition to secondary education. Frontiers in Psychology, 9, Article 1482. https://doi.org/10.3389/fpsyg.2018.01482`,
          `Ontario Ministry of Education. (2013). Creating pathways to success: An education and career/life planning program for Ontario schools. https://www.edu.gov.on.ca/eng/document/policy/cps/creatingpathwayssuccess.pdf`,
          `Schlossberg, N. K. (1981). A model for analyzing human adaptation to transition. The Counseling Psychologist, 9(2), 2-18.`,
        ],
      },
      {
        n: 6,
        statement: `Comprendre et soutenir les transitions des élèves tout au long de leur continuum de croissance individuel, de la maternelle à la 12e année (p. ex., entrée à l’école, changement d’activité, de milieu, de classe, d’année d’études, de programme, d’école ou de communauté), y compris les transitions des élèves nouvellement arrivés en Ontario et des élèves autochtones qui passent d’un milieu rural à un centre urbain.`,
        theory: `La théorie des systèmes écologiques d’Urie Bronfenbrenner. Bronfenbrenner (1979) décrivait les transitions comme des passages entre les différents milieux de l’enfant; les élèves s’adaptent le mieux lorsque la maison, l’école et la communauté restent liées.`,
        practice: `La planification des transitions (NPP 156). Partant de l’idée que des milieux liés entre eux favorisent l’adaptation, l’Ontario exige des plans de transition pour les élèves ayant un PEI à chaque étape, y compris l’entrée à l’école et les changements d’année d’études, de programme ou d’école (Ontario Ministry of Education, 2013). Le personnel enseignant étend ces principes à tous les élèves au moyen d’horaires visuels et d’avertissements avant les changements d’activité, d’un accueil continu plutôt que ponctuel des élèves nouvellement arrivés, de relations avec les familles (Ontario Ministry of Education, 2008) et d’occasions de valorisation culturelle pour les élèves autochtones (Cameron et al., 2024).`,
        example: `Jumelage et liens avec la communauté (cadre des systèmes écologiques)
Un élève nouvellement arrivé est jumelé à un camarade qui lui montre les routines de la classe et l’accompagne à la récréation, tandis qu’un élève autochtone qui arrive d’une communauté rurale est mis en contact avec le personnel du conseil scolaire responsable de l’éducation autochtone. On observerait chaque nouvel élève soutenu par des relations qui relient l’école, la famille et la communauté, plutôt que de vivre la transition seul.`,
        credit: `H/T: SP`,
        citations: [
          `Bronfenbrenner, U. (1979). The ecology of human development: Experiments by nature and design. Harvard University Press.`,
          `Cameron, R. E., Bird, M. J., Naveau-Heyde, D. D., & Fuller-Thomson, E. (2024). Creating a “sense of belonging” for Indigenous students: Identifying supports to improve access and success in post-secondary education. AlterNative: An International Journal of Indigenous Peoples. https://doi.org/10.1177/11771801241291242`,
          `Ontario Ministry of Education. (2008). Supporting English language learners: A practical guide for Ontario educators, grades 1–8. Queen’s Printer for Ontario.`,
          `Ontario Ministry of Education. (2013). Policy/program memorandum 156: Supporting transitions for students with special education needs. https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-156`,
        ],
      },
      {
        n: 7,
        statement: `Le rôle du personnel enseignant dans le choix de pratiques appropriées à utiliser auprès de chaque élève pour favoriser une transition réussie vers l’école secondaire.`,
        theory: `L’adéquation entre le stade et l’environnement (stage-environment fit) de Jacquelynne Eccles. Eccles et al. (1993) soutenaient que la motivation et le rendement diminuent lorsque le milieu scolaire ne correspond pas aux besoins développementaux des jeunes adolescents. Vers la 7e année, les élèves ont besoin de plus d’autonomie et de relations plus étroites, mais le passage à une école plus grande offre souvent moins des deux et fait passer des objectifs de maîtrise aux objectifs de performance (Evans et al., 2018).`,
        practice: `Le soutien structuré à la transition (Evans et al., 2018). Partant de l’idée que le nouveau milieu doit correspondre aux besoins des élèves, le personnel enseignant de 6e année répond aux inquiétudes précises des élèves (comme se perdre ou être victime d’intimidation) avant le changement d’école, renforce les relations entre pairs, offre un soutien supplémentaire aux élèves ayant des besoins particuliers en matière d’éducation ou un réseau social fragile, et contribue aux plans de transition prévus par la NPP 156 pour les élèves ayant un PEI (Ontario Ministry of Education, 2013).`,
        example: `Boîte à inquiétudes et soutiens ciblés (cadre du soutien structuré à la transition)
Au printemps, la personne enseignante de 6e année invite les élèves à déposer de façon anonyme leurs inquiétudes au sujet du passage à une nouvelle école en 7e année, puis y répond lors d’une discussion de classe avec des élèves de 7e année en visite. Pour un élève qui a un PEI et peu d’amitiés, elle organise une visite supplémentaire de la nouvelle école et le met en contact avec un camarade de classe qui fréquentera la même école. On observerait des soutiens adaptés aux facteurs de risque de chaque élève, plutôt qu’une seule journée d’accueil pour tout le monde.`,
        citations: [
          `Eccles, J. S., Midgley, C., Wigfield, A., Buchanan, C. M., Reuman, D., Flanagan, C., & Mac Iver, D. (1993). Development during adolescence: The impact of stage-environment fit on young adolescents’ experiences in schools and in families. American Psychologist, 48(2), 90-101.`,
          `Evans, D., Borriello, G. A., & Field, A. P. (2018). A review of the academic and psychological impact of the transition to secondary education. Frontiers in Psychology, 9, Article 1482. https://doi.org/10.3389/fpsyg.2018.01482`,
          `Ontario Ministry of Education. (2013). Policy/program memorandum 156: Supporting transitions for students with special education needs. https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-156`,
        ],
      },
      {
        n: 8,
        statement: `Le rôle du personnel enseignant dans le choix de pratiques appropriées à utiliser auprès de chaque élève pour favoriser une transition réussie après l’école secondaire.`,
        theory: `La théorie du développement de carrière tout au long de la vie (Life-Span, Life-Space) de Donald Super. Super (1980) soutenait que le développement de carrière se déroule par stades tout au long de la vie, à commencer par un stade de « croissance » durant l’enfance, où la curiosité, le jeu et les premiers intérêts façonnent la façon dont les enfants se perçoivent et perçoivent le monde du travail. Une transition réussie après l’école secondaire dépend des fondations bâties durant ces premières années.`,
        practice: `L’exploration de carrière au moyen de liens avec la communauté. Dans le prolongement du stade de croissance de Super, la politique ontarienne Tracer son itinéraire vers la réussite s’attend à ce que les élèves de la maternelle à la 6e année explorent un éventail de possibilités de travail et d’apprentissage, y compris la formation en apprentissage, le collège, l’université et le marché du travail, au moyen d’activités en classe et d’engagement communautaire, afin qu’aucun itinéraire ne leur soit inconnu lorsqu’ils devront plus tard prendre des décisions (Ontario Ministry of Education, 2013).`,
        example: `Panel de parcours familiaux (cadre de l’exploration de carrière)
Une personne enseignante de 4e année invite des membres des familles et de la communauté qui ont suivi des parcours différents, comme une personne électricienne formée en apprentissage, une personne éducatrice de la petite enfance formée au collège et une personne ingénieure formée à l’université, à expliquer comment elles ont choisi leur métier. Les élèves notent ensuite dans leur portfolio « Tout sur moi » un itinéraire qui les intéresse. On observerait les élèves poser des questions sur chaque itinéraire et voir chacun d’eux présenté comme une option tout aussi valable.`,
        citations: [
          `Ontario Ministry of Education. (2013). Creating pathways to success: An education and career/life planning program for Ontario schools. https://www.edu.gov.on.ca/eng/document/policy/cps/creatingpathwayssuccess.pdf`,
          `Super, D. E. (1980). A life-span, life-space approach to career development. Journal of Vocational Behavior, 16(3), 282-298.`,
        ],
      },
    ],
    lesson: {
      subtopic: `Le rôle du personnel enseignant dans le choix de pratiques appropriées à utiliser auprès de chaque élève pour favoriser une transition réussie vers l’école secondaire.`,
      title: `De l’inquiétude à l’émerveillement : se préparer pour la 7e année`,
      grade: `6`,
      subject: `Éducation physique et santé`,
      objective: `Les élèves nommeront leurs inquiétudes et leurs espoirs au sujet du passage à une nouvelle école en 7e année, et choisiront un soutien et une stratégie d’adaptation pour chaque inquiétude.`,
      curriculumLink: `Éducation physique et santé, de la 1re à la 8e année (2019), domaine A : Habiletés d’apprentissage socioémotionnel, utilisation d’habiletés et de stratégies pour faire face au stress et aux défis.`,
      stages: [
        {
          name: `Mise en situation`,
          body: `L’enseignante montre une photo de l’école que la plupart des élèves fréquenteront en 7e année et leur demande d’écrire sur un papillon adhésif un mot qui décrit comment ils se sentent par rapport à l’an prochain; elle ajoute ensuite les papillons, de façon anonyme, à un mur de mots de la classe.`,
        },
        {
          name: `Modelage`,
          body: `L’enseignante raconte une transition qu’elle a vécue, comme ses débuts dans une nouvelle école ou un nouvel emploi, et montre comment remplir un tableau en T intitulé « Inquiétude : soutien ou stratégie », en nommant une inquiétude qu’elle a eue, une personne qui l’a aidée et une stratégie qui a fonctionné.`,
        },
        {
          name: `Vérification de la compréhension`,
          body: `« Avec votre partenaire, prenez 30 secondes pour nommer une personne de votre nouvelle école qui pourrait aider un nouvel élève de 7e année. » L’enseignante circule, écoute et invite une équipe à partager sa réponse (p. ex., une conseillère ou un conseiller en orientation, une enseignante ou un enseignant, ou un élève plus âgé).`,
        },
        {
          name: `Pratique guidée`,
          body: `L’enseignante lit des inquiétudes courantes tirées d’une boîte à inquiétudes anonyme (p. ex., se perdre, se faire des amis, avoir plus de devoirs, l’intimidation), et la classe fait un remue-méninges sur une grande feuille pour trouver des soutiens et des stratégies pour chacune (Evans et al., 2018).`,
        },
        {
          name: `Objectivation`,
          body: `L’enseignante rappelle qu’il est normal de se sentir nerveux à l’approche d’une transition et que du soutien est offert, puis invite quelques élèves à nommer une chose qu’ils ont hâte de vivre.`,
        },
        {
          name: `Pratique autonome`,
          body: `Les élèves remplissent un plan personnel « De l’inquiétude à l’émerveillement » où ils notent deux inquiétudes, un soutien et une stratégie pour chacune, ainsi qu’une question qu’ils aimeraient poser pendant la visite de leur nouvelle école. L’enseignante examine les plans en privé pour repérer les élèves qui pourraient avoir besoin d’un soutien supplémentaire pour la transition.`,
        },
      ],
      references: [
        `Evans, D., Borriello, G. A., & Field, A. P. (2018). A review of the academic and psychological impact of the transition to secondary education. Frontiers in Psychology, 9, Article 1482. https://doi.org/10.3389/fpsyg.2018.01482`,
        `Ontario Ministry of Education. (2019). The Ontario curriculum, grades 1–8: Health and physical education.`,
      ],
    },
    exitTicket: {
      learned: [
        `L’adéquation entre le stade et l’environnement explique pourquoi le passage à une nouvelle école vers la 7e année peut faire baisser la motivation : les jeunes adolescents ont besoin de plus d’autonomie et de relations plus étroites, mais les écoles plus grandes offrent souvent moins des deux et mettent davantage l’accent sur la performance.`,
        `Les 4 S de Schlossberg (situation, soi, soutiens, stratégies) offrent une façon claire de comprendre pourquoi une même transition peut être facile pour un élève et très difficile pour un autre.`,
        `Une recherche sur le cloisonnement des cours dans la région du Grand Toronto a révélé que les élèves noirs étaient placés de façon disproportionnée dans des cours appliqués, ce qui montre comment une structure qui semble neutre peut limiter les itinéraires des élèves.`,
      ],
      interesting: [
        `L’exercice des regroupements par date de naissance est un outil de planification simple qui combine les connaissances sur le développement et les élèves que j’ai devant moi, et qui met en pratique l’idée que les théories sont des guides et non des règles.`,
        `Evans et al. (2018) ont constaté que les élèves qui exprimaient plus d’inquiétudes avant la transition avaient tendance à vivre une transition plus difficile. S’occuper des inquiétudes tôt est une mesure pratique et réalisable pour le personnel enseignant de 6e année.`,
      ],
      wonder: [
        `Pourquoi certains élèves quittent l’immersion française lorsqu’ils changent d’école en 7e année, et comment le personnel enseignant de 6e année pourrait soutenir les élèves qui veulent poursuivre le programme.`,
      ],
    },
  },
  {
    slug: `05-english-french-language-learners`,
    number: 5,
    title: `Soutenir les élèves qui apprennent l’anglais et le français`,
    source: `Guide de ressources sur l’agrément de l’Ordre des enseignantes et des enseignants de l’Ontario (2023)`,
    summary: `En Ontario, les personnes candidates à l’enseignement doivent comprendre comment soutenir les élèves apprenant l’anglais (ELL) au moyen d’un enseignement, d’une évaluation et d’une collaboration fondés sur des données probantes. Elles doivent adopter des approches axées sur les forces, personnaliser l’apprentissage, travailler efficacement avec tous les élèves et collaborer avec les familles et les professionnels pour planifier un enseignement adapté qui mise sur les forces.

Les personnes candidates à l’enseignement en Ontario qui se destinent au système de langue française doivent pouvoir soutenir les élèves apprenant le français grâce à un enseignement culturellement adapté et fondé sur des données probantes. Elles doivent comprendre la diversité de la francophonie, appliquer les principes de l’acquisition d’une langue seconde, adopter des approches axées sur les forces, et planifier une évaluation et un enseignement précis et personnalisés pour les élèves nouvellement arrivés et les élèves apprenant le français.`,
    elements: [
      {
        n: 1,
        statement: `Une approche axée sur les forces pour soutenir les élèves de diverses cultures et langues qui apprennent l’anglais comme langue additionnelle. Reconnaître que leurs diverses identités linguistiques sont considérées comme une ressource essentielle pour l’enseignement et l’apprentissage.`,
        theory: `La théorie socioculturelle, fondée sur les travaux de Lev Vygotsky. Vygotsky (1978) soutenait que l’apprentissage se fait par l’interaction sociale et que la langue est un outil culturel essentiel de la pensée. Des chercheurs ont plus tard nommé cette approche « théorie socioculturelle » et l’ont appliquée à l’apprentissage des langues secondes (Lantolf, 2000). Comme les élèves pensent avec les langues qu’ils possèdent déjà, leurs langues familiales deviennent des outils pour construire une nouvelle compréhension en anglais plutôt que des obstacles.`,
        practice: `La pédagogie culturellement durable (Culturally Sustaining Pedagogy) de Django Paris. Paris (2012) soutenait que l’école devrait faire plus que tolérer les langues et les cultures familiales des élèves : elle devrait les entretenir activement. En pratique, le personnel enseignant invite les élèves à utiliser leur langue familiale pour construire leur compréhension avant de passer à l’anglais, avec le soutien de leurs pairs, de phrases à compléter et du modelage (Regional Educational Laboratory Pacific, 2025). Cette approche axée sur les forces part aussi de ce que les élèves savent déjà faire, au moyen d’une activité diagnostique et d’une rétroaction qui nomme une force, un besoin et une prochaine étape (Lalor, 2020).`,
        example: `Récit dans la langue familiale et mur de mots apparentés (pédagogie culturellement durable)
Après une lecture à voix haute, les élèves qui partagent une même langue familiale discutent ensemble de l’histoire dans cette langue, puis la racontent en anglais à l’aide de phrases à compléter. La classe ajoute à un mur de mots multilingue les mots apparentés qu’elle remarque, comme family/familia/famille. On observerait les élèves passer d’une langue à l’autre pour construire le sens, et leurs langues familiales affichées parmi les outils d’apprentissage de la classe.`,
        credit: `H/T: AR`,
        citations: [
          `Lalor, A. A. (2020, October 22). 3 steps to developing an asset-based approach to teaching. Edutopia. https://www.edutopia.org/article/3-steps-developing-asset-based-approach-teaching`,
          `Lantolf, J. P. (Ed.). (2000). Sociocultural theory and second language learning. Oxford University Press.`,
          `Paris, D. (2012). Culturally sustaining pedagogy: A needed change in stance, terminology, and practice. Educational Researcher, 41(3), 93-97.`,
          `Regional Educational Laboratory Pacific. (2025). What is culturally sustaining pedagogy? [Infographic]. U.S. Department of Education, Institute of Education Sciences. https://ies.ed.gov/rel-pacific/2025/01/culturally-sustaining-pedagogy-infographic`,
          `Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.`,
        ],
      },
      {
        n: 2,
        statement: `Les programmes de perfectionnement de l’anglais et les modèles de soutien (par exemple, l’utilisation de la ressource Steps to English Proficiency (STEP) pour appuyer la programmation).`,
        theory: `L’hypothèse de l’input de Stephen Krashen. Krashen (1982) soutenait que les apprenants acquièrent une nouvelle langue lorsqu’ils comprennent des messages légèrement au-delà de leur niveau actuel, ce qu’il appelait l’input compréhensible. Si l’input est trop facile, les élèves acquièrent peu d’éléments nouveaux, et s’il est trop difficile, ils ne peuvent pas lui donner de sens; l’enseignement doit donc correspondre au niveau actuel de chaque apprenant.`,
        practice: `Steps to English Proficiency (STEP). Partant de l’idée que l’input doit correspondre au niveau de chaque apprenant, la ressource STEP de l’Ontario comprend une évaluation initiale et des continuums de la langue observables en communication orale, en lecture et en écriture, organisés par cycle. Le personnel enseignant se sert de ces continuums pour suivre les progrès de chaque élève et choisir des soutiens qui lui permettent d’apprendre le contenu de son année d’études tout en développant son anglais (Ontario Ministry of Education, 2015). STEP aide aussi le personnel enseignant à garder en tête la distinction de Cummins (2008) entre la langue de communication courante (BICS), qui se développe souvent en deux ans environ, et la langue scolaire (CALP), qui peut prendre de cinq à sept ans (Bilash, 2011).`,
        example: `Observer la langue pendant une discussion scientifique (cadre STEP)
Pendant une leçon de sciences de 3e année sur les besoins des plantes, l’enseignante fournit la phrase à compléter « The plant needs _____ because _____. » Pendant que les élèves s’expriment, elle note sur le continuum oral de STEP quels élèves utilisent la phrase de façon autonome et lesquels ont encore besoin de supports visuels ou d’une ou d’un partenaire. On observerait l’enseignante consigner des comportements langagiers observables et ajuster les soutiens pour la leçon suivante, tandis que tous les élèves participent au même contenu scientifique.`,
        citations: [
          `Bilash, O. (2011). BICS/CALP: Basic interpersonal communicative skills vs. cognitive academic language proficiency. University of Alberta. https://sites.ualberta.ca/~obilash/bics%20calp.html`,
          `Cummins, J. (2008). BICS and CALP: Empirical and theoretical status of the distinction. In B. Street & N.H. Hornberger (Eds.), Encyclopedia of language and education: Vol. 2. Literacy (2nd ed., pp. 71-83). Springer.`,
          `Krashen, S. D. (1982). Principles and practice in second language acquisition. Pergamon Press.`,
          `Ontario Ministry of Education. (2015). STEP: Steps to English proficiency: A guide for users. Queen’s Printer for Ontario.`,
        ],
      },
      {
        n: 3,
        statement: `Prendre conscience de ses propres biais et comportements culturels afin d’apprécier la diversité et le caractère unique des élèves.`,
        theory: `L’iceberg culturel d’Edward T. Hall. Hall (1976) comparait la culture à un iceberg : les éléments visibles, comme la nourriture, les vêtements et les fêtes, se trouvent au-dessus de la surface, tandis que les valeurs, les styles de communication et les conceptions du temps et du respect se trouvent en dessous. Comme les valeurs culturelles du personnel enseignant se situent surtout sous la surface, il peut mal interpréter des différences culturelles de comportement.`,
        practice: `La réflexion sur les biais implicites. Partant de l’idée que nos propres normes nous sont souvent invisibles, le personnel enseignant peut examiner ses associations inconscientes à l’aide d’outils comme le test d’associations implicites (IAT), qui mesure la rapidité avec laquelle les gens associent des groupes à des concepts positifs ou négatifs (Greenwald et al., 1998). Les résultats ne sont pas un diagnostic, mais un point de départ pour la réflexion : ils aident le personnel enseignant à remarquer les endroits où ses présupposés peuvent influencer sa perception des élèves. Des activités simples comme « J’aimerais que mon prof sache… » invitent aussi les élèves à communiquer ce que le personnel enseignant pourrait ne pas voir autrement (Villalobos, 2020).`,
        example: `Prononciation des noms, « J’aimerais que mon prof sache… » et journal des biais (pédagogie culturellement adaptée)
Au début de l’étape, une enseignante de 5e année apprend à prononcer correctement le nom de chaque élève et invite les élèves à compléter anonymement, sur des papillons adhésifs, la phrase « J’aimerais que mon prof sache… ». Chaque semaine, elle note aussi dans un journal à quels élèves elle donne la parole et comment elle interprète leur comportement. On observerait l’enseignante ajuster ses attentes et ses routines en fonction de ce que les élèves communiquent, plutôt que de ses premières impressions.`,
        citations: [
          `Greenwald, A. G., McGhee, D. E., & Schwartz, J. L. K. (1998). Measuring individual differences in implicit cognition: The implicit association test. Journal of Personality and Social Psychology, 74(6), 1464-1480.`,
          `Hall, E. T. (1976). Beyond culture. Anchor Press.`,
          `Villalobos, J. (2020, January 23). An asset-based approach to support ELL success. ASCD. https://www.ascd.org/el/articles/an-asset-based-approach-to-support-ell-success`,
        ],
      },
      {
        n: 4,
        statement: `Des milieux d’apprentissage qui reflètent, mobilisent et célèbrent la diversité culturelle et linguistique de tous les élèves.`,
        theory: `Les miroirs, fenêtres et portes vitrées coulissantes (Mirrors, Windows, and Sliding Glass Doors) de Rudine Sims Bishop. Bishop (1990) soutenait que les livres peuvent être des miroirs qui reflètent la vie des lecteurs, ou des fenêtres et des portes vitrées coulissantes ouvertes sur la vie des autres. Lorsque les élèves ne voient jamais leurs cultures et leurs langues reflétées en classe, ils peuvent en conclure qu’ils n’y sont pas valorisés, tandis que les autres élèves perdent l’occasion de comprendre les personnes qui les entourent.`,
        practice: `Les textes identitaires. Partant de l’idée que les élèves ont besoin de se reconnaître dans leurs apprentissages, Cummins et Early (2011) décrivent les textes identitaires comme des récits, des poèmes ou des projets que les élèves créent, souvent à la fois dans leur langue familiale et en anglais, et qu’ils présentent à leurs camarades et à leur famille. Ces textes renvoient aux élèves une image positive de leur identité et traitent le multilinguisme comme une réussite.`,
        example: `Livres bilingues « D’où je viens » (cadre des textes identitaires)
Les élèves de 4e année écrivent de courts livres sur leur famille et leur communauté, en anglais et dans leur langue familiale, avec l’aide de membres de leur famille, et les ajoutent à la bibliothèque de la classe aux côtés d’albums illustrés présentant des cultures diverses. On observerait des élèves qui lisent les livres les uns des autres, des étiquettes multilingues et des affiches de bienvenue dans la classe, et des familles invitées à une célébration de partage.`,
        citations: [
          `Bishop, R. S. (1990). Mirrors, windows, and sliding glass doors. Perspectives: Choosing and Using Books for the Classroom 6(3), ix-xi.`,
          `Cummins, J., & Early, M. (Eds). (2011). Identity texts: The collaborative creation of power in multilingual schools. Trentham Books`,
        ],
      },
      {
        n: 5,
        statement: `L’utilisation de ressources numériques pour aider les élèves apprenant l’anglais à devenir des apprenants autonomes.`,
        theory: `L’autonomie de l’apprenant selon Henri Holec. Holec (1981) définissait l’autonomie de l’apprenant comme la capacité de prendre en charge son propre apprentissage, ce qui comprend fixer des objectifs, choisir le matériel et les méthodes, suivre ses progrès et évaluer les résultats. Il soutenait que l’autonomie n’est pas innée, mais qu’elle est une capacité qui se développe lorsqu’on donne graduellement aux apprenants des occasions de prendre des décisions sur leur apprentissage.`,
        practice: `Des soutiens réglables dans le Lecteur immersif de Microsoft. Partant de l’idée que l’autonomie se développe lorsque les apprenants prennent des décisions sur leur propre apprentissage, le Lecteur immersif permet aux élèves de choisir les soutiens dont ils ont besoin. Il offre un dictionnaire illustré avec prononciation et peut traduire le texte affiché dans plus de 70 langues. Les élèves peuvent commencer par traduire un document entier, puis passer graduellement à la traduction de mots isolés à mesure que leur anglais progresse (Microsoft Education Team, 2023).`,
        example: `De la traduction complète à la traduction mot à mot (Lecteur immersif)
Une élève de 3e année nouvellement arrivée commence une unité de sciences en lisant le texte entièrement traduit dans sa langue première, avec la lecture à voix haute activée. À mesure que son vocabulaire anglais s’enrichit, elle passe à la traduction mot à mot et n’utilise le dictionnaire illustré que pour les termes inconnus. On observerait l’élève choisir elle-même ses soutiens et avoir besoin de moins de traduction au fil du temps, sans attendre la personne enseignante.`,
        citations: [
          `Holec, H. (1981). Autonomy and foreign language learning. Pergamon Press.`,
          `Microsoft Education Team. (2023, June). How to enhance reading instruction: A guide to Immersive Reader for educators. Microsoft Education Blog. https://www.microsoft.com/en-us/education/blog/2023/06/how-to-enhance-reading-instruction-a-guide-to-immersive-reader-for-educators/`,
        ],
      },
      {
        n: 6,
        statement: `Une communication efficace avec les parents et tuteurs des élèves apprenant l’anglais.`,
        theory: `Les sphères d’influence qui se chevauchent de Joyce Epstein. Epstein (1995) soutenait que les élèves apprennent mieux lorsque les familles, l’école et la communauté travaillent ensemble, et a défini six types de participation : le rôle parental, la communication, le bénévolat, l’apprentissage à la maison, la prise de décisions et la collaboration avec la communauté. La communication doit aller dans les deux sens, pour que les familles soient des partenaires et non de simples destinataires de l’information.`,
        practice: `Une communication bidirectionnelle accessible. Partant de ce modèle de partenariat, le guide de l’Ontario sur le soutien aux élèves apprenant l’anglais insiste sur l’accueil des familles, le recours à des interprètes et à de l’information traduite dans la mesure du possible, et la connaissance du parcours linguistique et scolaire des élèves (Ontario Ministry of Education, 2008). Des outils comme le Lecteur immersif peuvent aussi traduire les messages écrits dans la langue que préfèrent les familles (Microsoft Education Team, 2023).`,
        example: `Rencontre avec interprète et bulletin d’information visuel (cadre du partenariat avec les familles)
Avant une rencontre de parents, une enseignante de 2e année fait appel à une ou un interprète par l’intermédiaire du conseil scolaire et prépare des échantillons du travail de l’élève pour montrer ses progrès de façon visuelle. Elle interroge la famille sur les forces et les intérêts de l’enfant à la maison, puis envoie chaque semaine un court bulletin d’information avec des images et des messages clés traduits. On observerait des familles qui posent des questions et communiquent de l’information, et non seulement des familles qui écoutent.`,
        citations: [
          `Epstein, J. L. (1995). School/family/community partnerships: Caring for the children we share. Phi Delta Kappan, 76(9), 701-712.`,
          `Microsoft Education Team. (2023, June). How to enhance reading instruction: A guide to Immersive Reader for educators. Microsoft Education Blog. https://www.microsoft.com/en-us/education/blog/2023/06/how-to-enhance-reading-instruction-a-guide-to-immersive-reader-for-educators/`,
          `Ontario Ministry of Education. (2008). Supporting English language learners: A practical guide for Ontario educators, grades 1-8. Queen’s Printer for Ontario.`,
        ],
      },
      {
        n: 7,
        statement: `La valeur, les éléments, les sensibilités et les défis de l’apprentissage de la langue tout au long de la vie en contexte minoritaire : insécurité linguistique, interdépendance de la langue et de la culture, diversité des répertoires de la langue française, communication orale et écrite authentique, écoute et expression orale`,
        theory: `Le capital linguistique de Pierre Bourdieu. Bourdieu (1991) soutenait que l’école et les institutions accordent plus de valeur aux variétés de langue des groupes dominants. En contexte minoritaire, cela peut mener à l’insécurité linguistique, c’est-à-dire au sentiment que sa façon de parler français est moins correcte qu’un français « standard », ce qui peut amener les élèves à parler moins ou à passer à l’anglais.`,
        practice: `Valoriser les nombreux répertoires de la francophonie. Dans cette optique, les écoles de langue française de l’Ontario ont pour mandat de protéger, de valoriser et de transmettre la langue et la culture françaises, sous l’orientation de la Politique d’aménagement linguistique (Ontario Ministry of Education, 2023, 2026). Le personnel enseignant présente les variétés régionales du français comme légitimes, crée des raisons authentiques d’écouter, de parler, de lire et d’écrire en français, et utilise des médias de langue française comme IDÉLLO de Groupe Média TFO (Ontario Ministry of Education, 2026).`,
        example: `Centre d’écoute « Voix de la francophonie » (aménagement linguistique)
Les élèves de 5e année écoutent de courts enregistrements d’enfants de communautés franco-ontariennes, acadiennes, québécoises, haïtiennes et sénégalaises qui décrivent leurs plats préférés. Ils notent les mots qui diffèrent, comme « char » et « voiture », puis enregistrent leur propre description pour la présenter à une ou un partenaire en classe. On observerait les élèves considérer chaque variété comme du français correct et parler français pour un auditoire imaginé.`,
        citations: [
          `Bourdieu, P. (1991). Language and symbolic power (J. B. Thompson, Ed.; G. Raymond & M. Adamson, Trans.). Harvard University Press.`,
          `Ontario Ministry of Education. (2023). Aménagement linguistique policy for French-language education. King’s Printer for Ontario. https://files.ontario.ca/edu_5/edu-amenagement-linguistique-policy-french-language-education-en-2023-04-04.pdf`,
          `Ontario Ministry of Education. (2026, August 12). French-language education. Government of Ontario. https://www.ontario.ca/page/french-language-education`,
        ],
      },
      {
        n: 8,
        statement: `Une approche axée sur les forces pour soutenir les élèves de diverses cultures et langues qui apprennent le français comme langue additionnelle.`,
        theory: `L’hypothèse de l’interdépendance linguistique de Jim Cummins. Cummins (1979) soutenait que les habiletés et les concepts appris dans une langue se transfèrent à une autre, parce que les langues partagent une compétence sous-jacente commune. Un élève capable de résumer ou de faire des inférences dans sa langue première peut appliquer ces habiletés en français; les langues premières soutiennent donc l’apprentissage du français au lieu de lui faire concurrence.`,
        practice: `Liens plurilingues et plans de soutien temporaires. Le personnel enseignant invite les élèves à comparer le français avec les langues qu’ils connaissent déjà et à se servir de ces langues pour planifier et construire le sens. Les écoles de langue française de l’Ontario accueillent les élèves nouvellement arrivés qui ne parlent ni l’anglais ni le français et leur offrent des plans de soutien temporaires fondés sur les besoins d’apprentissage de chaque élève (Ontario Ministry of Education, 2026).`,
        example: `Silhouettes de portrait langagier (approche plurilingue)
Les élèves nouvellement arrivés colorient le contour d’un corps pour montrer les langues présentes dans leur vie, comme l’arabe en famille, l’anglais avec les amis et le français à l’école, puis expliquent leur portrait à la classe en français à l’aide d’amorces de phrases. La classe construit un mur de mots plurilingue qui compare des mots comme « école », « school » et « madrasa ». On observerait les élèves présenter toutes leurs langues comme des forces.`,
        citations: [
          `Cummins, J. (1979). Linguistic interdependence and the educational development of bilingual children. Review of Educational Research, 49(2), 222-251.`,
          `Ontario Ministry of Education. (2026, August 12). French-language education. Government of Ontario. https://www.ontario.ca/page/french-language-education`,
        ],
      },
      {
        n: 9,
        statement: `Le rôle du personnel enseignant d’une école de langue française dans une communauté de langue minoritaire (p. ex., servir de modèle culturel, soutenir les familles qui ont besoin de ressources en français)`,
        theory: `L’enseignant, un passeur culturel de Jean-Michel Zakhartchouk. Zakhartchouk (1999) décrivait l’enseignant comme un médiateur culturel qui aide les élèves à entrer en contact avec la culture et à bâtir leur propre rapport avec elle. En contexte minoritaire, le personnel des écoles de langue française constitue souvent le principal modèle francophone des élèves; la façon dont il utilise et célèbre le français détermine donc si les élèves y voient une langue vivante.`,
        practice: `Élargir l’espace francophone. L’Ontario s’attend à ce que les écoles de langue française soient des lieux accueillants où les parents comprennent le mandat de l’école et où la communauté contribue à élargir l’« espace francophone », c’est-à-dire l’espace physique ou virtuel où les francophones interagissent (Ontario Ministry of Education, 2026). Le personnel peut orienter les familles vers des ressources comme « Parents partenaires en éducation », Etablissement.org et IDÉLLO.`,
        example: `Soirée des familles (ressources en français pour les familles)
Une école de langue française organise une soirée où le personnel enseignant montre comment lire un album illustré en français, explique aux familles comment accéder à IDÉLLO à la maison et présente des ateliers de Parents partenaires en éducation. Le personnel parle chaleureusement en français avec les familles, quel que soit leur niveau de langue, et offre du soutien en anglais ou dans d’autres langues au besoin. On observerait des familles repartir avec des ressources en français qu’elles peuvent utiliser à la maison.`,
        citations: [
          `Ontario Ministry of Education. (2026, August 12). French-language education. Government of Ontario. https://www.ontario.ca/page/french-language-education`,
          `Zakhartchouk, J.-M. (1999). L’enseignant, un passeur culturel. ESF.`,
        ],
      },
      {
        n: 10,
        statement: `Des stratégies d’enseignement et d’apprentissage en situation minoritaire, y compris les fondements d’une approche culturelle de l’enseignement, qui intègrent des influences locales, canadiennes et mondiales.`,
        theory: `La théorie des systèmes écologiques d’Urie Bronfenbrenner. Bronfenbrenner (1979) soutenait que le développement de l’enfant est façonné par une série de systèmes imbriqués, qui commencent par la famille et l’école et s’étendent vers l’extérieur jusqu’à la communauté, à la société et à la culture. Comme ces systèmes s’influencent mutuellement, un apprentissage qui part de l’environnement immédiat des élèves leur donne une base pour comprendre les liens nationaux et mondiaux.`,
        practice: `Une approche culturelle de l’enseignement. Partant de l’idée que l’apprentissage des élèves commence près de chez eux et s’élargit vers l’extérieur, le cadre de l’approche culturelle de l’Ontario pour les écoles de langue française demande au personnel enseignant d’aider les élèves à bâtir un rapport personnel avec la culture francophone en intégrant des repères francophones locaux, canadiens et mondiaux à l’apprentissage quotidien (Ontario Ministry of Education, 2009).`,
        example: `Du Jour des Franco-Ontariens et des Franco-Ontariennes à la francophonie mondiale (approche culturelle)
Le 25 septembre, Jour des Franco-Ontariens et des Franco-Ontariennes, les élèves de 6e année interviewent un membre de la communauté francophone locale et apprennent la signification du drapeau franco-ontarien. Au cours des mois suivants, ils comparent leur communauté avec une communauté acadienne du Nouveau-Brunswick et une communauté francophone d’un autre pays, puis présentent leurs constats le 20 mars, Journée internationale de la Francophonie. On observerait les élèves relier leur identité locale à la francophonie canadienne et mondiale.`,
        citations: [
          `Bronfenbrenner, U. (1979). The ecology of human development: Experiments by nature and design. Harvard University Press.`,
          `Ontario Ministry of Education. (2009). Une approche culturelle de l’enseignement pour l’appropriation de la culture dans les écoles de langue française de l’Ontario : Cadre d’orientation et d’intervention. Imprimeur de la Reine pour l’Ontario.`,
        ],
      },
      {
        n: 11,
        statement: `L’utilisation de ressources numériques pour soutenir à la fois les élèves apprenant le français et les élèves nouvellement arrivés, et pour les aider à devenir des apprenants autonomes.`,
        theory: `La métacognition de John Flavell. Flavell (1976) décrivait la métacognition comme la conscience et le contrôle de sa propre pensée, par exemple remarquer qu’on ne comprend pas et choisir une stratégie pour y remédier. Les apprenants de langue autonomes utilisent la métacognition pour surveiller leur compréhension et décider des soutiens dont ils ont besoin.`,
        practice: `Des ressources numériques autodirigées. Dans cette optique, le personnel enseignant montre aux élèves apprenant le français et aux élèves nouvellement arrivés comment utiliser des outils numériques de façon autonome. IDÉLLO offre du contenu éducatif en français conçu pour les élèves des écoles de langue française (Ontario Ministry of Education, 2026), et le Lecteur immersif peut lire un texte français à voix haute et traduire des mots dans la langue première de l’élève (Microsoft Education Team, 2023).`,
        example: `Liste de vérification « Je comprends / Je ne comprends pas » avec IDÉLLO (autosurveillance métacognitive)
Une élève de 4e année nouvellement arrivée regarde une courte vidéo d’IDÉLLO et fait une pause à la fin de chaque section pour cocher « Je comprends » ou « Je ne comprends pas ». Lorsqu’elle ne comprend pas, elle réécoute la section ou utilise le Lecteur immersif pour traduire les mots clés, puis ajoute un nouveau mot à son journal de mots numérique. On observerait l’élève décider quel soutien utiliser sans attendre la personne enseignante.`,
        citations: [
          `Flavell, J. H. (1976). Metacognitive aspects of problem solving. In L. B. Resnick (Ed.), The nature of intelligence (pp. 231-235). Erlbaum.`,
          `Microsoft Education Team. (2023, June). How to enhance reading instruction: A guide to Immersive Reader for educators. Microsoft Education Blog. https://www.microsoft.com/en-us/education/blog/2023/06/how-to-enhance-reading-instruction-a-guide-to-immersive-reader-for-educators/`,
          `Ontario Ministry of Education. (2026, August 12). French-language education. Government of Ontario. https://www.ontario.ca/page/french-language-education`,
        ],
      },
    ],
    lesson: {
      subtopic: `La valeur, les éléments, les sensibilités et les défis de l’apprentissage de la langue tout au long de la vie en contexte minoritaire : insécurité linguistique, interdépendance de la langue et de la culture, diversité des répertoires de la langue française, communication orale et écrite authentique, écoute et expression orale.`,
      title: `Voix de la francophonie`,
      grade: `5`,
      subject: `Français langue seconde (immersion en français)`,
      objective: `Les élèves écouteront des francophones de différentes communautés de la francophonie, relèveront au moins deux différences de vocabulaire régionales et expliqueront que chaque variété est du français correct.`,
      curriculumLink: `Français langue seconde : immersion en français, de la 1re à la 8e année (2013), domaine A : Écoute, A3. Compréhension interculturelle, démontrer une compréhension de renseignements sur les communautés francophones et leurs cultures.`,
      stages: [
        {
          name: `Mise en situation`,
          body: `L’enseignante affiche une carte du monde de la francophonie et demande : « Où parle-t-on français dans le monde? » Les élèves placent des papillons adhésifs aux endroits où ils pensent qu’on parle français, y compris des communautés de l’Ontario et d’ailleurs au Canada.`,
        },
        {
          name: `Modelage`,
          body: `L’enseignante fait écouter un court enregistrement d’un enfant québécois qui décrit son repas préféré et réfléchit à voix haute en remplissant un tableau en T intitulé « Mot entendu / Autre mot que je connais », par exemple en notant « char » à côté de « voiture ». Elle explique que les deux mots sont du français correct, utilisé dans des communautés différentes.`,
        },
        {
          name: `Vérification de la compréhension`,
          body: `« Avec ton partenaire, prends 30 secondes : est-ce que « char » est du bon français? Pourquoi? » L’enseignante circule, écoute et invite une équipe à expliquer que les mots régionaux sont du français correct.`,
        },
        {
          name: `Pratique guidée`,
          body: `En petits groupes, les élèves font la rotation entre des enregistrements d’enfants de communautés franco-ontariennes, acadiennes, haïtiennes et sénégalaises, et ajoutent au moins deux mots à leur tableau en T à chaque station. La classe met ensuite ses découvertes en commun et construit un mur de mots « Mots de la francophonie ».`,
        },
        {
          name: `Objectivation`,
          body: `L’enseignante rappelle que le français se parle de bien des façons dans le monde et que chaque variété est du français correct, puis invite quelques élèves à nommer un mot préféré qu’ils ont appris aujourd’hui.`,
        },
        {
          name: `Pratique autonome`,
          body: `Les élèves enregistrent une description de 30 secondes de leur plat préféré en français pour la présenter à une ou un partenaire en classe, en utilisant tous les mots de leur propre répertoire en français. L’enseignante écoute les enregistrements pour évaluer l’écoute et l’expression orale, et pour repérer les élèves qui pourraient avoir besoin de soutien pour prendre confiance.`,
        },
      ],
      references: [
        `Ontario Ministry of Education. (2013). The Ontario curriculum: French as a second language: Core French, grades 4–8; Extended French, grades 4–8; French Immersion, grades 1–8. Queen’s Printer for Ontario.`,
        `Ontario Ministry of Education. (2023). Aménagement linguistique policy for French-language education. King’s Printer for Ontario. https://files.ontario.ca/edu_5/edu-amenagement-linguistique-policy-french-language-education-en-2023-04-04.pdf`,
      ],
    },
    exitTicket: {
      learned: [
        `Cummins distingue la langue de communication courante (BICS), qui se développe souvent en deux ans environ, de la langue scolaire (CALP), qui peut prendre de cinq à sept ans; l’aisance à converser ne signifie donc pas qu’un élève est prêt à accomplir des tâches scolaires sans soutien.`,
        `Les écoles de langue française de l’Ontario ont pour mandat de protéger, de valoriser et de transmettre la langue et la culture françaises, et les programmes ALF et PANA ont été remplacés par des plans de soutien temporaires fondés sur les besoins de chaque élève.`,
        `L’hypothèse de l’interdépendance linguistique de Cummins explique que les habiletés apprises dans une langue première se transfèrent à une nouvelle langue; les langues familiales des élèves soutiennent donc leur apprentissage du français et de l’anglais.`,
      ],
      interesting: [
        `Le Lecteur immersif permet au personnel enseignant d’ajuster le soutien en traduisant un document entier ou seulement des mots isolés, ce qui en fait un outil pratique pour développer graduellement l’autonomie des élèves.`,
        `L’insécurité linguistique est liée au concept de capital linguistique de Bourdieu, car les élèves peuvent sentir que leur français régional a moins de valeur lorsque l’école traite une seule variété comme la norme.`,
      ],
      wonder: [
        `Comment le personnel enseignant peut-il corriger le français des élèves sans leur donner l’impression que leur français est moins légitime?`,
      ],
    },
  },
  {
    slug: `06-special-education-needs`,
    number: 6,
    title: `Soutenir les élèves ayant des besoins particuliers`,
    source: `Guide de ressources sur l’agrément de l’Ordre des enseignantes et des enseignants de l’Ontario (2023)`,
    summary: `Les personnes candidates à l’enseignement doivent savoir comment soutenir des apprenants diversifiés en utilisant la CUA, une pensée axée sur les forces et la différenciation pour planifier un enseignement personnalisé. Elles doivent miser sur les forces des élèves en collaboration avec les professionnels et les familles. Le personnel enseignant doit utiliser l’information sur les élèves pour orienter des pratiques pédagogiques qui permettent aux élèves ayant des besoins particuliers en matière d’éducation de participer pleinement à la vie scolaire.`,
    elements: [
      {
        n: 1,
        statement: `Une conscience des obstacles discriminatoires et systémiques auxquels font face les élèves ayant des besoins particuliers en matière d’éducation, et de la façon dont le personnel enseignant crée les conditions de la réussite grâce à une approche axée sur les forces, qui mise sur les forces et les intérêts des élèves pour répondre à leurs besoins d’apprentissage.`,
        theory: `Le modèle social du handicap de Mike Oliver. Oliver (1990) soutenait que le handicap est moins créé par la déficience d’une personne que par les obstacles présents dans la société, comme les lieux inaccessibles, l’enseignement rigide et les faibles attentes. La question que se pose la personne enseignante n’est donc plus de savoir ce qui ne va pas chez l’élève, mais ce qui doit changer dans le milieu d’apprentissage.`,
        practice: `La planification axée sur les forces. Le personnel enseignant de l’Ontario commence par examiner à la fois les attentes du curriculum et les forces et les besoins de chaque élève, puis combine la conception universelle et la différenciation pédagogique pour offrir un enseignement personnalisé, guidé par la conviction que l’équité n’est pas l’uniformité (Ontario Ministry of Education, 2024). Les intérêts des élèves deviennent des portes d’entrée dans l’apprentissage (Hanson, 2026).`,
        example: `Profil des forces et des intérêts (approche axée sur les forces)
Au début de l’étape, une personne enseignante de 4e année demande à chaque élève de remplir avec sa famille un sondage sur ses forces et ses intérêts. Un élève qui a un PEI en lecture et qui adore le hockey lit des articles sur le hockey très motivants, rédigés dans une langue plus facile à lire, et utilise des statistiques de joueurs en mathématiques. On observerait l’élève exercer des habiletés de son année d’études grâce à un sujet qui lui tient à cœur, et la personne enseignante nommer les forces de l’élève dans sa rétroaction.`,
        citations: [
          `Hanson, J. (2026, January 13). Instructional strategies for special education. Special Education Journey. https://special-education-journey.com/instructional-strategies-for-special-education/`,
          `Oliver, M. (1990). The politics of disablement. Macmillan.`,
          `Ontario Ministry of Education. (2024). Planning for students with special education needs. Curriculum and Resources. https://www.dcp.edu.gov.on.ca/en/program-planning/considerations-for-program-planning/planning-for-students-with-special-education-needs`,
        ],
      },
      {
        n: 2,
        statement: `La conviction que tous les élèves peuvent apprendre et que la réussite renforce le sentiment d’efficacité.`,
        theory: `Le sentiment d’efficacité personnelle d’Albert Bandura. Bandura (1977) soutenait que le sentiment d’efficacité personnelle, c’est-à-dire la croyance d’une personne en sa capacité de réussir, se développe surtout grâce aux expériences de maîtrise, mais aussi en voyant des pairs réussir, en recevant des encouragements et selon la façon dont la personne interprète son propre stress. Chaque réussite rend l’élève plus disposé à relever le défi suivant.`,
        practice: `Les tâches à paliers. La planification des programmes en Ontario repose sur la conviction que tous les élèves peuvent réussir (Ontario Ministry of Education, 2024). Le personnel enseignant crée des expériences de maîtrise au moyen de tâches à paliers, dans lesquelles les élèves travaillent sur le même sujet à différents niveaux de défi, par choix ou selon l’attribution de la personne enseignante, avec des regroupements flexibles pour éviter la stigmatisation (Robinson & Hutchinson, 2014).`,
        example: `Suivi des réussites « Je peux » (tâches à paliers)
Pendant une unité sur l’addition en 2e année, les élèves peuvent choisir parmi trois cartes de tâches de difficulté croissante et colorier, sur une fiche de suivi personnelle, chaque énoncé « Je peux » qu’ils réussissent. On observerait les élèves tenter des cartes plus difficiles après avoir réussi les plus faciles, et la personne enseignante montrer à chaque élève sa fiche de suivi pendant les entretiens pour lui faire voir ses progrès.`,
        citations: [
          `Bandura, A. (1977). Self-efficacy: Toward a unifying theory of behavioral change. Psychological Review. 84(2), 191-215. https://doi.org/10.1037/0033-295X.84.2.191`,
          `Ontario Ministry of Education. (2024). Planning for students with special education needs. Curriculum and Resources. https://www.dcp.edu.gov.on.ca/en/program-planning/considerations-for-program-planning/planning-for-students-with-special-education-needs`,
          `Robinson, K., & Hutchinson, N. L. (2014, August 6). Tiered approaches to the education of students with learning disabilities. LD@school. https://www.ldatschool.ca/tiered-approaches-to-the-education-of-students-with-learning-disabilities/`,
        ],
      },
      {
        n: 3,
        statement: `La connaissance des causes multiples et complexes des problèmes de comportement et des pratiques exemplaires pour y répondre de façon positive, dans le respect de la dignité de l’enfant.`,
        theory: `La hiérarchie des besoins d’Abraham Maslow. Maslow (1943) soutenait que les gens sont motivés par des besoins qui se succèdent, en commençant par les besoins physiologiques et de sécurité, puis les besoins d’appartenance et d’estime. Lorsque ces besoins ne sont pas comblés, les élèves peuvent manifester des comportements difficiles; le personnel enseignant cherche donc le besoin derrière le comportement plutôt que de punir l’enfant.`,
        practice: `Les stratégies de comportement positif. Le personnel enseignant considère le comportement comme une forme de communication et y répond de façon proactive au moyen d’attentes élaborées avec les élèves, de rappels préventifs, de signaux non verbaux et de rétroaction positive fréquente (Morin, 2026). Pour les problèmes persistants, il collabore avec des spécialistes à une évaluation fonctionnelle du comportement.`,
        example: `Lire le message derrière le comportement (stratégies de comportement positif)
Un élève de 3e année quitte souvent sa place pendant l’écriture. La personne enseignante note quand cela se produit, remarque une tendance et lui offre la dictée vocale, un signal non verbal et une pause active (Hanson, 2026; Morin, 2026). On observerait l’élève rester engagé et la personne enseignante le rediriger en privé, sans réprimande publique.`,
        citations: [
          `Hanson, J. (2026, January 13). Instructional strategies for special education. Special Education Journey. https://special-education-journey.com/instructional-strategies-for-special-education/`,
          `Maslow, A. H. (1943). A theory of human motivation. Psychological Review, 50(4), 370-396. https://doi.org/10.1037/h0054346`,
          `Morin, A. (2026, March 12). Positive behavior strategies: A guide for teachers. Understood. https://www.understood.org/en/articles/what-are-positive-behavior-strategies`,
        ],
      },
      {
        n: 4,
        statement: `Le contexte plus large de l’éducation de l’enfance en difficulté, y compris les plans d’enseignement individualisés (PEI), le processus du comité d’identification, de placement et de révision (CIPR), la planification des transitions et les règlements et documents de politique pertinents (p. ex., la Loi de 2005 sur l’accessibilité pour les personnes handicapées de l’Ontario (LAPHO) et la Commission ontarienne des droits de la personne (CODP)).`,
        theory: `La théorie de l’autodétermination d’Edward Deci et de Richard Ryan. Deci et Ryan (1985) soutenaient que les gens sont le plus motivés lorsque trois besoins sont comblés : l’autonomie, la compétence et l’affiliation. Dans la planification de l’éducation de l’enfance en difficulté, cela justifie la participation de l’élève et de sa famille aux décisions concernant son apprentissage et son avenir.`,
        practice: `Le CIPR, le PEI et le plan de transition. Un comité d’identification, de placement et de révision (CIPR) identifie l’élève comme élève en difficulté et décide de son placement. Le PEI consigne les forces et les besoins de l’élève, ses adaptations et toute attente modifiée ou différente, et le parent, ainsi que l’élève s’il a 16 ans ou plus, doit être consulté lors de son élaboration. Chaque PEI comprend un plan de transition (Ontario Ministry of Education, 2017). La LAPHO établit des normes provinciales d’accessibilité et, selon l’OHRC (2018), les écoles ont l’obligation de prendre des mesures d’adaptation pour les élèves handicapés, jusqu’à la limite du préjudice injustifié.`,
        example: `Révision du PEI avec la participation de l’élève (planification des transitions)
Avant qu’une élève de 6e année passe à une nouvelle école pour la 7e année, la personne titulaire de la classe, l’enseignante ou l’enseignant en éducation de l’enfance en difficulté, les parents et l’élève se réunissent pour revoir son PEI. L’élève indique quelles adaptations l’aident le plus, comme du temps supplémentaire et la dictée vocale, et l’équipe ajoute à son plan de transition une visite de la nouvelle école. On observerait l’élève parler de son propre apprentissage et la famille contribuer en tant que partenaire.`,
        citations: [
          `Accessibility for Ontarians with Disabilities Act, 2005, S.O. 2005, c. 11. https://www.ontario.ca/laws/statute/05a11`,
          `Deci, E. L., & Ryan, R. M. (1985). Intrinsic motivation and self-determination in human behavior. Plenum Press.`,
          `Ontario Human Rights Commission. (2018). Policy on accessible education for students with disabilities.`,
          `Ontario Ministry of Education. (2017). Special education in Ontario, kindergarten to grade 12: Policy and resource guide. https://www.ontario.ca/document/special-education-ontario-policy-and-resource-guide-kindergarten-grade-12`,
        ],
      },
      {
        n: 5,
        statement: `La variété et l’étendue des besoins d’apprentissage des élèves et des anomalies, les stratégies fondées sur des données probantes, y compris l’analyse comportementale appliquée (ACA), et le rôle des partenaires et organismes communautaires ainsi que des parents et tuteurs.`,
        theory: `Le conditionnement opérant de B. F. Skinner. Skinner (1953) soutenait que le comportement est façonné par ses conséquences : les comportements renforcés deviennent plus probables, et ceux qui ne le sont pas deviennent moins probables.`,
        practice: `L’analyse comportementale appliquée (ACA) et les partenariats. L’ACA décompose les habiletés en petites étapes et renforce les progrès, et les conseils scolaires de l’Ontario doivent offrir aux élèves ayant un trouble du spectre de l’autisme des programmes d’éducation de l’enfance en difficulté qui recourent aux méthodes de l’ACA, s’il y a lieu (Ontario Ministry of Education, 2007). Lorsqu’un CIPR identifie un élève comme élève en difficulté, il utilise l’une des cinq catégories de la Loi sur l’éducation de l’Ontario : comportement, communication, ordre intellectuel, ordre physique ou anomalies multiples (Ontario Ministry of Education, 2017). Le personnel enseignant collabore avec les parents et tuteurs ainsi qu’avec des partenaires communautaires, comme les thérapeutes en ACA et les orthophonistes.`,
        example: `Analyse visuelle des tâches pour la routine du matin (ACA)
Un élève de 1re année ayant un trouble du spectre de l’autisme apprend la routine d’arrivée du matin grâce à une séquence d’images divisée en petites étapes, et reçoit des félicitations et une activité de son choix après chaque étape réussie. La personne enseignante transmet les mêmes images à la famille et au thérapeute en ACA de l’élève dans la communauté. On observerait un langage et un renforcement cohérents à la maison et à l’école, et l’élève accomplir de plus en plus d’étapes de façon autonome au fil du temps.`,
        citations: [
          `Ontario Ministry of Education. (2007). Policy/Program Memorandum No. 140: Incorporating methods of applied behaviour analysis (ABA) into programs for students with autism spectrum disorders (ASD).`,
          `Ontario Ministry of Education. (2017). Special education in Ontario, kindergarten to grade 12: Policy and resource guide. https://www.ontario.ca/document/special-education-ontario-policy-and-resource-guide-kindergarten-grade-12`,
          `Skinner, B. F. (1953). Science and human behavior. Macmillan.`,
        ],
      },
      {
        n: 6,
        statement: `Les usages des technologies d’aide et des technologies adaptées pour soutenir l’apprentissage des élèves.`,
        theory: `La théorie de la charge cognitive de John Sweller. Sweller (1988) soutenait que la mémoire de travail ne peut traiter qu’une quantité limitée d’information à la fois, et que l’apprentissage en souffre lorsqu’une tâche la surcharge. Pour un élève ayant un trouble de la lecture ou de l’écriture, décoder les mots ou former les lettres peut accaparer la mémoire de travail nécessaire pour comprendre et exprimer des idées.`,
        practice: `Les technologies d’aide. La synthèse vocale, la dictée vocale et des logiciels comme Read&Write et Kurzweil, qui lisent le texte à voix haute en surlignant les mots, réduisent ces exigences pour que les élèves puissent accéder au matériel de leur année d’études et montrer ce qu’ils savent (Hanson, 2026; Robinson & Hutchinson, 2014). Offrir ces outils à toute la classe, selon la conception universelle de l’apprentissage, permet de ne singulariser aucun élève (Rose & Meyer, 2002). En Ontario, les conseils scolaires peuvent recevoir du financement pour l’équipement dont les élèves ont besoin au moyen de la somme liée à l’équipement personnalisé (Ontario Ministry of Education, 2017).`,
        example: `Choix d’outils pour un projet de recherche (CUA)
Pendant un projet de recherche en sciences de 5e année, tous les élèves peuvent lire leurs sources avec la synthèse vocale, noter leurs idées avec la dictée vocale et faire leur présentation au moyen d’un diaporama ou d’un enregistrement audio. Un élève ayant un trouble d’apprentissage en écriture rédige le brouillon de son rapport à l’aide de la dictée vocale. On observerait tous les élèves choisir leurs outils, si bien que personne n’est singularisé parce qu’il utilise la technologie.`,
        citations: [
          `Hanson, J. (2026, January 13). Instructional strategies for special education. Special Education Journey. https://special-education-journey.com/instructional-strategies-for-special-education/`,
          `Ontario Ministry of Education. (2017). Special education in Ontario, kindergarten to grade 12: Policy and resource guide. https://www.ontario.ca/document/special-education-ontario-policy-and-resource-guide-kindergarten-grade-12`,
          `Robinson, K., & Hutchinson, N. L. (2014, August 6). Tiered approaches to the education of students with learning disabilities. LD@school. https://www.ldatschool.ca/tiered-approaches-to-the-education-of-students-with-learning-disabilities/`,
          `Rose, D. H., & Meyer, A. (2002). Teaching every student in the digital age: Universal design for learning. ASCD.`,
          `Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12(2), 257-285. https://doi.org/10.1207/s15516709cog1202_4`,
        ],
      },
      {
        n: 7,
        statement: `Des soutiens et des stratégies comportementaux efficaces et proactifs (p. ex., l’ACA).`,
        theory: `La psychologie individuelle d’Alfred Adler. Adler (1927) soutenait que tout comportement a un but et qu’il est orienté vers un objectif, et que le besoin central d’une personne est d’appartenir à un groupe social et de s’y sentir importante. Lorsque ce besoin n’est pas comblé, une personne peut agir de façon découragée ou contre-productive; un comportement ne peut donc se comprendre qu’à la lumière de l’objectif qu’il sert.`,
        practice: `Des routines prévisibles et des rôles significatifs. Le personnel enseignant prévient les comportements difficiles en maintenant des routines quotidiennes constantes, en découpant les travaux en plus petites parties, en espaçant les pauses entre les tâches et en utilisant des repères visuels et auditifs, comme une minuterie, pour signaler les transitions (The SHARE Team, 2012). Comme l’objectif derrière bien des comportements est l’appartenance, le personnel enseignant donne aussi aux élèves des rôles significatifs dans la communauté de la classe.`,
        example: `Tâches orales par étapes et rôle quotidien en classe (soutiens proactifs)
Dans une classe d’immersion française de 4e année d’une école de langue anglaise, un élève se ferme et refuse de parler pendant les activités orales en français. L’enseignante divise chaque tâche orale en courtes étapes : planifier avec une ou un partenaire, répéter, puis présenter une phrase. Elle utilise une minuterie pour chaque étape et confie à l’élève le rôle quotidien d’animer la routine du calendrier en français à l’aide d’une carte aide-mémoire. On observerait l’élève parler français plus souvent et participer en tant que membre valorisé de la classe.`,
        citations: [
          `Adler, A. (1927). Understanding human nature (W. B. Wolfe, Trans.). Greenberg.`,
          `The SHARE Team. (2012, September 12). Effective teaching strategies for special education. Resilient Educator. https://resilienteducator.com/classroom-resources/effective-teaching-strategies-for-special-education/`,
        ],
      },
      {
        n: 8,
        statement: `Les façons de penser autochtones et l’utilisation d’une perspective culturelle pour soutenir les élèves ayant des besoins particuliers en matière d’éducation.`,
        theory: `La théorie de l’éducation autochtone de Gregory Cajete. Cajete (1994), chercheur tewa, soutenait que l’éducation autochtone est holistique et relationnelle : l’apprentissage relie l’intellect, le corps, les émotions et l’esprit, et se développe par les relations avec la famille, la communauté et le monde naturel. Selon cette vision, le lieu et la communauté d’une personne sont des sources centrales de savoir, et non un simple arrière-plan.`,
        practice: `L’approche à double perspective et les principes d’apprentissage des Premiers Peuples. Dans le prolongement de cette idée, l’approche à double perspective (Etuaptmumk), un principe directeur mi’kmaw transmis par l’Aîné Albert Marshall, invite le personnel enseignant à combiner les forces des savoirs autochtones et occidentaux, par exemple en associant des soutiens fondés sur des données probantes à la connaissance que la communauté a de l’enfant (Bartlett et al., 2012). Les principes d’apprentissage des Premiers Peuples (First Peoples Principles of Learning), élaborés par des éducatrices et éducateurs des Premières Nations, décrivent l’apprentissage comme holistique, expérientiel et relationnel, et comme exigeant de la patience et du temps (First Nations Education Steering Committee, 2008).`,
        example: `Cercle familial et apprentissage axé sur le territoire (approche à double perspective)
Avant une réunion sur le PEI d’un élève des Premières Nations, la personne enseignante invite la famille et, avec son accord, une intervenante ou un intervenant communautaire ou une ou un Aîné, à une conversation en cercle sur les dons et les objectifs de l’élève. Le plan de l’élève comprend des activités axées sur le territoire, comme compter et trier des objets ramassés à l’extérieur, en plus des technologies d’aide. On observerait les connaissances de la famille façonner le plan et l’identité de l’élève se refléter dans les soutiens.`,
        citations: [
          `Bartlett, C., Marshall, M., & Marshall, A. (2012). Two-Eyed Seeing and other lessons learned within a co-learning journey of bringing together Indigenous and mainstream knowledges and ways of knowing. Journal of Environmental Studies and Sciences, 2(4), 331-340. https://doi.org/10.1007/s13412-012-0086-8`,
          `Cajete, G. (1994). Look to the mountain: An ecology of Indigenous education. Kivakí Press.`,
          `First Nations Education Steering Committee. (2008). First Peoples principles of learning.`,
        ],
      },
    ],
    lesson: {
      subtopic: `La connaissance des causes multiples et complexes des problèmes de comportement et des pratiques exemplaires pour y répondre de façon positive, dans le respect de la dignité de l’enfant.`,
      title: `Ma boîte à outils pour me calmer`,
      grade: `3`,
      subject: `Éducation physique et santé (immersion en français)`,
      objective: `Les élèves nommeront au moins deux émotions et choisiront deux stratégies d’apaisement qu’ils peuvent utiliser de façon autonome lorsqu’ils se sentent bouleversés.`,
      curriculumLink: `Le curriculum de l’Ontario, de la 1re à la 8e année : Éducation physique et santé (2019), domaine A : Habiletés d’apprentissage socioémotionnel, A1.1 Reconnaissance et gestion des émotions et A1.2 Gestion du stress et adaptation.`,
      stages: [
        {
          name: `Mise en situation`,
          body: `L’enseignante montre des photos de visages d’enfants et demande : « Comment se sent cette personne? Comment le sais-tu? » Les élèves nomment des émotions comme content, triste, fâché et inquiet, et l’enseignante les note sur une affiche.`,
        },
        {
          name: `Modelage`,
          body: `L’enseignante réfléchit à voix haute : « Quand je me sens frustrée, mon coeur bat vite. Je respire lentement en comptant jusqu’à quatre. » Elle montre trois stratégies d’apaisement, soit la respiration du carré, un étirement et demander de l’aide à un adulte, et explique que ces émotions sont normales et que tout le monde a besoin de stratégies.`,
        },
        {
          name: `Vérification de la compréhension`,
          body: `« Montre-moi avec ton pouce : est-ce que c’est correct de se sentir fâché? » Puis : « Avec ton partenaire, nomme une stratégie que tu peux utiliser quand tu te sens inquiet. » L’enseignante circule et écoute.`,
        },
        {
          name: `Pratique guidée`,
          body: `Les élèves font la rotation entre quatre courtes stations pour essayer chaque stratégie : la respiration du carré, les étirements, le dessin calme et la façon de demander de l’aide (« Est-ce que je peux avoir de l’aide? »). À chaque station, ils collent un autocollant sur une feuille à côté des stratégies qui les aident le plus.`,
        },
        {
          name: `Objectivation`,
          body: `La classe crée ensemble une affiche du « coin calme » avec les stratégies qu’elle a trouvées utiles, et l’enseignante rappelle aux élèves qu’ils peuvent utiliser le coin calme chaque fois qu’ils en ont besoin, sans demander la permission devant la classe.`,
        },
        {
          name: `Pratique autonome`,
          body: `Chaque élève fabrique une carte de stratégies personnelle comprenant deux stratégies d’apaisement, un dessin et une amorce de phrase (« Quand je me sens ______, je peux ____. ») à garder sur son pupitre. Plus tard, l’enseignante peut utiliser un signal non verbal pour inviter discrètement l’élève à consulter sa carte, ce qui respecte sa dignité.`,
        },
      ],
      references: [
        `Morin, A. (2026, March 12). Positive behavior strategies: A guide for teachers. Understood. https://www.understood.org/en/articles/what-are-positive-behavior-strategies`,
        `Ontario Ministry of Education. (2019). The Ontario curriculum, grades 1-8: Health and physical education. Queen’s Printer for Ontario.`,
      ],
    },
    exitTicket: {
      learned: [
        `L’approche à paliers de l’Ontario comprend une programmation universelle de palier 1 pour tous les élèves, une intervention en petits groupes de palier 2 et un soutien individuel intensif de palier 3, ce qui remplace l’attente de l’échec par une intervention précoce.`,
        `Les adaptations changent la façon dont l’élève apprend ou démontre ses apprentissages sans changer les attentes de son année d’études, tandis que les attentes modifiées changent le nombre ou la complexité des attentes et doivent être consignées dans le PEI.`,
        `En Ontario, chaque PEI comprend un plan de transition, et le parent, ainsi que l’élève s’il a 16 ans ou plus, doit être consulté lors de l’élaboration du PEI.`,
      ],
      interesting: [
        `Les adaptations devraient être la première option dans la planification des programmes, et la case PEI du bulletin n’est pas cochée lorsque l’élève reçoit uniquement des adaptations.`,
        `Les stratégies de comportement positif considèrent le comportement comme une forme de communication, et la recherche suggère de faire cinq commentaires positifs pour chaque correction.`,
      ],
      wonder: [
        `Comment le personnel enseignant en immersion française peut-il faire la différence entre un élève qui développe encore son français et un élève qui pourrait avoir une difficulté d’apprentissage, afin que les élèves ayant des besoins particuliers en matière d’éducation reçoivent du soutien pour rester en immersion française?`,
      ],
    },
  },
  {
    slug: `07-mental-health-wellbeing-belonging`,
    number: 7,
    title: `Santé mentale, bien-être et appartenance`,
    source: `Guide de ressources sur l’agrément de l’Ordre des enseignantes et des enseignants de l’Ontario (2023)`,
    summary: `Les personnes candidates à l’enseignement doivent comprendre comment la santé mentale, le bien-être et l’appartenance influent sur le rendement des élèves, et appliquer une approche axée sur les forces dans leur pratique. Elles ont la responsabilité de promouvoir le bien-être universel, de reconnaître quand des élèves pourraient avoir besoin d’un soutien supplémentaire et de comprendre les processus par lesquels les élèves et les familles accèdent aux services. Le personnel enseignant doit collaborer avec les élèves, les familles et les professionnels pour cerner les forces de chacun et répondre aux besoins d’apprentissage.`,
    elements: [
      {
        n: 1,
        statement: `Reconnaître que les élèves peuvent tirer profit du développement de leur capacité à reconnaître et à gérer le stress, à établir et à maintenir des relations saines, et à réfléchir sur eux-mêmes pour mieux se comprendre.`,
        theory: `Le modèle transactionnel du stress et de l’adaptation (Lazarus & Folkman, 1984). Le stress ne vient pas seulement d’un événement. Il vient de la façon dont une personne évalue cet événement et juge si elle dispose des ressources pour y faire face. Comme l’évaluation et l’adaptation peuvent s’apprendre, les élèves peuvent développer leur capacité à reconnaître ce qui les stresse, à remarquer leurs propres réactions et à choisir une stratégie d’adaptation.`,
        practice: `La ressource Santé mentale au quotidien en classe (School Mental Health Ontario, 2019). Cette ressource offre au personnel enseignant de courtes pratiques fondées sur des données probantes à intégrer aux routines quotidiennes. Elles sont organisées selon les mêmes habiletés d’apprentissage socioémotionnel que le domaine A du curriculum d’éducation physique et santé de l’Ontario, notamment reconnaître et gérer ses émotions, gérer le stress et s’adapter, établir des relations saines et développer la conscience de soi (Ontario Ministry of Education, 2019).`,
        example: `Un accueil du matin où chaque élève déplace une épingle à linge sur une affiche « Comment je me sens? », et où la personne enseignante fait un suivi discret auprès des élèves qui semblent en avoir besoin.
La classe pratique une stratégie d’apaisement, comme la lente « respiration du ballon », avant un test ou après la récréation; la personne enseignante la modèle et précise dans quelles situations elle peut aider.
Les élèves trient des cartes de situations en « petit problème » et « gros problème » et associent chacune à une stratégie d’adaptation, comme prendre une pause, parler à une amie ou à un ami, ou demander l’aide d’un adulte.
Une question de journal en fin de journée : « Aujourd’hui, je me suis senti(e) ___ quand ___. J’ai réagi en ___. »`,
        citations: [
          `Lazarus, R. S., & Folkman, S. (1984). Stress, appraisal, and coping. Springer.`,
          `Ontario Ministry of Education. (2019). The Ontario curriculum, grades 1–8: Health and physical education. Queen’s Printer for Ontario.`,
          `School Mental Health Ontario. (2019). Everyday mental health classroom resource. https://smho-smso.ca/emhc/`,
        ],
      },
      {
        n: 2,
        statement: `Aider les élèves à développer des compétences et des qualités transférables qui peuvent améliorer leur résilience et leur bien-être, en favorisant des milieux d’apprentissage inclusifs qui sont sains, bienveillants, sécuritaires, équitables et accessibles pour tous les élèves.`,
        theory: `La résilience comme « magie ordinaire » (Masten, 2001). Masten a constaté que la résilience ne vient pas de qualités rares. Elle découle de systèmes de protection ordinaires, comme des relations bienveillantes avec des adultes, des habiletés de résolution de problèmes, l’autorégulation et un sentiment de compétence. Comme l’école peut renforcer ces systèmes, la résilience est une chose que le personnel enseignant aide à bâtir chez chaque élève.`,
        practice: `La conception universelle de l’apprentissage (CUA) (CAST, 2024). La CUA planifie les leçons dès le départ avec de multiples moyens d’engagement, de représentation, et d’action et d’expression, pour que la classe soit accessible à tous les élèves au lieu d’être ajustée plus tard pour quelques-uns. L’apprentissage pour tous, de l’Ontario, recommande la CUA comme fondement d’un enseignement inclusif (Ontario Ministry of Education, 2013).`,
        example: `Les consignes sont affichées en mots et en images, lues à voix haute et démontrées, et un horaire visuel présente le déroulement de la journée.
Les élèves choisissent comment montrer leurs apprentissages : en dessinant, en écrivant, en s’enregistrant ou en construisant une maquette.
Un coin tranquille avec des écouteurs et des objets à manipuler est ouvert à tous les élèves, sans qu’ils aient à le demander.
Le travail de groupe comporte des rôles qui changent, pour que chaque élève exerce la collaboration et la communication, deux des compétences transférables de l’Ontario.`,
        citations: [
          `CAST. (2024). Universal design for learning guidelines version 3.0. https://udlguidelines.cast.org`,
          `Masten, A. S. (2001). Ordinary magic: Resilience processes in development. American Psychologist, 56(3), 227–238. https://doi.org/10.1037/0003-066X.56.3.227`,
          `Ontario Ministry of Education. (2013). Learning for all: A guide to effective assessment and instruction for all students, kindergarten to grade 12. Queen’s Printer for Ontario.`,
        ],
      },
      {
        n: 3,
        statement: `Le rôle de l’éducatrice ou de l’éducateur dans la reconnaissance des signes de détresse qu’un élève peut manifester et dans l’amorce du processus d’accès au soutien.`,
        theory: `La théorie des systèmes écologiques (Bronfenbrenner, 1979). L’enfant se développe au sein de systèmes imbriqués, du microsystème (famille, classe) jusqu’à la communauté et à la société dans leur ensemble. La détresse vécue dans un système, comme la maison, se manifeste souvent dans un autre, comme la classe. Comme la personne enseignante fait partie du microsystème de l’élève, elle est bien placée pour remarquer les changements et faire le lien entre la famille, l’équipe-école et les services communautaires.`,
        practice: `Remarquer, documenter et orienter au moyen du cheminement de soutien de l’école (Ontario Ministry of Education, 2013). Le personnel enseignant ne pose pas de diagnostic. Il observe les changements dans le comportement d’un élève, consigne des observations précises, consulte la direction d’école ou l’équipe de soutien de l’école et communique avec la famille selon les protocoles du conseil scolaire. La trousse Classroom Mental Health décrit le personnel enseignant comme étant dans une position unique pour repérer tôt les signes de détresse (University of Michigan Depression Center, s.d.).`,
        example: `La personne enseignante remarque qu’un élève habituellement bavard est renfermé depuis une semaine, et elle consigne des observations précises et datées, sans les interpréter.
Elle prend des nouvelles de l’élève en privé (« J’ai remarqué que tu sembles plus silencieux cette semaine. Comment ça va? ») et l’écoute sans lui promettre de garder le secret.
Elle communique ses observations à la direction ou à l’équipe-école et suit le processus d’aiguillage du conseil scolaire. Les préoccupations urgentes, comme une divulgation de préjudice, sont signalées immédiatement.
Le personnel suppléant laisse des notes détaillées pour que la personne titulaire puisse faire un suivi.`,
        citations: [
          `Bronfenbrenner, U. (1979). The ecology of human development: Experiments by nature and design. Harvard University Press.`,
          `Ontario Ministry of Education. (2013). Supporting minds: An educator’s guide to promoting students’ mental health and well-being. Queen’s Printer for Ontario.`,
          `University of Michigan Depression Center. (n.d.). Classroom mental health. https://classroommentalhealth.org`,
        ],
      },
      {
        n: 4,
        statement: `Favoriser un milieu d’apprentissage positif qui développe et soutient la santé physique et mentale, l’apprentissage socioémotionnel, l’inclusion et le sentiment d’appartenance, afin de réduire la stigmatisation liée à la santé mentale.`,
        theory: `La théorie de l’autodétermination (Ryan & Deci, 2000). Les personnes ont trois besoins psychologiques fondamentaux : l’autonomie, la compétence et l’affiliation. Lorsqu’une classe répond à ces besoins, les élèves font preuve d’une plus grande motivation et d’un meilleur bien-être. L’affiliation, c’est-à-dire le besoin de se sentir lié aux autres et de compter pour eux, est le fondement du sentiment d’appartenance.`,
        practice: `Le rassemblement du matin (Kriete & Davis, 2014). Cette routine quotidienne comporte quatre parties : une salutation, un partage, une activité de groupe et un message du matin. Elle bâtit les relations et l’appartenance chaque jour, et pas seulement quand un problème survient. C’est important, car la proportion d’élèves canadiens qui sentent que leur personnel enseignant se soucie d’eux diminue entre la 6e et la 10e année, passant de 76 % à 56 % chez les filles (Public Health Agency of Canada, 2020).`,
        example: `Les élèves s’assoient en cercle et se saluent par leur prénom, en veillant à ce que chaque élève soit salué.
Pendant le partage, la personne enseignante modèle un langage courant sur la santé mentale, comme « Tout le monde a une santé mentale, tout comme tout le monde a une santé physique », ce qui réduit la stigmatisation.
La classe établit ses normes ensemble, et chaque élève a une tâche dans la classe.
De courtes pauses actives entre les leçons favorisent la santé physique ainsi que la concentration.`,
        citations: [
          `Kriete, R., & Davis, C. (2014). The morning meeting book (3rd ed.). Center for Responsive Schools.`,
          `Public Health Agency of Canada. (2020). The health of Canadian youth: Findings from the health behaviour in school-aged children study. https://www.canada.ca/en/public-health/services/publications/science-research-data/youth-findings-health-behaviour-school-aged-children-study.html`,
          `Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. American Psychologist, 55(1), 68–78. https://doi.org/10.1037/0003-066X.55.1.68`,
        ],
      },
      {
        n: 5,
        statement: `Une compréhension de la Stratégie ontarienne d’équité et d’éducation inclusive et de la façon dont elle aide le milieu de l’éducation à cerner et à éliminer les préjugés discriminatoires et les obstacles systémiques au moyen d’une éducation anti-oppressive, afin de favoriser le rendement et le bien-être des élèves.`,
        theory: `L’éducation anti-oppressive (Kumashiro, 2000). Kumashiro décrit quatre approches : l’éducation pour l’Autre, l’éducation au sujet de l’Autre, l’éducation critique à l’égard des privilèges et de l’altérisation, et l’éducation qui transforme les élèves et la société. Cette théorie demande au personnel enseignant d’examiner comment les structures scolaires, le curriculum et les attentes privilégient certains élèves et en marginalisent d’autres.`,
        practice: `L’examen inclusif du curriculum et des ressources dans le cadre de la Stratégie ontarienne d’équité et d’éducation inclusive (Ontario Ministry of Education, 2009). La Stratégie vise à cerner et à éliminer les préjugés discriminatoires et les obstacles systémiques pour que tous les élèves puissent réussir et se sentir les bienvenus. Les pratiques inclusives en matière de curriculum et d’évaluation font partie de ses domaines d’intervention, que le personnel enseignant peut mettre en pratique en examinant ce qu’il enseigne et sa façon d’évaluer.`,
        example: `La personne enseignante passe en revue la bibliothèque de la classe à l’aide d’une liste de vérification des histoires, des familles, des langues et des capacités qui y sont représentées, et remplace les livres qui reposent sur des stéréotypes.
Une unité de sciences de 2e année sur les besoins des plantes inclut la pratique de culture haudenosaunee des Trois Sœurs comme source de savoir scientifique, et non comme un ajout culturel.
La personne enseignante cherche des tendances quant aux élèves qui sont envoyés hors de la classe ou qui obtiennent des notes plus faibles à certaines tâches, et ajuste les pratiques qui créent des obstacles.
Lorsqu’un élève fait un commentaire biaisé, la personne enseignante réagit immédiatement et en fait un moment d’apprentissage.`,
        citations: [
          `Kumashiro, K. K. (2000). Toward a theory of anti-oppressive education. Review of Educational Research, 70(1), 25–53. https://doi.org/10.3102/00346543070001025`,
          `Ontario Ministry of Education. (2009). Realizing the promise of diversity: Ontario’s equity and inclusive education strategy. Queen’s Printer for Ontario.`,
        ],
      },
      {
        n: 6,
        statement: `L’utilisation d’une approche axée sur les forces auprès de tous les élèves et de leurs familles et tuteurs.`,
        theory: `Les fonds de connaissances (Moll et al., 1992). Chaque foyer détient des connaissances et des habiletés accumulées au fil de son histoire, de sa culture et de son travail. Lorsque le personnel enseignant découvre ces fonds de connaissances, il peut fonder son enseignement sur ce que les familles savent et font déjà, au lieu de voir les élèves à travers leurs lacunes.`,
        practice: `L’engagement des familles axé sur les forces (Ontario Ministry of Education, 2010). La Politique de participation des parents de l’Ontario considère les parents comme des partenaires de l’apprentissage de leurs enfants. Elle demande aux écoles d’accueillir les familles, d’offrir différentes façons de participer et d’éliminer les obstacles à la participation.`,
        example: `Au début de l’année, les familles remplissent un formulaire « Parlez-moi de votre enfant », si possible dans leur langue familiale, qui porte sur les forces, les intérêts et les espoirs, et pas seulement sur les préoccupations.
Les membres des familles sont invités à partager des connaissances liées au curriculum, comme le jardinage, la cuisine, un métier ou une langue.
Le premier contact de la personne enseignante avec chaque famille est positif, comme un appel ou un mot pour annoncer une bonne nouvelle.
Les commentaires du bulletin et les réunions sur le PEI commencent par ce que l’élève sait faire.`,
        citations: [
          `Moll, L. C., Amanti, C., Neff, D., & González, N. (1992). Funds of knowledge for teaching: Using a qualitative approach to connect homes and classrooms. Theory Into Practice, 31(2), 132–141. https://doi.org/10.1080/00405849209543534`,
          `Ontario Ministry of Education. (2010). Parents in partnership: A parent engagement policy for Ontario schools. Queen’s Printer for Ontario.`,
        ],
      },
      {
        n: 7,
        statement: `Comprendre l’importance de préserver la confidentialité et la vie privée des élèves, ainsi que les obligations légales qui s’y rattachent.`,
        theory: `L’éthique de la sollicitude (Noddings, 1984). Noddings décrit la sollicitude comme une relation dans laquelle la personne qui prend soin porte une attention particulière aux besoins de la personne dont elle prend soin. Les élèves ne confient leurs difficultés que s’ils ont confiance que l’information sera traitée avec respect; protéger leur vie privée fait donc partie de la sollicitude. Prendre soin signifie aussi qu’une personne enseignante ne peut pas promettre le secret absolu lorsque la sécurité d’un élève est en jeu.`,
        practice: `Respecter les exigences légales de l’Ontario concernant les renseignements sur les élèves. Le dossier scolaire de l’Ontario (DSO) est un document privilégié qui ne peut servir qu’à améliorer l’enseignement offert à l’élève (Education Act, 1990, s. 266). Les renseignements personnels sont protégés par la Loi sur l’accès à l’information municipale et la protection de la vie privée (1990). Le devoir de signaler un enfant qu’on soupçonne d’avoir besoin de protection l’emporte sur la confidentialité : la personne enseignante doit faire elle-même le signalement directement auprès d’une société d’aide à l’enfance et ne peut pas confier ce devoir à quelqu’un d’autre (Child, Youth and Family Services Act, 2017, s. 125).`,
        example: `La personne enseignante ne discute des besoins d’un élève qu’avec le personnel directement concerné, dans un endroit privé, et jamais dans le corridor ou la salle du personnel.
Les PEI, les notes d’évaluation et les dossiers des élèves sont rangés dans un classeur verrouillé ou sur une plateforme sécurisée du conseil scolaire, plutôt que d’être laissés sur le bureau ou envoyés par courriel avec le nom complet de l’élève.
Lorsqu’un élève commence à faire une divulgation, la personne enseignante lui dit : « Tu comptes pour moi, et si tu me dis quelque chose qui montre que tu n’es pas en sécurité, je dois le dire à quelqu’un qui peut t’aider. »
Les photos d’élèves ne sont publiées que si la famille a signé un formulaire de consentement.`,
        citations: [
          `Child, Youth and Family Services Act, 2017, S.O. 2017, c. 14, Sched. 1, s. 125.`,
          `Education Act, R.S.O. 1990, c. E.2, s. 266.`,
          `Municipal Freedom of Information and Protection of Privacy Act, R.S.O. 1990, c. M.56.`,
          `Noddings, N. (1984). Caring: A feminine approach to ethics and moral education. University of California Press.`,
        ],
      },
    ],
    lesson: {
      subtopic: `Reconnaître que les élèves peuvent tirer profit du développement de leur capacité à reconnaître et à gérer le stress, à établir et à maintenir des relations saines, et à réfléchir sur eux-mêmes pour mieux se comprendre.`,
      title: `Ma boîte à outils pour retrouver mon calme`,
      grade: `2`,
      subject: `Éducation physique et santé (habiletés d’apprentissage socioémotionnel)`,
      objective: `Les élèves nommeront au moins deux façons dont leur corps manifeste le stress et feront la démonstration de deux stratégies d’adaptation qu’ils peuvent utiliser à l’école.`,
      curriculumLink: `Éducation physique et santé, domaine A : Habiletés d’apprentissage socioémotionnel. A1.1 : reconnaître et gérer ses émotions. A1.2 : reconnaître les sources de stress et faire face aux défis (Ontario Ministry of Education, 2019).`,
      stages: [
        {
          name: `Mise en situation`,
          body: `La personne enseignante gonfle lentement un ballon et demande : « Qu’est-ce qui arriverait si je continuais à souffler de plus en plus d’air dans ce ballon? » Après les réponses des élèves, elle explique que notre corps peut se sentir plein comme un ballon quand nous sommes inquiets, frustrés ou bouleversés. Les élèves se tournent vers une ou un partenaire pour parler d’une situation à l’école qui peut leur faire ressentir cela.`,
        },
        {
          name: `Modelage`,
          body: `La personne enseignante réfléchit à voix haute à partir d’une courte mise en situation : « Ce matin, je ne trouvais plus mes clés et j’allais être en retard. Mon cœur battait vite et mes épaules remontaient jusqu’à mes oreilles. » Elle montre ces signes sur une grande silhouette de corps, puis modèle deux outils : la respiration du ballon (inspirer par le nez en comptant jusqu’à quatre et expirer par la bouche en comptant jusqu’à quatre) et la technique serrer-relâcher (serrer fort les poings, puis relâcher). Elle ajoute un troisième outil : demander l’aide d’un adulte de confiance.`,
        },
        {
          name: `Vérification de la compréhension`,
          body: `Les élèves pointent les endroits de leur propre corps où ils pourraient ressentir du stress. La personne enseignante demande à toute la classe de faire la respiration du ballon en même temps et repère les élèves qui ont besoin d’une autre démonstration. Un pouce levé, à l’horizontale ou baissé indique le degré de confiance de chaque élève.`,
        },
        {
          name: `Pratique guidée`,
          body: `En petits groupes, les élèves reçoivent des cartes de situations, comme « J’ai perdu mon crayon juste avant un test », « Mon ami ne veut pas jouer avec moi à la récréation » ou « L’alarme d’incendie est très forte ». Pour chaque carte, le groupe décide comment le corps pourrait réagir, choisit un outil et le pratique ensemble. La personne enseignante circule et demande : « Pourquoi avez-vous choisi cet outil? »`,
        },
        {
          name: `Objectivation`,
          body: `Chaque élève écrit ou dessine sur un papillon adhésif un outil qu’il essaiera et l’ajoute à une affiche de classe « Boîte à outils pour se calmer ». L’affiche reste au mur pour que les élèves puissent s’y référer.`,
        },
        {
          name: `Pratique autonome`,
          body: `Les élèves fabriquent une carte personnelle de boîte à outils sur laquelle ils dessinent et nomment deux stratégies. Ils la gardent dans leur pupitre et colorient un visage souriant dans un registre d’une semaine chaque fois qu’ils utilisent un outil. Une note envoyée à la maison explique les outils pour que les familles puissent aussi les pratiquer.`,
        },
      ],
    },
    exitTicket: {
      learned: [
        `Un climat scolaire positif, y compris le sentiment d’appartenance, diminue fortement à mesure que les élèves vieillissent. Chez les filles, il passe de 60 % en 6e année à 31 % en 10e année (Public Health Agency of Canada, 2020).`,
        `Les programmes de prévention de la toxicomanie qui reposent uniquement sur l’information, la peur ou les appels à la morale sont en grande partie inefficaces. Les programmes interactifs axés sur les compétences de vie, avec des séances de rappel aux moments de transition clés, fonctionnent mieux (Public Safety Canada, 2018).`,
        `En Ontario, le devoir de signaler un enfant qu’on soupçonne d’avoir besoin de protection incombe personnellement à chaque membre du personnel éducatif, et le signalement doit être fait directement auprès d’une société d’aide à l’enfance (Child, Youth and Family Services Act, 2017, s. 125).`,
      ],
      interesting: [
        `Le premier conseil de Mental Health America au personnel enseignant est de « repartir à neuf » et de ne pas laisser les impressions négatives d’autres enseignants influencer la façon dont on voit un élève avant même de l’avoir rencontré.`,
        `La ressource Santé mentale au quotidien en classe de Santé mentale en milieu scolaire Ontario organise ses pratiques autour des mêmes habiletés d’apprentissage socioémotionnel que le curriculum d’éducation physique et santé de l’Ontario, afin que la santé mentale puisse faire partie des routines quotidiennes.`,
      ],
      wonder: [
        `Comment le personnel suppléant peut-il soutenir au mieux la santé mentale des élèves lors d’une affectation d’une journée, sans savoir ce qui est habituel pour chaque élève?`,
      ],
      references: [
        `Mental Health America. (n.d.). Tips for teachers: Ways to help students who struggle with emotions or behavior. https://mhanational.org/resources/tips-for-teachers-ways-to-help-students-who-struggle-with-emotions-or-behavior/`,
        `Public Safety Canada. (2018). School-based drug abuse prevention: Promising and successful programs. https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/sclbsd-drgbs/index-en.aspx`,
      ],
    },
  },
  {
    slug: `08-education-law-standards`,
    number: 8,
    title: `Droit de l’éducation et normes d’exercice`,
    source: `Guide de ressources sur l’agrément de l’Ordre des enseignantes et des enseignants de l’Ontario (2023)`,
    summary: `Les personnes candidates à l’enseignement doivent comprendre le droit de l’éducation pour connaître leurs responsabilités et les règles qui encadrent leur travail, et savoir comment créer un milieu scolaire sécuritaire et positif. Cette compréhension les aide aussi à promouvoir un comportement respectueux, à traiter les problèmes de façon appropriée et à respecter les normes élevées de conduite professionnelle attendues du personnel enseignant.`,
    labels: {
      theory: `Résumé`,
      example: `Exemple`,
    },
    partTwoTitle: `Résumé d’une affaire judiciaire en droit de l’éducation`,
    elements: [
      {
        n: 1,
        statement: `Les responsabilités professionnelles, éthiques et juridiques du personnel enseignant
Loi sur l’éducation
Loi de 1996 sur l’Ordre des enseignantes et des enseignants de l’Ontario
Politiques du ministère, et
Loi sur les services à l’enfance et à la famille
Choisir une loi. S’assurer de consulter les membres du groupe pour se répartir les documents.`,
        theory: `Loi sur l’éducation. La Loi sur l’éducation est la principale loi qui régit les écoles financées par les fonds publics en Ontario. L’article 264 énonce les fonctions de l’enseignant, qui comprennent enseigner avec diligence, encourager les élèves dans la poursuite de leurs études, inculquer par l’enseignement et par l’exemple des valeurs comme la vérité, la justice et l’humanité, maintenir l’ordre et la discipline, préparer ses cours et collaborer avec la direction d’école et les autres enseignants. La Loi protège aussi les dossiers des élèves (art. 266) et oblige le personnel des conseils scolaires à signaler à la direction d’école les incidents graves touchant des élèves (art. 300.2).`,
        practice: ``,
        example: `La personne enseignante arrive avec ses leçons planifiées et son matériel prêt, maintient une classe ordonnée avec des routines claires et modèle un langage respectueux avec les élèves et ses collègues.
Lorsqu’un élève est agressé à la récréation, la personne enseignante qui en a été témoin signale l’incident à la direction d’école le jour même, comme l’exige la Loi, plutôt que de le gérer seule.
La personne enseignante communique les progrès des élèves aux familles et tient la direction informée de ses préoccupations, ce qui reflète l’obligation de collaborer avec l’équipe-école.`,
        citations: [
          `Education Act, R.S.O. 1990, c. E.2. https://www.ontario.ca/laws/statute/90e02`,
        ],
      },
      {
        n: 2,
        statement: `Le rôle et la responsabilité du personnel enseignant dans la promotion de la sécurité à l’école :
Code de conduite des écoles de l’Ontario et droit criminel
Créer des écoles sécuritaires et tolérantes`,
        theory: `Code de conduite des écoles de l’Ontario et droit criminel. Le Code de conduite provincial (NPP 128) établit des normes de comportement pour toutes les personnes présentes dans les écoles, notamment le respect, la civilité, la citoyenneté responsable et la sécurité physique. Les conseils scolaires doivent avoir leurs propres codes, conformes à celui-ci. Certains comportements, comme les voies de fait, la possession d’une arme ou le trafic de drogues, sont aussi des infractions criminelles, et la direction d’école fait intervenir la police conformément au protocole local entre la police et le conseil scolaire. Les jeunes de 12 à 17 ans qui commettent des infractions relèvent de la Loi sur le système de justice pénale pour les adolescents.
Créer des écoles sécuritaires et tolérantes. La Loi de 2012 pour des écoles tolérantes a modifié la Loi sur l’éducation pour exiger des plans de prévention et d’intervention en matière d’intimidation, une approche de discipline progressive et du soutien aux groupes d’élèves qui font la promotion de l’équité et de l’inclusion. En vertu de la NPP 145, tous les membres du personnel des conseils scolaires qui travaillent directement avec les élèves doivent intervenir en cas de comportement inapproprié et irrespectueux.`,
        practice: ``,
        example: `La personne enseignante établit avec les élèves des normes de classe qui correspondent au code de conduite de l’école et les revoit après les congés et avant les sorties éducatives.
Lorsqu’un élève fait un commentaire homophobe, la personne enseignante intervient immédiatement, explique pourquoi le commentaire est blessant et fait un suivi auprès des deux élèves. Si la situation se répète, elle la signale à la direction d’école.
La personne enseignante supervise un club d’inclusion dirigé par des élèves ou aide les élèves à planifier une campagne de gentillesse pendant la Semaine de la sensibilisation à l’intimidation et de la prévention (la troisième semaine de novembre).`,
        citations: [
          `Accepting Schools Act, 2012, S.O. 2012, c. 5.`,
          `Ontario Ministry of Education. (2022). Policy/Program Memorandum 128: The provincial code of conduct and school board codes of conduct.`,
          `Ontario Ministry of Education. (2012). Policy/Program Memorandum 145: Progressive discipline and promoting positive student behaviour.`,
        ],
      },
      {
        n: 3,
        statement: `Le devoir de signaler du personnel enseignant, tel qu’il est énoncé dans la Loi de 2017 sur les services à l’enfance, à la jeunesse et à la famille`,
        theory: `Le devoir de signaler. En vertu de l’article 125 de la Loi de 2017 sur les services à l’enfance, à la jeunesse et à la famille, quiconque a des motifs raisonnables de soupçonner qu’un enfant a ou peut avoir besoin de protection doit le signaler directement à une société d’aide à l’enfance. Le devoir s’applique aux enfants de moins de 16 ans, et un signalement peut être fait pour les jeunes de 16 ou 17 ans. Le devoir est continu : chaque nouvelle préoccupation doit être signalée, et la personne enseignante ne peut pas compter sur quelqu’un d’autre, comme la direction d’école, pour faire le signalement. Une personne enseignante ou un autre professionnel qui omet de faire un signalement est passible d’une amende pouvant atteindre 5 000 $. La personne qui fait le signalement n’a pas besoin d’être certaine; des motifs raisonnables suffisent.`,
        practice: ``,
        example: `Un élève de 3e année confie à la personne enseignante qu’un de ses parents lui a donné des coups de ceinture. La personne enseignante l’écoute calmement, ne pose pas de questions suggestives, ne mène pas d’enquête et dit à l’élève que c’était la bonne chose à faire d’en parler à quelqu’un.
La personne enseignante appelle directement la société d’aide à l’enfance locale le jour même, puis informe la direction d’école conformément à la politique du conseil scolaire.
La personne enseignante note les mots exacts de l’élève, la date et l’heure, et garde ces notes confidentielles.
Si l’élève fait part d’une nouvelle préoccupation la semaine suivante, la personne enseignante fait un nouveau signalement, car le devoir est continu.`,
        citations: [
          `Child, Youth and Family Services Act, 2017, S.O. 2017, c. 14, Sched. 1, s. 125. https://www.ontario.ca/laws/statute/17c14`,
          `Ontario College of Teachers. (n.d.). Professional advisory: Duty to report. https://oct.ca/resources/advisories/duty-to-report`,
        ],
      },
      {
        n: 4,
        statement: `Le devoir de diligence du personnel enseignant, y compris éviter la négligence et servir de modèle par sa conduite pendant et en dehors des heures de travail.
Les normes d’exercice et les normes de déontologie
La recommandation professionnelle de l’Ordre des enseignantes et des enseignants de l’Ontario
Loi sur la profession enseignante`,
        theory: `Le devoir de diligence et la négligence. Le personnel enseignant doit prendre soin des élèves comme le ferait un parent soigneux ou prudent dans les mêmes circonstances (Myers v. Peel County Board of Education, 1981). Une personne enseignante peut être jugée négligente si elle avait un devoir de diligence, qu’elle n’a pas respecté la norme de diligence et qu’un élève en a subi un préjudice.
Les normes d’exercice et les normes de déontologie. L’Ordre des enseignantes et des enseignants de l’Ontario établit cinq normes d’exercice (l’engagement envers les élèves et leur apprentissage, les connaissances professionnelles, la pratique professionnelle, le leadership dans les communautés d’apprentissage et le perfectionnement professionnel continu) et quatre normes de déontologie (l’empathie, le respect, la confiance et l’intégrité). Ces normes s’appliquent à la conduite du personnel enseignant pendant et en dehors des heures de travail.
La Loi sur l’Ordre des enseignantes et des enseignants de l’Ontario et les recommandations professionnelles. La Loi confère à l’Ordre le pouvoir d’enquêter sur ses membres et de leur imposer des mesures disciplinaires pour faute professionnelle. Les recommandations professionnelles de l’Ordre guident les membres sur des questions comme les communications électroniques et les médias sociaux, où le personnel enseignant doit maintenir des limites professionnelles avec les élèves en ligne.`,
        practice: ``,
        example: `Lors d’une sortie éducative, la personne enseignante vérifie les formulaires d’autorisation, a sur elle les coordonnées d’urgence et les renseignements médicaux des élèves, et compte régulièrement les élèves.
Pendant la surveillance de la cour, la personne enseignante se déplace dans la cour au lieu de rester au même endroit et vérifie si l’équipement présente des dangers.
La personne enseignante garde ses comptes personnels de médias sociaux privés, n’accepte pas les demandes d’amitié des élèves et communique avec les familles uniquement au moyen des plateformes approuvées par l’école.
En dehors des heures de travail, la personne enseignante se comporte de manière à préserver la confiance du public, puisqu’une conduite à l’extérieur de l’école peut tout de même constituer une faute professionnelle.`,
        citations: [
          `Myers v. Peel County Board of Education, [1981] 2 S.C.R. 21.`,
          `Ontario College of Teachers Act, 1996, S.O. 1996, c. 12.`,
          `Ontario College of Teachers. (n.d.). Ethical standards. https://www.oct.ca/public/professional-standards/ethical-standards`,
          `Ontario College of Teachers. (n.d.). Standards of practice. https://www.oct.ca/public/professional-standards/standards-of-practice`,
        ],
      },
      {
        n: 5,
        statement: `Le devoir du personnel enseignant de respecter les droits des élèves, leur vie privée et la confidentialité lorsqu’il consulte des documents et en discute :
Loi de 2005 sur l’accessibilité pour les personnes handicapées de l’Ontario (LAPHO)
Plans d’enseignement individualisés (PEI)
Dossiers scolaires de l’Ontario (DSO)`,
        theory: `Loi de 2005 sur l’accessibilité pour les personnes handicapées de l’Ontario (LAPHO). La LAPHO (2005) exige des organisations, y compris des conseils scolaires, qu’elles repèrent et éliminent les obstacles pour les personnes handicapées. Ses normes portent sur des domaines comme le service à la clientèle ainsi que l’information et les communications; les écoles doivent donc fournir des formats et des soutiens accessibles tout en respectant la vie privée de la personne.
Plans d’enseignement individualisés (PEI). Le PEI est un plan écrit qui décrit le programme et les services d’éducation de l’enfance en difficulté destinés à un élève. En vertu du Règlement de l’Ontario 181/98, le PEI doit être élaboré dans les 30 jours d’école suivant le placement de l’élève; les parents doivent être consultés et en recevoir une copie. Le PEI est confidentiel et n’est communiqué qu’au personnel qui travaille avec l’élève.
Dossiers scolaires de l’Ontario (DSO). Le DSO est le dossier officiel de la scolarité d’un élève. En vertu de l’article 266 de la Loi sur l’éducation, il s’agit d’un document privilégié qui ne peut servir qu’à améliorer l’enseignement offert à l’élève. Les élèves et leurs parents (si l’élève a moins de 18 ans) peuvent le consulter, et la Loi sur l’accès à l’information municipale et la protection de la vie privée protège aussi les renseignements personnels qu’il contient.`,
        practice: ``,
        example: `Les adaptations prévues dans le PEI d’un élève, comme du temps supplémentaire et un endroit calme pour les tests, sont communiquées à la personne suppléante, mais la personne enseignante ne discute pas des besoins de l’élève dans la salle du personnel ni avec d’autres élèves.
La personne enseignante consulte le DSO d’un élève au bureau, le signe à la sortie conformément aux procédures de l’école, et ne le photographie ni ne le copie.
La personne enseignante fournit un travail en gros caractères ou en format numérique à un élève ayant une déficience visuelle, ce qui respecte les normes de la LAPHO sans singulariser l’élève.
Les courriels au sujet des élèves utilisent des initiales ou sont envoyés au moyen de comptes sécurisés du conseil scolaire.`,
        citations: [
          `Accessibility for Ontarians with Disabilities Act, 2005, S.O. 2005, c. 11.`,
          `Education Act, R.S.O. 1990, c. E.2, s. 266.`,
          `O. Reg. 181/98: Identification and placement of exceptional pupils.`,
          `Municipal Freedom of Information and Protection of Privacy Act, R.S.O. 1990, c. M.56.`,
        ],
      },
    ],
    lesson: {
      title: `Résumé d’une affaire judiciaire en droit de l’éducation et de son issue`,
      grade: ``,
      subject: ``,
      objective: ``,
      curriculumLink: ``,
      stages: [
        {
          name: `Nom de l’affaire et date`,
          body: `R. c. Jarvis, 2019 CSC 10 (Cour suprême du Canada, 14 février 2019)`,
        },
        {
          name: `Sources d’information`,
          body: `Supreme Court of Canada. (2019). Case in brief: R. v. Jarvis. https://scc-csc.ca/judgments-jugements/cb/2019/37833
CTV News London. (2019, August 27). London teacher convicted of voyeurism by SCOC sentenced. https://london.ctvnews.ca/london-teacher-convicted-of-voyeurism-by-scoc-sentenced-1.4566867`,
        },
        {
          name: `Résumé de l’affaire`,
          body: `Ryan Jarvis, enseignant dans une école secondaire de London (Ontario), a utilisé une caméra dissimulée dans un stylo pour filmer en secret des élèves de sexe féminin pendant des activités scolaires ordinaires, dans des salles de classe, des corridors et d’autres aires communes. Les vidéos se concentraient principalement sur le visage et la poitrine des élèves. Il a été accusé de voyeurisme en vertu du Code criminel. Le juge du procès a conclu que les élèves avaient une attente raisonnable en matière de vie privée, mais il n’était pas convaincu que les enregistrements avaient été faits dans un but sexuel; il a donc acquitté Jarvis. La Cour d’appel de l’Ontario a conclu que le but sexuel était prouvé, mais elle a statué que les élèves se trouvant dans les aires communes d’une école n’avaient pas d’attente raisonnable en matière de vie privée; Jarvis a donc de nouveau été acquitté. La Couronne a interjeté appel devant la Cour suprême du Canada.`,
        },
        {
          name: `Issue de l’affaire, telle que je la comprends`,
          body: `La Cour suprême du Canada a déclaré Jarvis coupable de voyeurisme. La Cour a statué que les élèves ont une attente raisonnable de ne pas être filmés en secret à l’école, même dans les aires communes. Elle a examiné l’ensemble du contexte, notamment le fait que les enregistrements contrevenaient à la politique du conseil scolaire, qu’ils visaient des élèves en particulier et qu’ils trahissaient la confiance entre un enseignant et ses élèves. Jarvis a par la suite été condamné à six mois d’emprisonnement et à un an de probation. Il avait déjà démissionné de son poste d’enseignant et avait été suspendu par l’Ordre des enseignantes et des enseignants de l’Ontario.`,
        },
        {
          name: `Réflexions personnelles`,
          body: `Cette affaire m’a montré à quel point les familles et les élèves font confiance au personnel enseignant. Les élèves devraient pouvoir aller en classe sans se demander comment un adulte de l’école les observe. La Cour d’appel a décidé que les élèves n’avaient aucune attente en matière de vie privée dans les aires communes, mais je suis d’accord avec la Cour suprême : le contexte compte. En tant qu’enseignante, je respecterai les politiques de chaque école sur les téléphones et les photos, et je ne prendrai pas de photos ni de vidéos d’élèves à moins que l’école ne l’ait approuvé et que les familles n’aient donné leur consentement.`,
        },
      ],
    },
    exitTicket: {
      learned: [
        `La Loi de 2012 pour des écoles tolérantes exige que les conseils scolaires aient des plans de prévention de l’intimidation et recourent à la discipline progressive, qui combine des soutiens et des conséquences (Accepting Schools Act, 2012).`,
        `Le devoir de signaler prévu par la Loi de 2017 sur les services à l’enfance, à la jeunesse et à la famille est continu : chaque nouvelle préoccupation au sujet d’un enfant doit être signalée directement à une société d’aide à l’enfance (Child, Youth and Family Services Act, 2017, s. 125).`,
        `Lorsqu’il surveille les élèves, le personnel enseignant est tenu à la norme du parent soigneux ou prudent (Myers v. Peel County Board of Education, 1981).`,
      ],
      interesting: [
        `Dans R. c. Jarvis (2019), la Cour suprême du Canada a statué que les élèves ont une attente raisonnable en matière de vie privée, même dans les aires communes d’une école.`,
        `Les normes de déontologie de l’Ordre des enseignantes et des enseignants de l’Ontario (empathie, respect, confiance et intégrité) s’appliquent à la conduite du personnel enseignant en dehors des heures de travail comme à l’école.`,
      ],
      wonder: [
        `Comment ces lois et ces normes s’appliquent-elles aux suppléantes et suppléants d’urgence qui ne sont pas encore membres de l’Ordre des enseignantes et des enseignants de l’Ontario?`,
      ],
    },
  },
];

import type { Chart } from "./types";

export const charts: Chart[] = [
  {
    slug: "01-theories-of-learning",
    number: 1,
    title: `Theories of Learning and Teaching and Differentiated Instruction`,
    source: `Ontario College of Teachers Accreditation Resource Guide (2023)`,
    summary: `Teacher candidates will develop a strong, research-based understanding of how students learn by studying learning theories and differentiated instruction. They will draw on foundational educational, cognitive, and social theories to create effective instruction for all students. Along the way, they’ll build professional identities, strengthen judgment, and make thoughtful decisions about education in Ontario.`,
    elements: [
      {
        n: 1,
        statement: `Various learning theories and research-based concepts and their related pedagogical practices in developing instruction and assessment for individual students, groups, and classes`,
        theory: `Vygotsky’s social constructivist theory and the Zone of Proximal Development (ZPD) contends that students build knowledge through social interaction, and learning is most effective when a teacher or more capable peer offers the right level of support.`,
        practice: `Scaffolding paired with differentiated instruction gives students the support they need and gradually pulls back that support as they gain independence, recognizing that students in the same class may need different levels of help and different forms of assessment.`,
        example: `During a math lesson, a teacher might first model a multi-step problem for the whole class, then have students practice in small groups while the teacher circulates and offers guiding questions where needed. As students show understanding, the teacher steps back and let them finish problems independently, moving between whole-class, small-group, and individual work depending on where each student is.`,
        credit: `H/T: SP`,
        citations: [
          `Santrock, J. W., Deater-Deckard, K., & Lansford, J. (2023). Child development: An introduction (16th ed.). McGraw-Hill Higher Education.`,
        ],
      },
      {
        n: 2,
        statement: `Elements and practices of Universal Design for Learning (UDL) or Differentiated Instruction that are equitable and inclusive to support the learning of all students.`,
        theory: `UDL and DI align with constructivism. Students build knowledge through prior experience, interaction, and multiple ways of engaging with content, reflecting Piaget’s and Vygotsky’s theories.`,
        practice: `UDL offers different ways for students to engage with, take in, and show their learning. DI means adjusting content, process, product, or environment based on what each student needs, requiring ongoing teacher observation and adjustment.`,
        example: `A multilingual student might use a translation tool to access content or demonstrate understanding through a drawing instead of writing. This gives the student a way to show what they know without being limited by language.`,
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
        statement: `Understanding of the student and using data to inform culturally relevant and responsive instruction and assessment, grounded in anti-oppressive and anti-racist practices.`,
        theory: `Zaretta Hammond’s culturally responsive teaching (CRT) framework encourages teachers to draw on students’ cultural and family background knowledge, and to build consistent thinking routines through regular inquiry.`,
        practice: `Looking beyond academic data alone to understand students as whole people and using that understanding to shape instruction.`,
        example: `When introducing a portrait or self-portrait unit, a teacher might invite students to first talk about how people are represented in art from their own culture or community. For example, through family photos, religious imagery, or styles of dress that are meaningful to them. This would occur before looking at portraits from the standard art history canon. Students can then create a self-portrait that intentionally incorporates a personal or cultural symbol that matters to them, rather than starting from a purely technical or Western art history driven prompt.`,
        citations: [
          `Caravan, E. (2022, August 3). 5 tips for culturally responsive teaching in the math classroom. Edutopia. https://www.edutopia.org/article/5-tips-culturally-responsive-teaching-math-classroom/`,
          `Lee, L. (2020, June 15). The value of culturally responsive teaching in distance learning. Edutopia. https://www.edutopia.org/article/value-culturally-responsive-teaching-distance-learning/`,
        ],
      },
      {
        n: 4,
        statement: `An awareness that learners have different capabilities and preferences, including cultural preferences for certain instructional strategies (e.g., discussions, collaboration, storytelling, experiential and place-based learning).`,
        theory: `Vygotsky’s sociocultural theory contends that learning happens through social interaction and is shaped by culture and environment. This means students bring different backgrounds, abilities, and perspectives into the classroom.`,
        practice: `Teachers can offer varied ways for students to participate and learn, such as collaboration, storytelling, and experiential or place-based learning to reach different learner needs and preferences.`,
        example: `Students might work in small group to discuss and solve problems together (collaboration), share a family or cultural story connected to the lesson (storytelling), or explore a local park or community space and link their observations back to what they are learning in class (place-based learning).`,
        credit: `H/T: NA`,
        citations: [
          `CAST. (2024). CAST Universal Design for Learning Guidelines version 3.0. https://udlguidelines.cast.org`,
          `John-Steiner, V., & Mahn, H. (1996). Sociocultural approaches to learning and development: A Vygotskian framework. Educational Psychologist, 31(3-4), 191-206. https://www.tandfonline.com/doi/abs/10.1080/00461520.1996.9653266`,
        ],
      },
      {
        n: 5,
        statement: `The roles of metacognition, growth mindset, and self-awareness in supporting student self-regulation and social-emotional learning.`,
        theory: `Carl Rogers’ humanism which centers whole-student growth and self-directed learning.`,
        practice: `Teaching students to plan their approach to a task, monitor their understanding while working, and reflect afterward, so they take more ownership of their learning over time.`,
        example: `After finishing an assignment, a teacher might have students write about where they got stuck and how they worked through it and consider whether they would approach the task differently next time.`,
        credit: `H/T: JD`,
        citations: [
          `Education Endowment Foundation. (2025, May). Metacognition and self-regulation. Teaching and Learning Toolkit. https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/metacognition-and-self-regulation`,
          `Pace, K. (2025, June 23). Five educational learning theories. Western Governors University. https://www.wgu.edu/blog/five-educational-learning-theories2005.html`,
        ],
      },
    ],
    lesson: {
      title: `Who I Am: A Culturally Connected Self-Portrait`,
      grade: `4`,
      subject: `Visual Arts`,
      objective: `Students will create a self-portrait that incorporates a personal or cultural symbol meaningful to them, connecting artistic expression to their own identity and background.`,
      curriculumLink: `Visual Arts, Strand D1 (Creating and Presenting): Applying the creative process to produce artworks that express personal ideas, feelings, and perspectives, drawing on a range of cultural sources.`,
      stages: [
        { name: `Anticipatory Set`, body: `Show a few examples of how people represent identity through images or objects across different cultures (family photos, ceremonial imagery, textile patterns). Ask students to turn and talk: “How do people show who they are through pictures or objects?”` },
        { name: `Model`, body: `Share your own example of self-portrait that includes a personal or cultural symbol (e.g., a family heirloom, a pattern from your background, a colour with personal meaning), explaining why you chose it and what it represents.` },
        { name: `Check for Understanding`, body: `Quick thumbs-up, sideways, or down (have them close their eyes for confidentiality and confidence purposes). Ask students to name one object or symbol that represents them, checking that they understand a “symbol” can represent identity, not just decorate a picture.` },
        { name: `Guided Practice`, body: `Students brainstorm a list of symbols, objects, or patterns connected to their family, culture, or interests, sketching rough ideas while the teacher circulates and offers support.` },
        { name: `Closure`, body: `Gather as a class. Each student shares one symbol they plan to include and briefly why. Recap the connection between personal identity and artistic choice.` },
        { name: `Independent Practice`, body: `Students complete their final self-portrait, incorporating their chosen personal or cultural symbol using their preferred medium (pencil, paint, or collage).` },
      ],
    },
    exitTicket: {
      learned: [
        `Universal Design for Learning (UDL) and Differentiated Instruction (DI) both trace back to constructivist theory. Students build understanding through experience rather than passively receiving information.`,
        `Vygotsky’s Zone of Proximal Development (ZPD) explains why scaffolding works. Support should meet a student where they are and gradually be withdrawn as they gain independent.`,
        `Culturally responsive teaching (CRT) does not simply constitute representation. It also involves actively using students’ cultural and community knowledge as the starting point for new learning, not an add-on.`,
      ],
      interesting: [
        `The overlap between UDL, DI, and Vygotsky’s ZPD. They all draw from the idea of designing variability. One of my terrific special education mentors at a high school I completed two long-term contracts at told me that UDL and DI are “cousins” and to be aware of their distinctions.`,
        `I was initially confused by the jigsaw process, and worried that this would stifle my progress, but now I see how well it scaffolds and builds the course curriculum. The repetition is helping me retain information.`,
      ],
      wonder: [
        `How to balance offering enough structure for students who need it while still leaving room for open-ended, student-led exploration. E.g. the students who benefit from an “essentialist” approach versus a “progressive” approach. Some of my students last year in Grade 3/4 social studies seemed to enjoy the discussion-based approach we often took (I wanted to answer all of their questions and help them think critically without inserting my opinions on anything), but other students privately complained that I went into too much detail (which is good feedback and data). I love teaching social studies (my master’s degree is in Cultural Studies) and want to know how to do it where it becomes as fun for as many students as possible.`,
      ],
    },
  },
  {
    slug: "02-learning-environment",
    number: 2,
    title: `Learning Environment and Organization`,
    source: `Ontario College of Teachers Accreditation Resource Guide (2023)`,
    summary: `Effective learning environments must be engaging and equitable for all students. We learn early on that a classroom isn’t truly effective until every student feels they can take risks without judgment. Educators must apply proven methodologies and sound professional judgement to create a safe and engaging environment by making daily, intentional choices to support academic achievement.`,
    elements: [
      {
        n: 1,
        statement: `Culturally appropriate and anti-oppressive strategies for creating engaging learning communities that support physical and emotional safety.`,
        theory: `Social Development Theory / Zone of Proximal Development by Lev Vygotsky (1896-1935). Vygotsky argued that social interaction is critical for cognitive development, and that learning is deeply shaped by the cultural and social context a student comes from, not just by individual ability.`,
        practice: `Geneva Gay’s Culturally Responsive Teaching. Building on the idea that culture shapes learning, Gay’s framework calls for actively incorporating students’ cultural backgrounds, communication styles, and lived experiences into everyday classroom practice, rather than treating culture as separate from or irrelevant to instruction.`,
        example: `Culturally Grounded Small-Group Discussions (Culturally Responsive Teaching Framework): A teacher intentionally structures small-group discussions so students from different cultural and linguistic backgrounds can share how their own family or community approaches a topic (e.g. how conflict is resolved, or how a story is traditionally told), before connecting those perspectives back to the lesson. This models that a student’s cultural knowledge is a valid and valued resource for learning and builds a classroom culture where cultural differences strengthen the community.`,
        citations: [
          `Gay, G. (2018). Culturally responsive teaching: Theory, research, and practice (3rd ed.). Teachers College Press.`,
          `Oregon Teacher Pathway. (n.d.). About OTP. Eastern Oregon University. https://www.eou.edu/oregon-teacher-pathway/about/`,
          `Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.`,
        ],
      },
      {
        n: 2,
        statement: `Key Elements of Effective Instruction: Meaningful and relevant lessons that connect to students’ experiences. Instructional strategies that engage learners actively, support and promote positive mental health, and foster a sense of belonging. Remove barriers to learning, including accessibility challenges and experiential gaps.`,
        theory: `Constructivism by Jerome Bruner (1960). Bruner’s constructivism maintains that learners make sense of new material by linking it to prior knowledge and lived experience, leading to more effective lessons when a teacher first understands where a student is coming from.`,
        practice: `Universal Design for Learning (CAST, 2018). UDL builds on this by offering a concrete framework for removing barriers to learning: providing multiple means of engagement, representation, and action/expression so that inflexible, one-size-fits-all instruction does not become a barrier. Research by Peterson et al. (2026) supports the value of this culturally responsive, flexible approach, linking it to stronger identity and belonging among underrepresented artists.`,
        example: `Flexible Lesson Design for Accessibility and Belonging (UDL Framework): For a lesson on local history in a social studies context, a teacher offers students a choice of how to engage with the material (e.g. reading a text, listening to an audio interview, or watching a short documentary clip) then a choice in how to demonstrate learning (e.g. writing, presenting orally, or creating a visual project). This minimizes accessibility and experiential barriers, since no single format is required. It also helps individual students find a way to participate more confidently and to feel like a valued part of the lesson.`,
        credit: `H/T: AS`,
        citations: [
          `Algonquin College, Learning and Teachign Services. (n.d.). UDL: The how. https://www.algonquincollege.com/lts/udl/the-how/`,
          `CAST (2018). Universal design for learning guidelines version 2.2 https://udlguidelines.cast.org`,
          `Peterson, M. E., Miller, H. A., Hernandez, P. R., Woodcock, A., & Schultz, P. W. (2026). Culturally responsive teaching can protect STEM identity among underrepresented students. Social Psychology of Education, 29, Article 54. https://link.springer.com/10.1007/s11218-026-10224-y`,
        ],
      },
      {
        n: 3,
        statement: `A repertoire of strategies for creating a sense of belonging and contributing to a community of learners where all students have a sense of belonging.`,
        theory: `Self-Efficacy by Albert Bandura (1986). Bandura argued that people learn within a social context, and that learning is facilitated through modeling, observation, and imitation from those around them.`,
        practice: `Responsive Classroom’s Morning Meaning. Building on the idea that students develop confidence and belonging through social modeling, this practice provides a daily structured routine, consisting of greeting, sharing, a group activity, and a morning message, designed to build community and give every student a consistent, visible role within it (Kriete & Davis, 2017).`,
        example: `Daily Morning Meeting (Responsive Classroom Framework): At the start of each day, the class gathers in a circle for a structured Morning Meeting: students greet one another by name, take turns sharing something personal, participate in a short group activity, and read a morning message together. Because every student is greeted individually and given space to share, each one has a small, consistent opportunity to be seen and to contribute, reinforcing that they belong in the classroom community regardless of ability or background.`,
        citations: [
          `Bandura, A. (1986). Social foundations of thought and action: A social cognitive theory. Prentice-Hall.`,
          `Kriete, R., & Davis, C. (2017). The morning meeting book (3rd ed). Center for Responsive Schools.`,
          `Lopez-Garrido, G. (2026). Bandura’s self-efficacy theory of motivation in psychology. Simply Psychology. https://www.simplypsychology.org/self-efficacy.html`,
        ],
      },
      {
        n: 4,
        statement: `An understanding of the impacts of systemic barriers that can affect student well-being and achievement, and the need to foster positive relationships and a safe, equitable, inclusive, and respectful learning environment.`,
        theory: `Experiential Learning by John Dewey (1938). Dewey argued that learning occurs through hands-on experiences in everyday life that lead to changes in an individual’s knowledge and behaviours. Applied to systemic barriers, this suggests that a student’s lived experiences, including experiences of exclusion, inequity, or unsafety directly shape how they engage with and achieve in the classroom, not just their innate ability.`,
        practice: `Restorative Practices. Building on the idea that lived experience shapes learning, Restorative Practices address systemic inequities in discipline by repairing relationships and building community rather than relying on punitive measures, which disproportionately harm marginalized students (Gregory et al., 2021).`,
        example: `Restorative Circles for Conflict Resolution (Restorative Practices Framework): Instead of sending a student to the office after a conflict, a teacher gathers those involved in a restorative circle, where each person shares how the incident affected them and works together to repair the harm. We would observe students speaking in turn, active listening, and a joint plan to move forward, rather than a single student receiving isolated punishment. As a result, it is reinforced that all students remain valued members of the classroom community even after a conflict.`,
        citations: [
          `Dewey, J. (1938). Experience and Education. Macmillan.`,
          `Gregory, A., Huang, F. L., & Ward-Siedel, A. R. (2021). Evaluation of the whole school restorative practices project: One-year implementation and impact on discipline incidents [Technical report]. Rutgers University.`,
          `Schools for Children (2020, February 12). A Q&A on the benefits of restorative practices. https://schoolsforchildreninc.org/a-qa-on-the-benefits-of-restorative-practices/`,
        ],
      },
      {
        n: 5,
        statement: `An understanding of a range of strategies to redirect and refocus students as needed.`,
        theory: `Metacognition by John Flavell (1976). Flavell defined metacognition as “knowing about knowing,” or the ability to monitor one’s own learning and comprehension. Applied to redirecting behaviour, this suggests that students who can recognize and name their own internal state are better equipped to catch themselves before being off-task, as opposed to relying only on external correction from a teacher.`,
        practice: `The Zones of Regulation. Building on the idea that self-awareness supports self-management, this framework teaches students to identify their emotional and energy state using four colour-coded “zones,” then choose a strategy to shift back into a state ready for learning (Kuypers, 2011).`,
        example: `Zone Check-In and Redirect (Zones of Regulation Framework): When a teacher notices a student becoming distracted or restless, instead of immediately redirecting verbally, they quietly point to a posted Zones chart and ask the student to identify which zone they are in. We would see the student pause, name their state (e.g. “yellow zone”), and independently select a brief strategy, such as a stretch or a drink of water, before returning to their task, giving the student ownership over refocusing rather than a teacher-centered command.`,
        citations: [
          `Flavell, J. H. (1976). Metacognitive aspects of problem solving. In L. B. Resnick (Ed.), The nature of intelligence (pp. 231-235). Lawrence Erlbaum Associates.`,
          `Garrang Wilam Primary School. (n.d.). Zones of regulation. https://garrangwilamps.vic.edu.au/wellbeing/zones-of-regulation/`,
          `Kuypers, L. M. (2011). The zones of regulation: A curriculum designed to foster self-regulation and emotional control. Think Social Publishing.`,
        ],
      },
      {
        n: 6,
        statement: `A critical self-awareness of how their own biases can influence their perception and interaction with students. A commitment to continue learning about, with, from, and on behalf of students.`,
        theory: `Humanism by Carl Rogers (1961). Rogers’ theory centers the whole student and calls for unconditional positive regard, where a person is accepted without judgment or conditions (McLeod, 2025). To offer this authentically, teachers must first recognize their own biases and assumptions rather than let them unconsciously shape how they perceive and interact with students.`,
        practice: `Implicit Bias Reflection Tool (IBRT). A journaling protocol where teachers pause after a classroom moment to examine what bias may have shaped their reaction, then adjust their practice going forward (McRay & Sisk-Hilton, 2024).`,
        example: `Tracking Who Gets Called On (IBRT in Practice): A teacher keeps a simple log of who gets called on, encouraged, or offered help during class over the course of a week. Reviewing that pattern afterward can reveal unconscious favouritism the teacher was not aware of in the moment, such as consistently calling on the same few students. We would observe the teacher jotting quick initials on a clipboard throughout the day. That evening, the teacher reviews the tally privately to see which students were called on least, then uses that information to decide who to intentionally check in with the next day (Kanani, 2019).`,
        citations: [
          `Anderson, T. (2021, March 25). What is implicit bias? South Lakes Sentinel. https://www.southlakessentinel.com/news/2021/03/25/what-is-implicit-bias/`,
          `McLeod, S. (2025, April 28). Carl Rogers humanistic theory and contribution to psychology. Simply Psychology. https://www.simplypsychology.org/carl-rogers.html`,
          `McRay, S., & Sisk-Hilton, S. (2024, March 1). Checking your biases. Educational Leadership, 81(6). https://www.ascd.org/el/articles/checking-your-biases`,
        ],
      },
      {
        n: 7,
        statement: `Knowledge of culturally relevant and responsive strategies that allow students to see themselves in the curriculum (e.g., those that reflect traditional Indigenous ways of being and knowing; those that acknowledge the diverse cultural and intersectional identities and lived experiences of students).`,
        theory: `Multiple Intelligences by Howard Gardner (1983). Gardner’s theory maintains that each person possesses several distinct forms of intelligence, rather than one measurable, general ability. Applied to a culturally responsive curriculum, this suggests that students engage with material differently depending on their strengths and cultural background, meaning a single, standardized approach to curriculum will inevitably leave some students unable to see themselves or their strengths reflected in it.`,
        practice: `Two-Eyed Seeing (Etuaptmumk). Introduced by Mi’kmaw Elder Albert Marshall, this approach brings together the strengths of indigenous ways of knowing and Western ways of knowing side by side, rather than requiring one to replace or dominate the other (Bartlett, Marshall, & Marshall, 2012).`,
        example: `Two-Eyed Seeing Science Lesson (Two-Eyed Seeing Framework): When teaching a unit on ecosystems, a teacher presents both the Western scientific model of a food web and a local Indigenous understanding of the same relationships between land, animals, and people. We would observe students comparing the two perspectives side by side, discussing how each offers something valuable, rather than treating the Western scientific explanation as the only valid one. This helps students whose backgrounds align with either tradition see their own knowledge as legitimate.`,
        citations: [
          `Bartlett, C., Marshall, M., & Marshall, A. (2012). Two-eyed seeing and other lessons learned within a co-learning journey of bringing together Indigenous and mainstream knowledges and ways of knowing. Journal of Environmental Studies and Sciences, 2(4), 331-340. https://link.springer.com/article/10.1007/s13412-012-0086-8`,
          `Gardner, H. (1983). Frames of mind: The theory of multiple intelligences. Basic Books.`,
          `University of British Columbia, Indigenous Studies in Kinesiology. (n.d.). Community-based initiatives. https://indigenous.kin.educ.ubc.ca/research-statement/community-based-initiatives/`,
        ],
      },
    ],
    lesson: {
      title: `Two Ways of Seeing an Ecosystem`,
      grade: `4`,
      subject: `Science`,
      objective: `Students will be able to describe the relationships between organisms in a habitat using both a Western scientific model (food web) and an Indigenous perspective on interconnectedness within nature.`,
      curriculumLink: `Strand B: Life Systems (Habitats and Communities). Students demonstrate an understanding of habitats and communities and of the interrelationships among the organisms that live in them.`,
      stages: [
        { name: `Anticipatory Set`, body: `The teacher shows students a picture of a local pond or forest and asks, “What lives here, and how do you think they all depend on each other?” Students share ideas with a partner before their teacher introduces today’s focus: looking at these relationships in two different ways.` },
        { name: `Model`, body: `“I Do”. The teacher displays a simple food web diagram for a local habit (e.g. pond ecosystem) and explains how energy moves from plants to animals. The teacher then shares a short, age-appropriate Indigenous teaching about interconnectedness in nature (for example, a story or teaching from a local First Nation, used with proper permission and community-vetted resources), showing how this view describes the same relationships in terms of balance, respect, and reciprocity rather than a one-directional chain. The teacher explicitly frames both views as valid and valuable ways of understanding the same ecosystem (Bartlett, Marshall, & Marshall, 2012).` },
        { name: `Check for Understanding`, body: `“With your partner, take 30 seconds to explain one similarity and one difference between the food web diagram and the teaching we just heard.” The teacher circulates, listens for understanding, and calls on one pair to share before moving on.` },
        { name: `Guided Practice`, body: `“We Do.” As a class, students help the teacher label a large habitat diagram with both a food web arrow system and connecting sticky notes describing relationships in terms of balance and interdependence, discussing as they go how each addition reflects one or both perspectives.` },
        { name: `Closure`, body: `The teacher reviews that ecosystems can be understood through more than one valid lens, and that both Western science and Indigenous knowledge offer important tools for understanding the natural world.` },
        { name: `Independent Practice`, body: `“You Do”. Students choose a habitat (forest, pond, or backyard) and create their own simple diagram or short written piece showing the relationships between organisms, using elements from both perspectives discussed in class. The teacher circulates to support students as needed.` },
      ],
      references: [
        `Bartlett, C., Marshall, M., & Marshall, A. (2012). Two-eyed seeing and other lessons learned within a co-learning journey of bringing together Indigenous and mainstream knowledges and ways of knowing. Journal of Environmental Studies and Sciences, 2(4), 331-340. https://link.springer.com/article/10.1007/s13412-012-0086-8`,
      ],
    },
    exitTicket: {
      learned: [
        `Culturally responsive teaching (CRT) and theories like Vygotsky’s Social Development Theory reinforced the following idea for me: learning is never separate from a student’s social and cultural context. Building an inclusive community is foundational. I was born in the country but I am more of a “city” person now. Last year I taught in a very rural community. I integrated hockey and fishing culture into our lessons and conversations because these subjects shaped their identities and communities. This helped us build community and reach crucial learning milestones, as “silly” as this could sound to an outsider!`,
        `Frameworks like UDL and the Zones of Regulation give concrete, practical structures for minimizing barriers (I do not think you can always remove every barrier as much as we would like to endeavour to) and supporting self-regulation, rather than leaving inclusion and redirection to our mere instincts.`,
        `Two-Eyed Seeing reinforced that culturally relevant curricula does not constitute replacing one worldview with another. Rather, we can hold both Western and Indigenous ways of knowing as equally valid at the same time. Crucially, these are not the only worldviews, of course. There are also different forms of indigeneity (e.g. from Latin America, Oceania, East Asia, etc.). I think it is important to recognize that indigeneity is also not one-size-fits-all, whether we are talking about the Canadian landscape, or another country’s landscape. This will be important in Canada as we are experiencing a great wave of immigration and our communities are changing (for the better—I love how much my community in Ontario has culturally shifted).`,
      ],
      interesting: [
        `How to source and vet Indigenous teachings and resources respectfully and appropriately as a non-Indigenous educator.`,
        `More concrete restorative practice scripts or circle formats I can use as a substitute teacher stepping into an unfamiliar classroom for a single day or even just a block.`,
      ],
      wonder: [
        `How do I build genuine relationships and community (like Morning Meeting) as a substitute teacher who may only be in a classroom for one day, rather than all year?`,
      ],
    },
  },
  {
    slug: "03-ontario-curriculum-research-data",
    number: 3,
    title: `Ontario Curriculum and Use of Education Research and Data Analysis`,
    source: `Ontario College of Teachers Accreditation Resource Guide (2023)`,
    summary: `The Ontario Curriculum is intended to guide teachers when designing learning activities, lessons, and units, as well as in the assessment and evaluation of student progress. This topic discovery provides the opportunity to acquire knowledge, skills, perspectives, and practices related to this element.

Educational research and data analysis are crucial to determine practices and the next steps needed to facilitate student learning. Maintaining an inquiry stance both individually and collaboratively with colleagues creates active, inquiring professionals who continually refine planning, instruction, and assessment.`,
    elements: [
      {
        n: 1,
        statement: `The structure and purposes of the current Ontario curriculum and provincial policy related to students with special education needs, and their use in planning inclusive instruction and assessment (e.g., assistive and adaptive technologies) and for French-language schools, la Politique d‘aménagement linguistique (PAL) and its expectations.`,
        theory: `Linguistic Interdependence by Jim Cummins: Cummins argued that proficiency in a student’s first language transfers to and supports development in a second language, meaning that maintaining strong French-language identity and instruction strengthens rather than hinders overall academic success.`,
        practice: `Ontario’s special education policy (Education Act, Learning for All, PPM 8) frames inclusion as a right, requiring Individual Education Plans (IEPs) and UDL-based accommodations so students access the same curriculum expectations rather than modified goals. PAL applies a parallel expectation for French-language schools, requiring that instruction simultaneously build academic skills and francophone linguistic/cultural identity.`,
        example: `Bilingual IEP Accommodations (PAL and UDL Frameworks): A teacher plans assessments using accommodations like extended time or alternative formats so evaluation measures learning rather than disability. In a French-language school, we would observe those same accommodations delivered explicitly in French, reflecting PAL’s dual expectation rather than defaulting to English-language supports.`,
        credit: `H/T: AR`,
        citations: [
          `Cummins, J. (1979). Linguistic Interdependence and the educational development of bilingual children. Review of Educational Research, 49(2), 222-251.`,
          `Ontario Ministry of Education. (n.d.). Special Education laws and policies. https://www.ontario.ca/page/special-education-laws-and-policies`,
          `Ontario Ministry of Education. (n.d.). Policies for French-language education. https://www.ontario.ca/page/policies-french-language-education`,
        ],
      },
      {
        n: 2,
        statement: `The explicit use of professional terminology and practices in program planning. Assessing and communicating about student work. For example:
strands
overall and specific expectations
universal design for learning (UDL), anti-racist and anti-oppressive practices, culturally relevant and responsive pedagogy, collaboration`,
        theory: `Multiple Intelligences by Howard Gardner: Gardner argued that students possess several distinct forms of intelligence rather than one general, measurable ability, meaning a single standardized format for instruction or assessment will inevitably favour some students’ strengths while leaving others unable to demonstrate what they know.`,
        practice: `Universal Design for Learning (CAST, 2018) operationalizes Gardner’s insight into a concrete framework, requiring multiple means of representation, action/expression, and engagement in planning and assessment. Teachers apply this alongside culturally relevant and responsive pedagogy when planning and communicating about student work, ensuring both materials and assessment formats reflect students’ diverse identities and allow multiple valid ways to demonstrate understanding.`,
        example: `Choice-Based Text Selection and Response (Universal Design for Learning Framework): When planning a literacy unit, a teacher selects texts representing varied cultures (e.g., Ontario’s Blue Spruce Award nominees) and invites students to connect the texts to their own experiences. We would observe students demonstrating understanding through varied formats (e.g., written, oral, or visual) while assessment stays anchored to the same curriculum expectations regardless of format chosen.`,
        credit: `H/T: CB`,
        citations: [
          `Gardner, H. (1983). Frames of mind: The theory of multiple intelligences. Basic Books.`,
          `CAST. (2018). Universal design for learning guidelines version 2.2. https://udlguidelines.cast.org`,
        ],
      },
      {
        n: 3,
        statement: `The embedded and infused elements of the curriculum, frameworks, strategies including human impact and environmental and sustainability education, safe schools, Indigenous knowledge systems, equity and inclusive education, critical thinking, critical literacies, well-being, financial literacy, social-emotional learning, and STEM/STEAM. (Pick One)`,
        theory: `Social Development Theory and Zone of Proximal Development by Lev Vygotsky: Vygotsky argued social interaction is critical to cognitive development, occurring within a “zone of proximal development,” the gap between what a learner can do alone and what they can do with guidance from others (Vygotsky, 1978).`,
        practice: `CASEL’s (Collaborative for Academic, Social, and Emotional Learning) SEL 3 Signature Practices provide a concrete methodology for embedding social-emotional skills into daily instruction, such as opening lessons with brief structured routines that build relationship and self-awareness skills before academic content begins. This aligns with how Ontario embeds SEL-equivalent competencies as “Learning Skills and Work Habits” (Responsibility, Organization, Independent Work, Collaboration, Initiative, Self-Regulation) directly within subject expectations, rather than as a separate strand (CASEL, 2019; Ontario Ministry of Education, 2010, pp. 9-10).`,
        example: `Paired Problem-Solving with Named Skills (SEL 3 Signature Practices Framework): In a Grade 3 math lesson, a teacher pairs students to solve a problem together, explicitly naming “Collaboration” as the skill being practiced. We would observe students negotiating a shared approach rather than working in isolation, mirroring how guided peer interaction pushes a learner past what they could do alone.`,
        citations: [
          `CASEL. (2019). SEL 3 signature practices playbook. https://schoolguide.casel.org/uploads/sites/2/2020/10/Summary-The-SEL-3-Signature-Practices.pdf`,
          `Ontario Ministry of Education. (2010). Growing success: Assessment, evaluation, and reporting in Ontario schools. https://www.edu.gov.on.ca/eng/policyfunding/growsuccess.pdf`,
          `Vygotsky, L. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.`,
        ],
      },
      {
        n: 4,
        statement: `Specific curricular knowledge included in the subject area, e.g. the role of social-emotional learning in mathematics; responsible citizenship education in social studies, history, and geography; evidence-based approaches to teach reading in a language; investigation and technological problem-solving in science and technology.`,
        theory: `Cognitive Learning Theory by Jerome Bruner: Bruner introduced “readiness for learning” and the spiral curriculum, arguing any subject can be taught at any developmental stage in a way that fits a child’s cognitive abilities, revisiting core ideas repeatedly with increasing complexity (1960).`,
        practice: `The 5E Instructional Model (Engage, Explore, Explain, Elaborate, Evaluate) operationalizes Bruner’s spiral curriculum in science and technology, providing teachers with a concrete, repeatable structure for introducing investigation and technological problem-solving skills simply in early grades and revisiting them with greater complexity in later grades (Bybee et al., 2006).`,
        example: `Spiraled Force and Motion Investigations (5E Instructional Model Framework): A Grade 4 science unit on force and motion begins with a simple Engage activity (students predict what happens when they push a toy car), moves through Explore (the falling-weight investigation with washers), and builds to Elaborate, where students apply the same force concepts to a new, more complex scenario like designing a ramp. We would observe the lesson building in complexity phase by phase, rather than introducing all the content at once.`,
        citations: [
          `Bruner, J. S. (1960). The process of education. Harvard University Press.`,
          `Bybee, R. W., Taylor, J. A., Gardner, A., Van Scotter, P., Powell, J. C., Westbrook, A., & Landes, N. (2006). The BSCS 5E instructional model: Origins, effectiveness, and applications. BSCS.`,
        ],
      },
      {
        n: 5,
        statement: `Use of students’ identities, lived experiences, and knowledge, and connecting them to curriculum in differentiated and culturally relevant, responsive, and affirming ways.`,
        theory: `Cultural Capital by Pierre Bourdieu. Bourdieu argued capital is not only economic but also cultural, embodied in taste, language, and ways of knowing the world, and that schools often reward the dominant group’s cultural capital while treating other students’ knowledge as irrelevant.`,
        practice: `The Funds of Knowledge approach (Moll et al., 1992) operationalizes this by having teachers actively identify and draw on the knowledge, skills, and practices embedded in students’ households and communities, connecting literacy assessments and activities to family, traditions, and language rather than treating that knowledge as separate from curriculum (Folk, 2018).`,
        example: `Family Knowledge as Research Starting Point (Funds of Knowledge Framework): A teacher designs a research assignment where students draw on family language, traditions, or community knowledge as legitimate starting points for inquiry. We would observe students sharing personal or cultural context aloud before connecting it back to the lesson’s content, rather than only working from teacher-provided materials.`,
        credit: `H/T: SC`,
        citations: [
          `Bourdieu, P. (1986). The forms of capital. In J. Richardson (Ed.), Handbook of theory and research for the sociology of education (pp. 241-258). Greenwood.`,
          `Moll, L. C., Amanti, C., Neff, D., & Gonzalez, N. (1992). Funds of knowledge for teaching: Using a qualitative approach to connect homes and classrooms. Theory Into Practice, 31(2), 132-141.`,
          `Folk, A. L. (2018). Drawing on students’ funds of knowledge: Using identity and lived experience to join the conversation in research assignments. Journal of Information Literacy, 12(2), 44-59. https://doi.org/10.11645/12.2.2468`,
        ],
      },
      {
        n: 6,
        statement: `How curricula can be effectively integrated (e.g., various literacies across the curriculum) to meet expectations across subjects and support student learning, well-being, and achievement.`,
        theory: `Reading/Writing Connection by Nancy Nelson Spivey: Spivey’s constructivist theory holds that reading and writing are not separate skills but interdependent cognitive processes, meaning that strengthening one skill area cognitively reinforces the other rather than requiring them to be taught in isolation.`,
        practice: `Writing Across the Curriculum (WAC) operationalizes this by embedding writing tasks directly into non-language subject instruction, allowing students to practice literacy skills within content areas. Research by Tierney and Shanahan (1991) supports this approach, finding that integrating reading and writing instruction with other subject content improves literacy outcomes, which the Ontario Language Curriculum reinforces by expecting language skills to be applied across subject contexts (Bazerman et al., 2005; Ontario Ministry of Education, 2023).`,
        example: `Science-Writing Integration (Writing Across the Curriculum Framework): A teacher connects a Grade 3 science expectation on the needs of plants with a language-arts writing task, having students write an informational paragraph about what plants need to survive. We would observe one lesson simultaneously addressing science and language expectations, rather than two separate blocks of instruction.`,
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
        statement: `An understanding of the ways curriculum supports the acquisition of transferable skills and education, as well as career and life planning.`,
        theory: `Self-efficacy by Albert Bandura: Bandura argued that people learn within a social context, developing belief in their own ability through modelling, observation, and mastery experiences. This is a belief that transfers across domains, including future career and life decisions.`,
        practice: `For Kindergarten to Grade 6, Ontario’s Creating Pathways to Success policy delivers this through the “All About Me” portfolio, where students reflect on and document their developing strengths, interests, and skills across four areas of learning (Knowing Yourself, Exploring Opportunities, Making Decisions and Setting Goals, Achieving Goals and Making Transitions), building the mastery experiences and self-knowledge Bandura describes long before formal career planning begins in Grade 7 (Ontario Ministry of Education, 2013).`,
        example: `Goal-Setting Reflection Entry (“All About Me” Portfolio Framework): A Grade 3 student adds an entry to their “All About Me” portfolio reflecting on a skill they are proud of and one they want to work on next, after completing a class project of their choosing. We would observe the teacher prompting this reflection with open-ended questions rather than assigning a grade, reinforcing the student’s growing sense of their own capability rather than measuring a fixed outcome.`,
        citations: [
          `Bandura, A. (1986). Social foundations of thought and action: A social cognitive theory. Prentice-Hall.`,
          `Ontario Ministry of Education. (2013). Creating pathways to success: An education and career/life planning program for Ontario schools. https://www.edu.gov.on.ca/eng/document/policy/cps/creatingpathwayssuccess.pdf`,
        ],
      },
      {
        n: 8,
        statement: `How to access, interpret, evaluate, and use educational research literature to make informed decisions when planning effective instruction (differentiated, equitable, accessible, and inclusive instruction and assessment).`,
        theory: `Learning Styles by David Kolb: Kolb’s four-stage cycle (concrete experience, reflective observation, abstract conceptualization, active experimentation) suggests students engage most fully with instruction when multiple modes of processing are available to them, not just one (1984).`,
        practice: `Differentiated Instruction (Tomlinson, 2001) provides teachers with a concrete methodology for applying Kolb’s insight, using ongoing assessment data to modify content, process, and product according to students’ readiness, interest, and learning profile, rather than defaulting to a single instructional format for the whole class.`,
        example: `Flexible Response Options (Differentiated Instruction Framework): A student who struggles with written responses is instead given the option to explain their understanding orally or through a visual diagram. We would observe the teacher offering this choice upfront rather than only after a student struggles, reflecting research-informed, differentiated planning.`,
        credit: `H/T: NM`,
        citations: [
          `Kolb, D. A. (1984). Experiential learning: Experience as the source of learning and development. Prentice-Hall.`,
          `Tomlinson, C. A. (2001). How to differentiate instruction in mixed-ability classrooms (2nd ed.). ASCD.`,
        ],
      },
      {
        n: 9,
        statement: `Collection and use of data to make instructional decisions to ensure effective instruction and improve or ensure student learning.`,
        theory: `Taxonomy of Educational Objectives by Benjamin Bloom: Bloom’s taxonomy (knowledge, comprehension, application, analysis, synthesis, evaluation) gives teachers a structure for identifying exactly what level of understanding a piece of data reveals, rather than treating all evidence of struggle as the same kind of gap (1956).`,
        practice: `Response to Intervention (RTI) operationalizes this into a tiered methodology: teachers collect ongoing data (observations, conversations, work samples), identify which level of Bloom’s taxonomy a student is struggling at, and match the intensity of support accordingly, escalating tiers only when data shows a student is not responding to a given level of intervention (Fuchs & Fuchs, 2006).`,
        example: `Targeted Reteaching from Observation (Response to Intervention Framework): An educator who observes students struggling to identify letters (a knowledge-level gap in Bloom’s taxonomy) provides targeted Tier 2 support and additional practice at that foundational level before moving to more complex tasks. We would observe the teacher pulling a small group for reteaching immediately after noticing this pattern, rather than waiting for a formal test to confirm it.`,
        credit: `H/T: CP`,
        citations: [
          `Bloom, B. S. (Ed.). (1956). Taxonomy of educational objectives: The classification of educational goals. Longmans, Green.`,
          `Fuchs, D., & Fuchs, L. S. (2006). Introduction to response to intervention: What, why, and how valid is it? Reading Research Quarterly, 41(1), 93-99.`,
        ],
      },
      {
        n: 10,
        statement: `Engage and collaborate with other colleagues when looking at evidence and educational research, theory, or other bodies of knowledge to make precise, personalized pedagogical decisions when planning instruction.`,
        theory: `Communities of Practice by Etienne Wenger. Wenger argued that professionals build knowledge most effectively through shared engagement around a common concern, learning collaboratively rather than in isolation.`,
        practice: `Professional Learning Communities (PLCs) provide a concrete structure for this, organizing grade-team meetings around shared resources like Growing Success and Learning for All so teachers compare approaches, examine evidence together, and build shared expertise over time rather than planning solo (DuFour, 2004).`,
        example: `Collaborative Work Sample Review (Professional Learning Communities Framework): A grade team reviews student work samples together, applies Learning for All’s assessment strategies, and collectively decides next instructional steps. We would observe teachers referencing the same shared document and building on each other’s observations, rather than each planning independently based on individual assumptions.`,
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
      subtopic: `Use of students’ identities, lived experiences, and knowledge, and connecting them to curriculum in differentiated and culturally relevant, responsive, and affirming ways.`,
      title: `Family Knowledge Interview`,
      grade: `4`,
      subject: `Language`,
      objective: `Students will interview a family or community member about a skill, tradition, or piece of knowledge important to their family, then write a short piece connecting that knowledge to a topic or text studied in class.`,
      curriculumLink: `Ontario Curriculum, Grades 1-8: Language (2023), Strand A: Literacy Connections and Applications, A3. Applications, Connections, and Contributions: students make connections between what they learn in the classroom and various aspects of their lives, their community, and the wider world.`,
      stages: [
        { name: `Anticipatory Set`, body: `The teacher shares a short personal story about a skill or tradition they learned from their own family (e.g., a recipe, a game, a way of fixing something), modelling that family knowledge is valuable alongside what is taught in school.` },
        { name: `Model`, body: `The teacher displays a simple graphic organizer with prompts (“Who did you talk to?” “What did they teach you?” “How does this connect to something we’ve learned in class?”) and models filling one section out loud using their own anecdote.` },
        { name: `Check for Understanding`, body: `Turn-and-talk: students share with a partner one possible person they might interview at home (a grandparent, parent, neighbour, etc.) and one thing they might ask them.` },
        { name: `Guided Practice`, body: `As a class, students brainstorm a shared list of interview questions (e.g., “What is something you know how to do that you learned from your family?” “Why is this important to you?”), which the teacher records on chart paper for students to draw from.` },
        { name: `Closure`, body: `The teacher reviews the interview task and reminds students that all forms of family knowledge (recipes, stories, repair skills, games, languages) are equally valid and valued in this assignment.` },
        { name: `Independent Practice`, body: `Students conduct their interview at home, then write a short paragraph or create a visual connecting what they learned to a topic or text studied in class, to be shared in small groups the next day.` },
      ],
    },
    exitTicket: {
      learned: [
        `Response to Intervention (RTI) gives a tiered structure for matching the intensity of support to what the data actually shows a student needs, rather than treating every struggle the same way.`,
        `Ontario’s special education policy (the Education Act, Learning for All, PPM 8) frames inclusion as a student’s right, with PPM 8 specifically governing how learning disabilities get identified and translated into IEP planning.`,
        `Writing Across the Curriculum shows that literacy skills can be embedded directly into other subject areas, rather than confined to a separate literacy block.`,
      ],
      interesting: [
        `The Funds of Knowledge approach reframes family and community knowledge as a legitimate curriculum resource, rather than something separate from “real” academic learning.`,
        `The 5E Instructional Model gives a concrete, repeatable structure for applying Bruner’s spiral curriculum in science, revisiting the same core ideas with surprising complexity across grades.`,
      ],
      wonder: [
        `As a substitute teacher stepping into a classroom for a single day, how would I realistically apply something like RTI’s tiered approach without the ongoing data history a regular classroom teacher builds over time?`,
      ],
    },
  },
  {
    slug: "04-child-adolescent-development",
    number: 4,
    title: `Child and Adolescent Development and Student Transitions`,
    source: `Ontario College of Teachers Accreditation Resource Guide (2023)`,
    summary: `Teacher candidates will gain a clear, research-informed understanding of how children and adolescents grow, learn, and sometimes struggle. They will also engage with major research from developmental psychology, health, cognitive psychology, and sociocultural contexts that shape learning. They will use this knowledge to shape responsive classrooms and connect students with appropriate supports.`,
    elements: [
      {
        n: 1,
        statement: `Theories of human development and the interconnected physical, social, emotional, communication/language, and cognitive domains`,
        theory: `Hierarchy of Needs by Abraham Maslow. Maslow (1943) argued that human needs build on one another, from physiological needs (e.g., food, sleep) and safety, to belonging and esteem, and finally to self-actualization. Applied to development, this suggests that the domains are interconnected: a child who is hungry, unsafe, or socially isolated will struggle to engage cognitively, because unmet physical and emotional needs take priority over learning.`,
        practice: `Whole School, Whole Community, Whole Child (WSCC) Model. Building on the idea that learning depends on meeting the whole child’s needs, this framework coordinates health, nutrition, physical activity, social-emotional climate, and family and community engagement with academic instruction, rather than treating a student’s physical and emotional well-being as separate from their learning (Lewallen et al., 2015).`,
        example: `Morning Check-In and Nutrition Break (WSCC Framework)
A grade 3 teacher begins each day with a quick feelings check-in, where students point to a chart showing how they feel. When one student signals that they are tired and hungry, the teacher quietly offers a snack from the school’s nutrition program (e.g. the snack bin) and a few minutes of calm time before the math lesson begins. We would observe the student returning to the task ready to participate, showing that meeting physical and emotional needs first supports cognitive engagement.`,
        citations: [
          `Lewallen, T. C., Hunt, H., Potts-Datema, W., Zaza, S., & Giles, W. (2015). The Whole School, Whole Community, Whole Child model: A new approach for improving educational attainment and healthy development for students. Journal of School Health, 85(11), 729-739.`,
          `Maslow, A. H. (1943). A theory of human motivation. Psychological Review, 50(4), 370-396.`,
        ],
      },
      {
        n: 2,
        statement: `Indigenous understandings about human development, growth, and/or interconnections between spirit, emotions, intellect, body, other species, and land.`,
        theory: `Indigenous Holistic Learning by Marie Battiste. Battiste (2002), a Mi’kmaw scholar, describes Indigenous knowledge as holistic, understanding human development as the growth of the whole person (spirit, emotions, intellect, and body) in relationship with family, community, other living beings, and the land rather than separate domains developing in isolation.`,
        practice: `Land-Based Learning. Building on this holistic view, land-based learning, informed by the Medicine Wheel teachings Toulouse (2008) describes, engages the physical, emotional, mental, and spiritual aspects of the learner through learning on and from the land. Because teachings differ across Nations, Elders, Knowledge Keepers, and community-vetted resources guide what is shared (First Nations, Métis and Inuit Education Association of Ontario, n.d.).`,
        example: `Seasonal Land Walk and Sharing Circle (Land-Based Learning Framework)
With guidance from a local Knowledge Keeper, a class walks the schoolyard or a nearby park each season to observe changes in plants and animals, then gathers in a sharing circle to reflect on what they noticed, how they felt, and what responsibilities they have to the land. We would observe students moving, observing, discussing, and reflecting within one activity, rather than treating body, mind, and emotions as separate lessons.`,
        citations: [
          `Battiste, M. (2002). Indigenous knowledge and pedagogy in First Nations education: A literature review with recommendations. Indian and Northern Affairs Canada.`,
          `First Nations, Métis and Inuit Education Association of Ontario. (n.d.). Public resources. https://fnmieao.com/public-resources/`,
          `Toulouse, P. R. (2008). Integrating Aboriginal teaching and values into the classroom (What Works? Research into Practice, Monograph No. 11). Ontario Literacy and Numeracy Secretariat.`,
        ],
      },
      {
        n: 3,
        statement: `Reflect on how systems of oppression have impacted pathway options and transitions for specific groups of students. Think about how principles of equity, accessibility, anti-racism, and anti-oppression improve learning outcomes for students who experience systemic inequalities within the education system`,
        theory: `Critical Pedagogy by Paulo Freire. Freire (1970) argued that education is never neutral. It either reproduces existing social inequalities or helps learners question and transform them. His critique of the “banking model,” where students passively receive knowledge from authority, helps explain how structures like streaming can sort students into futures shaped by race and class rather than ability.`,
        practice: `Destreaming and Anti-Oppressive Review of Pathway Recommendations. Building on the idea that school structures can reproduce inequality, research in the Greater Toronto Area found that Black students were disproportionately placed in applied and essential courses, limiting their postsecondary options (James & Turner, 2017). In response, destreaming delays sorting students into separate course levels so that all students have access to the same academic program, while anti-oppressive review asks educators to examine program and pathway recommendations for patterns based on race, class, or other identities to involve families in these decisions.`,
        example: `Mitigating Bias in Program Referrals (Anti-Oppressive Practice)
Before Grade 6 teachers refer students for gifted assessment, enrichment, or specialized Grade 7 programs, they review their referrals together to check whether anyone is overlooked. We would observe teachers verifying if there are patterns based on identity categories. We would also see teachers inviting families to discuss all available options for their children, rather than making assumptions.`,
        citations: [
          `Freire, P. (1970). Pedagogy of the oppressed. Herder and Herder.`,
          `James, C. E., & Turner, T. (2017). Towards race and equity in education: The schooling of Black students in the Greater Toronto area. York University.`,
        ],
      },
      {
        n: 4,
        statement: `The use of development and learning theories as guides – not rules- to shape instruction. Theories offer helpful frameworks, but effective teaching comes from blending them with observation, context, and knowledge of each learner.`,
        theory: `Cognitive Development Stages by Jean Piaget (1973). Piaget’s four stages describe how children’s thinking changes from concrete to abstract, but the age ranges are approximate (Sprouts, 2018). Children develop at different paces, so theories function best as frameworks that help teachers choose approaches based on their students’ needs (Pace, 2025).`,
        practice: `Developmentally Responsive Planning. Building on the idea that stages are guides rather than rules, the Birthday Cluster Exercise has teachers organize their class list by age, compare those ages with developmental stages, then adjust planning, space, or approach for individual students and the whole class (Responsive Classroom, 2025).`,
        example: `From Birthday Cluster to Observation to Differentiation (Developmentally Responsive Planning Framework)
A Grade 4 teacher’s Birthday Cluster shows most students are nine, so she plans a hands-on multiplication lesson with counters. During the lesson, she observes that one student already reasons abstractly and offers an equation-based extension, while others continue building arrays. We would observe the teacher adjusting in the moment based on what individual students show, rather than keeping every student on the same task because of their age.`,
        citations: [
          `Pace, K. (2025, June 12). Five educational learning theories. Western Governors University. https://www.wgu.edu/blog/five-educational-learning-theories2005.html`,
          `Piaget, J. (1973). The child and reality: Problems of genetic psychology. Grossman.`,
          `Responsive Classroom. (2025, June 10). Know your students: Developmentally responsive planning. https://www.responsiveclassroom.org/know-students-developmentally-responsive-planning/`,
          `Sprouts. (2018, August 1). Piaget’s theory of cognitive development [Video]. YouTube. https://youtu.be/IhcgYgx7aAA?si=KImKB03FICCZK4Rr`,
        ],
      },
      {
        n: 5,
        statement: `Understanding students experience many transitions—within the school day, between grades and schools, and into post-secondary pathways. Understanding these shifts and supporting students through options like apprenticeships, college, university, workplace entry, community living, and specialized programs for learners with special education needs provides support for success.`,
        theory: `Transition Theory by Nancy Schlossberg. Schlossberg (1981) argued that how well people cope with a transition depends on four factors, the “4 S’s”: the Situation, the Self, their Supports, and their Strategies. Because transitions affect students academically, socially, and emotionally, preparation and support matter at every stage (Evans et al., 2018).`,
        practice: `Ontario’s Education and Career/Life Planning Program. Building on Schlossberg’s factors, this K-12 framework strengthens the “self” and “strategies” factors. From Kindergarten to Grade 6, students document their strengths, interests, and goals in an “All About Me” portfolio, which becomes the foundation for the Individual Pathways Plan (IPP) they begin in Grade 7 (Ontario Ministry of Education, 2013).`,
        example: `End-of-Year Portfolio Reflection (Education and Career/Life Planning Framework)
At the end of Grade 6, students review their “All About Me” portfolios, identify how their strengths and interests have changed since Kindergarten, and set one goal for Grade 7. We would observe students reflecting on their growth over several years and carrying their goals forward into their next school, rather than starting over with each transition.`,
        credit: `H/T: NA; H/T: SS`,
        citations: [
          `Evans, D., Borriello, G. A., & Field, A. P. (2018). A review of the academic and psychological impact of the transition to secondary education. Frontiers in Psychology, 9, Article 1482. https://doi.org/10.3389/fpsyg.2018.01482`,
          `Ontario Ministry of Education. (2013). Creating pathways to success: An education and career/life planning program for Ontario schools. https://www.edu.gov.on.ca/eng/document/policy/cps/creatingpathwayssuccess.pdf`,
          `Schlossberg, N. K. (1981). A model for analyzing human adaptation to transition. The Counseling Psychologist, 9(2), 2-18.`,
        ],
      },
      {
        n: 6,
        statement: `Understanding and supporting student transitions along their individual growth continuum from K-12, (e.g., school entry, change of activity, setting, classroom, grade, program or school/community changes), including transitions for newcomers to Ontario, and Indigenous students moving from rural to urban centres.`,
        theory: `Ecological Systems Theory by Urie Bronfenbrenner. Bronfenbrenner (1979) described transitions as moves between a child’s environments, and students adjust best when home, school, and community stay connected.`,
        practice: `Transition Planning (PPM 156). Building on the idea that connected environments support adjustment, Ontario requires transition plans for students with IEPs at every stage, including school entry and changes of grade, program, or school (Ontario Ministry of Education, 2013). Teachers extend these principles to all students through visual schedules and advance notice before changes in activity, ongoing rather than one-time newcomer orientation, relationships with families (Ontario Ministry of Education, 2008), and culturally affirming opportunities for Indigenous students (Cameron et al., 2024).`,
        example: `Peer Buddies and Community Connections (Ecological Systems Framework)
A newcomer student is paired with a peer buddy who shows them classroom routines and joins them at recess, while an Indigenous student arriving from a rural community is connected with the board’s Indigenous education staff. We would observe each new student supported by relationships that link school, family, and community, rather than navigating the transition alone.`,
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
        statement: `The teacher’s role in identifying appropriate practices for use with individual students to support successful transitions to secondary school.`,
        theory: `Stage-Environment Fit by Jacquelynne Eccles. Eccles et al. (1993) argued that motivation and achievement decline when a school environment does not match young adolescents’ developmental needs. Around Grade 7, students need more autonomy and closer relationships, but the move to a larger school often offers less of both and shifts from mastery goals toward performance goals (Evans et al., 2018).`,
        practice: `Structured Transition Support (Evans et al., 2018). Building on the idea that the new environment should fit students’ needs, Grade 6 teachers address students’ specific worries (such as getting lost or being bullied) before the move, strengthen peer relationships, give extra support to students with special education needs or weak social networks, and contribute to PPM 156 transition plans for students with IEPs (Ontario Ministry of Education, 2013).`,
        example: `Worry Box and Matched Supports (Structured Transition Framework)
In the spring, a Grade 6 teacher invites students to submit anonymous worries about moving to a new school for Grade 7, then answers them in a class discussion with visiting Grade 7 students. For a student with an IEP and few friendships, the teacher arranges an extra visit to the new school and connects them with a classmate who will attend the same school. We would observe supports matched to each student’s risk factors, rather than a single orientation day for everyone.`,
        citations: [
          `Eccles, J. S., Midgley, C., Wigfield, A., Buchanan, C. M., Reuman, D., Flanagan, C., & Mac Iver, D. (1993). Development during adolescence: The impact of stage-environment fit on young adolescents’ experiences in schools and in families. American Psychologist, 48(2), 90-101.`,
          `Evans, D., Borriello, G. A., & Field, A. P. (2018). A review of the academic and psychological impact of the transition to secondary education. Frontiers in Psychology, 9, Article 1482. https://doi.org/10.3389/fpsyg.2018.01482`,
          `Ontario Ministry of Education. (2013). Policy/program memorandum 156: Supporting transitions for students with special education needs. https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-156`,
        ],
      },
      {
        n: 8,
        statement: `The teacher’s role in identifying appropriate practices for use with individual students to support successful transitions from secondary school.`,
        theory: `Life-Span, Life-Space Theory by Donald Super. Super (1980) argued that career development unfolds in stages across the lifespan, beginning with a childhood “growth” stage in which curiosity, play, and early interests shape how children see themselves and the world of work. Successful transitions from secondary school depend on foundations built during these early years.`,
        practice: `Career Exploration Through Community Connections. Building on Super’s growth stage, Ontario’s Creating Pathways to Success policy expects K–6 students to explore a range of work and learning opportunities, including apprenticeships, college, and university and workplace pathways, through classroom activities and community involvement, so that no pathway is unfamiliar when students later make decisions (Ontario Ministry of Education, 2013).`,
        example: `Family Pathways Panel (Career Exploration Framework)
A Grade 4 teacher invites family and community members with different pathways, such as an electrician who completed an apprenticeship, a college-trained early childhood educator, and a university-trained engineer, to describe how they chose their work. Students then record one pathway that interests them in their “All About Me” portfolio. We would observe students asking questions about each pathway and seeing all of them presented as equally valuable options.`,
        citations: [
          `Ontario Ministry of Education. (2013). Creating pathways to success: An education and career/life planning program for Ontario schools. https://www.edu.gov.on.ca/eng/document/policy/cps/creatingpathwayssuccess.pdf`,
          `Super, D. E. (1980). A life-span, life-space approach to career development. Journal of Vocational Behavior, 16(3), 282-298.`,
        ],
      },
    ],
    lesson: {
      subtopic: `The teacher’s role in identifying appropriate practices for use with individual students to support successful transitions to secondary school.`,
      title: `From Worries to Wonders: Getting Ready for Grade 7`,
      grade: `6`,
      subject: `Health and Physical Education`,
      objective: `Students will identify worries and hopes about the transition to a new school for Grade 7 and select a support and a coping strategy for each worry.`,
      curriculumLink: `Health and Physical Education, Grades 1–8 (2019), Strand A: Social-Emotional Learning Skills, using skills and strategies to cope with stress and challenges.`,
      stages: [
        { name: `Anticipatory Set`, body: `The teacher shows a photo of the school most students will attend for Grade 7 and asks students to write one word describing how they feel about next year on a sticky note, then adds the notes anonymously to a class word wall.` },
        { name: `Model`, body: `The teacher shares a transition from her own life, such as starting a new school or job, and models filling in a T-chart titled “Worry: Support or Strategy,” naming one worry she had, a person who helped, and a strategy that worked.` },
        { name: `Check for Understanding`, body: `“With your partner, take 30 seconds to name one person at your new school who could help a new Grade 7 student.” The teacher circulates, listens, and calls on one pair to share (e.g., a guidance counsellor, teacher, or older student).` },
        { name: `Guided Practice`, body: `The teacher reads common worries from an anonymous worry box (e.g., getting lost, making friends, more homework, bullying), and the class brainstorms supports and strategies for each on chart paper (Evans et al., 2018).` },
        { name: `Closure`, body: `The teacher reviews that feeling nervous about a transition is common and that support is available, then invites a few students to share one thing they are looking forward to.` },
        { name: `Independent Practice`, body: `Students complete a personal “Worries to Wonders” plan listing two worries, a support and strategy for each, and one question they would like to ask during their visit to their new school. The teacher reviews plans privately to identify students who may need additional transition support.` },
      ],
      references: [
        `Evans, D., Borriello, G. A., & Field, A. P. (2018). A review of the academic and psychological impact of the transition to secondary education. Frontiers in Psychology, 9, Article 1482. https://doi.org/10.3389/fpsyg.2018.01482`,
        `Ontario Ministry of Education. (2019). The Ontario curriculum, grades 1–8: Health and physical education.`,
      ],
    },
    exitTicket: {
      learned: [
        `Stage-environment fit explains why the move to a new school around Grade 7 can lower motivation: young adolescents need more autonomy and closer relationships, but larger schools often offer less of both and focus more on performance.`,
        `Schlossberg’s 4 S’s (Situation, Self, Supports, Strategies) give a clear way to understand why the same transition can be easy for one student and very difficult for another.`,
        `Research on streaming in the Greater Toronto Area found that Black students were disproportionately placed in applied courses, showing how a structure that appears neutral can limit students’ pathways.`,
      ],
      interesting: [
        `The Birthday Cluster Exercise is a simple planning tool that combines developmental knowledge with students in front of me and puts theories as guides and not as rules into practice.`,
        `Evans et al. (2018) found that students who expressed more worries before the transition tended to have poorer transitions. Addressing worries early on is a practical and achievable step for Grade 6 teachers.`,
      ],
      wonder: [
        `Why some students leave French Immersion when they move to a new school for Grade 7, and how Grade 6 teachers could support students who want to continue in the program.`,
      ],
    },
  },
  {
    slug: "05-english-french-language-learners",
    number: 5,
    title: `Supporting English and French Language Learners`,
    source: `Ontario College of Teachers Accreditation Resource Guide (2023)`,
    summary: `Teacher candidates in Ontario are expected to understand how to support English-language learners (ELLs) through evidence-based instruction, assessment, and collaboration. They must use asset-based approaches, personalize learning, work effectively with all students, and partner with families and professionals to plan responsive, strengths-focused instruction.

Ontario teacher candidates in the French-language system must be able to support French-language learners through culturally responsive, evidence-based instruction. They are expected to understand Francophone diversity, apply second-language acquisition principles, use asset-based approaches, and plan precise, personalized assessment and instruction for newcomers and French-language learners.`,
    elements: [
      {
        n: 1,
        statement: `An asset-based approach to supporting culturally and linguistically diverse students acquiring English as another language. Recognize that their various linguistic identities are viewed as a critical resource in instruction and learning.`,
        theory: `Sociocultural Theory, based on the work of Lev Vygotsky. Vygotsky (1978) argued that learning happens through social interaction, and that language is a key cultural tool for thinking. Later researchers named this approach sociocultural theory and applied it to second language learning (Lantolf, 2000). Because students think with the languages they already have, their home languages become tools for building new understanding in English rather than obstacles.`,
        practice: `Culturally Sustaining Pedagogy by Django Paris. Paris (2012) argued that schools should do more than tolerate students’ home languages and cultures. Rather, schools should actively sustain them. In practice, teachers invite students to use their home language to build understanding before moving into English, supported by peers, sentence frames, and modelling (Regional Educational Laboratory Pacific, 2025). This asset-based approach also begins with what students can already do, using a diagnostic activity and feedback that names a strength, a need, and a next step (Lalor, 2020).`,
        example: `Home Language Story Retelling and Cognate Word Wall (Culturally Sustaining Pedagogy)
After a read-aloud, students who share a home language discuss the story together in that language, then retell it in English using sentence frames. The class adds cognates they notice, such as family/familia/famille, to a multilingual word wall. We would observe students moving between languages to build meaning, with their home languages displayed as part of the classroom’s learning tools.`,
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
        statement: `English Language Development programs and models of support (for example, using the Steps To English Proficiency (STEP) resource to support programming).`,
        theory: `Input Hypothesis by Stephen Krashen. Krashen (1982) argued that learners acquire a new language when they understand messages slightly beyond their current level, which he called comprehensible input. If input is too easy, students acquire little new language, and if it is too difficult, they cannot make sense of it, so instruction must match each learner’s current level.`,
        practice: `Steps to English Proficiency (STEP). Building on the idea that input must match each learner’s level, Ontario’s STEP resource includes an initial assessment and observable language continua for oral communication, reading, and writing, organized by grade division. Teachers use the continua to track each student’s progress and choose supports that allow the student to learn grade-level content while developing English (Ontario Ministry of Education, 2015). STEP also helps teachers keep in mind Cummins’s (2008) distinction between conversational language (BICS), which often develops within about two years, and academic language (CALP), which can take five to seven years (Bilash, 2011).`,
        example: `Observing Language During a Science Talk (STEP Framework)
During a Grade 3 science lesson on plant needs, the teacher provides the sentence frame “The plant needs _____ because _____.” While students share, she notes on the STEP oral continuum which students use the frame independently and which still need visuals or a partner. We would observe the teacher recording observable language behaviours and adjusting supports for the next lesson, while every student participates in the same science content.`,
        citations: [
          `Bilash, O. (2011). BICS/CALP: Basic interpersonal communicative skills vs. cognitive academic language proficiency. University of Alberta. https://sites.ualberta.ca/~obilash/bics%20calp.html`,
          `Cummins, J. (2008). BICS and CALP: Empirical and theoretical status of the distinction. In B. Street & N.H. Hornberger (Eds.), Encyclopedia of language and education: Vol. 2. Literacy (2nd ed., pp. 71-83). Springer.`,
          `Krashen, S. D. (1982). Principles and practice in second language acquisition. Pergamon Press.`,
          `Ontario Ministry of Education. (2015). STEP: Steps to English proficiency: A guide for users. Queen’s Printer for Ontario.`,
        ],
      },
      {
        n: 3,
        statement: `Develop an awareness of their own cultural bias and behaviour to appreciate the diversity and uniqueness of students.`,
        theory: `The Cultural Iceberg by Edward T. Hall. Hall (1976) described culture as an iceberg: visible elements such as food, clothing, and holidays sit above the surface, while values, communication styles, and assumptions about time and respect sit below. Because teachers’ own cultural values are mostly below the surface, they can misread cultural differences in behaviour.`,
        practice: `Implicit Bias Reflection. Building on the idea that our own norms are often invisible to us, teachers can examine their unconscious associations using tools such as the Implicit Association Test (IAT), which measures how quickly people link groups with positive or negative concepts (Greenwald et al., 1998). The results are not a diagnosis but a starting point for reflection, helping teachers notice where their assumptions may shape how they see students. Simple activities such as “I wish my teacher knew…” also invite students to share what teachers might not otherwise see (Villalobos, 2020).`,
        example: `Name Pronunciation, “I Wish My Teacher Knew,” and a Bias Journal (Culturally Responsive Pedagogy)
At the start of the term, a Grade 5 teacher learns to pronounce every student’s name correctly and invites students to respond anonymously to “I wish my teacher knew…” on sticky notes. Each week, she also reflects in a journal on which students she calls on and how she interprets their behaviour. We would observe the teacher adjusting her expectations and routines based on what students share, rather than on her first assumptions.`,
        citations: [
          `Greenwald, A. G., McGhee, D. E., & Schwartz, J. L. K. (1998). Measuring individual differences in implicit cognition: The implicit association test. Journal of Personality and Social Psychology, 74(6), 1464-1480.`,
          `Hall, E. T. (1976). Beyond culture. Anchor Press.`,
          `Villalobos, J. (2020, January 23). An asset-based approach to support ELL success. ASCD. https://www.ascd.org/el/articles/an-asset-based-approach-to-support-ell-success`,
        ],
      },
      {
        n: 4,
        statement: `Learning environments that reflect, engage, and celebrate the cultural and linguistic diversity of all students.`,
        theory: `Mirrors, Windows, and Sliding Glass Doors by Rudine Sims Bishop. Bishop (1990) argued that books can be mirrors that reflect readers’ own lives, or windows and sliding glass doors into the lives of others. When students never see their cultures and languages reflected in the classroom, they may learn that they are not valued there, while other students miss the chance to understand those around them.`,
        practice: `Identity Texts. Building on the idea that students need to see themselves in their learning, Cummins and Early (2011) describe identity texts as stories, poems, or projects that students create, often in both their home language and English, and share with classmates and families. These texts reflect students’ identities back to them in a positive light and treat multilingualism as an accomplishment.`,
        example: `Dual-Language “Where I’m From” Books (Identity Text Framework)
Grade 4 students write short books about their families and communities in English and their home language, with help from family members, and add them to the classroom library alongside picture books featuring diverse cultures. We would observe students reading one another’s books, multilingual labels and welcome signs around the room, and families invited to a sharing celebration.`,
        citations: [
          `Bishop, R. S. (1990). Mirrors, windows, and sliding glass doors. Perspectives: Choosing and Using Books for the Classroom 6(3), ix-xi.`,
          `Cummins, J., & Early, M. (Eds). (2011). Identity texts: The collaborative creation of power in multilingual schools. Trentham Books`,
        ],
      },
      {
        n: 5,
        statement: `Using digital resources in supporting English-language learners to become autonomous learners.`,
        theory: `Learner Autonomy by Henri Holec. Holec (1981) defined learner autonomy as the ability to take charge of one’s own learning, which includes setting goals, choosing materials and methods, monitoring progress, and evaluating results. He argued that autonomy is not something learners are born with but a capacity that develops when they are given gradual opportunities to make decisions about their learning.`,
        practice: `Adjustable Supports in Microsoft Immersive Reader. Building on the idea that autonomy develops when learners make decisions about their own learning, Immersive Reader lets students choose the supports they need. It offers a picture dictionary with pronunciation and can translate on-screen text into over 70 languages. Students can begin by translating a whole document and gradually move to translating only individual words as their English grows (Microsoft Education Team, 2023).`,
        example: `From Full Translation to Word-by-Word (Immersive Reader)
A Grade 3 newcomer begins a science unit reading the text fully translates into her first language with read-aloud turned on. As her English vocabulary grows, she switches to word-by-word translation and uses the picture dictionary only for unfamiliar terms. We would observe the student choosing her own supports and needing less translation over time, without waiting for the teacher.`,
        citations: [
          `Holec, H. (1981). Autonomy and foreign language learning. Pergamon Press.`,
          `Microsoft Education Team. (2023, June). How to enhance reading instruction: A guide to Immersive Reader for educators. Microsoft Education Blog. https://www.microsoft.com/en-us/education/blog/2023/06/how-to-enhance-reading-instruction-a-guide-to-immersive-reader-for-educators/`,
        ],
      },
      {
        n: 6,
        statement: `Effective communication with parents/ guardians of students who are English-language learners.`,
        theory: `Overlapping Spheres of Influence by Joyce Epstein. Epstein (1995) argued that students learn best when families, schools, and communities work together, and identified six types of involvement: parenting, communicating, volunteering, learning at home, decision making, and collaborating with the community. Communication must go both ways, so that families are partners rather than only receivers of information.`,
        practice: `Accessible Two-Way Communication. Building on this partnership model, Ontario’s guide for supporting English language learners emphasizes welcoming families, using interpreters and translated information where possible, and learning about students’ language and educational backgrounds (Ontario Ministry of Education, 2008). Tools such as Immersive Reader can also translate written messages into families’ preferred languages (Microsoft Education Team, 2023).`,
        example: `Interpreter-Supported Conference and Visual Newsletter (Family Partnership Framework)
Before a parent-teacher conference, a Grade 2 teacher arranges an interpreter through the school board and prepares samples of the student’s work to show progress visually. She asks the family about the child’s strengths and interests at home, then sends a short weekly newsletter with pictures and translated key messages. We would observe families asking questions and sharing information, not only listening.`,
        citations: [
          `Epstein, J. L. (1995). School/family/community partnerships: Caring for the children we share. Phi Delta Kappan, 76(9), 701-712.`,
          `Microsoft Education Team. (2023, June). How to enhance reading instruction: A guide to Immersive Reader for educators. Microsoft Education Blog. https://www.microsoft.com/en-us/education/blog/2023/06/how-to-enhance-reading-instruction-a-guide-to-immersive-reader-for-educators/`,
          `Ontario Ministry of Education. (2008). Supporting English language learners: A practical guide for Ontario educators, grades 1-8. Queen’s Printer for Ontario.`,
        ],
      },
      {
        n: 7,
        statement: `The value, elements, sensitivities, and challenges of life-long language learning in minority contexts: linguistic insecurity, interdependence of language and culture, variety of French language repertoires, authentic oral and written communication, listening, and speaking`,
        theory: `Linguistic Capital by Pierre Bourdieu. Bourdieu (1991) argued that schools and institutions give more value to the language varieties of dominant groups. In minority contexts, this can lead to linguistic insecurity, the feeling that one’s way of speaking French is less correct than a “standard” French, which may cause students to speak less or switch to English.`,
        practice: `Valuing the Many Repertoires of the Francophonie. Building on this, Ontario’s French language schools have a mandate to protect, enhance, and transmit French language and culture, guided by the Aménagement linguistique policy (Ontario Ministry of Education, 2023, 2026). Teachers present regional varieties of French as legitimate, create authentic reasons to listen, speak, read, and write in French, and use French-language media such as IDÉLLO from Groupe Média TFO (Ontario Ministry of Education, 2026).`,
        example: `Voices of the Francophonie Listening Centre (Aménagement Linguistique)
Grade 5 students listen to short recordings of children from Franco-Ontarian, Acadian, Québécois, Haitian, and Senegalese communities describing their favourite foods. They record words that differ, such as “char“ and “voiture,” then record their own description to share with a partner in class. We would observe students treating each variety as correct French and speaking French for an imagined audience.`,
        citations: [
          `Bourdieu, P. (1991). Language and symbolic power (J. B. Thompson, Ed.; G. Raymond & M. Adamson, Trans.). Harvard University Press.`,
          `Ontario Ministry of Education. (2023). Aménagement linguistique policy for French-language education. King’s Printer for Ontario. https://files.ontario.ca/edu_5/edu-amenagement-linguistique-policy-french-language-education-en-2023-04-04.pdf`,
          `Ontario Ministry of Education. (2026, August 12). French-language education. Government of Ontario. https://www.ontario.ca/page/french-language-education`,
        ],
      },
      {
        n: 8,
        statement: `An asset-based approach to supporting culturally and linguistically diverse students acquiring French as another language.`,
        theory: `Linguistic Interdependence Hypothesis by Jim Cummins. Cummins (1979) argued that skills and concepts learned in one language transfer to another, because languages share a common underlying proficiency. A student who can summarize or make inferences in their first language can apply those skills in French, so first languages support French learning rather than competing with it.`,
        practice: `Plurilingual Connections and Temporary Support Plans. Teachers invite students to compare French with the languages they already know and to use those languages to plan and make meaning. Ontario’s French-language schools welcome newcomers who speak neither English nor French and provide temporary support plans based on each student’s learning needs (Ontario Ministry of Education, 2026).`,
        example: `Language Portrait Silhouettes (Plurilingual Approach)
Newcomer students colour a body outline to show the languages in their lives, such as Arabic with family, English with friends, and French at school, then explain their portraits to the class in French using sentence starters. The class builds a plurilingual word wall comparing words like “école,” “school,” and “madrasa.” We would observe students presenting all of their languages as strengths.`,
        citations: [
          `Cummins, J. (1979). Linguistic interdependence and the educational development of bilingual children. Review of Educational Research, 49(2), 222-251.`,
          `Ontario Ministry of Education. (2026, August 12). French-language education. Government of Ontario. https://www.ontario.ca/page/french-language-education`,
        ],
      },
      {
        n: 9,
        statement: `The role of the teaching staff of a French language school in a minority language community (eg., acting as a cultural role model, supporting families in need of French-language resources)`,
        theory: `The Teacher as Passeur Culturel by Jean-Michel Zakhartchouk. Zakhartchouk (1999) described the teacher as a cultural mediator who helps students connect with culture and build their own relationship with it. In a minority setting, French-language school staff are often students’ main French-speaking role models, so the way they use and celebrate French shapes whether students see it as a living language.`,
        practice: `Expanding the Espace Francophone. Ontario expects French-language schools to be welcoming places where parents understand the school’s mandate and the community helps expand the “espace francophone,” the physical or virtual space where Francophones interact (Ontario Ministry of Education, 2026). Staff can connect families with resources such as “Parents partenaires en éducation,” Etablissement.org, and IDÉLLO.`,
        example: `Soirée des familles (Family French Resource Night)
A French-language school hosts an evening where teachers model reading a French picture book, show families how to access IDÉLLO at home, and share workshops from Parents partenaires en éducation. Staff speak French warmly with families at every language level and offer English or other-language support where needed. We would observe families leaving with French-language resources they can use at home.`,
        citations: [
          `Ontario Ministry of Education. (2026, August 12). French-language education. Government of Ontario. https://www.ontario.ca/page/french-language-education`,
          `Zakhartchouk, J.-M. (1999). L’enseignant, un passeur culturel. ESF.`,
        ],
      },
      {
        n: 10,
        statement: `Teaching and learning strategies in a minority situation, including the foundations of a cultural approach to teaching, that integrate local, Canadian, as well as global influences.`,
        theory: `Ecological Systems Theory by Urie Bronfenbrenner. Bronfenbrenner (1979) argued that a child’s development is shaped by a series of nested systems, beginning with the family and school and expanding outward to the community, the wider society, and culture. Because these systems influence one another, learning that starts in students’ immediate surroundings gives them a foundation for understanding national and global connections.`,
        practice: `A Cultural Approach to Teaching. Building on the idea that students’ learning begins close to home and expands outward, Ontario’s cultural approach framework for French-language schools asks teachers to help students build a personal relationship with Francophone culture by integrating local, Canadian, and global Francophone references into everyday learning (Ontario Ministry of Education, 2009).`,
        example: `From Franco-Ontarian Day to the Global Francophonie (Cultural Approach)
On September 25, Franco-Ontarian Day, Grade 6 students interview a local francophone community member and learn the meaning of the Franco-Ontarian flag. Over the following months, they compare their community with an Acadian community in New Brunswick and a francophone community in another country, then present their findings on March 20, International Francophonie Day. We would observe students connecting their local identity to the Canadian and global Francophonie.`,
        citations: [
          `Bronfenbrenner, U. (1979). The ecology of human development: Experiments by nature and design. Harvard University Press.`,
          `Ontario Ministry of Education. (2009). Une approche culturelle de l’enseignement pour l’appropriation de la culture dans les écoles de langue française de l’Ontario : Cadre d’orientation et d’intervention. Imprimeur de la Reine pour l’Ontario.`,
        ],
      },
      {
        n: 11,
        statement: `Using digital resources in supporting both French language learners and newcomer students and enabling them to become autonomous learners.`,
        theory: `Metacognition by John Flavell. Flavell (1976) described metacognition as awareness and control of one’s own thinking, such as noticing when one does not understand and choosing a strategy to fix it. Autonomous language learners use metacognition to monitor their comprehension and decide which supports they need.`,
        practice: `Self-Directed Digital Resources. Building on this, teachers show French language learners and newcomers how to use digital tools independently. IDÉLLO offers French-language educational content designed for students in French-language schools (Ontario Ministry of Education, 2026), and Immersive Reader can read French text aloud and translate words into a student’s first language (Microsoft Education Team, 2023).`,
        example: `“Je comprends / Je ne comprends pas“ Checklist with IDÉLLO (Metacognitive Self-Monitoring)
A Grade 4 newcomer watches a short IDÉLLO video and pauses at the end of each section to check off “Je comprends” or “Je ne comprends pas.” When she does not understand, she replays the section or uses Immersive Reader to translate key words, then adds one new word to her digital word journal. We would observe the student deciding which support to use without waiting for the teacher.`,
        citations: [
          `Flavell, J. H. (1976). Metacognitive aspects of problem solving. In L. B. Resnick (Ed.), The nature of intelligence (pp. 231-235). Erlbaum.`,
          `Microsoft Education Team. (2023, June). How to enhance reading instruction: A guide to Immersive Reader for educators. Microsoft Education Blog. https://www.microsoft.com/en-us/education/blog/2023/06/how-to-enhance-reading-instruction-a-guide-to-immersive-reader-for-educators/`,
          `Ontario Ministry of Education. (2026, August 12). French-language education. Government of Ontario. https://www.ontario.ca/page/french-language-education`,
        ],
      },
    ],
    lesson: {
      subtopic: `The value, elements, sensitivities, and challenges of life-long language learning in minority contexts: linguistic insecurity, interdependence of language and culture, variety of French language repertoires, authentic oral and written communication, listening, and speaking.`,
      title: `Voices of the Francophonie`,
      grade: `5`,
      subject: `French as a Second Language (French Immersion)`,
      objective: `Students will listen to French speakers from different Francophone communities, identify at least two regional word differences, and explain that each variety is correct French.`,
      curriculumLink: `French as a Second Language: French Immersion, Grades 1–8 (2013), Strand A: Listening, A3 Intercultural Understanding, demonstrating an understanding of information about French-speaking communities and their cultures.`,
      stages: [
        { name: `Anticipatory Set`, body: `The teacher displays a world map of the Francophonie and asks, “Où parle-t-on français dans le monde?” Students place sticky notes on places where they think French is spoken, including communities in Ontario and across Canada.` },
        { name: `Model`, body: `The teacher plays a short recording of a Québécois child describing a favourite meal and thinks aloud while filling in a T-chart titled “Mot entendu / Autre mot que je connais,” for example noting “char” beside “voiture.” She explains that both words are correct French used in different communities.` },
        { name: `Check for Understanding`, body: `“Avec ton partenaire, prends 30 secondes : est-ce que « char » est du bon français? Pourquoi?” The teacher circulates, listens, and calls on one pair to explain that regional words are correct French.` },
        { name: `Guided Practice`, body: `In small groups, students rotate through recordings of children from Franco-Ontarian, Acadian, Haitian, and Senegalese communities, adding at least two words to their T-chart at each station. The class then shares its findings and builds a “Mots de la francophonie” word wall.` },
        { name: `Closure`, body: `The teacher reviews that French is spoken in many ways around the world and that every variety is correct French, then invites a few students to share a favourite word they learned today.` },
        { name: `Independent Practice`, body: `Students record a 30-second description of their favourite food in French to share with a partner in class, using any words from their own French repertoire. The teacher listens to recordings to assess listening and speaking and to notice students who may need more confidence-building support.` },
      ],
      references: [
        `Ontario Ministry of Education. (2013). The Ontario curriculum: French as a second language: Core French, grades 4–8; Extended French, grades 4–8; French Immersion, grades 1–8. Queen’s Printer for Ontario.`,
        `Ontario Ministry of Education. (2023). Aménagement linguistique policy for French-language education. King’s Printer for Ontario. https://files.ontario.ca/edu_5/edu-amenagement-linguistique-policy-french-language-education-en-2023-04-04.pdf`,
      ],
    },
    exitTicket: {
      learned: [
        `Cummins distinguishes conversational language (BICS), which often develops within about two years, from academic language (CALP), which can take five to seven years, so conversational fluency does not mean a student is ready for academic tasks without support.`,
        `Ontario’s French-language schools have a mandate to protect, enhance, and transmit French language and culture, and the and PANA programs have been replaced by temporary support plans based on each student’s needs.`,
        `Cummins’s linguistic interdependence hypothesis explains that skills learned in a first language transfer to a new language, so students’ home languages support their French and English learning.`,
      ],
      interesting: [
        `Immersive Reader lets teachers adjust support by translating a whole document or only individual words, which makes it a practical tool for gradually building students’ independence.`,
        `Linguistic insecurity connects to Bourdieu’s concept of linguistic capital because students may feel their regional French is less valuable when schools treat one variety as the standard.`,
      ],
      wonder: [
        `How can teachers correct students’ French without making them feel that their French is less legitimate?`,
      ],
    },
  },
  {
    slug: "06-special-education-needs",
    number: 6,
    title: `Supporting Students with Special Needs`,
    source: `Ontario College of Teachers Accreditation Resource Guide (2023)`,
    summary: `Teacher candidates must know how to support diverse learners by using UDL, asset-based thinking, and differentiation to plan personalized instruction. They should build on student strengths in collaboration with professionals and families. Teachers must use student information to drive instructional practices that enable learners with special education needs to participate fully in school.`,
    elements: [
      {
        n: 1,
        statement: `An awareness of the discriminatory and systemic barriers faced by students with special education needs and how teachers create the conditions for success through an asset-based approach, focusing on student strengths and interests to address learning needs.`,
        theory: `Social Model of Disability by Mike Oliver. Oliver (1990) argued disability is created less by a person’s impairment than by barriers in society, such as inaccessible spaces, rigid instruction, and low expectations. This shifts the teacher’s question from what is wrong with the student to what in the learning environment needs to change.`,
        practice: `Asset-Based Planning. Ontario teachers begin by examining both the curriculum expectations and each student’s strengths and needs, then combine universal design and differentiated instruction to provide personalized teaching, guided by the belief that fairness is not sameness (Ontario Ministry of Education, 2024). Students’ interests become entry points into learning (Hanson, 2026).`,
        example: `Strengths and Interests Profile (Asset-Based Approach)
At the start of the term, a Grade 4 teacher asks each student to complete a strengths and interests survey with their family. A student with an IEP for reading who loves hockey reads high-interest, lower-readability hockey articles and uses player statistics in math. We would observe the student practising grade-level skills through a topic they care about, and the teacher naming the student’s strengths in feedback.`,
        citations: [
          `Hanson, J. (2026, January 13). Instructional strategies for special education. Special Education Journey. https://special-education-journey.com/instructional-strategies-for-special-education/`,
          `Oliver, M. (1990). The politics of disablement. Macmillan.`,
          `Ontario Ministry of Education. (2024). Planning for students with special education needs. Curriculum and Resources. https://www.dcp.edu.gov.on.ca/en/program-planning/considerations-for-program-planning/planning-for-students-with-special-education-needs`,
        ],
      },
      {
        n: 2,
        statement: `A belief that all students can learn and that success builds a sense of efficacy.`,
        theory: `Self-Efficacy by Albert Bandura. Bandura (1977) argued that self-efficacy, a person’s belief in their ability to succeed, grows mainly through mastery experiences, and also through seeing peers succeed, receiving encouragement, and how a person interprets their own stress. Each success makes a student more willing to attempt the next challenge.`,
        practice: `Tiered Tasks. Ontario’s program planning begins with the belief that all students can succeed (Ontario Ministry of Education, 2024). Teachers create mastery experiences through tiered tasks, in which students work on the same topic at different levels of challenge, either by choice or by teacher assignment, with flexible groupings to avoid stigma (Robinson & Hutchinson, 2014).`,
        example: `“I Can” Success Tracker (Tiered Tasks)
During a Grade 2 addition unit, students can choose from three task cards of increasing challenge and colour in each “I can” statement they complete on a personal tracker. We would observe students attempting harder cards after succeeding at easier ones, and the teacher pointing to each student’s tracker during conferences to show their growth.`,
        citations: [
          `Bandura, A. (1977). Self-efficacy: Toward a unifying theory of behavioral change. Psychological Review. 84(2), 191-215. https://doi.org/10.1037/0033-295X.84.2.191`,
          `Ontario Ministry of Education. (2024). Planning for students with special education needs. Curriculum and Resources. https://www.dcp.edu.gov.on.ca/en/program-planning/considerations-for-program-planning/planning-for-students-with-special-education-needs`,
          `Robinson, K., & Hutchinson, N. L. (2014, August 6). Tiered approaches to the education of students with learning disabilities. LD@school. https://www.ldatschool.ca/tiered-approaches-to-the-education-of-students-with-learning-disabilities/`,
        ],
      },
      {
        n: 3,
        statement: `Knowledge of multiple and complex causes of behavioural concerns and best practices to address them in a way that is positive and supports the dignity of the child.`,
        theory: `Hierarchy of Needs by Abraham Maslow. Maslow (1943) argued that people are motivated by needs in a sequence, beginning with physiological needs and safety, then belonging and esteem. When these needs are unmet, students may show challenging behaviour, so teachers look for the need behind the behaviour rather than punishing the child.`,
        practice: `Positive Behaviour Strategies. Teachers treat behaviour as communication and respond proactively with co-created expectations, pre-correction, nonverbal signals, and frequent positive feedback (Morin, 2026). For persistent concerns, they work with specialists on a functional behaviour assessment.`,
        example: `Reading the Message Behind the Behaviour (Positive Behaviour Strategies)
A Grade 3 student often leaves his seat during writing. The teacher tracks when it happens, notices the pattern, and offers speech-to-text, a nonverbal signal, and a brain break (Hanson, 2026; Morin, 2026). We would observe the student staying engaged and the teacher redirecting privately, without public reprimands.`,
        citations: [
          `Hanson, J. (2026, January 13). Instructional strategies for special education. Special Education Journey. https://special-education-journey.com/instructional-strategies-for-special-education/`,
          `Maslow, A. H. (1943). A theory of human motivation. Psychological Review, 50(4), 370-396. https://doi.org/10.1037/h0054346`,
          `Morin, A. (2026, March 12). Positive behavior strategies: A guide for teachers. Understood. https://www.understood.org/en/articles/what-are-positive-behavior-strategies`,
        ],
      },
      {
        n: 4,
        statement: `The larger context of special education, including Individual Education Plans (IEPs), the Identification, Placement and Review Committee process (IPRC), transition planning and relevant regulations and policy documents (e.g., The Accessibility for Ontarians with Disabilities Act (AODA) and Ontario Human Rights Commission (OHRC)).`,
        theory: `Self-Determination Theory by Edward Deci and Richard Ryan. Deci and Ryan (1985) argued that people are most motivated when three needs are met: autonomy, competence, and relatedness. In special education planning, this supports involving students and families in decisions about the student’s learning and future.`,
        practice: `The IPRC, IEP and Transition Plan. An Identification, Placement and Review Committee (IPRC) identifies a student as exceptional and decides on placement. The IEP records the student’s strengths, needs, accommodations, and any modified or alternative expectations, and the parent, and the student if 16 or older, must be consulted when it is developed. Every IEP includes a transition plan (Ontario Ministry of Education, 2017). The AODA sets provincial accessibility standards, and the OHRC (2018) explains that schools have a duty to accommodate students with disabilities to the point of undue hardship.`,
        example: `Student-Involved IEP Review (Transition Planning)
Before a Grade 6 student moves to a new school for Grade 7, the classroom teacher, special education teacher, parents, and student meet to review her IEP. The student shares which accommodations help her most, such as extra time and speech-to-text, and the team adds a visit to the new school to her transition plan. We would observe the student speaking about her own learning and the family contributing as partners.`,
        citations: [
          `Accessibility for Ontarians with Disabilities Act, 2005, S.O. 2005, c. 11. https://www.ontario.ca/laws/statute/05a11`,
          `Deci, E. L., & Ryan, R. M. (1985). Intrinsic motivation and self-determination in human behavior. Plenum Press.`,
          `Ontario Human Rights Commission. (2018). Policy on accessible education for students with disabilities.`,
          `Ontario Ministry of Education. (2017). Special education in Ontario, kindergarten to grade 12: Policy and resource guide. https://www.ontario.ca/document/special-education-ontario-policy-and-resource-guide-kindergarten-grade-12`,
        ],
      },
      {
        n: 5,
        statement: `The variety and scope of learning needs of students and exceptionalities, evidence-based strategies, including Applied Behaviour Analysis (ABA), and the roles of community partners and agencies, and parents and guardians.`,
        theory: `Operant Conditioning by B. F. Skinner. Skinner (1953) argued that behaviour is shaped by its consequences: behaviours that are reinforced become more likely, and behaviours that are not reinforced become less likely.`,
        practice: `Applied Behaviour Analysis (ABA) and Partnerships. ABA breaks skills into small steps and reinforces progress, and Ontario school boards must offer students with autism spectrum disorder special education programs that use ABA methods where appropriate (Ontario Ministry of Education, 2007). When an IPRC identifies a student as exceptional, it uses one of five categories from Ontario’s Education Act: behaviour, communication, intellectual, physical, or multiple (Ontario Ministry of Education, 2017). Teachers collaborate with parents and guardians and with community partners, such as ABA therapists and speech-language pathologists.`,
        example: `Visual Task Analysis for the Morning Routine (ABA)
A Grade 1 student with autism learns the morning arrival routine through a picture sequence broken into small steps, and receives praise and a preferred activity after completing each step. The teacher shares the same visuals with the family and the student’s community ABA therapist. We would observe consistent language and reinforcement at home and at school, and the student completing more steps independently over time.`,
        citations: [
          `Ontario Ministry of Education. (2007). Policy/Program Memorandum No. 140: Incorporating methods of applied behaviour analysis (ABA) into programs for students with autism spectrum disorders (ASD).`,
          `Ontario Ministry of Education. (2017). Special education in Ontario, kindergarten to grade 12: Policy and resource guide. https://www.ontario.ca/document/special-education-ontario-policy-and-resource-guide-kindergarten-grade-12`,
          `Skinner, B. F. (1953). Science and human behavior. Macmillan.`,
        ],
      },
      {
        n: 6,
        statement: `The uses of assistive and adaptive technologies in support of student learning.`,
        theory: `Cognitive Load Theory by John Sweller. Sweller (1988) argued that working memory can process only a limited amount of information at once, and that learning suffers when a task overloads it. For a student with a reading or writing disability, decoding words or forming letters can use up the working memory needed to understand and express ideas.`,
        practice: `Assistive Technology. Text-to-speech, speech-to-text, and programs such as Read&Write and Kurzweil, which read text aloud while highlighting words, reduce these demands so students can access grade-level material and show what they know (Hanson, 2026; Robinson & Hutchinson, 2014). Offering these tools to the whole class, following Universal Design for Learning, means no student is singled out (Rose & Meyer, 2002). In Ontario, school boards can receive funding for equipment that students need through the Special Equipment Amount (Ontario Ministry of Education, 2017).`,
        example: `Choice of Tools for a Research Project (UDL)
During a Grade 5 science research project, every student may read sources with text-to-speech, record ideas with speech-to-text, and present with a slideshow or an audio recording. A student with a learning disability in writing drafts his report using speech-to-text. We would observe all students choosing tools, so no one is singled out for using technology.`,
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
        statement: `Effective and proactive behavioural supports and strategies (e.g., ABA).`,
        theory: `Individual Psychology by Alfred Adler. Adler (1927) argued that all behaviour is purposeful and directed toward a goal, and that a person’s central need is to belong and feel significant within a social group. When this need is not met, people may act in discouraged or unhelpful ways, so a behaviour can only be understood in light of the goal it serves.`,
        practice: `Predictable Routines and Meaningful Roles. Teachers prevent challenging behaviour by keeping everyday routines consistent, breaking assignments into smaller pieces, spacing breaks between tasks, and using visual and auditory cues, such as a timer, to signal transitions (The SHARE Team, 2012). Because the goal behind much behaviour is belonging, teachers also give students meaningful roles in the classroom community.`,
        example: `Step-by-Step Oral Tasks and a Daily Classroom Role (Proactive Supports)
In a Grade 4 French Immersion class at an English-language school, a student shuts down and refuses to speak during oral French activities. The teacher splits each oral task into short steps: plan with a partner, rehearse, then share one sentence. She uses a timer for each step and gives the student the daily role of leading the calendar routine in French with a script card. We would observe the student speaking French more often and participating as a valued member of the class.`,
        citations: [
          `Adler, A. (1927). Understanding human nature (W. B. Wolfe, Trans.). Greenberg.`,
          `The SHARE Team. (2012, September 12). Effective teaching strategies for special education. Resilient Educator. https://resilienteducator.com/classroom-resources/effective-teaching-strategies-for-special-education/`,
        ],
      },
      {
        n: 8,
        statement: `Indigenous ways of thinking and using a cultural lens when supporting students with special education needs.`,
        theory: `Indigenous Education Theory by Gregory Cajete. Cajete (1994), a Tewa scholar, argued that Indigenous education is holistic and relational: learning connects the mind, body, emotions, and spirit, and develops through relationships with family, community, and the natural world. In this view, a person’s place and community are central sources of knowledge rather than background to it.`,
        practice: `Two-Eyed Seeing and the First Peoples Principles of Learning. Building on this idea, Two-Eyed Seeing (Etuaptmumk,), a Mi’kmaw guiding principle shared by Elder Albert Marshall, invites teachers to combine the strengths of Indigenous and Western knowledges, such as pairing evidence-based supports with the community’s knowledge of the child (Bartlett et al., 2012). The First Peoples Principles of Learning, developed by First Nations educators, describe learning as holistic, experiential, and relational, and as requiring patience and time (First Nations Education Steering Committee, 2008).`,
        example: `Family Circle and Land-Based Learning (Two-Eyed Seeing)
Before an IEP meeting for a First Nations student, the teacher invites the family, and with their agreement a community support worker or Elder, to a circle conversation about the student’s gifts and goals. The student’s plan includes land-based activities, such s counting and sorting items gathered outdoors, alongside assistive technology. We would observe the family’s knowledge shaping the plan and the student’s identity reflected in the supports.`,
        citations: [
          `Bartlett, C., Marshall, M., & Marshall, A. (2012). Two-Eyed Seeing and other lessons learned within a co-learning journey of bringing together Indigenous and mainstream knowledges and ways of knowing. Journal of Environmental Studies and Sciences, 2(4), 331-340. https://doi.org/10.1007/s13412-012-0086-8`,
          `Cajete, G. (1994). Look to the mountain: An ecology of Indigenous education. Kivakí Press.`,
          `First Nations Education Steering Committee. (2008). First Peoples principles of learning.`,
        ],
      },
    ],
    lesson: {
      subtopic: `Knowledge of multiple and complex causes of behavioural concerns and best practices to address them in a way that is positive and supports the dignity of the child.`,
      title: `Ma boîte à outils pour me calmer (My Calm-Down Toolbox)`,
      grade: `3`,
      subject: `Health and Physical Education (French Immersion)`,
      objective: `Students will identify at least two emotions and choose two calming strategies that they can use independently when they feel upset.`,
      curriculumLink: `The Ontario Curriculum, Grades 1–8: Health and Physical Education (2019), Strand A: Social-Emotional Learning Skills, A1.1 Identification and Management of Emotions and A1.2 Stress Management and Coping.`,
      stages: [
        { name: `Anticipatory Set`, body: `The teacher shows photos of children’s faces and asks, “Comment se sent cette personne? Comment le sais-tu?” (“How does this person feel? How do you know?”). Students name emotions such as content (happy), triste (sad), fâché (angry), and inquiet (worried), and the teacher records them on a chart.` },
        { name: `Model`, body: `The teacher thinks aloud: “Quand je me sens frustrée, mon coeur bat vite. Je respire lentement en comptant jusqu’à quatre.” (“When I feel frustrated, my heart beats fast. I breathe slowly while counting to four”). She models three calming strategies: square breathing, a stretch, and asking an adult for help, and explains that these feelings are normal and that everyone needs strategies.` },
        { name: `Check for Understanding`, body: `“Montre-moi avec ton pouce : est-ce que c’est correct de se sentir fâché?“ (“Show me with your thumb: is it okay to feel angry, mad, or upset?”). Then, “Avec ton partenaire, nomme une stratégie que tu peux utiliser quand tu te sens inquiet” (”With your partner, name one strategy you can use when you feel worried.”). The teacher circulates and listens.` },
        { name: `Guided Practice`, body: `Students rotate through four short stations to try each strategy: la respiration du carré (square breathing), les étirements (stretching), le dessin calme (calm drawing), and practising how to ask for help (“Est-ce que je peux avoir de l’aide?”). At each station, they put a sticker on a sheet beside the strategies that help them most.` },
        { name: `Closure`, body: `The class co-creates a “coin calme” (calming corner) poster with the strategies they found helpful, and the teacher reminds students that they can use the coin calme whenever they need it, without asking permission in front of the class.` },
        { name: `Independent Practice`, body: `Each student makes a personal strategy card with two calming strategies, a drawing, and a sentence starter (“Quand je me sens ______, je peux ____.” “When I feel _____, I can _____.”) to keep at their desk. Later, the teacher can use a nonverbal signal to prompt a student to check their card privately, which supports the student’s dignity.` },
      ],
      references: [
        `Morin, A. (2026, March 12). Positive behavior strategies: A guide for teachers. Understood. https://www.understood.org/en/articles/what-are-positive-behavior-strategies`,
        `Ontario Ministry of Education. (2019). The Ontario curriculum, grades 1-8: Health and physical education. Queen’s Printer for Ontario.`,
      ],
    },
    exitTicket: {
      learned: [
        `Ontario’s tiered approach includes Tier 1 universal programming for all students, Tier 2 small-group intervention, and Tier 3 intensive individual support, which replaces waiting for students to fail with early intervention.`,
        `Accommodations change how a student learns or shows learning without changing grade-level expectations, while modified expectations change the number or complexity of expectations and must be recorded in the IEP.`,
        `In Ontario, every IEP includes a transition plan, and the parent, and the student if 16 or older, must be consulted when the IEP is developed.`,
      ],
      interesting: [
        `Accommodations should be the first option in program planning, and the IEP box on the report card is not checked when a student has accommodations only.`,
        `Positive behaviour strategies treat behaviour as communication, and research suggests making five positive comments for every correction.`,
      ],
      wonder: [
        `How can French Immersion teachers tell the difference between a student who is still developing French and a student who may have a learning difference, so that students with special education needs receive support to stay in French Immersion?`,
      ],
    },
  },
  {
    slug: "07-mental-health-wellbeing-belonging",
    number: 7,
    title: `Mental Health, Well-Being and Belonging`,
    source: `Ontario College of Teachers Accreditation Resource Guide (2023)`,
    summary: `Teacher candidates are expected to understand how mental health, well-being and belonging influence student achievement and to apply an asset-based approach in their practice. They are responsible for promoting universal wellness, recognizing when students may require additional support, and understanding the processes through which students and families access services. Educators must collaborate with students, families, and professionals to identify individual strengths and address learning needs.`,
    elements: [
      {
        n: 1,
        statement: `Acknowledge that students can benefit from building capacities to identify and manage stress, developing and maintaining healthy relationships, and engaging in self-reflection to better understand themselves.`,
        theory: `Transactional model of stress and coping (Lazarus & Folkman, 1984). Stress does not come from an event alone. It comes from how a person appraises the event and judges whether they have the resources to cope with it. Because appraisal and coping can be learned, students can build the capacity to identify what stresses them, notice their own reactions, and choose a coping strategy.`,
        practice: `Everyday Mental Health Classroom Resource (School Mental Health Ontario, 2019). This resource gives teachers short, evidence-based practices to build into daily routines. They are organized by the same social-emotional learning skills as Strand A of the Ontario Health and Physical Education curriculum, including identifying and managing emotions, stress management and coping, healthy relationship skills, and self-awareness (Ontario Ministry of Education, 2019).`,
        example: `A morning check-in where each student moves a clothespin on a “How am I feeling?” chart, and the teacher quietly follows up with students who seem to need it.
The class practises one calming strategy, such as slow “balloon breathing,” before a test or after recess, with the teacher modelling it and naming when it can help.
Students sort scenario cards into “small problem” and “big problem” and match each one with a coping strategy, such as taking a break, talking to a friend, or asking an adult.
An end-of-day journal prompt: “Today I felt ___ when ___. I handled it by ___.”`,
        citations: [
          `Lazarus, R. S., & Folkman, S. (1984). Stress, appraisal, and coping. Springer.`,
          `Ontario Ministry of Education. (2019). The Ontario curriculum, grades 1–8: Health and physical education. Queen’s Printer for Ontario.`,
          `School Mental Health Ontario. (2019). Everyday mental health classroom resource. https://smho-smso.ca/emhc/`,
        ],
      },
      {
        n: 2,
        statement: `Assist students to develop transferable skills and attributes that can improve their resilience and well-being by fostering inclusive learning environments that are healthy, caring, safe, equitable, and accessible for all students.`,
        theory: `Resilience as “ordinary magic” (Masten, 2001). Masten found that resilience does not come from rare qualities. It comes from ordinary protective systems, such as caring relationships with adults, problem-solving skills, self-regulation, and a sense of competence. Because schools can strengthen these systems, resilience is something teachers help build in every student.`,
        practice: `Universal Design for Learning (UDL) (CAST, 2024). UDL plans lessons from the start with multiple means of engagement, representation, and action and expression, so the classroom is accessible to all students instead of being adjusted later for a few. Ontario’s Learning for All recommends UDL as a foundation for inclusive instruction (Ontario Ministry of Education, 2013).`,
        example: `Directions are posted in words and pictures, read aloud, and demonstrated, and a visual schedule shows the order of the day.
Students choose how to show their learning: drawing, writing, recording audio, or building a model.
A quiet corner with headphones and fidget tools is open to any student, without needing to ask.
Group work uses rotating roles, so every student practises collaboration and communication, two of Ontario’s transferable skills.`,
        citations: [
          `CAST. (2024). Universal design for learning guidelines version 3.0. https://udlguidelines.cast.org`,
          `Masten, A. S. (2001). Ordinary magic: Resilience processes in development. American Psychologist, 56(3), 227–238. https://doi.org/10.1037/0003-066X.56.3.227`,
          `Ontario Ministry of Education. (2013). Learning for all: A guide to effective assessment and instruction for all students, kindergarten to grade 12. Queen’s Printer for Ontario.`,
        ],
      },
      {
        n: 3,
        statement: `The educator’s role in recognizing signs of distress that a student may be demonstrating and initiating the process to access support.`,
        theory: `Ecological systems theory (Bronfenbrenner, 1979). A child develops within nested systems, from the microsystem (family, classroom) to the wider community and society. Distress in one system, such as the home, often shows up in another, such as the classroom. The teacher is part of the student’s microsystem, so they are positioned to notice changes and to connect the family, the school team, and community services.`,
        practice: `Notice, document, and refer through the school’s support pathway (Ontario Ministry of Education, 2013). Educators do not diagnose. They observe changes in a student’s behaviour, record specific observations, consult the principal or in-school support team, and contact families according to board protocols. The Classroom Mental Health toolkit describes teachers as being in a unique position to identify signs of distress early (University of Michigan Depression Center, n.d.).`,
        example: `The teacher notices that a usually talkative student has been withdrawn for a week and records dated, specific observations without interpreting them.
The teacher checks in privately (“I’ve noticed you seem quieter this week. How are things going?”) and listens without promising to keep secrets.
The teacher shares the observations with the principal or in-school team and follows the board’s referral process. Urgent concerns, such as a disclosure of harm, are reported right away.
An occasional teacher leaves detailed notes so the regular teacher can follow up.`,
        citations: [
          `Bronfenbrenner, U. (1979). The ecology of human development: Experiments by nature and design. Harvard University Press.`,
          `Ontario Ministry of Education. (2013). Supporting minds: An educator’s guide to promoting students’ mental health and well-being. Queen’s Printer for Ontario.`,
          `University of Michigan Depression Center. (n.d.). Classroom mental health. https://classroommentalhealth.org`,
        ],
      },
      {
        n: 4,
        statement: `Promoting a positive learning environment that develops and supports physical and mental health, social-emotional learning, inclusion, and a sense of belonging to reduce stigma related to mental health.`,
        theory: `Self-determination theory (Ryan & Deci, 2000). People have three basic psychological needs: autonomy, competence, and relatedness. When a classroom meets these needs, students show greater motivation and well-being. Relatedness, the need to feel connected to and cared for by others, is the basis of a sense of belonging.`,
        practice: `Morning Meeting (Kriete & Davis, 2014). This daily routine has four parts: a greeting, sharing, a group activity, and a morning message. It builds relationships and belonging every day, not only when a problem comes up. This matters because the share of Canadian students who feel their teachers care about them drops between Grade 6 and Grade 10, from 76% to 56% for girls (Public Health Agency of Canada, 2020).`,
        example: `Students sit in a circle and greet each other by name, making sure every student is greeted.
During sharing, the teacher models everyday language about mental health, such as “Everyone has mental health, just like everyone has physical health,” which reduces stigma.
The class co-creates its norms, and every student has a classroom job.
Short movement breaks between lessons support physical health as well as focus.`,
        citations: [
          `Kriete, R., & Davis, C. (2014). The morning meeting book (3rd ed.). Center for Responsive Schools.`,
          `Public Health Agency of Canada. (2020). The health of Canadian youth: Findings from the health behaviour in school-aged children study. https://www.canada.ca/en/public-health/services/publications/science-research-data/youth-findings-health-behaviour-school-aged-children-study.html`,
          `Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. American Psychologist, 55(1), 68–78. https://doi.org/10.1037/0003-066X.55.1.68`,
        ],
      },
      {
        n: 5,
        statement: `An understanding of Ontario’s Equity and Inclusive Education Strategy and how it helps the education community identify and remove discriminatory biases and systemic barriers through anti-oppressive education to support student achievement and well-being.`,
        theory: `Anti-oppressive education (Kumashiro, 2000). Kumashiro describes four approaches: education for the Other, education about the Other, education that is critical of privileging and Othering, and education that changes students and society. The theory asks teachers to examine how school structures, curriculum, and expectations privilege some students and marginalize others.`,
        practice: `Inclusive curriculum and resource review under Ontario’s Equity and Inclusive Education Strategy (Ontario Ministry of Education, 2009). The strategy aims to identify and remove discriminatory biases and systemic barriers so that all students can achieve and feel welcome. Inclusive curriculum and assessment practices are one of its areas of focus, which teachers can put into practice by reviewing what they teach and how they assess.`,
        example: `The teacher audits the classroom library with a checklist of whose stories, families, languages, and abilities are represented, and replaces books that rely on stereotypes.
A Grade 2 science unit on what plants need includes the Haudenosaunee Three Sisters growing practice as a source of scientific knowledge, not as a cultural add-on.
The teacher looks for patterns in who is sent out of class or who receives lower marks on certain tasks, and adjusts practices that create barriers.
When a student makes a biased comment, the teacher responds right away and uses it as a teachable moment.`,
        citations: [
          `Kumashiro, K. K. (2000). Toward a theory of anti-oppressive education. Review of Educational Research, 70(1), 25–53. https://doi.org/10.3102/00346543070001025`,
          `Ontario Ministry of Education. (2009). Realizing the promise of diversity: Ontario’s equity and inclusive education strategy. Queen’s Printer for Ontario.`,
        ],
      },
      {
        n: 6,
        statement: `Using an asset-based approach for all students and their families and guardians.`,
        theory: `Funds of knowledge (Moll et al., 1992). Every household holds knowledge and skills built up through its history, culture, and work. When teachers learn about these funds of knowledge, they can build instruction on what families already know and do, instead of viewing students through their deficits.`,
        practice: `Strength-based family engagement (Ontario Ministry of Education, 2010). Ontario’s parent engagement policy positions parents as partners in their children’s learning. It asks schools to welcome families, offer different ways to be involved, and remove barriers to participation.`,
        example: `At the start of the year, families complete a “Tell me about your child” form, in their home language where possible, that asks about strengths, interests, and hopes, not only concerns.
Family members are invited to share knowledge connected to the curriculum, such as gardening, cooking, a trade, or a language.
The teacher’s first contact with each family is positive, such as a good-news call or note.
Report card comments and IEP meetings begin with what the student can do.`,
        citations: [
          `Moll, L. C., Amanti, C., Neff, D., & González, N. (1992). Funds of knowledge for teaching: Using a qualitative approach to connect homes and classrooms. Theory Into Practice, 31(2), 132–141. https://doi.org/10.1080/00405849209543534`,
          `Ontario Ministry of Education. (2010). Parents in partnership: A parent engagement policy for Ontario schools. Queen’s Printer for Ontario.`,
        ],
      },
      {
        n: 7,
        statement: `Understanding the importance of and legal requirements to maintain student confidentiality and privacy.`,
        theory: `Ethic of care (Noddings, 1984). Noddings describes caring as a relationship in which the carer pays close attention to the needs of the one cared for. Students share their struggles only when they trust that the information will be handled with respect, so protecting their privacy is part of caring. Care also means a teacher cannot promise complete secrecy when a student’s safety is at risk.`,
        practice: `Following Ontario’s legal requirements for student information. The Ontario Student Record (OSR) is privileged and may be used only to improve the student’s instruction (Education Act, 1990, s. 266). Personal information is protected under the Municipal Freedom of Information and Protection of Privacy Act (1990). The duty to report a suspected child in need of protection overrides confidentiality: a teacher must report directly to a children’s aid society and cannot pass this duty to someone else (Child, Youth and Family Services Act, 2017, s. 125).`,
        example: `The teacher discusses a student’s needs only with staff directly involved, in a private space, and never in the hallway or staff room.
IEPs, assessment notes, and student files are kept in a locked cabinet or a secure board platform, not left on the desk or sent in emails with full names.
When a student begins to disclose, the teacher says, “I care about you, and if you tell me something that means you are not safe, I have to tell someone who can help.”
Photos of students are posted only when the family has signed a consent form.`,
        citations: [
          `Child, Youth and Family Services Act, 2017, S.O. 2017, c. 14, Sched. 1, s. 125.`,
          `Education Act, R.S.O. 1990, c. E.2, s. 266.`,
          `Municipal Freedom of Information and Protection of Privacy Act, R.S.O. 1990, c. M.56.`,
          `Noddings, N. (1984). Caring: A feminine approach to ethics and moral education. University of California Press.`,
        ],
      },
    ],
    lesson: {
      subtopic: `Acknowledge that students can benefit from building capacities to identify and manage stress, developing and maintaining healthy relationships, and engaging in self-reflection to better understand themselves.`,
      title: `My Calm-Down Toolbox`,
      grade: `2`,
      subject: `Health and Physical Education (Social-Emotional Learning Skills)`,
      objective: `Students will identify at least two ways their body shows stress and demonstrate two coping strategies they can use at school.`,
      curriculumLink: `Health and Physical Education, Strand A: Social-Emotional Learning Skills. A1.1: identify and manage emotions. A1.2: recognize sources of stress and cope with challenges (Ontario Ministry of Education, 2019).`,
      stages: [
        { name: `Anticipatory Set`, body: `The teacher slowly blows up a balloon and asks, “What would happen if I kept blowing more and more air into this balloon?” After students respond, the teacher explains that our bodies can feel full like a balloon when we are worried, frustrated, or upset. Students turn and talk with a partner about something at school that can make them feel this way.` },
        { name: `Model`, body: `The teacher thinks aloud through a short scenario: “This morning I couldn’t find my keys and I was going to be late. My heart beat fast and my shoulders went up to my ears.” The teacher points to these body signs on a large body outline, then models two tools: balloon breathing (breathe in through the nose for four counts and out through the mouth for four counts) and squeeze-and-release (squeeze fists tight, then let go). The teacher adds a third tool, asking a trusted adult for help.` },
        { name: `Check for Understanding`, body: `Students point to the places on their own bodies where they might feel stress. The teacher asks everyone to show balloon breathing at the same time and watches for students who need another demonstration. A thumbs up, sideways, or down shows how confident each student feels.` },
        { name: `Guided Practice`, body: `In small groups, students receive scenario cards, such as “I lost my pencil right before a test,” “My friend won’t play with me at recess,” or “The fire alarm is very loud.” For each card, the group decides how their body might feel, chooses a tool, and practises it together. The teacher circulates and asks, “Why did you choose that tool?”` },
        { name: `Closure`, body: `Each student writes or draws one tool they will try on a sticky note and adds it to a class “Calm-Down Toolbox” chart. The chart stays posted so students can return to it.` },
        { name: `Independent Practice`, body: `Students make a personal toolbox card with two strategies drawn and labelled. They keep it in their desk and colour a smiley face on a one-week log each time they use a tool. A note home explains the tools so families can practise them too.` },
      ],
    },
    exitTicket: {
      learned: [
        `Positive school climate, including feeling a sense of belonging, drops sharply as students get older. Among girls, it falls from 60% in Grade 6 to 31% in Grade 10 (Public Health Agency of Canada, 2020).`,
        `Information-only, fear-based, and moral-appeal drug prevention programs are largely ineffective. Interactive life-skills programs with booster sessions at key transitions work better (Public Safety Canada, 2018).`,
        `In Ontario, the duty to report a suspected child in need of protection belongs to each educator personally, and the report must go directly to a children’s aid society (Child, Youth and Family Services Act, 2017, s. 125).`,
      ],
      interesting: [
        `Mental Health America’s first tip for teachers is to “start fresh” and not let other teachers’ negative impressions shape how you see a student before you meet them.`,
        `School Mental Health Ontario’s Everyday Mental Health Classroom Resource organizes its practices around the same social-emotional learning skills as the Ontario Health and Physical Education curriculum, so mental health can be part of daily routines.`,
      ],
      wonder: [
        `How can an occasional teacher best support students’ mental health in a one-day placement, when they do not know what is typical for each student?`,
      ],
      references: [
        `Mental Health America. (n.d.). Tips for teachers: Ways to help students who struggle with emotions or behavior. https://mhanational.org/resources/tips-for-teachers-ways-to-help-students-who-struggle-with-emotions-or-behavior/`,
        `Public Safety Canada. (2018). School-based drug abuse prevention: Promising and successful programs. https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/sclbsd-drgbs/index-en.aspx`,
      ],
    },
  },
  {
    slug: "08-education-law-standards",
    number: 8,
    title: `Education Law and Standards of Practice`,
    source: `Ontario College of Teachers Accreditation Resource Guide (2023)`,
    summary: `Teacher candidates need an understanding of education law so they know their responsibilities, the rules that guide their work, and how to create a safe, positive school environment. It also helps them to promote respectful behaviour, address issues appropriately, and uphold the high standards of professional conduct expected of teachers.`,
    // Part 1 columns are "Write a summary" / "Provide an example", not Theory / Practice: the summary is stored in `theory`,
    // `practice` stays empty, and `labels` tells the site what to call the columns. Part 2 is a court-case summary, not a mini-lesson.
    labels: { theory: "Summary", example: "Example" },
    partTwoTitle: "Summary of an Educational Law Court Case",
    elements: [
      {
        n: 1,
        statement: `The professional, ethical, and legal responsibilities of teachers
Education Act
Ontario College of Teachers Act
Ministry policies, and
Child and Family Services Act
Select one law or act. Make certain to check with group members to divide up the documents.`,
        theory: `Education Act. The Education Act is the main law that governs publicly funded schools in Ontario. Section 264 sets out the duties of a teacher, which include teaching diligently, encouraging students in the pursuit of learning, modelling values such as truth, justice, and humanity “by precept and example,” maintaining proper order and discipline, preparing for classes, and co-operating with the principal and other teachers. The Act also protects student records (s. 266) and requires board employees to report serious student incidents to the principal (s. 300.2).`,
        practice: ``,
        example: `A teacher arrives with lessons planned and materials ready, keeps an orderly classroom with clear routines, and models respectful language with students and colleagues.
When a student is assaulted at recess, the teacher who witnessed it reports the incident to the principal the same day, as the Act requires, rather than handling it alone.
The teacher shares student progress with families and keeps the principal informed of concerns, which reflects the duty to co-operate with the school team.`,
        citations: [
          `Education Act, R.S.O. 1990, c. E.2. https://www.ontario.ca/laws/statute/90e02`,
        ],
      },
      {
        n: 2,
        statement: `The teacher’s role and responsibility in promoting school safety:
Ontario Schools Code of Conduct and criminal law
Creating Safe and Accepting Schools`,
        theory: `Ontario Schools Code of Conduct and criminal law. The Provincial Code of Conduct (PPM 128) sets standards of behaviour for everyone in schools, including respect, civility, responsible citizenship, and physical safety. Boards must have their own codes that are consistent with it. Some behaviours, such as assault, possessing a weapon, or trafficking drugs, are also criminal offences, and principals involve the police according to the local Police/School Board Protocol. Students aged 12 to 17 who commit offences fall under the Youth Criminal Justice Act.
Creating Safe and Accepting Schools. The Accepting Schools Act (2012) amended the Education Act to require bullying prevention and intervention plans, a progressive discipline approach, and support for student groups that promote equity and inclusion. Under PPM 145, all board employees who work directly with students must respond to inappropriate and disrespectful behaviour.`,
        practice: ``,
        example: `The teacher co-creates class norms with students that match the school’s code of conduct and reviews them after breaks and before field trips.
When a student makes a homophobic comment, the teacher responds right away, explains why the comment is harmful, and follows up with both students. If it continues, the teacher reports it to the principal.
The teacher supervises a student-led inclusion club or helps students plan a kindness campaign during Bullying Awareness and Prevention Week (the third week of November).`,
        citations: [
          `Accepting Schools Act, 2012, S.O. 2012, c. 5.`,
          `Ontario Ministry of Education. (2022). Policy/Program Memorandum 128: The provincial code of conduct and school board codes of conduct.`,
          `Ontario Ministry of Education. (2012). Policy/Program Memorandum 145: Progressive discipline and promoting positive student behaviour.`,
        ],
      },
      {
        n: 3,
        statement: `The teacher’s duty to report, as outlined in the Child, Youth and Family Services Act`,
        theory: `Duty to report. Under section 125 of the Child, Youth and Family Services Act (2017), anyone who has reasonable grounds to suspect that a child is or may be in need of protection must report it directly to a children’s aid society. The duty applies to children under 16, and a report may be made for youth who are 16 or 17. The duty is ongoing, so each new concern must be reported, and a teacher cannot rely on someone else, such as the principal, to make the report. A teacher or other professional who fails to report can be fined up to $5,000. The person reporting does not need to be certain; reasonable grounds are enough.`,
        practice: ``,
        example: `A Grade 3 student tells the teacher that a parent hit them with a belt. The teacher listens calmly, does not ask leading questions or investigate, and tells the student they did the right thing by telling someone.
The teacher calls the local children’s aid society directly that day, then informs the principal according to board policy.
The teacher writes down the student’s exact words, the date, and the time, and keeps the notes confidential.
If the student shares a new concern the following week, the teacher makes a new report, because the duty is ongoing.`,
        citations: [
          `Child, Youth and Family Services Act, 2017, S.O. 2017, c. 14, Sched. 1, s. 125. https://www.ontario.ca/laws/statute/17c14`,
          `Ontario College of Teachers. (n.d.). Professional advisory: Duty to report. https://oct.ca/resources/advisories/duty-to-report`,
        ],
      },
      {
        n: 4,
        statement: `The teacher’s duty of care, including avoiding negligence and being a role model by maintaining on and off-duty behaviours.
The Standards of Practice and Ethical Standards
Ontario College of Teachers’ Professional Advisory
Profession Act`,
        theory: `Duty of care and negligence. Teachers must take the same care of students that a careful or prudent parent would take in the same circumstances (Myers v. Peel County Board of Education, 1981). A teacher may be found negligent if they owed a duty of care, did not meet the standard of care, and a student was harmed as a result.
The Standards of Practice and Ethical Standards. The Ontario College of Teachers sets five Standards of Practice (commitment to students and student learning, professional knowledge, professional practice, leadership in learning communities, and ongoing professional learning) and four Ethical Standards (care, respect, trust, and integrity). These standards apply to teachers’ conduct on and off duty.
Ontario College of Teachers Act and professional advisories. The Act gives the College the power to investigate and discipline members for professional misconduct. The College’s professional advisories guide members on issues such as electronic communication and social media, where teachers are expected to keep professional boundaries with students online.`,
        practice: ``,
        example: `On a field trip, the teacher checks permission forms, carries emergency contact and medical information, and does regular headcounts.
During yard duty, the teacher moves around the yard instead of standing in one spot and checks equipment for hazards.
The teacher keeps personal social media accounts private, does not accept friend requests from students, and communicates with families only through school-approved platforms.
Off duty, the teacher behaves in ways that keep the public’s trust, since conduct outside school can still be professional misconduct.`,
        citations: [
          `Myers v. Peel County Board of Education, [1981] 2 S.C.R. 21.`,
          `Ontario College of Teachers Act, 1996, S.O. 1996, c. 12.`,
          `Ontario College of Teachers. (n.d.). Ethical standards. https://www.oct.ca/public/professional-standards/ethical-standards`,
          `Ontario College of Teachers. (n.d.). Standards of practice. https://www.oct.ca/public/professional-standards/standards-of-practice`,
        ],
      },
      {
        n: 5,
        statement: `The teacher’s duty to maintain student rights, privacy and confidentiality when accessing and discussing documents:
Accessibility for Ontarians with Disabilities Act (AODA)
Individual Education Plans (IEP)
Ontario Student Records (OSR)`,
        theory: `Accessibility for Ontarians with Disabilities Act (AODA). The AODA (2005) requires organizations, including school boards, to identify and remove barriers for people with disabilities. Its standards cover areas such as customer service and information and communication, so schools must provide accessible formats and supports while respecting the person’s privacy.
Individual Education Plans (IEP). An IEP is a written plan that describes the special education program and services for a student. Under Regulation 181/98, the IEP must be developed within 30 school days of the student’s placement, with parents consulted and given a copy. The IEP is confidential and is shared only with staff who work with the student.
Ontario Student Records (OSR). The OSR is the official record of a student’s education. Under section 266 of the Education Act, it is privileged and may be used only to improve the student’s instruction. Students and their parents (if the student is under 18) may see it, and the Municipal Freedom of Information and Protection of Privacy Act also protects the personal information it contains.`,
        practice: ``,
        example: `A student’s IEP accommodations, such as extra time and a quiet space for tests, are shared with the occasional teacher, but the teacher does not discuss the student’s needs in the staff room or with other students.
The teacher reviews a student’s OSR in the office, signs it out according to school procedures, and does not photograph or copy it.
The teacher provides an assignment in a large-print or digital format for a student with a visual impairment, which meets the AODA standards without singling the student out.
Emails about students use initials or are sent through secure board accounts.`,
        citations: [
          `Accessibility for Ontarians with Disabilities Act, 2005, S.O. 2005, c. 11.`,
          `Education Act, R.S.O. 1990, c. E.2, s. 266.`,
          `O. Reg. 181/98: Identification and placement of exceptional pupils.`,
          `Municipal Freedom of Information and Protection of Privacy Act, R.S.O. 1990, c. M.56.`,
        ],
      },
    ],
    lesson: {
      title: `Summary of an Educational Law Court Case and the Results`,
      grade: ``,
      subject: ``,
      objective: ``,
      curriculumLink: ``,
      stages: [
        { name: `Case Name and date`, body: `R. v. Jarvis, 2019 SCC 10 (Supreme Court of Canada, February 14, 2019)` },
        { name: `Source of information`, body: `Supreme Court of Canada. (2019). Case in brief: R. v. Jarvis. https://scc-csc.ca/judgments-jugements/cb/2019/37833
CTV News London. (2019, August 27). London teacher convicted of voyeurism by SCOC sentenced. https://london.ctvnews.ca/london-teacher-convicted-of-voyeurism-by-scoc-sentenced-1.4566867` },
        { name: `Summary of the Case`, body: `Ryan Jarvis, a high school teacher in London, Ontario, used a camera hidden in a pen to secretly record female students during ordinary school activities in classrooms, hallways, and other common areas. The videos focused mainly on the students’ faces and chests. He was charged with voyeurism under the Criminal Code. The trial judge found the students had a reasonable expectation of privacy but was not convinced the recordings had a sexual purpose, so he found Jarvis not guilty. The Ontario Court of Appeal found the sexual purpose was proven but ruled that students in a school’s common areas did not have a reasonable expectation of privacy, so Jarvis was again found not guilty. The Crown appealed to the Supreme Court of Canada.` },
        { name: `Outcome – as you understand it to be`, body: `The Supreme Court of Canada found Jarvis guilty of voyeurism. The Court ruled that students have a reasonable expectation of privacy at school, even in common areas, from being secretly recorded. It looked at the whole context, including that the recording broke school board policy, that it targeted specific students, and that it betrayed the trust between a teacher and students. Jarvis was later sentenced to six months in jail and one year of probation. He had already resigned from teaching and was suspended by the Ontario College of Teachers.` },
        { name: `Personal insights/thoughts`, body: `This case showed me how much trust families and students place in teachers. Students should be able to go to class without worrying about how an adult at school is watching them. The Court of Appeal decided students had no expectation of privacy in common areas, but I agree with the Supreme Court that the context matters. As a teacher, I will follow each school’s policies about phones and photos, and I will not take pictures or videos of students unless the school has approved it and families have given consent.` },
      ],
    },
    exitTicket: {
      learned: [
        `The Accepting Schools Act (2012) requires boards to have bullying prevention plans and to use progressive discipline, which combines supports with consequences (Accepting Schools Act, 2012).`,
        `The duty to report under the Child, Youth and Family Services Act is ongoing, so each new concern about a child must be reported directly to a children’s aid society (Child, Youth and Family Services Act, 2017, s. 125).`,
        `Teachers are held to the standard of a careful or prudent parent when supervising students (Myers v. Peel County Board of Education, 1981).`,
      ],
      interesting: [
        `In R. v. Jarvis (2019), the Supreme Court of Canada ruled that students have a reasonable expectation of privacy even in a school’s common areas.`,
        `The Ontario College of Teachers’ Ethical Standards of care, respect, trust, and integrity apply to teachers’ conduct off duty as well as at school.`,
      ],
      wonder: [
        `How do these laws and standards apply to emergency supply teachers who are not yet members of the Ontario College of Teachers?`,
      ],
    },
  },
];

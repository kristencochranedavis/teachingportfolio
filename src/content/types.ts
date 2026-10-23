export type Element = {
  n: number;            // the element's number in the chart (1, 2, 3…)
  statement: string;    // the element header text, without its leading number
  theory: string;
  practice: string;
  example: string;      // the "what would a nonparticipant observe" cell, credit stripped
  credit?: string;      // e.g. "H/T: SP" exactly as written
  citations: string[];  // one APA reference per entry, verbatim, URLs kept
};
export type LessonStage = { name: string; body: string };
export type MiniLesson = {
  subtopic?: string;    // omit if it is still the template placeholder text
  title: string;
  grade: string;
  subject: string;
  objective: string;
  curriculumLink: string;
  stages: LessonStage[]; // document order: Anticipatory Set, Model, Check for Understanding, Guided Practice, Closure, Independent Practice, …
  references?: string[];
};
export type ExitTicket = { learned: string[]; interesting: string[]; wonder: string[]; references?: string[] };
export type Chart = {
  slug: string;         // e.g. "01-theories-of-learning"
  number: number;       // 1–8
  title: string;        // e.g. "Theories of Learning and Teaching and Differentiated Instruction"
  source: string;       // e.g. "Ontario College of Teachers Accreditation Resource Guide (2023)"
  summary: string;      // the intro paragraph
  elements: Element[];
  lesson: MiniLesson;
  exitTicket?: ExitTicket;
  labels?: { theory?: string; practice?: string; example?: string }; // display labels when a chart uses different column names
  partTwoTitle?: string; // heading for Part 2 when it isn't a mini-lesson
};
export type JigsawPart = { title: string; body: string };
export type JigsawWeek = {
  week: number;
  topic: string;
  theory: JigsawPart;
  practice: JigsawPart;
  example: JigsawPart;
  references: string[];
};
export type Resource = {
  code: "R1" | "R2" | "R3" | "R4" | "R5" | "R6" | "R7" | "R8";
  slug: string;
  title: string;
  summary: string;      // the first sentence or paragraph, verbatim
  body: string;         // the whole doc as clean markdown
};
export type About = { body: string; references: string[] }; // body: clean markdown, verbatim

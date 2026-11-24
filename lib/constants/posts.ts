import type { ImageSource } from "@/components/ui/image-slot";

/**
 * Every article on /blog and at /blog/[slug], in the order of the PDF.
 *
 * Formatting follows the PDF:
 *   standfirst  the line under the title
 *   intro       the paragraphs before the first heading
 *   sections    each heading and what follows it; every heading appears in the
 *               menu on the left of the article and can be linked to
 *   blocks      a paragraph, or a bulleted list whose items can open with a bold lead-in
 *   tags, author  the two lines at the end of each article
 *
 * Inline text is a plain string, or a list of pieces where a piece can be
 * { text, em } for italics, { text, strong } for bold, or { text, href } for a link.
 *
 * date: the PDF still says "[Publish date]". Every post uses 15 October 2026,
 * the date in the design, until you set the real ones (format YYYY-MM-DD).
 *
 * category: the label after the date in the PDF, shown on the pill.
 * group: which filter on /blog shows the post (see BLOG_FILTERS).
 *
 * image: the card picture, 510 by 332 at desktop. Every src is empty, so the
 * cards show a grey block; put a path from /public in src to fill one.
 */

export type Inline = string | { text: string; em?: boolean; strong?: boolean; href?: string };
export type InlineText = string | readonly Inline[];
export type ListItem = { lead?: string; text: InlineText };
export type Block = { type: "p"; text: InlineText } | { type: "list"; items: readonly ListItem[] };
export type Section = { id: string; heading: string; blocks: readonly Block[] };

export const BLOG_FILTERS = ["All", "Enterprise", "Logistics", "Developer tools", "Productivity"] as const;
export type BlogGroup = Exclude<(typeof BLOG_FILTERS)[number], "All">;

export type Post = {
  slug: string;
  title: string;
  standfirst: string;
  date: string;
  category: string;
  group: BlogGroup;
  intro: readonly Block[];
  sections: readonly Section[];
  tags: readonly string[];
  author: string;
  image: ImageSource;
};

const AUTHOR = "Akere Bryan James Nojang";
const DATE = "2026-10-15";

const p = (text: InlineText): Block => ({ type: "p", text });
const list = (...items: ListItem[]): Block => ({ type: "list", items });
const section = (heading: string, ...blocks: Block[]): Section => ({
  id: heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),
  heading,
  blocks,
});

export const POSTS: readonly Post[] = [
  {
    slug: "designing-a-system",
    title: "Designing a system for an office that has never used one",
    standfirst:
      "How four weeks of listening, a working prototype and 13 written scenarios shaped the scholarship system for Cameroon’s Ministry of Higher Education.",
    date: DATE,
    category: "Product",
    group: "Enterprise",
    intro: [
      p("Cameroon’s Ministry of Higher Education sponsors 200 scholars studying abroad. Each one has a file, an attaché who manages it, a yearly bursary and a programme that should end in a degree. Until now, that work has lived on paper and in spreadsheets."),
      p("I am the lead engineer on the system that replaces them. The department has no IT team, and its 20 staff are new to computerised systems. So the first problem was not technical: it was understanding how the office works before deciding what software should do."),
    ],
    sections: [
      section(
        "Start with a working prototype, not a document",
        p("My first conversations were with the chief of service and her chief of staff. Rather than return with a long specification, I came back four weeks later with a working prototype built in Next.js, shadcn/ui and Tailwind CSS."),
        p("A prototype gives people something to react to. Staff who would struggle to review a requirements document could point at a screen and say what was missing. Those reactions led to a contract for the full system."),
      ),
      section(
        "Write the office down before you build it",
        p([
          "For the full system I interviewed staff again, this time with a bilingual guide in English and French. From the interviews and recordings I wrote 13 process scenarios, using the persona, motivation and simulation method from ",
          { text: "The Product-Minded Engineer", em: true },
          ". Each scenario follows one real task from start to finish, such as committing a year’s bursary or recording a repeated year.",
        ]),
        p("The scenarios then shaped a revised requirements specification, SRS v1.2, so every feature traces back to something the office already does. Some rules only surfaced this way. A scholar may repeat a year once over the whole programme, and a phone number collected before departure must stay updatable from abroad."),
      ),
      section(
        "Choose the simple option on purpose",
        p("The system holds sensitive records about students, so security mattered from the first day. My first authentication design used Keycloak with authenticator apps and passkeys. It was secure, and it was the wrong choice for this office."),
        p("I replaced it with email and password sign-in plus a second factor, backed by other account protections. Staff can use it without help, which means they will use it as intended. A control that people work around protects nothing."),
        p("The same thinking set the stack: Node.js and TypeScript with Fastify, PostgreSQL and React, in a fixed module structure of my own rather than NestJS. NestJS would have cost learning time the schedule did not have. Every major decision is written down, because the Ministry has nobody in-house to ask later."),
      ),
      section(
        "What comes next",
        list(
          { lead: "Version 2 is in development.", text: "The foundations, the CI pipeline, the staff front end and audit logging are in place; the scholar registry, commitment rounds and payments follow." },
          { lead: "The student portal", text: "will let scholars submit certificates and transcripts and update their details from abroad, while the internal system stays closed to outside access." },
          { lead: "Bank notifications come later.", text: "Connecting payment notifications depends on what the banks can provide, so it is planned as a separate phase." },
        ),
      ),
    ],
    tags: ["Government", "Product design", "Requirements"],
    author: AUTHOR,
    image: { src: "/post1.jpg", alt: "Hands reviewing printed documents at a table" },
  },
  {
    slug: "making-mistakes-impossible",
    title: "Making mistakes impossible rather than unlikely",
    standfirst:
      "Audit logging, database-enforced access and reversible releases in a system that holds sensitive records for 200 government scholars.",
    date: DATE,
    category: "Security",
    group: "Enterprise",
    intro: [
      p("Most failures in internal systems are not attacks. They are a forgotten check, a log entry that was never written, or a release nobody can undo. In the Ministry of Higher Education’s scholarship system, I tried to design those failures out rather than rely on remembering to avoid them."),
      p("The system has two halves. An internal staff application holds every scholar’s records and is closed to outside access, while a separate student portal faces the internet. Everything below serves one rule: nobody reaches the core system directly."),
    ],
    sections: [
      section(
        "Let the database enforce access",
        p("Every table in PostgreSQL has row-level security switched on. The database itself decides which records a request may see, so an access rule holds even if a bug slips into application code."),
        p("The cost is more care when writing migrations and policies. For records about students, that cost is worth paying."),
      ),
      section(
        "An audit trail that cannot be skipped",
        p("Every data change writes its audit entry in the same transaction as the change. Either both are saved or neither is, so no change can exist without its record. Reads of personal data that a route declares as sensitive are logged too, as are attempts refused because of the wrong role."),
        p("The most useful part is a check at startup. A route that changes data must declare an audit action, or the application refuses to start. A missing audit stops being something a reviewer might catch and becomes something that cannot happen."),
      ),
      section(
        "Merges and releases you can reverse",
        p("Four CI jobs must pass before any merge: types, linting, tests with architecture and static security rules; a dependency audit; a secret scan of every commit in history; and a pull request title check. Only secrets and high or critical production vulnerabilities block a merge, so the checks stop real risks without stalling routine work. Architecture rules also keep fifteen modules from reading each other’s data."),
        p("Staging runs on a DigitalOcean server described entirely as code. One cloud-init file sets up the server, and Docker Compose runs four containers: Caddy, the API, PostgreSQL and a mail catcher. It sits behind Tailscale with no public web port, internal containers have no outbound access, and database passwords are generated on the server, never stored in the repository."),
        p("Deployments run from GitHub Actions over SSH, with a key restricted to a single deploy script. Each release takes a backup, migrates the database, checks that the new version is the one answering and rolls back automatically if it is not. A nightly backup is verified by a test restore, because a backup nobody has restored is not yet a backup."),
      ),
      section(
        "What comes next",
        list(
          { lead: "Failed sign-in handling", text: "arrives with the authentication task, alongside multi-factor sign-in." },
          { lead: "Production", text: "will follow the staging rule: no direct route to the core system from the internet." },
          { lead: "Dependency updates", text: "merge automatically only when every required check passes, so the system stays current without manual chores." },
        ),
      ),
    ],
    tags: ["Security", "Infrastructure", "Government"],
    author: AUTHOR,
    image: { src: "/post2.jpg", alt: "Rows of servers in a data centre" },
  },
  {
    slug: "building-order-software-for-a-kitchen",
    title: "Building order software for a kitchen that has no time",
    standfirst:
      "What I designed and built as product engineer for Mala, an ordering and delivery platform for informal food vendors in Yaoundé.",
    date: DATE,
    category: "Product engineering",
    group: "Logistics",
    intro: [
      p("Mala set out to give informal food vendors in Yaoundé software built around how they work. Most were taking orders by phone call and chat message, where an order buried in a thread is a sale lost. Food delivery was the first service."),
      p("As product engineer, I built the customer ordering app and the vendor order dashboard, with the full order flow working between them. Both were ready in about eight weeks. Mala launched with 5 vendors averaging about 10 orders a day each."),
    ],
    sections: [
      section(
        "Design for one hand and a busy service",
        p("The vendor dashboard was designed for a cook with one free hand. Orders sit in a single column of colour-coded cards, so the next action is always clear. I defined every order edge case before writing code, from an order cancelled during preparation to one picked up instead of delivered."),
        p("Vendors joined through an 8-step onboarding flow that took them from sign-up to a live storefront. They updated menu items and availability during service without outside help. A 60-component design system kept the two apps consistent and made each new screen quicker to build."),
      ),
      section(
        "One set of rules, wherever a change comes from",
        p("Orders followed a state machine with 9 statuses and 12 transitions. Guards decided who may make each transition, so every change followed the same rules whichever screen sent it."),
        p("The code lived in a Turborepo monorepo: two Next.js apps, an Express 5 and Socket.io API, and shared packages. A shared package of 12 enums, around 60 types and 25 Zod schemas meant the browser and the server validated against the same definitions. A change to a shared rule reached every app at once, and order updates reached vendors in under 200 ms."),
      ),
      section(
        "Keeping payments and orders in step",
        p("Payment and order status could not be allowed to drift apart. I designed the reliability model around a transactional outbox, saga orchestration and compensating transactions, with atomic transitions in PostgreSQL. All of it fits inside one deployable service, with no separate services to run."),
        p("Sign-in used one-time codes through Better-Auth and Twilio Verify, handled in Next.js server actions. That kept the Express API stateless and the authentication boundary in one place. Delivery estimates used the Haversine formula instead of a paid routing API, trading some precision for lower cost at launch."),
      ),
      section(
        "What came next",
        list(
          { lead: "Handover.", text: "After four weeks of live operation, I handed the codebase to another engineer, with a sprint plan and full codebase and architecture guides." },
          { lead: "Release 2 design.", text: "A rider and dispatch domain was designed, with H3 proximity matching and database rules that stop two riders being sent to the same order." },
          { lead: "Messaging.", text: "Nine WhatsApp Business message templates were planned, ready for approval when Mala moves off SMS." },
        ),
      ),
    ],
    tags: ["Commerce", "Product design", "Architecture"],
    author: AUTHOR,
    image: { src: "/post3.jpg", alt: "A chef reading orders on a tablet in a busy kitchen" },
  },
  {
    slug: "why-mala-launched-a-delivery-service",
    title: "Why Mala launched a delivery service before a delivery platform",
    standfirst:
      "A leaner first release in which Mala ran vendors’ deliveries itself, and the software was only as big as the question it had to answer.",
    date: DATE,
    category: "Product strategy",
    group: "Logistics",
    intro: [
      p("Asking informal vendors to move their business onto a new platform is a large request. They had no reason yet to trust that a delivery booked through an app would arrive. So Mala started with something smaller: a managed delivery service."),
      p("In this first release, Mala handled vendors’ deliveries itself, using riders from a logistics partner. The software only had to make booking a delivery easier than a phone call."),
    ],
    sections: [
      section(
        "Several deliveries in one request",
        p("I built the vendor delivery request page in React Router 7. A vendor books deliveries for several recipients in one request, without a phone call or a chat thread."),
        p("The browser and the server check each request against the same Zod schemas. A request is accepted or rejected by the same rules on both sides, so a vendor never sees a form that looks valid and then fails."),
      ),
      section(
        "Use the tools the team already has",
        p("Each request goes to a dedicated Slack channel as a structured message, with follow-up on WhatsApp. The operations team gets one place to track every delivery, and nobody had to build tracking software."),
        p("The trade-off was deliberate: less automation in exchange for a faster launch. The question at this stage was whether vendors would trust the service, not whether we could build software to run it."),
      ),
      section(
        "One time, with no room for doubt",
        p("Each recipient has a “needed by” time. Vendors set it in the format they use, 12-hour or 24-hour, but the picker always stores a single 24-hour value."),
        p("The operations team receives one unambiguous deadline. Nobody has to guess whether 7 means morning or evening."),
      ),
      section(
        "What came next",
        list(
          { lead: "Trust first, platform second.", text: "The managed service gave vendors a reason to trust Mala before moving onto the full ordering platform." },
          { lead: "Automation later.", text: "Rider assignment and dispatch were designed for the second release, with H3 proximity matching and rules that stop two riders being sent to one order." },
        ),
      ),
    ],
    tags: ["Logistics", "Product strategy", "MVP"],
    author: AUTHOR,
    image: { src: "/post4.jpg", alt: "A delivery rider on a phone call beside a scooter" },
  },
  {
    slug: "a-map-that-is-90-percent-right",
    title: "A map that is 90% right is worse than no map",
    standfirst:
      "Why every connection in Traverse comes from parsing real code, and how one number tells me whether the AI is staying honest.",
    date: DATE,
    category: "Developer tools",
    group: "Developer tools",
    intro: [
      p("Teams now ship code faster than anyone can read it, much of it written by AI agents. The code works, but changing a file safely means knowing what depends on it, and a folder tree does not tell you that."),
      p("Traverse turns a public TypeScript or JavaScript repository into a map you can click through. Select a file and you see what it imports, what imports it, and what would break if it changed."),
    ],
    sections: [
      section(
        "Parse, do not guess",
        p("One rule decides what appears on the map: every connection comes from parsing real code. The AI may explain what the parser found, but it never decides that two files are connected."),
        p("The reason is trust. If one connection in ten were invented, a reader could not tell which ten to doubt, and the whole map would stop being useful."),
      ),
      section(
        "A parser that admits what it cannot resolve",
        p("The parser is built on ts-morph and runs on its own, with no web framework or database inside it. It reads imports, re-exports, dynamic imports and require() calls, and resolves path aliases, index files and barrel files."),
        p("Framework knowledge lives in adapters for Next.js, NestJS, React and Express, never in the parser itself. Every import is classed as resolved, external, excluded or failed, and every failure is reported with its reason. A route appears only when both its method and its full path can be read from the code."),
      ),
      section(
        "Measure the AI instead of trusting it",
        p("AI explanations of files and folders are written only from the files they connect to. To check them, I did not ask a second model to grade the first. Whether a file path was shown to the model has an exact answer, so the check is plain code that tests every path in an explanation against the paths the model was given."),
        p("The check runs on live traffic, and 95% of explanations named only real files. The other 5% is the most useful number in the project. It shows how often a confident, well-written explanation still invents something, and it would have stayed invisible without the measurement."),
      ),
      section(
        "Try it",
        list(
          { lead: "Live", text: "at traverse-flame-alpha.vercel.app: point it at a public repository and explore the map." },
          { lead: "Blast radius and dependency chains", text: "are calculated in the browser from the graph already loaded, so answers appear without a network request." },
          { lead: "Built in 13 phases,", text: "each with a written specification and acceptance criteria, and checked by script and by hand before the next began." },
        ),
      ),
    ],
    tags: ["Developer tools", "AI", "Static analysis"],
    author: AUTHOR,
    image: { src: "/post5.jpg", alt: "A network of connected points" },
  },
  {
    slug: "keeping-an-ai-agent-on-a-short-leash",
    title: "Keeping an AI agent on a short leash",
    standfirst:
      "How Traverse’s question-answering agent walks the real dependency graph, and why it cannot read another team’s data, even when the code it reads tells it to.",
    date: DATE,
    category: "AI",
    group: "Developer tools",
    intro: [
      p("A map answers the questions you already know how to ask. Sometimes you do not know where to look: where does authentication get enforced in this codebase? Traverse has an agent for those questions."),
      p("An agent that reads someone else’s code is also a risk, because that code can contain text written to mislead it. So the design question was not how much the agent could do, but how little it needed."),
    ],
    sections: [
      section(
        "Six read-only tools",
        p("The agent, built with LangChain Deep Agents, has six read-only tools. Each one calls the same graph functions that draw the map, so the agent and the map cannot disagree about how the code connects."),
        p("Every tool call shows in the chat panel as it happens. A reader can follow the agent through the graph and check each step, rather than trusting a summary at the end."),
      ),
      section(
        "An agent that does not know which data it holds",
        p("The agent is never told which analysis it is reading. Each conversation gets a short-lived credential, signed inside PostgreSQL, that names exactly one analysis and one organisation. The tools present that credential, and the database decides what it can see."),
        p("If an analysed file contains a prompt injection, such as an instruction to open another team’s map, the agent has nothing to redirect. It holds no analysis identifier it could change."),
      ),
      section(
        "Isolation the database enforces",
        p("Teams sign in through Clerk organisations, and every table in Supabase has row-level security. A database event trigger switches it on for any new table automatically, so a table can never be left unprotected by mistake."),
        p("The agent also runs as a separate service. If it goes down, the map, the explanations and the rest of the app keep working."),
      ),
      section(
        "What this adds up to",
        list(
          { lead: "Answers you can check,", text: "because every step the agent takes is visible and grounded in the parsed graph." },
          { lead: "No path between teams,", text: "enforced in the database rather than in prompts or application code." },
          { lead: "Contained failure,", text: "because the agent lives in its own service and the app does not depend on it." },
        ),
      ),
    ],
    tags: ["AI agents", "Security", "Multi-tenancy"],
    author: AUTHOR,
    image: { src: "/post6.jpg", alt: "A padlock joining two chains" },
  },
  {
    slug: "practising-interviews-out-loud-with-prepper",
    title: "Practising interviews out loud with Prepper",
    standfirst:
      "A voice-based mock interview tool: how it works, and what happened when about 12 people tried it.",
    date: DATE,
    category: "AI",
    group: "Productivity",
    intro: [
      p("Most people prepare for interviews by reading: notes, likely questions, model answers. But interviews are spoken, and for many candidates the first time they answer a question out loud is in the interview itself."),
      p("Prepper runs a spoken mock interview for a chosen role and level, then scores the answers."),
    ],
    sections: [
      section(
        "An interview set up by conversation",
        p("Setting up an interview is itself a short voice conversation. A Vapi workflow asks for the role, the level, the tech stack, the type of questions and how many there should be. Gemini 2.5 Flash then writes the questions, and they are saved in Firestore."),
        p("The questions are written for a voice to read aloud, with no slashes, asterisks or other symbols that would break the reading."),
      ),
      section(
        "A voice interviewer",
        p("The interview runs through a Vapi assistant. Deepgram transcribes the candidate, GPT-4 plays the interviewer and an ElevenLabs voice speaks the questions."),
        p("The screen shows a live transcript and an indicator for who is speaking, so the conversation feels like a call rather than a form."),
      ),
      section(
        "Feedback in the same shape every time",
        p("When the call ends, Gemini scores the transcript against a fixed schema in five areas: communication, technical knowledge, problem-solving, role fit and confidence, each from 0 to 100. Every report has the same structure, with strengths, areas to improve and a final assessment."),
        p("The fixed structure is the point. A candidate can retake an interview and compare one attempt with the next, area by area."),
      ),
      section(
        "What happened",
        list(
          { lead: "About 12 people tried it.", text: "" },
          { lead: "One used it to prepare for a real interview,", text: "and some of the questions they practised came up in it. Role, level and stack are the inputs a real interviewer works from too, so some overlap is to be expected." },
          { lead: "Live", text: "at prepper-five.vercel.app, with Firebase email and password sign-in and server-side sessions." },
        ),
      ),
    ],
    tags: ["AI", "Voice", "Careers"],
    author: AUTHOR,
    image: { src: "/post7.jpg", alt: "People in a job interview" },
  },
  {
    slug: "giving-authors-their-own-voice-on-reepls",
    title: "Giving authors their own voice on Reepls",
    standfirst:
      "How I built the podcast feature for a publishing platform for African literature, from the upload button to the player.",
    date: DATE,
    category: "Full-stack",
    group: "Enterprise",
    intro: [
      p("Reepls is a writing and publishing platform for African literature, and Cameroonian literature in particular. Every article already had an automatic text-to-speech reading. In the platform’s second phase, authors gained something more personal: the option to attach their own narration."),
      p("I owned the podcast feature as full-stack developer from May to July 2025, building both the interface and the backend. The feature went live on reepls.com."),
    ],
    sections: [
      section(
        "An upload where authors already work",
        p("The upload sits in the React article editor, next to the thumbnail upload, so attaching narration feels like adding a cover image. Authors do not have to learn a new part of the platform."),
        p("When an article has its own podcast, the publishing flow skips text-to-speech generation. Each article has one audio source, and no generation is spent on articles that do not need it."),
      ),
      section(
        "Accept anything, deliver one format",
        p("Authors record on different devices and apps, so files arrive in different formats. The upload pipeline, built in Node.js, Express and TypeScript, accepts files up to 10 MB in any common audio format, including MP3, WAV, M4A, AAC, FLAC, OGG and WebM."),
        p("FFmpeg on the server compresses every upload and converts it to MP3 at 128 kbps. Files are stored on Cloudinary and linked in MongoDB to their article, with duration, size and source. Authors upload what their recorder produced, and every reader receives one predictable format."),
      ),
      section(
        "One player for both kinds of audio",
        p("Readers should not need to know how an article’s audio was made in order to play it. I built one mobile-friendly player for podcasts and text-to-speech audio, with controls modelled on Apple Podcasts: play and pause, skip back 15 seconds, skip forward 30 seconds, a progress bar and playback speed."),
        p("A label on article cards and the reading page shows whether the audio is the author’s own recording or an automatic reading. The podcast’s URL, duration and source travel with the article through the feed and article APIs, so the player appears wherever the article does."),
      ),
      section(
        "How the work ran",
        list(
          { lead: "Within a team.", text: "I worked in the Phase 2 team under a project overseer and a team leader, with tasks scoped and tracked in ClickUp." },
          { lead: "Tested before release.", text: "Every feature was tested on a separate test platform before it reached readers." },
          { lead: "Released.", text: "The podcast feature went live on reepls.com at the end of the phase." },
        ),
      ),
    ],
    tags: ["Audio", "Full-stack", "Publishing"],
    author: AUTHOR,
    image: { src: "/post8.jpg", alt: "A man recording a podcast at a microphone" },
  },
];

export function getPost(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

/** Previous and next in list order, wrapping around at the ends. */
export function getNeighbours(slug: string) {
  const i = POSTS.findIndex((post) => post.slug === slug);
  const n = POSTS.length;
  return { previous: POSTS[(i - 1 + n) % n], next: POSTS[(i + 1) % n] };
}

/** The three posts after the "next" one, so nothing repeats on the page. */
export function getKeepReading(slug: string, count = 3) {
  const i = POSTS.findIndex((post) => post.slug === slug);
  const n = POSTS.length;
  const { previous } = getNeighbours(slug);
  const picks: Post[] = [];
  for (let step = 2; picks.length < count && step < n; step++) {
    const post = POSTS[(i + step) % n];
    if (post.slug !== previous.slug) picks.push(post);
  }
  return picks;
}

/** "15 October 2026". Fixed locale and time zone, so server and browser agree. */
export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

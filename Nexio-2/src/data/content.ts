/**
 * Central content source for the NEXIO website.
 *
 * All copy is derived from the supplied company brief. Nothing here is a verified
 * product claim: product categories are conceptual placeholders and every
 * specification value is `null` until NEXIO supplies approved data.
 */
import type { InterestOption } from "@/lib/enquiry";

export type IconKey =
  | "cpu"
  | "network"
  | "truck"
  | "wrench"
  | "flask"
  | "touch"
  | "pen"
  | "image"
  | "users"
  | "plug"
  | "cast"
  | "book"
  | "monitor"
  | "led"
  | "signage"
  | "server"
  | "speaker"
  | "mount"
  | "cable"
  | "laptop"
  | "graduation"
  | "school"
  | "building"
  | "presentation"
  | "support"
  | "sparkles"
  | "shield"
  | "award"
  | "heart"
  | "trending";

/** Base path for static hosting (e.g. GitHub Pages sub-folder). Empty in normal builds. */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type Photo = { src: string; width: number; height: number; alt: string };

/** Only images that passed visual QA (see Documentation/ASSET-QA.md). */
export const photos = {
  classroomHero: {
    src: `${BASE}/images/classroom-hero.jpg`,
    width: 1672,
    height: 941,
    alt: "A bright, modern classroom with desks, natural light and a wall-mounted interactive display",
  },
  teacherLesson: {
    src: `${BASE}/images/teacher-lesson.jpg`,
    width: 900,
    height: 694,
    alt: "A teacher explaining a heart diagram on a large interactive display to her students",
  },
  touchWriting: {
    src: `${BASE}/images/touch-writing.jpg`,
    width: 1184,
    height: 866,
    alt: "A hand writing on an interactive display surface with a stylus",
  },
  displayInstalled: {
    src: `${BASE}/images/display-installed.jpg`,
    width: 1100,
    height: 888,
    alt: "A large flat-panel display mounted on a wall in a contemporary building",
  },
  opsConnectivity: {
    src: `${BASE}/images/ops-connectivity.jpg`,
    width: 1200,
    height: 756,
    alt: "Close-up of a compact computing module showing network, USB and HDMI ports",
  },
} satisfies Record<string, Photo>;

export const company = {
  intro:
    "NEXIO R&D TECH PRIVATE LIMITED is a technology-driven company working across IT products, computer peripherals, technology solutions, system integration, networking and infrastructure, sales and distribution, technical support and research and development — with a dedicated focus on smart classrooms and interactive flat-panel displays.",
  belief:
    "We see technology as a driver of progress and possibility. By combining technology, creativity and practical expertise, we make digital experiences smarter, simpler and more accessible.",
  vision:
    "To become a trusted, forward-thinking brand recognised for innovation, quality, reliability and meaningful impact.",
  mission:
    "To make technology accessible, dependable and valuable through quality products, innovative solutions, reliable services and a customer experience people can count on.",
  promise:
    "To create opportunities, solve challenges, build trust and help people and businesses move forward.",
};

export const pillars = [
  {
    id: "it-products",
    title: "IT Products & Accessories",
    short: "Computers, peripherals and essential equipment.",
    description:
      "Computers, peripherals, accessories, electronics and the essential technology equipment that everyday work and learning depend on.",
    points: ["Computers & peripherals", "Accessories & electronics", "Essential technology equipment"],
    icon: "cpu",
  },
  {
    id: "technology-solutions",
    title: "Technology Solutions",
    short: "Networking, infrastructure and integration.",
    description:
      "Customised IT solutions spanning networking, infrastructure, system integration and deployment — planned around how each organisation actually works.",
    points: ["Customised IT solutions", "Networking & infrastructure", "System integration & deployment"],
    icon: "network",
  },
  {
    id: "sales-distribution",
    title: "Sales & Distribution",
    short: "Sourcing and supply at every scale.",
    description:
      "Sourcing and supply of technology products for retail, corporate, institutional and enterprise customers.",
    points: ["Retail", "Corporate", "Institutional", "Enterprise"],
    icon: "truck",
  },
  {
    id: "support-services",
    title: "Technical Support & Services",
    short: "Installation, repair and after-sales care.",
    description:
      "Installation, troubleshooting, repair, maintenance and after-sales support that keeps technology dependable long after it is delivered.",
    points: ["Installation", "Troubleshooting & repair", "Maintenance", "After-sales support"],
    icon: "wrench",
  },
  {
    id: "research-development",
    title: "Research & Development",
    short: "Ideas, products and future solutions.",
    description:
      "Exploring ideas, developing products, improving designs and creating the technology solutions of the future.",
    points: ["Exploring ideas", "Product development", "Design improvement"],
    icon: "flask",
  },
] as const satisfies ReadonlyArray<{
  id: string;
  title: string;
  short: string;
  description: string;
  points: readonly string[];
  icon: IconKey;
}>;

export const values = [
  { title: "Innovation", text: "Exploring new ideas and better ways to make technology useful.", icon: "sparkles" },
  { title: "Integrity", text: "Working honestly and transparently with every customer and partner.", icon: "shield" },
  { title: "Quality", text: "Choosing and delivering products and services that are built to be dependable.", icon: "award" },
  { title: "Customer First", text: "Shaping every solution around the real needs of the people we serve.", icon: "heart" },
  { title: "Growth", text: "Helping people, institutions and businesses move forward — and growing alongside them.", icon: "trending" },
] as const satisfies ReadonlyArray<{ title: string; text: string; icon: IconKey }>;

export const classroom = {
  headline: "Smart Classrooms. Smarter Learning.",
  intro:
    "NEXIO classroom solutions help transform traditional classrooms into interactive, collaborative and future-ready learning spaces.",
  panelsLine:
    "Interactive flat panels bring digital writing, annotation, multimedia presentation, screen sharing and teaching tools together in one place.",
  transformation: [
    { from: "Chalk and marker boards", to: "Digital writing and annotation" },
    { from: "One-way lectures", to: "Collaborative, participative lessons" },
    { from: "Printed charts and static visuals", to: "Engaging multimedia learning" },
    { from: "Cables and adapters at every lesson", to: "Wireless screen sharing" },
  ],
};

export const classroomFeatures = [
  {
    title: "Interactive touch",
    text: "A responsive touch surface that turns the front of the room into a shared workspace for teachers and students.",
    icon: "touch",
  },
  {
    title: "Visual learning",
    text: "Images, video, diagrams and presentations shown large and clear, so complex ideas become easier to follow.",
    icon: "image",
  },
  {
    title: "Collaboration",
    text: "Students can come forward, contribute and work through problems together on the same surface.",
    icon: "users",
  },
  {
    title: "Connectivity",
    text: "Connect compatible laptops, devices and classroom equipment to bring existing content into the lesson.",
    icon: "plug",
  },
  {
    title: "Wireless sharing",
    text: "Share content from compatible devices to the display without reaching for cables at every lesson.",
    icon: "cast",
  },
  {
    title: "Everyday teaching",
    text: "Designed around the practical rhythm of daily teaching — quick to start, simple to use, ready for every period.",
    icon: "book",
  },
] as const satisfies ReadonlyArray<{ title: string; text: string; icon: IconKey }>;

export const ecosystem = [
  { title: "Interactive Flat Panels", text: "The interactive centre of the modern classroom.", icon: "monitor" },
  { title: "Wall Mounts & Installation", text: "Secure mounting and professional installation.", icon: "mount" },
  { title: "OPS Computing", text: "Slot-in computing options for an integrated set-up.", icon: "server" },
  { title: "Wireless Sharing", text: "Present from compatible devices without cables.", icon: "cast" },
  { title: "Classroom Audio", text: "Clear sound that reaches every seat in the room.", icon: "speaker" },
  { title: "Connectivity & Accessories", text: "Cables, adapters and the essentials that tie it together.", icon: "cable" },
  { title: "Installation, Training & Support", text: "Set-up, teacher orientation and after-sales care.", icon: "support" },
] as const satisfies ReadonlyArray<{ title: string; text: string; icon: IconKey }>;

export const audiences = [
  { title: "Schools", text: "Interactive lessons from primary to senior classes.", icon: "school" },
  { title: "Colleges", text: "Lecture halls, seminar rooms and departments.", icon: "graduation" },
  { title: "Coaching Institutes", text: "Focused, visual teaching for every batch.", icon: "presentation" },
  { title: "Training Centres", text: "Hands-on sessions and skill-building programmes.", icon: "users" },
  { title: "Businesses & Organisations", text: "Meeting rooms, workspaces and IT environments.", icon: "building" },
] as const satisfies ReadonlyArray<{ title: string; text: string; icon: IconKey }>;

export const panelFeatures = [
  { title: "Touch", text: "Navigate, select and interact directly on the screen — intuitive for teachers and students alike.", icon: "touch" },
  { title: "Writing & annotation", text: "Write, highlight and annotate over lessons and content as you teach.", icon: "pen" },
  { title: "Multimedia", text: "Present images, video, documents and presentations on one large display.", icon: "image" },
  { title: "Screen sharing", text: "Bring content from compatible devices onto the panel, including wireless sharing options.", icon: "cast" },
  { title: "Compatible devices", text: "Connect laptops and compatible devices so existing material can be used straight away.", icon: "laptop" },
  { title: "Classroom use", text: "Built for the everyday rhythm of teaching, presenting and collaborating in a room.", icon: "school" },
] as const satisfies ReadonlyArray<{ title: string; text: string; icon: IconKey }>;

export type ProductGroup = "Displays" | "Classroom & AV" | "IT & Infrastructure";

export type ProductCategory = {
  id: string;
  title: string;
  group: ProductGroup;
  summary: string;
  icon: IconKey;
  interest: InterestOption;
  image?: Photo;
  href?: string;
};

/**
 * Conceptual catalogue categories — NOT confirmed stock or SKUs.
 * TODO(client): replace summaries/imagery with verified product information.
 */
export const productCategories: ProductCategory[] = [
  {
    id: "interactive-flat-panels",
    title: "Interactive Flat Panel Displays",
    group: "Displays",
    summary: "Large-format touch displays for teaching, presenting and collaboration.",
    icon: "monitor",
    interest: "Interactive Flat Panel Display",
    image: photos.displayInstalled,
    href: "/interactive-flat-panels",
  },
  {
    id: "led-display",
    title: "LED Display Solutions",
    group: "Displays",
    summary: "Display solutions for auditoriums, halls and larger viewing spaces.",
    icon: "led",
    interest: "Other Enquiries",
  },
  {
    id: "digital-signage",
    title: "Digital Signage Displays",
    group: "Displays",
    summary: "Screens for notices, wayfinding and information in shared spaces.",
    icon: "signage",
    interest: "Other Enquiries",
  },
  {
    id: "ops-computing",
    title: "OPS Computing Solutions",
    group: "Classroom & AV",
    summary: "Slot-in computing modules for integrated interactive display set-ups.",
    icon: "server",
    interest: "Interactive Flat Panel Display",
    image: photos.opsConnectivity,
  },
  {
    id: "wireless-sharing",
    title: "Wireless Screen Sharing",
    group: "Classroom & AV",
    summary: "Present from compatible devices to the room display without cables.",
    icon: "cast",
    interest: "Smart Classroom Solutions",
  },
  {
    id: "classroom-audio",
    title: "Classroom Audio Solutions",
    group: "Classroom & AV",
    summary: "Audio that helps every learner hear the lesson clearly.",
    icon: "speaker",
    interest: "Smart Classroom Solutions",
  },
  {
    id: "mounting-systems",
    title: "Display Mounting Systems",
    group: "Classroom & AV",
    summary: "Wall mounts and stands, with professional installation.",
    icon: "mount",
    interest: "Installation & Technical Support",
  },
  {
    id: "connectivity-accessories",
    title: "Connectivity & Accessories",
    group: "IT & Infrastructure",
    summary: "Cables, adapters and accessories that keep everything connected.",
    icon: "cable",
    interest: "IT Products & Accessories",
  },
  {
    id: "computers-peripherals",
    title: "Computers & IT Peripherals",
    group: "IT & Infrastructure",
    summary: "Computers, peripherals and essential equipment for work and learning.",
    icon: "laptop",
    interest: "IT Products & Accessories",
  },
  {
    id: "networking-infrastructure",
    title: "Networking & Infrastructure",
    group: "IT & Infrastructure",
    summary: "Network planning, infrastructure, integration and deployment.",
    icon: "network",
    interest: "Networking & Infrastructure",
  },
];

export const productGroups: ProductGroup[] = ["Displays", "Classroom & AV", "IT & Infrastructure"];

/**
 * Interactive flat panel specification layout.
 * TODO(client): fill `value` ONLY with verified data from the approved product sheet.
 * `null` renders as "Details available on enquiry". Never invent values here.
 */
export const panelSpecs: { group: string; rows: { label: string; value: string | null }[] }[] = [
  {
    group: "Display",
    rows: [
      { label: "Screen sizes", value: null },
      { label: "Resolution", value: null },
      { label: "Brightness", value: null },
    ],
  },
  {
    group: "Interaction",
    rows: [
      { label: "Touch technology", value: null },
      { label: "Touch points", value: null },
      { label: "Writing & annotation tools", value: null },
    ],
  },
  {
    group: "System",
    rows: [
      { label: "Operating system", value: null },
      { label: "Memory & storage", value: null },
      { label: "OPS slot", value: null },
    ],
  },
  {
    group: "Connectivity & service",
    rows: [
      { label: "Ports & connectivity", value: null },
      { label: "Wireless screen sharing", value: null },
      { label: "Warranty & support", value: null },
    ],
  },
];

export const whyNexio = [
  { title: "One partner, end to end", text: "Products, solutions, installation and support from a single, accountable team.", icon: "support" },
  { title: "Practical expertise", text: "Technology, creativity and hands-on know-how applied to real classrooms and workplaces.", icon: "wrench" },
  { title: "Dependable by design", text: "A focus on quality products and reliable service that keep technology working.", icon: "shield" },
  { title: "Built around you", text: "Customer-first solutions shaped to each institution's and business's needs.", icon: "heart" },
] as const satisfies ReadonlyArray<{ title: string; text: string; icon: IconKey }>;

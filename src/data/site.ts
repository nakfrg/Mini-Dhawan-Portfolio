/* ---------------------------------------------------------------------------
   Single source of truth for site-wide copy. Edit here and it updates
   everywhere. Work items live in src/content/work (one JSON per project).
--------------------------------------------------------------------------- */

export const site = {
  name: 'Mini Dhawan',
  role: 'Senior Graphic Designer',
  location: 'Canberra AU',
  email: 'minidhawan@gmail.com',
  phone: '+61 438 449 849',
  year: 2026,
  /* Drop the real PDF into /public and keep this filename (or update it). */
  resumePdf: '/Mini-Dhawan-Resume.pdf',
  description:
    'Mini Dhawan, Senior Graphic Designer in Canberra. Translating complexity into clear, accessible and beautifully crafted design across print, digital, brand and motion.',
};

export const hero = {
  lead: 'Chaos to',
  highlight: 'Clarity',
  tagline:
    'Translating complexity into clear, accessible and beautifully crafted design: across print, digital, brand and motion.',
};

/* Ordering of the work accordion + the icon each category uses */
export const CATEGORIES = [
  { key: 'brand', label: 'Brand Identity and Design Systems', icon: 'flag' },
  { key: 'digital', label: 'Digital and Accessible Design', icon: 'monitor' },
  { key: 'print', label: 'Print and Publishing Design', icon: 'book' },
  { key: 'motion', label: 'Motion and Video Design', icon: 'play' },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]['key'];

/* Client logos live in /public/images/clients (swap the blank PNGs for
   the real marks; keep the filenames or update them here). */
export const clients = [
  { name: 'DK (Dorling Kindersley)', file: 'dk.png' },
  { name: 'Australian Government: Department of Industry, Science and Resources', file: 'disr.png' },
  { name: 'Australian Government: Australian Digital Health Agency', file: 'adha.png' },
  { name: 'ACT Government: Suburban Land Agency', file: 'sla.png' },
  { name: 'Australian Government: Australian Maritime Safety Authority', file: 'amsa.png' },
  { name: 'ACT Government: Health', file: 'act-health.png' },
  { name: 'Mingle', file: 'mingle.png' },
  { name: 'USG Boral', file: 'usg-boral.png' },
  { name: 'Yum! Brands (KFC, Pizza Hut, Taco Bell, Habit)', file: 'yum.png' },
  { name: 'National Hearing Care (an Amplifon brand)', file: 'nhc.png' },
  { name: 'Shiv Khera', file: 'shiv-khera.png' },
  { name: 'Confederation of Indian Industry', file: 'cii.png' },
];

/* ---- RESUME PAGE ---- */
export const experience = [
  { dates: '2025 – Present', role: 'Senior Graphic Designer', org: 'Australian Digital Health Agency (ADHA)' },
  { dates: '2023 – 2024', role: 'Senior Graphic Designer', org: 'Department of Industry Science and Resource (DISR)' },
  { dates: '2021 – 2023', role: 'Graphic and Digital Designer (Studio Manager)', org: 'Australian Maritime Safety Authority (AMSA)' },
  { dates: '2018 – 2021', role: 'Digital & Creative Services Officer', org: 'Suburban Land Agency (ACT Government-SLA)' },
  { dates: 'January – July 2020', role: 'Senior Graphic Designer (on Higher Duties)', org: 'ACT Health - Culture Review Implementation Branch' },
  { dates: 'February – March 2018', role: 'Graphic Designer', org: 'Canberra Weekly Magazine' },
  { dates: '2009 – 2017', role: 'Creative Design Lead', org: 'Cybergraff (A Creative Digital Agency)' },
  { dates: '2006 – 2012', role: 'Assistant Art Editor', org: 'Dorling Kindersley (A Penguin Company - Publishing House)' },
];

export const qualifications = [
  { title: 'Bachelor of Fine Arts', dates: '1997–2001' },
  { title: 'Advance Diploma in Multimedia', dates: '1999–2002' },
];

export const tools = [
  'InDesign',
  'Photoshop',
  'Illustrator',
  'Express',
  'After Effects',
  'Premiere Pro',
  'Figma',
  'Canva',
  'Microsoft Word and PowerPoint',
];

export const stats = [
  { value: '20+', label: 'Experience' },
  { value: '100+', label: 'Projects delivered' },
  { value: 'Repeat', label: 'Clients and engagements' },
];

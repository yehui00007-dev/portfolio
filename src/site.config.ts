// Single source of truth for site-wide details.
// Edit here, and the nav, footer, About page, and meta tags all update.

export const site = {
  name: 'Christine Ye',
  role: 'Product Designer',
  email: 'imhuiye@gmail.com',
  linkedin: 'https://www.linkedin.com/in/christineux',
  linkedinLabel: 'linkedin.com/in/christineux',
  resume: '/resume.pdf', // drop your PDF at public/resume.pdf
  description:
    'Christine Ye designs AI products that help people understand, decide, and act with confidence.',
  intro:
    "I design AI products that help people understand, decide, and act with confidence. I've led 0→1 products that turn complex technology into experiences people actually use.",
};

export const nav = [
  { label: 'Work', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: site.resume, external: true },
];

export const experience = [
  { title: 'Senior Product Designer II, VSCO', dates: '11/2023 – Present' },
  { title: 'Senior Product Designer, Speechify', dates: '07/2021 – 11/2023' },
  { title: 'Product Designer, Meaningful Works', dates: '05/2018 – 07/2021' },
];

import { CvConfig } from '@portfolio.md/builder';

export default {
  meta: {
    title: "Dmytro Baida's Portfloio",
    description: 'Full-Stack Engineer',
    verification: {
      google: 'gVx2WIPNUmdGNPc-btJadTU-kkNt2Q2xnuFU5P9myZY',
    },
  },
  home: {
    title: 'Dmytro Baida',
    url: '/',
    logo: 'logo',
  },
  pages: {
    cv: {
      file: 'content/cv.md',
      generate: {
        pdf: true,
        docx: true,
      },
      menu: {
        title: 'Resume',
      },
    },
    projects: {
      file: 'content/projects.md',
      isMain: true,
    },
  },
  socials: [
    {
      url: 'https://github.com/dmytrobaida',
    },
    {
      url: 'https://www.linkedin.com/in/dmytrobaida',
    },
    {
      url: 'https://leetcode.com/dmytrobaida',
    },
  ],
  credentials: {
    title: 'Dmytro Baida',
    year: 2024,
    url: '/',
  },
  images: {
    logo: 'content/logo.jpeg',
  },
  analytics: {
    gTag: 'G-Z76X7VG7QN',
  },
} satisfies CvConfig;

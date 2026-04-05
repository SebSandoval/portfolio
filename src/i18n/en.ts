import type { Translations } from './es';

export const en: Translations = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    role: 'Full Stack Developer',
    tagline: 'I build web applications that are practical, maintainable, and user-friendly.',
    cta: 'See my work',
    available: 'Available for projects',
  },
  about: {
    label: 'About',
    years: '3+',
    yearsLabel: 'years of experience',
    body: 'Full Stack Developer with over 3 years building scalable web applications. I work with React, Node.js, PHP, TypeScript, PostgreSQL, and MongoDB. I care equally about system performance and user experience — clean code and polished interfaces are not opposites.',
    location: 'San Gil, Santander, Colombia',
  },
  experience: {
    label: 'Experience',
    jobs: [
      {
        company: 'Omega Soluciones Web',
        role: 'Full Stack Developer',
        period: 'Feb 2023 – Present',
        bullets: [
          'Built web projects using NestJS, Next.js, PostgreSQL, and MongoDB',
          'Implemented scalable and efficient system architectures',
          'Used Docker for deployment and container management',
          'Developed and maintained custom web systems using PHP, JavaScript, and MySQL',
          'Built e-commerce platforms and corporate websites',
          'Developed payroll, reporting, ticketing, and account management systems',
          'Optimized internal processes and improved user experience',
        ],
      },
      {
        company: 'SENA Tecnoparque',
        role: 'Web Developer',
        period: 'Jun 2022 – Dec 2022',
        bullets: [
          'Developed web applications for startups and entrepreneurs',
          'Implemented inventory and batch management systems',
          'Integrated e-commerce platforms',
          'Trained clients in the use of digital tools',
        ],
      },
    ],
  },
  skills: {
    label: 'Stack',
    categories: [
      { name: 'Languages', items: ['TypeScript', 'JavaScript', 'PHP'] },
      { name: 'Frameworks', items: ['React', 'Next.js', 'NestJS', 'Node.js', 'Astro', 'React Native'] },
      { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
      { name: 'Tools', items: ['Docker', 'Git', 'AWS', 'Tailwind CSS', 'HTML', 'CSS'] },
      { name: 'Languages', items: ['Spanish (native)', 'English (B1)'] },
    ],
  },
  projects: {
    label: 'Projects',
    items: [
      {
        title: 'E-Commerce Platform',
        description: 'Full-featured e-commerce platform with product management, cart, integrated payments, and admin dashboard.',
        stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
        type: 'Omega Soluciones Web',
        link: null,
      },
      {
        title: 'Payroll & Reporting System',
        description: 'Internal system for payroll calculation, automated report generation, and corporate account management.',
        stack: ['PHP', 'MySQL', 'JavaScript'],
        type: 'Omega Soluciones Web',
        link: null,
      },
      {
        title: 'Inventory Management System',
        description: 'Inventory management application with batch control, stock alerts, and product traceability for entrepreneurs.',
        stack: ['React', 'Node.js', 'MongoDB'],
        type: 'SENA Tecnoparque',
        link: null,
      },
      {
        title: 'Projects on GitHub',
        description: 'Explore my personal projects, experiments with new technologies, and open source contributions.',
        stack: ['TypeScript', 'React', 'Astro'],
        type: 'Personal',
        link: 'https://github.com/SebSandoval',
      },
    ],
    cta: 'See all on GitHub →',
  },
  contact: {
    label: 'Contact',
    heading: "Let's talk.",
    availability: 'Available for freelance projects and full-time positions',
    email: 'juansesdvsf@gmail.com',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    built: 'Built with Astro',
    rights: 'Juan Sebastián Sandoval',
  },
};

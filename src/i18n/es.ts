export const es = {
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    role: 'Full Stack Developer',
    tagline: 'Construyo aplicaciones web prácticas, mantenibles y fáciles de usar.',
    cta: 'Ver mi trabajo',
    available: 'Disponible para proyectos',
  },
  about: {
    label: 'Sobre mí',
    years: '3+',
    yearsLabel: 'años de experiencia',
    body: 'Desarrollador Full Stack con más de 3 años construyendo aplicaciones web escalables. Trabajo con React, Node.js, PHP, TypeScript, PostgreSQL y MongoDB. Me interesa igual el rendimiento del sistema que la experiencia del usuario — el código limpio y las interfaces cuidadas no son opuestos.',
    location: 'San Gil, Santander, Colombia',
  },
  experience: {
    label: 'Experiencia',
    jobs: [
      {
        company: 'Omega Soluciones Web',
        role: 'Full Stack Developer',
        period: 'Feb 2023 – Presente',
        bullets: [
          'Desarrollo de proyectos web con NestJS, Next.js, PostgreSQL y MongoDB',
          'Arquitecturas de sistema escalables y eficientes',
          'Despliegue con Docker y gestión de contenedores',
          'Sistemas web custom con PHP, JavaScript y MySQL',
          'Plataformas e-commerce y sitios corporativos',
          'Sistemas de nómina, reportes, tickets y gestión de cuentas',
          'Optimización de procesos internos y mejora de UX',
        ],
      },
      {
        company: 'SENA Tecnoparque',
        role: 'Web Developer',
        period: 'Jun 2022 – Dic 2022',
        bullets: [
          'Desarrollo de aplicaciones web para startups y emprendedores',
          'Sistemas de inventario y gestión por lotes',
          'Integración de plataformas e-commerce',
          'Capacitación a clientes en herramientas digitales',
        ],
      },
    ],
  },
  skills: {
    label: 'Stack',
    categories: [
      { name: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'PHP'] },
      { name: 'Frameworks', items: ['React', 'Next.js', 'NestJS', 'Node.js', 'Astro', 'React Native'] },
      { name: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
      { name: 'Herramientas', items: ['Docker', 'Git', 'AWS', 'Tailwind CSS', 'HTML', 'CSS'] },
      { name: 'Idiomas', items: ['Español (nativo)', 'Inglés (B1)'] },
    ],
  },
  projects: {
    label: 'Proyectos',
    items: [
      {
        title: 'Plataforma E-Commerce',
        description: 'Plataforma de comercio electrónico completa con gestión de productos, carrito, pagos integrados y panel de administración.',
        stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
        type: 'Omega Soluciones Web',
        link: null,
      },
      {
        title: 'Sistema de Nómina & Reportes',
        description: 'Sistema interno para cálculo de nómina, generación de reportes automatizados y gestión de cuentas corporativas.',
        stack: ['PHP', 'MySQL', 'JavaScript'],
        type: 'Omega Soluciones Web',
        link: null,
      },
      {
        title: 'Sistema de Inventario',
        description: 'Aplicación de gestión de inventario con control por lotes, alertas de stock y trazabilidad de productos para emprendedores.',
        stack: ['React', 'Node.js', 'MongoDB'],
        type: 'SENA Tecnoparque',
        link: null,
      },
      {
        title: 'Proyectos en GitHub',
        description: 'Explora mis proyectos personales, experimentación con nuevas tecnologías y contribuciones open source.',
        stack: ['TypeScript', 'React', 'Astro'],
        type: 'Personal',
        link: 'https://github.com/SebSandoval',
      },
    ],
    cta: 'Ver todos en GitHub →',
  },
  contact: {
    label: 'Contacto',
    heading: '¿Hablamos?',
    availability: 'Disponible para proyectos freelance y posiciones full-time',
    email: 'juansesdvsf@gmail.com',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    built: 'Construido con Astro',
    rights: 'Juan Sebastián Sandoval',
  },
};

export type Translations = typeof es;

import { CVData } from '@/types/cv.types';

export const cvData: CVData = {
  personalInfo: {
    name: 'Dayvson Marques',
    title: 'Desenvolvedor Web Full Stack',
    contacts: [
      { icon: '📍', text: 'Recife – PE, Brasil' },
      { icon: '🎂', text: '36 anos' },
  { icon: 'ⓦ', text: '(81) 99962-3374' },
      { icon: '🌐', text: 'dayvsonmarques.dev.br' },
      { icon: '📧', text: 'dayvson.marques@gmail.com' },
      { 
        icon: '💼', 
        text: 'LinkedIn', 
        href: 'https://www.linkedin.com/in/dayvsonmarques/' 
      },
      { 
        icon: '💻', 
        text: 'GitHub', 
        href: 'https://github.com/dayvsonmarques' 
      },
    ],
  },
  
  about: [
    'Desenvolvedor web full stack com +15 anos de experiência em fábricas de software, agências digitais, estúdios criativos, startups e projetos freelance. Experiência no desenvolvimento de sites, e-commerces (B2B/B2C) e aplicações web (gestão de dados, análise de marketing, e-learning/ead, CRM e plataformas de streaming).',
    'Graduado em Sistemas de Informação (UniNabuco, 2012). Sólida vivência em engenharia de software, atuando em todo o ciclo de desenvolvimento — da idealização e planejamento à implementação e manutenção. ',
  ],
  
  education: [
    {
      title: 'Bacharelado em Sistemas de Informação',
      institution: 'UniNabuco',
      period: '2008 - 2012',
    },
    {
      title: 'Desenvolvimento Web com Java',
      institution: 'Softex Recife - 200h',
      period: '2013',
    },
  ],
  
  skillCategories: [
    {
      title: 'Front-end',
      skills: [
        'Html5',
        'Css3 | Sass',
        'JavaScript',
        'TypeScript',
        'React',
        'Vue',
        'Next.js',
        'UX/UI', 
        'Bootstrap',
        'Tailwind CSS',
        'Material UI',
        'Design Systems',
      ],
      badgeClass: 'bg-gray-200 text-gray-800',
    },
    {
      title: 'Back-end',
      skills: [
        'PHP',
        'Laravel',
        'Node.js',
        'AdonisJS',
        'Prisma',
        'WordPress',
        'WooCommerce',
      ],
      badgeClass: 'bg-gray-300 text-gray-900',
    },
    {
      title: 'Banco de Dados',
      skills: [
        'MySQL',
        'PostgreSQL',
        'SQL Server',
        'MongoDB',
        'Redis',
      ],
      badgeClass: 'bg-gray-400 text-white',
    },
    {
      title: 'Infraestrutura & Cloud',
      skills: [
        'AWS Services',
        'Google Cloud',
        'Docker',
        'Linux',
        'CI/CD',
        'Apache | Nginx',
        'Jenkins'
      ],
      badgeClass: 'bg-gray-500 text-white',
    },

    {
      title: 'IA & Ferramentas',
      skills: [
        'Low-code',
        'Cursor AI',
        'GitHub Copilot',
        'Claude Code',
      ],
      badgeClass: 'bg-gray-900 text-white',
    },
    {
      title: 'Análise & Monitoramento',
      skills: [
        'CloudWatch',
        'Grafana',
        'Datadog',
        'Sentry',
        'Hotjar',
        'Google Analytics',
      ],
      badgeClass: 'bg-gray-700 text-white',
    },
    {
      title: 'Testes',
      skills: [
        'Jest',
        'React Testing Library',
        'PHPUnit',
      ],
      badgeClass: 'bg-gray-800 text-white',
    },
    {
      title: 'Metodologias & Gestão',
      skills: [
        'Scrum',
        'Kanban',
        'XP',
        'Jira',
        'Trello',
        'Asana',
      ],
      badgeClass: 'bg-gray-600 text-white',
    },
  ],
  
  languages: [
    { 
      name: 'Inglês', 
      level: 'Leitura Avançada / Conversação Básica' 
    },
    { 
      name: 'Espanhol', 
      level: 'Leitura Intermediária / Conversação Básica' 
    },
  ],
  
  experiences: [
    {
      title: 'Desenvolvedor Web Full Stack',
      company: 'Freelancer',
      period: '08/2024 - Atual',
      responsibilities: [
        'Desenvolvimento e manutenção de sites e e-commerces responsivos',
        'Stack: Next.js, React, JavaScript | TypeScript, Node.js, PostgreSQL, WordPress',
      ],
    },
    {
      title: 'Desenvolvedor Full Stack / Ecommerce',
      company: 'Agile Ecommerce',
      period: '01/2024 - 07/2024 | 01/2019 - 07/2019',
      responsibilities: [
        'Prototipação (MVP), desenvolvimento e manutenção de e-commerce B2B integrado com multi',
        'Stack: Laravel, PHP 7, HTML5, CSS3, JavaScript, Bootstrap',
      ],
    },
    {
      title: 'Analista Front-end Pleno',
      company: 'Accenture',
      period: '08/2019 - 03/2023',
      responsibilities: [
        'Desenvolvimento de plataformas de e-commerce e streaming',
        'Stack: ReactJS, HTML5, CSS3/SASS, Bootstrap, JavaScript, Oracle Cloud Commerce',
      ],
    },
    {
      title: 'Desenvolvedor PHP',
      company: 'Idealizza',
      period: '03/2018 - 01/2019',
      responsibilities: [
        'Sistemas web EAD, e-commerces e gestão financeira',
        'Stack: PHP, Docker, CakePHP, HTML5, CSS3, JavaScript, jQuery, MySQL e SQL Server',
      ],
    },
    {
      title: 'Desenvolvedor Wordpress',
      company: 'Agências de Publicidade | Freelancer',
      period: '05/2013 - 03/2018',
      responsibilities: [
        'Desenvolvimento de sites, lojas online (produtos e serviços), criação de temas, plugins, integrações e customizações',
        'Stack: PHP 7, WordPress, WooCommerce, Laravel, OpenCart, HTML5, CSS3/SASS, JavaScript, MySQL, PostgreSQL',
      ],
    },
    {
      title: 'Desenvolvedor Web',
      company: 'Corptech',
      period: '04/2011 - 04/2013',
      responsibilities: [
        'Desenvolvimento de ERP web integrado a SAP',
        'Stack: Java (J2EE, JSP, JSF, Hibernate), MySQL, PostgreSQL, Google Maps e Google Charts',
      ],
    },
  ],
};

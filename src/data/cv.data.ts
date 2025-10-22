import { CVData } from '@/types/cv.types';

export const cvData: CVData = {
  personalInfo: {
    name: 'Dayvson Marques',
    title: 'Desenvolvedor Web Full Stack',
    contacts: [
      { icon: '⌘', text: 'Recife – PE, Brasil' },
      { icon: '⚏', text: '36 anos' },
      { icon: '☎', text: '(81) 99962-3374' },
      { icon: '⚡', text: 'dayvsonmarques.dev.br' },
      { icon: '✉', text: 'dayvson.marques@gmail.com' },
      { 
        icon: '⚏', 
        text: 'LinkedIn', 
        href: 'https://www.linkedin.com/in/dayvsonmarques/' 
      },
      { 
        icon: '⚏', 
        text: 'GitHub', 
        href: 'https://github.com/dayvsonmarques' 
      },
    ],
  },
  
  about: [
    'Desenvolvedor web full stack, com mais de 15 anos de experiência no desenvolvimento de sites, lojas online e aplicações web, e-commerces (B2B/B2C), aplicações web para gestão de dados, análise de marketing, e-learning/ead, CRM e plataformas de videos por assinatura.',
    'Graduado em Sistemas de Informação (UniNabuco, 2012). Sólida vivência em engenharia de software, atuando em todo o ciclo de desenvolvimento — da idealização e planejamento à implementação e manutenção de aplicações web. de vídeo. Atuando em diferentes contextos profissionais: fábricas de software, agências digitais, estúdios criativos, startups e projetos freelance.',
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
      skills: ['html5', 'css3/sass', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
      badgeClass: 'bg-gray-200 text-gray-800',
    },
    {
      title: 'Back-end',
      skills: ['Php', 'Laravel', 'Node', 'WordPress', 'WooCommerce', 'AdonisJS', 'Prisma'],
      badgeClass: 'bg-gray-300 text-gray-900',
    },
    {
      title: 'Banco de Dados',
      skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Redis'],
      badgeClass: 'bg-gray-400 text-white',
    },
    {
      title: 'Infraestrutura & Cloud',
      skills: ['AWS', 'Google Cloud', 'Docker', 'Linux', 'CI/CD', 'Nginx'],
      badgeClass: 'bg-gray-500 text-white',
    },
  ],
  
  languages: [
    { name: 'Inglês', level: 'Leitura Avançada / Conversação Básica' },
    { name: 'Espanhol', level: 'Leitura Intermediária / Conversação Básica' },
  ],
  
  experiences: [
    {
      title: 'Desenvolvedor Web Full Stack (Freelancer)',
      company: 'Autônomo',
      period: '08/2024 - Atual',
      responsibilities: [
        'Desenvolvimento e manutenção de sites e e-commerces responsivos',
        'Stack: Next.js, React, TypeScript, Node.js, PostgreSQL, WordPress',
        'Implementação de soluções com HTML5, CSS3 e JavaScript',
      ],
    },
    {
      title: 'Desenvolvedor Full Stack',
      company: 'Agile Ecommerce',
      period: '01/2024 - 07/2024',
      responsibilities: [
        'Desenvolvimento e manutenção de e-commerce B2B',
        'Stack: Laravel, PHP 7, HTML5, CSS3, JavaScript',
        'Implementação de funcionalidades para comércio eletrônico',
      ],
    },
    {
      title: 'Analista Front-end Pleno',
      company: 'Accenture',
      period: '08/2019 - 03/2023',
      responsibilities: [
        'Desenvolvimento de plataformas de e-commerce e streaming',
        'Stack: ReactJS, HTML5, CSS3/SASS, JavaScript, Oracle Cloud Commerce',
        'Utilização de Bootstrap e jQuery para interfaces responsivas',
      ],
    },
    {
      title: 'Desenvolvedor Ecommerce',
      company: 'Agile Ecommerce',
      period: '01/2019 - 07/2019',
      responsibilities: [
        'Prototipação de e-commerce B2B integrado com ERPs',
        'Stack: Laravel, PHP, HTML5, CSS3, JavaScript, Bootstrap',
        'Desenvolvimento de soluções de integração',
      ],
    },
    {
      title: 'Desenvolvedor PHP',
      company: 'Idealizza',
      period: '03/2018 - 01/2019',
      responsibilities: [
        'Sistemas web EAD, e-commerces e gestão financeira',
        'Stack: PHP, Docker, CakePHP, HTML5, CSS3, JavaScript, jQuery',
        'Trabalho com bancos MySQL e SQL Server',
      ],
    },
    {
      title: 'Desenvolvedor Web (Freelancer)',
      company: 'Autônomo',
      period: '03/2017 - 03/2018',
      responsibilities: [
        'Desenvolvimento de lojas online, plugins e templates',
        'Stack: WordPress, WooCommerce, Laravel, PHP 7, HTML5, CSS3/SASS',
        'Criação de soluções customizadas para e-commerce',
      ],
    },
    {
      title: 'Desenvolvedor Web',
      company: 'Bold Comunicação',
      period: '12/2015 - 02/2017',
      responsibilities: [
        'Criação de sites e e-commerces',
        'Stack: Laravel, WordPress, HTML5, CSS3/SASS, JavaScript',
        'Desenvolvimento front-end e back-end',
      ],
    },
    {
      title: 'Desenvolvedor Front-end',
      company: 'Agências de Publicidade',
      period: '02/2015 - 11/2015',
      responsibilities: [
        'Desenvolvimento de lojas online e templates',
        'Stack: PHP, WordPress, OpenCart, HTML, CSS, JavaScript',
        'Implementação de interfaces responsivas',
      ],
    },
    {
      title: 'Desenvolvedor Web (Freelancer)',
      company: 'Autônomo',
      period: '06/2013 - 01/2015',
      responsibilities: [
        'Manutenção de sites e lojas online',
        'Stack: WordPress, PHP, HTML, CSS, MySQL',
        'Suporte e evolução de projetos web',
      ],
    },
    {
      title: 'Desenvolvedor Web',
      company: 'Corptech',
      period: '04/2011 - 04/2013',
      responsibilities: [
        'Desenvolvimento de ERP web integrado ao SAP',
        'Stack: Java (J2EE, JSP, JSF, Hibernate), MySQL, PostgreSQL',
        'Integração com Google Maps e Google Charts',
      ],
    },
  ],
};

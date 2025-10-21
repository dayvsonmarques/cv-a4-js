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
      skills: ['HTML5', 'CSS3/SASS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
      badgeClass: 'bg-gray-200 text-gray-800',
    },
    {
      title: 'Back-end',
      skills: ['PHP 8', 'Laravel', 'Node.js', 'WordPress', 'WooCommerce', 'AdonisJS', 'Prisma'],
      badgeClass: 'bg-gray-300 text-gray-900',
    },
    {
      title: 'Banco de Dados',
      skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'NoSQL'],
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
      title: 'Desenvolvedor Backend Freelancer',
      company: 'Autonomo',
      period: '02/2019 - Atual',
      responsibilities: [
        'Desenvolvimento de APIs e microsserviços',
        'Stack: Python (Django, FastAPI), Node.js, TypeScript',
        'DevOps: Docker, CI/CD, AWS, monitoramento',
        'Arquitetura de soluções escaláveis',
      ],
    },
    {
      title: 'Desenvolvedor Backend Sênior',
      company: 'Agile Ecommerce',
      period: '03/2021 - 01/2022',
      responsibilities: [
        'Desenvolvimento de plataforma white-label de e-commerce',
        'Stack: Python, FastAPI, Next.js, PostgreSQL, Redis',
        'Arquitetura de microsserviços e APIs RESTful',
        'Integração com gateways de pagamento',
      ],
    },
    {
      title: 'Desenvolvedor Full Stack Pleno',
      company: 'Accenture',
      period: '01/2019 - 02/2021',
      responsibilities: [
        'Sistemas bancários e financeiros para grandes clientes',
        'Stack: Java, Spring Boot, React, Oracle DB',
        'Metodologias ágeis (Scrum) e DevOps',
        'Code review e mentoria de desenvolvedores júnior',
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

import { CVData } from "@/types/cv.types";

export const cvData: CVData = {
  personalInfo: {
    name: "Dayvson Marques",
    title: "Desenvolvedor Web Full Stack",
    contacts: [
      { icon: "location", text: "Recife – PE, Brasil" },
      { icon: "age", text: "36 anos" },
      { icon: "whatsapp", text: "(81) 99962-3374" },
      {
        icon: "email",
        text: "Email",
        href: "mailto:dayvson.marques@gmail.com",
      },
      { icon: "website", text: "Site", href: "https://dayvsonmarques.dev.br" },
      {
        icon: "linkedin",
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/dayvsonmarques/",
      },
      {
        icon: "github",
        text: "GitHub",
        href: "https://github.com/dayvsonmarques",
      },
    ],
  },

  about: [
    "Desenvolvedor web full stack desde 2010, graduado em Sistemas de Informação (UniNabuco, 2012). Mais de 15 anos desenvolvendo sites, e-commerces e aplicações web (B2B/B2C), com foco em engenharia de software e ciclo completo de desenvolvimento. Experiência em Linux, Docker, CI/CD e ambientes cloud, atuando em agências, startups e projetos freelance."
  ],

  education: [
    {
      title: "Bacharelado em Sistemas de Informação",
      institution: "UniNabuco",
      period: "2008 - 2012",
    },
    {
      title: "Desenvolvimento Web com Java (200h)",
      institution: "Softex Recife",
      period: "2013",
    },
    {
      title: "Github Copilot",
      institution: "EV.G | Microsoft",
      period: "2025",
    },
  ],

  skillCategories: [
    {
      title: "Front-end",
      skills: [
        "HTML 5",
        "CSS 3 | SASS",
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Vue",
        "Next.js",
        "Design Responsivo",
        "UX/UI",
        "Figma",
        "Bootstrap",
        "Tailwind CSS",
        "Material UI",
        "Design Systems",
      ],
      badgeClass: "bg-gray-200 text-gray-800",
    },
    {
      title: "Back-end",
      skills: [
        "PHP",
        "Laravel",
        "NodeJS",
        "AdonisJS",
        "Prisma",
        "WordPress",
        "WooCommerce",
      ],
      badgeClass: "bg-gray-300 text-gray-900",
    },
    {
      title: "Banco de Dados",
      skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Redis"],
      badgeClass: "bg-gray-400 text-white",
    },
    {
      title: "Infraestrutura & Cloud",
      skills: [
        "AWS",
        "Google Cloud",
        "Docker",
        "Linux",
        "CI/CD",
        "Apache | Nginx",
        "Jenkins",
      ],
      badgeClass: "bg-gray-500 text-white",
    },

    {
      title: "IA & Ferramentas",
      skills: [
        "GitHub Copilot",
        "Cursor",
        "Automação de código",
        "Claude Code",
        "Ferramentas de produtividade baseadas em IA"
      ],
      badgeClass: "bg-gray-900 text-white",
    },
    {
      title: "Análise & Monitoramento",
      skills: [
        "CloudWatch",
        "Grafana",
        "Datadog",
        "Sentry",
        "Hotjar",
        "Google Analytics",
      ],
      badgeClass: "bg-gray-700 text-white",
    },
    {
      title: "Testes",
      skills: ["Jest", "React Testing Library", "PHPUnit", "Pest"],
      badgeClass: "bg-gray-800 text-white",
    },
    {
      title: "Metodologias & Gestão",
      skills: ["Scrum", "Kanban", "XP", "Jira", "Trello", "Asana"],
      badgeClass: "bg-gray-600 text-white",
    },
  ],

  languages: [
    {
      name: "Inglês",
      level: "Leitura Avançada / Conversação Básica",
    },
    {
      name: "Espanhol",
      level: "Leitura Intermediária / Conversação Básica",
    },
  ],

  experiences: [
    {
      title: "Desenvolvedor Web Full Stack",
      company: "Freelancer",
      period: "08/2024 - 12/2025",
      responsibilities: [
        "Desenvolvimento e manutenção de sites, aplicações web e e-commerces responsivos",
        "Stack: Next.js, React, JavaScript | TypeScript, NodeJS, PostgreSQL, PHP, Laravel, WordPress",
      ],
    },
    {
      title: "Desenvolvedor Fullstack",
      company: "Agile Ecommerce [Startup]",
      period: "06/2023 - 07/2024 | 01/2019 - 07/2019",
      responsibilities: [
        "Prototipação de produto minimo viável (MVP) aprovado em programa de aceleração. Desenvolvimento e manutenção de e-commerce B2B integrado com multi ERPs.",
        "Stack: Laravel, PHP 7, HTML5, CSS3, JavaScript, Bootstrap, Responsive Design.",
      ],
    },
    {
      title: "Analista Front-end Sênior",
      company: "Accenture (SKY | DirectvGo)",
      period: "08/2019 - 03/2023",
      responsibilities: [
        "Desenvolvimento e customização de e-commerce de serviços e plataforma de streaming de vídeos.",
        "Stack: ReactJS, HTML5, CSS3 | SASS, Bootstrap, JavaScript, NodeJS, Liferay CMS & Oracle Cloud Commerce",
      ],
    },
    {
      title: "Desenvolvedor PHP",
      company: "Idealizza",
      period: "03/2018 - 01/2019",
      responsibilities: [
        "Desenvolvimento e Manutenção de Sistemas web EAD, e-commerces e gestão financeira",
        "Stack: PHP, NodeJS, Docker, Laravel, CakePHP, HTML5, CSS3, JavaScript, jQuery, MySQL e SQL Server",
      ],
    },
    {
      title: "Desenvolvedor Wordpress",
      company: "Agências de Publicidade",
      period: "05/2013 - 03/2018",
      responsibilities: [
        "Desenvolvimento de sites e lojas online (produtos e serviços), criação e customização de temas, plugins, integrações com apis de frete, gateways de pagamentos e mídias sociais",
        "Stack: PHP 7, WordPress, WooCommerce, Laravel, NodeJS, OpenCart, HTML5, CSS3/SASS, JavaScript, MySQL, PostgreSQL",
      ],
    },
    {
      title: "Desenvolvedor Web",
      company: "Corptech (Corporate Technologies)",
      period: "04/2011 - 04/2013",
      responsibilities: [
        "Desenvolvimento e customização de funcionalidades, relatórios e gráficos dinâmicos do ERP web integrado ao SAP | ABAP",
        "Stack: Java (J2EE, JSP, JSF), MySQL, PostgreSQL, Hibernate, Google Maps e Charts, JasperReports",
      ],
    },
  ],
};

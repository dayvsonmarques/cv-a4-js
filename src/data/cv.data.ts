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
        href: "dayvson.marques@gmail.com",
      },
      { icon: "website", text: "Site", href: "dayvsonmarques.dev.br" },
      {
        icon: "linkedin",
        text: "LinkedIn",
        href: "linkedin.com/in/dayvsonmarques/",
      },
      {
        icon: "github",
        text: "GitHub",
        href: "github.com/dayvsonmarques",
      },
    ],
  },

  about: [
    "Desenvolvedor web full stack com mais de 15 anos de experiência, graduado em Sistemas de Informação. Especialista no desenvolvimento e manutenção de aplicações web diversas (ERPs, e-commerces (B2B/B2C), plataformas EAD, sistemas corporativos responsivos [...]).",
    "Sólida experiência em bancos de dados relacionais (PostgreSQL, MySQL, SQL Server) e NoSQL (MongoDB, Redis), com atuação em planejamento, implementação, otimização de performance e escalabilidade. Domínio avançado em back-end (PHP, Laravel, Node.js) e front-end (React, Next.js, Tailwind CSS e BootstrapCSS), integração de APIs, gateways de pagamentos e sistemas legados.",
    "Experiência relevante em ambientes ágeis (scrum, git, jira). Vivência no desenvolvimento de projetos inovadores, como MVPs de e-commerce com integração a ERPs, dashboards analíticos, painéis administrativos, mapas georreferenciados e relatórios customizados diversos.",
    "Atuação em multinacional como Analista Front-end Sênior, responsável por soluções de ecommerces de serviços e plataforma de stream de vídeos por assinatura, com foco em altas escala de usuários e demandas de alta disponibilidade, SEO, performance, segurança, customização de funcionalidades / templates e melhoria contínua de processos.",
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
      title: "Github Copilot e Desenvolvimento Web com IA",
      institution: "EV.G (Escola Virtual do Governo)| Microsoft",
      period: "2025 | 2026",
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
      ],
      badgeClass: "bg-gray-900 text-white",
    },
    {
      title: "Análise & Monitoramento",
      skills: [
        "Laravel Horizons",
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
      skills: ["Jira", "Azure", "Scrum", "Kanban", "XP", "Trello",  "Asana"],
      badgeClass: "bg-gray-600 text-white",
    },
  ],

  languages: [
    {
      name: "Inglês",
      level: "B1",
    },
    {
      name: "Espanhol",
      level: "A2",
    },
  ],

  experiences: [
    {
      title: "Desenvolvedor Web Full Stack",
      company: "PJ",
      period: "09/2024 - 2026",
      responsibilities: [
        "Desenvolvimento e manutenção de sites, aplicações web e e-commerces responsivos",
        "Stack: Next.js, React, JavaScript | TypeScript, NodeJS, PostgreSQL, PHP, Laravel, WordPress",
      ],
    },
    {
      title: "Desenvolvedor Fullstack",
      company: "Agile Ecommerce [Startup]",
      period: "06/2023 - 08/2024 | 01/2019 - 08/2019",
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

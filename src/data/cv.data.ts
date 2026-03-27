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
    "Desenvolvedor web full stack com mais de 15 anos de experiência, graduado em Sistemas de Informação pela UniNabuco (2012). Especialista no desenvolvimento de aplicações web diversas: ERPs, e-commerces B2B/B2C, plataformas EAD, sistemas corporativos e SaaS.",
    "Sólida experiência em bancos de dados relacionais e NoSQL. Domínio avançado em back-end (PHP, Laravel) e front-end (React, Vue.js), integração de APIs, gateways de pagamentos e manutenção em sistemas legados.",
    "Experiência relevante em ambientes ágeis (scrum, git, jira) com foco em altas escala de usuários e demandas de alta disponibilidade, SEO, performance e segurança. ",
  ],

  education: [
    {
      title: "Bacharelado em Sistemas de Informação",
      institution: "UniNabuco",
      period: "2008 - 2012",
    },
    {
      title: "Desenvolvimento Web com Java",
      institution: "Softex Recife",
      period: "2013",
    },
    {
      title: "Github Copilot e Desenvolvimento Web com IA",
      institution: "EV.G (Escola Virtual do Governo)| Microsoft",
      period: "2026",
    },
  ],

  skillCategories: [
    {
      title: "Front-end",
      skills: [
        "HTML5",
        "CSS3",
        "SASS/SCSS",
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Vue.js",
        "Next.js",
        // "jQuery",
        // "Responsive Design",
        // "UX/UI",
        // "Figma",
        "Bootstrap",
        "Tailwind CSS",
        // "Material UI",
      ],
      badgeClass: "bg-gray-200 text-gray-800",
    },
    {
      title: "Back-end",
      skills: [
        "PHP",
        "Laravel",
        "NodeJS",
        "REST API",
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
        "Azure",
        "Docker",
        "Linux",
        "CI/CD",
        "SSH",
        "Cloudflare",
        "Apache",
        "Nginx",
        "Jenkins",
      ],
      badgeClass: "bg-gray-500 text-white",
    },

    {
      title: "IA & Ferramentas",
      skills: [
        "Cursor",
        "Claude Code",
        "GitHub Copilot",
        "Automação de código",
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
      skills: ["Scrum", "Kanban", "XP", "Jira", "Trello", "Asana"],
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
      company: "Consultor Independente (PJ)",
      period: "10/2025 - 2026",
      responsibilities: [
        "Prestação de serviços para empresas dos setores de cartão de crédito e planos de saúde. Desenvolvimento de sites para profissionais da área de saúde e comércio online. ",
      ],
      skills: ["Next.js", "React", "JavaScript", "TypeScript", "NodeJS", "PostgreSQL", "PHP", "Laravel", "WordPress"],
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "Agile Ecommerce [Startup]",
      period: "06/2023 - 09/2025",
      responsibilities: [
        "Desenvolvimento de SaaS B2B que sincroniza vendas online com ERPs de indústrias e distribuidores, automatizando pedidos, estoque e faturamento em tempo real. MVP aprovado no programa de aceleração de startups do Grupo Ser Educacional.",
      ],
      skills: ["Laravel", "Laravel Lumen", "REST API", "PHP", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    },
    {
      title: "Analista Front-end Sênior",
      company: "Accenture (SKY | DirectvGo)",
      period: "08/2019 - 03/2023",
      responsibilities: [
        "Desenvolvedor front-end no e-commerce da SKY Brasil: construção de Design System, UX/UI, landing pages, testes A/B e otimização de performance. Na DirecTV SKY Latam, integrei o time do portal de streaming e app mobile (React Native), implementando melhorias e novas funcionalidades.",
      ],
      skills: ["ReactJS", "React Native", "HTML5", "CSS3", "SASS", "Bootstrap", "JavaScript", "NodeJS", "Liferay CMS", "Oracle Cloud Commerce"],
    },
    {
      title: "Desenvolvedor PHP",
      company: "Idealizza",
      period: "03/2018 - 01/2019",
      responsibilities: [
        "Desenvolvimento de plataformas EAD para concursos públicos (OAB, Bombeiros, Enfermagem...) e treinamentos corporativos, com simulados online. ERP Emprestimos Bancário.",
      ],
      skills: ["PHP", "NodeJS", "Docker", "Laravel", "CakePHP", "HTML5", "CSS3", "JavaScript", "jQuery", "MySQL", "SQL Server"],
    },
    {
      title: "Desenvolvedor Web Full Stack",
      company: "Agências de Publicidade",
      period: "05/2013 - 03/2018",
      responsibilities: [
        "Criação e customização de sites e lojas virtuais — temas, plugins, APIs de frete, gateways de pagamento, mail marketing e integrações com mídias sociais. E-commerces nos segmentos de turismo, fotografia e produtos odontológicos, Serviços de Lavanderia Online, Clinica Neurológica.",
      ],
      skills: ["PHP 7", "WordPress", "WooCommerce", "Laravel", "NodeJS", "OpenCart", "HTML5", "CSS3/SASS", "JavaScript", "MySQL", "PostgreSQL", "SSH", "Cloudflare", "Linux"],
    },
    {
      title: "Desenvolvedor Web",
      company: "Corptech (Corporate Technologies)",
      period: "04/2011 - 04/2013",
      responsibilities: [
        "Desenvolvi funcionalidades para o WebSuite (uma aplicação web ERP integrado ao SAP | ABAP). Criei dashboards, customizei gráficos dinâmicos, relatórios diversos. Diagnostiquei problemas e otimizei performance da aplicação.",
      ],
      skills: ["Java", "J2EE", "JSP", "JSF", "MySQL", "PostgreSQL", "Hibernate", "Google Maps", "JasperReports"],
    },
  ],
};

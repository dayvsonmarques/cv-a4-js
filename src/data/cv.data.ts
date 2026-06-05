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
    "Especialista em WordPress e WooCommerce: desenvolvimento de plugins customizados, templates, hooks e filtros, integração com APIs RESTful, com foco em segurança e performance.",
    "Experiência relevante em ambientes ágeis (scrum, git, jira) com foco em altas escala de usuários e demandas de alta disponibilidade, SEO, performance e segurança.",
  ],

  education: [
    {
      title: "Bacharelado em Sistemas de Informação",
      institution: "UniNabuco",
      period: "2008 - 2012",
      description: "TCC: Desenvolvimento de aplicações web com JavaServer Faces (JSF) — abordando componentização e reuso de elementos de interface numa época em que esses conceitos ainda não eram amplamente difundidos no ecossistema web, antecipando práticas que se tornariam padrão com frameworks modernos.",
    },
    {
      title: "Desenvolvimento Web com Java",
      institution: "Softex Recife",
      period: "2013",
      description: "Desenvolvi uma aplicação web com Java (J2EE) integrada com banco de dados, para gerenciamento de dados (CRUD), aplicando na pratica os conceitos abordados."
    },
    {
      title: "Github Copilot e Desenvolvimento Web com IA",
      institution: "EV.G (Escola Virtual do Governo)| Microsoft",
      period: "2026",
      description: "Participei de um programa de capacitação sobre o uso do GitHub Copilot para desenvolvimento web com inteligência artificial, aprendendo a integrar a ferramenta em fluxos de trabalho de desenvolvimento."
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
        "jQuery",
        "Responsive Design",
        "UX/UI",
        "Figma",
        "Bootstrap",
        "Tailwind CSS",
        "Material UI",
      ],
      badgeClass: "bg-gray-200 text-gray-800",
    },
    {
      title: "Back-end",
      skills: [
        "PHP",
        "Laravel",
        "Node.js",
        "REST API",
        "RESTful",
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
        "AI-assisted Development",
      ],
      badgeClass: "bg-gray-900 text-white",
    },
    {
      title: "Análise & Monitoramento",
      skills: [
        "Laravel Horizon",
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
      skills: ["Scrum", "Kanban", "XP", "Jira", "Trello"],
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
      company: "Consultor Independente",
      period: "07/2024 - 2026",
      responsibilities: [
        "Atuação como consultor independente, entregando mais de 15 projetos web sob demanda para clientes de diferentes segmentos.",
        "Entrega de sites institucionais, landing pages, sites de eventos e portfólios com foco em performance, SEO e identidade visual — incluindo projetos contemplados por editais da Lei Aldir Blanc.",
        "Consultoria técnica para empresas dos setores de cartão de crédito e saúde: levantamento de requisitos, arquitetura de soluções e desenvolvimento de sistemas internos.",
      ],
      skills: ["Next.js", "React", "JavaScript", "TypeScript", "Node.js", "PostgreSQL", "PHP", "Laravel", "WordPress"],
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "Agile Ecommerce Startup",
      period: "01/2019 - 06/2019 | 01/2024 - 06/2024",
      responsibilities: [
        "Desenvolvimento de plataforma SaaS B2B para sincronização de vendas online com ERPs corporativos de indústrias e distribuidores — automatizando pedidos, controle de estoque e faturamento em tempo real para dezenas de clientes B2B.",
        "Arquitetura e implementação de APIs RESTful para integração com múltiplos ERPs e marketplaces, reduzindo em mais de 80% o tempo de processamento de pedidos antes feito de forma manual.",
        "MVP aprovado no programa de aceleração de startups do Grupo Ser Educacional, validando a proposta de valor junto ao mercado.",
      ],
      skills: ["Laravel", "Laravel Lumen", "REST API", "PHP", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    },
    {
      title: "Analista Front-end Sênior",
      company: "Accenture (SKY | DirectvGo)",
      period: "08/2019 - 03/2023",
      responsibilities: [
        "Na SKY Brasil, atuei como desenvolvedor front-end sênior no e-commerce da marca por mais de 3 anos: construção de Design System componente a componente, desenvolvimento de landing pages de alta conversão, testes A/B e otimização contínua de performance.",
        "Na DirecTV SKY Latam, integrei o time do portal de streaming e do aplicativo mobile (React Native), implementando novas funcionalidades e melhorias de UX em produto com mais de 5 milhões de usuários ativos.",
      ],
      skills: ["React", "React Native", "HTML5", "CSS3", "SASS", "Bootstrap", "JavaScript", "Node.js", "Liferay CMS", "Oracle Cloud Commerce"],
    },
    {
      title: "Desenvolvedor PHP",
      company: "Idealizza",
      period: "03/2018 - 01/2019",
      responsibilities: [
        "Desenvolvimento e manutenção de plataformas EAD com mais de 10.000 alunos ativos, voltadas à preparação para concursos públicos de alto volume (OAB, Bombeiros, Enfermagem), com simulados online, controle de progresso e emissão de certificados.",
        "Desenvolvimento de ERP para gestão de empréstimos bancários: módulos de cadastro de clientes, análise de crédito, contratos e relatórios gerenciais.",
      ],
      skills: ["PHP", "Node.js", "Docker", "Laravel", "CakePHP", "HTML5", "CSS3", "JavaScript", "jQuery", "MySQL", "SQL Server"],
    },
    {
      title: "Desenvolvedor Web Full Stack",
      company: "Agências de Publicidade",
      period: "05/2013 - 03/2018",
      responsibilities: [
        "Desenvolvimento e customização de mais de 30 sites e lojas virtuais para clientes de múltiplos segmentos: turismo, fotografia, odontologia, neurologia, lavanderias e agências de viagem.",
        "Implementação de integrações com APIs de frete, gateways de pagamento (PagSeguro, Cielo, PayPal) e plataformas de e-mail marketing; configuração de temas, plugins e hooks em WordPress/WooCommerce.",
        "Participação em todo o ciclo dos projetos: levantamento de requisitos, desenvolvimento, deploy e manutenção em infraestrutura Linux com DNS e SSL via Cloudflare.",
      ],
      skills: ["PHP 7", "WordPress", "WooCommerce", "Laravel", "Node.js", "OpenCart", "HTML5", "CSS3/SASS", "JavaScript", "MySQL", "PostgreSQL", "SSH", "Cloudflare", "Linux"],
    },
    {
      title: "Desenvolvedor Web",
      company: "Corptech (Corporate Technologies)",
      period: "04/2011 - 04/2013",
      responsibilities: [
        "Desenvolvimento de funcionalidades para o WebSuite, uma aplicação web ERP integrada ao SAP/ABAP, utilizada por grandes empresas com centenas de usuários simultâneos para gestão de processos corporativos.",
        "Criação de dashboards analíticos, customização de gráficos dinâmicos e geração de relatórios gerenciais com JasperReports; diagnóstico e otimização de performance com redução significativa no tempo de resposta de queries críticas.",
      ],
      skills: ["Java", "J2EE", "JSP", "JSF", "MySQL", "PostgreSQL", "Hibernate", "Google Maps", "JasperReports"],
    },
  ],
};

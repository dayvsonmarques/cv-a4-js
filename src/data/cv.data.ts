import { CVData } from "@/types/cv.types";

export const cvData: CVData = {
  personalInfo: {
    name: "Dayvson Marques",
    title: "Desenvolvedor Full Stack | PHP, Laravel & React",
    contacts: [
      { icon: "location", text: "Recife – PE, Brasil" },
      { icon: "age", text: "37 anos" },
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
    "Desenvolvedor Full Stack com mais de 15 anos de experiência, atuando principalmente com PHP e Laravel no back-end e React no front-end. Graduado em Sistemas de Informação pela UniNabuco (2012), com vivência na construção, manutenção e análise de sistemas corporativos como ERPs e plataformas SaaS B2B, do levantamento de regras de negócio à entrega em produção.",
    "Aplica boas práticas de arquitetura (Design Patterns, SOLID, Clean Code), modela bancos de dados relacionais em MySQL e PostgreSQL e desenvolve APIs REST documentadas com Swagger/OpenAPI. Trabalha com autenticação e controle de acesso, filas e processamento assíncrono, cache com Redis e segurança (prevenção de SQL Injection e XSS).",
    "Escreve testes automatizados com PHPUnit e Jest, usa Git, CI/CD e Docker no dia a dia, administra servidores Linux/Ubuntu com Apache e atua em times ágeis (Scrum, Kanban). Usa o Claude Code como ferramenta de produtividade no desenvolvimento.",
  ],

  education: [
    {
      title: "Bacharelado em Sistemas de Informação",
      institution: "UniNabuco",
      period: "2008 - 2012",
      description: "TCC: Desenvolvimento de aplicações web com JavaServer Faces (JSF), abordando componentização e reuso de elementos de interface numa época em que esses conceitos ainda não eram amplamente difundidos no ecossistema web, antecipando práticas que se tornariam padrão com frameworks modernos.",
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
      description: "Capacitação sobre o uso do GitHub Copilot em desenvolvimento web com inteligência artificial, com foco na integração da ferramenta a fluxos de trabalho de desenvolvimento."
    },
  ],

  skillCategories: [
    {
      title: "Back-end & Arquitetura",
      skills: ["PHP 8+", "Laravel", "MVC", "Eloquent ORM", "Migrations", "Design Patterns", "SOLID", "Clean Code", "Composer"],
      badgeClass: "bg-gray-300 text-gray-900",
    },
    {
      title: "Front-end",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Responsive Design"],
      badgeClass: "bg-gray-200 text-gray-800",
    },
    {
      title: "APIs & Integrações",
      skills: ["REST API", "Swagger/OpenAPI", "Webhooks", "JSON"],
      badgeClass: "bg-gray-600 text-white",
    },
    {
      title: "Banco de Dados",
      skills: ["MySQL", "PostgreSQL", "SQL Server", "Modelagem Relacional", "Foreign Keys", "Índices", "Stored Procedures"],
      badgeClass: "bg-gray-400 text-white",
    },
    {
      title: "Segurança",
      skills: ["Laravel Sanctum", "Laravel Passport", "Controle de Acesso", "Prevenção de SQL Injection", "Prevenção de XSS"],
      badgeClass: "bg-gray-700 text-white",
    },
    {
      title: "Performance & Mensageria",
      skills: ["Redis", "RabbitMQ", "SQS", "Filas e Processamento Assíncrono", "Otimização de Queries"],
      badgeClass: "bg-gray-500 text-white",
    },
    {
      title: "Infraestrutura & Versionamento",
      skills: ["Linux/Ubuntu", "Apache2", "Docker", "Git", "GitLab", "CI/CD"],
      badgeClass: "bg-gray-500 text-white",
    },
    {
      title: "Testes",
      skills: ["PHPUnit", "Jest", "TDD", "Testes Automatizados"],
      badgeClass: "bg-gray-800 text-white",
    },
    {
      title: "IA & Ferramentas",
      skills: ["Claude Code", "Cursor", "GitHub Copilot"],
      badgeClass: "bg-gray-900 text-white",
    },
    {
      title: "Metodologias & Gestão",
      skills: ["Scrum", "Kanban", "Code Review"],
      badgeClass: "bg-gray-200 text-gray-800",
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
      title: "Desenvolvedor Web Fullstack",
      company: "Profissional Autônomo",
      period: "07/2026 - Atualmente",
      responsibilities: [
        "Desenvolvimento de lojas online em formato SaaS e de sites com Next.js, com infraestrutura em VPS Linux na cloud e banco de dados PostgreSQL.",
        "Testes automatizados unitários e de integração com PHPUnit, CI/CD com Docker e pipelines automatizados. Modelagem de banco de dados (PostgreSQL/MySQL) e otimização de queries.",
        "Atuação independente, do levantamento de regras de negócio com o cliente à entrega em produção: análise de sistemas legados, definição da solução técnica e diagnóstico e correção de problemas, usando Claude Code (VS Code) para acelerar as entregas.",
      ],
      skills: ["Next.js", "E-commerce", "SaaS", "VPS Linux", "Cloud", "PostgreSQL", "PHP 8+", "Laravel", "Análise de Regras de Negócio", "PHPUnit", "Docker", "CI/CD"],
    },
    {
      title: "Desenvolvedor Laravel / Back-end",
      company: "Agile Ecommerce (Startup)",
      period: "07/2023 - 06/2026",
      responsibilities: [
        "Construção de plataforma SaaS B2B multi-tenant em Laravel (PHP 8): sincronização de pedidos com ERPs corporativos em tempo real para dezenas de clientes B2B, com Design Patterns, SOLID e Clean Code aplicados na solução.",
        "Desenvolvimento de APIs RESTful com Laravel Lumen, processamento assíncrono com filas (Laravel Horizon/SQS), Redis para cache e testes automatizados unitários e de integração com PHPUnit, reduzindo em mais de 80% o tempo de processamento manual de pedidos.",
        "Iniciativa na proposta de melhorias técnicas e no code review do time. MVP aprovado no programa de aceleração do Grupo Ser Educacional. CI/CD com GitLab, containerização com Docker e deploy em cloud.",
      ],
      skills: ["PHP 8+", "Laravel", "Laravel Lumen", "Laravel Horizon", "REST API", "Swagger/OpenAPI", "SOLID", "PHPUnit", "PostgreSQL", "MySQL", "Redis", "Docker", "Git"],
    },
    {
      title: "Desenvolvedor Full Stack Sênior",
      company: "Accenture (SKY | DirectvGo)",
      period: "08/2019 - 04/2023",
      responsibilities: [
        "Na SKY Brasil, atuei em produto de e-commerce de grande escala por mais de 3 anos: integração com APIs de back-end (Oracle Cloud Commerce e Oracle DB), construção de Design System, landing pages de alta conversão e testes A/B.",
        "Na DirecTV SKY Latam, integrei o time do portal de streaming com mais de 5 milhões de usuários ativos, implementando novas funcionalidades, melhorias de performance e integrações com APIs RESTful de conteúdo e autenticação.",
      ],
      skills: ["React", "React Native", "JavaScript", "Node.js", "REST API", "Oracle Cloud Commerce", "Oracle DB", "Liferay CMS", "HTML5", "CSS3", "SASS", "Bootstrap"],
    },
    {
      title: "Desenvolvedor PHP / Analista de Sistemas",
      company: "Idealizza",
      period: "03/2018 - 07/2019",
      responsibilities: [
        "ERP corporativo para gestão de empréstimos bancários em Laravel: módulos de cadastro de clientes, análise de crédito, contratos e relatórios gerenciais, em um sistema financeiro de alta criticidade com regras de negócio complexas, SQL Server, Stored Procedures, Functions e queries complexas otimizadas.",
        "Manutenção de plataformas EAD em Laravel com mais de 10.000 alunos ativos, com controle de usuários e permissões, testes automatizados (PHPUnit) e boas práticas de segurança (SQL Injection, XSS).",
      ],
      skills: ["PHP", "Laravel", "ERP", "Análise de Crédito", "Regras de Negócio", "PHPUnit", "MySQL", "SQL Server", "Stored Procedures", "SOLID", "Segurança"],
    },
    {
      title: "Desenvolvedor Web Full Stack",
      company: "Agências de Publicidade",
      period: "04/2015 - 03/2018",
      responsibilities: [
        "Desenvolvimento front-end (HTML5, CSS3, JavaScript) e back-end em PHP para diversos projetos web: e-commerces, portais corporativos e lojas virtuais para clientes de múltiplos segmentos (turismo, saúde, varejo, jurídico, concursos, festivais literários, portfólios e comércio de produtos e serviços).",
        "Integração com APIs de frete, gateways de pagamento (PagSeguro, Cielo, PayPal) e plataformas de e-mail marketing; modelagem e otimização de queries MySQL/PostgreSQL em sistemas de alta frequência.",
        "Gestão completa do ciclo de desenvolvimento: levantamento de requisitos, arquitetura, deploy e manutenção em infraestrutura Linux com DNS, SSL via Cloudflare e versionamento com Git.",
      ],
      skills: ["PHP 7", "Laravel", "MySQL", "PostgreSQL", "REST API", "WordPress", "WooCommerce", "OpenCart", "Node.js", "HTML5", "CSS3/SASS", "JavaScript", "Git", "Linux", "Cloudflare"],
    },
    {
      title: "Desenvolvedor / Analista de Sistemas",
      company: "Corptech (Corporate Technologies)",
      period: "04/2011 - 04/2015",
      responsibilities: [
        "Desenvolvimento de funcionalidades para o WebSuite, ERP web integrado ao SAP/ABAP, usado por grandes empresas com centenas de usuários simultâneos para gestão de processos corporativos, com regras de negócio complexas.",
        "Criação de dashboards analíticos com grandes volumes de informação, gráficos dinâmicos e relatórios gerenciais com JasperReports; diagnóstico e otimização de performance com redução significativa no tempo de resposta de queries críticas.",
      ],
      skills: ["Java", "J2EE", "JSP", "JSF", "ERP", "Dashboards", "Regras de Negócio", "MySQL", "PostgreSQL", "Hibernate", "JasperReports"],
    },
  ],
};

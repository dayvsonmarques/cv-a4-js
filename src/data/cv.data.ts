import { CVData } from "@/types/cv.types";

export const cvData: CVData = {
  personalInfo: {
    name: "Dayvson Marques",
    title: "Desenvolvedor PHP Sênior | Microservices & Cloud",
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
    "Desenvolvedor PHP Sênior com mais de 15 anos de experiência, graduado em Sistemas de Informação pela UniNabuco (2012). Trajetória completa em PHP — desde PHP 5/6 em sistemas legados até PHP 8+ com tipagem estrita — especializado na construção de plataformas de alta complexidade do zero: SaaS B2B, ERPs, APIs de larga escala e microsserviços com foco em escalabilidade, performance e soluções sustentáveis.",
    "Profundo domínio em Design Patterns, princípios SOLID e Clean Code aplicados em arquiteturas de microsserviços e sistemas distribuídos. Laravel avançado: Eloquent ORM, Horizon, Sanctum/Passport, service containers e Composer. SQL avançado (PostgreSQL, MySQL) e NoSQL (MongoDB, Redis) com modelagem e otimização de queries em ambientes de alto volume.",
    "Testes automatizados em todas as camadas: unitários e de integração com PHPUnit e Pest, com alta cobertura de código. CI/CD com GitLab, Azure DevOps e Docker. Infraestrutura cloud (AWS, GCP, Azure) e mensageria assíncrona (Kafka, RabbitMQ). Troubleshooting e resolução de incidentes em ambientes produtivos críticos.",
    "Perfil independente e orientado a resultados, com capacidade de atuar em times globais e remotos. Experiência com metodologias ágeis intermediárias (Scrum, Kanban) e code review — construindo soluções que equilibram inovação, robustez e manutenibilidade a longo prazo.",
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
      title: "Back-end",
      skills: [
        "PHP 8+",
        "PHP 7+",
        "PHP 5/6",
        "Laravel",
        "Laravel Lumen",
        "Laravel Horizon",
        "Laravel Sanctum",
        "Eloquent ORM",
        "REST API",
        "Microserviços",
        "Design Patterns",
        "SOLID",
        "Clean Code",
        "Clean Architecture",
        "Algoritmos e Estruturas de Dados",
        "Swagger/OpenAPI",
        "Composer",
        "Node.js",
      ],
      badgeClass: "bg-gray-300 text-gray-900",
    },
    {
      title: "Front-end",
      skills: [
        "React",
        "Vue.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "SASS/SCSS",
        "jQuery",
        "Bootstrap",
        "Tailwind CSS",
        "Responsive Design",
      ],
      badgeClass: "bg-gray-200 text-gray-800",
    },
    {
      title: "Banco de Dados",
      skills: ["MySQL", "PostgreSQL", "Oracle DB", "SQL Server", "MongoDB", "Redis", "Stored Procedures", "Functions", "PL/SQL"],
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
        "Git",
        "GitLab",
        "Azure DevOps",
        "Kafka",
        "RabbitMQ",
        "Apache",
        "Nginx",
        "SSH",
        "Cloudflare",
        "Jenkins",
      ],
      badgeClass: "bg-gray-500 text-white",
    },

    {
      title: "IA & Ferramentas",
      skills: [
        "Claude Code",
        "Cursor",
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
      skills: ["PHPUnit", "Pest", "Testes Unitários", "Testes de Integração", "Cobertura de Código", "Jest", "TDD"],
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
      title: "Desenvolvedor Laravel / Back-end",
      company: "Freelancer",
      period: "08/2025 - 2026",
      responsibilities: [
        "Desenvolvimento de sistemas do zero em PHP 8+/Laravel: APIs RESTful documentadas com Swagger/OpenAPI, microsserviços e integrações para clientes dos setores de cartão de crédito e saúde — com Design Patterns, Clean Architecture e princípios SOLID.",
        "Testes automatizados unitários e de integração com PHPUnit (alta cobertura de código), CI/CD com Docker e pipelines automatizados. Modelagem de banco de dados (PostgreSQL/MySQL) e otimização de queries críticas.",
        "Atuação independente e autônoma: levantamento de requisitos, decisões arquiteturais, troubleshooting em produção e evolução de sistemas legados PHP com documentação técnica.",
      ],
      skills: ["PHP 8+", "Laravel", "Microserviços", "Design Patterns", "Clean Architecture", "SOLID", "REST API", "Swagger/OpenAPI", "PHPUnit", "TDD", "PostgreSQL", "MySQL", "Docker", "CI/CD"],
    },
    {
      title: "Desenvolvedor Laravel / Back-end",
      company: "Agile Ecommerce (Startup)",
      period: "01/2024 - 07/2025",
      responsibilities: [
        "Construção do zero de plataforma SaaS B2B em Laravel (PHP 8) com arquitetura de microsserviços: sincronização de pedidos com ERPs corporativos em tempo real para dezenas de clientes B2B — Design Patterns, SOLID e Clean Code aplicados em solução escalável de alto volume.",
        "Desenvolvimento de APIs RESTful com Laravel Lumen, processamento assíncrono com filas (Laravel Horizon/SQS), Redis para cache e testes automatizados unitários e de integração com PHPUnit — reduzindo em mais de 80% o tempo de processamento manual de pedidos.",
        "MVP aprovado no programa de aceleração do Grupo Ser Educacional. CI/CD com GitLab, containerização com Docker e deploy em cloud.",
      ],
      skills: ["PHP 8+", "Laravel", "Laravel Lumen", "Laravel Horizon", "REST API", "Swagger/OpenAPI", "SOLID", "PHPUnit", "PostgreSQL", "MySQL", "Redis", "Docker", "Git"],
    },
    {
      title: "Desenvolvedor Full Stack Sênior",
      company: "Accenture (SKY | DirectvGo)",
      period: "08/2019 - 03/2023",
      responsibilities: [
        "Na SKY Brasil, atuei em produto de e-commerce de grande escala por mais de 3 anos: integração com APIs de back-end (Oracle Cloud Commerce e Oracle DB), construção de Design System, landing pages de alta conversão e testes A/B.",
        "Na DirecTV SKY Latam, integrei o time do portal de streaming com mais de 5 milhões de usuários ativos — implementando novas funcionalidades, melhorias de performance e integrações com APIs RESTful de conteúdo e autenticação.",
      ],
      skills: ["React", "React Native", "JavaScript", "Node.js", "REST API", "Oracle Cloud Commerce", "Oracle DB", "Liferay CMS", "HTML5", "CSS3", "SASS", "Bootstrap"],
    },
    {
      title: "Desenvolvedor PHP / Laravel",
      company: "Idealizza",
      period: "03/2018 - 01/2019",
      responsibilities: [
        "Desenvolvimento e manutenção de plataformas EAD com mais de 10.000 alunos ativos em Laravel/CakePHP: simulados online, controle de progresso e emissão de certificados para concursos de alto volume (OAB, Bombeiros, Enfermagem) — com testes automatizados via PHPUnit e boas práticas de segurança (SQL Injection, XSS).",
        "Desenvolvimento de ERP corporativo para gestão de empréstimos bancários em Laravel: módulos de cadastro de clientes, análise de crédito, contratos e relatórios gerenciais — sistema financeiro de alta criticidade com SQL Server, Stored Procedures, Functions e queries complexas otimizadas.",
      ],
      skills: ["PHP", "Laravel", "CakePHP", "PHPUnit", "MySQL", "SQL Server", "Stored Procedures", "PostgreSQL", "SOLID", "Clean Code", "Docker", "Node.js", "JavaScript", "jQuery"],
    },
    {
      title: "Desenvolvedor PHP / Back-end",
      company: "Agências de Publicidade",
      period: "05/2013 - 03/2018",
      responsibilities: [
        "Desenvolvimento back-end em PHP para mais de 30 projetos web: e-commerces, portais corporativos e lojas virtuais para clientes de múltiplos segmentos (turismo, saúde, varejo).",
        "Integração com APIs de frete, gateways de pagamento (PagSeguro, Cielo, PayPal) e plataformas de e-mail marketing; modelagem e otimização de queries MySQL/PostgreSQL em sistemas de alta frequência.",
        "Gestão completa do ciclo de desenvolvimento: levantamento de requisitos, arquitetura, deploy e manutenção em infraestrutura Linux com DNS, SSL via Cloudflare e versionamento com Git.",
      ],
      skills: ["PHP 7", "Laravel", "MySQL", "PostgreSQL", "REST API", "WordPress", "WooCommerce", "OpenCart", "Node.js", "HTML5", "CSS3/SASS", "JavaScript", "Git", "Linux", "Cloudflare"],
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

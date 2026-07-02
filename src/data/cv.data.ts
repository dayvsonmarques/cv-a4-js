import { CVData } from "@/types/cv.types";

export const cvData: CVData = {
  personalInfo: {
    name: "Dayvson Marques",
    title: "Desenvolvedor PHP Pleno | Laravel & Back-end",
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
    "Desenvolvedor PHP Pleno back-end com mais de 15 anos de experiência, graduado em Sistemas de Informação pela UniNabuco (2012). Trajetória completa em PHP — desde PHP 5/6 em sistemas legados, PHP 7+ em projetos de alta demanda, até PHP 8+ com tipagem estrita — especializado na construção de APIs RESTful, ERPs, plataformas SaaS B2B e sistemas corporativos de alta complexidade.",
    "Profundo domínio em Laravel: filas e workers com Laravel Horizon, autenticação com Sanctum/Passport, Eloquent ORM e service containers. Experiência consolidada em PostgreSQL e MySQL com SQL avançado (joins complexos, subqueries, otimização de performance), documentação de APIs com Swagger/OpenAPI e gerenciamento de dependências com Composer.",
    "Boas práticas de segurança em todas as camadas: proteção contra SQL Injection, XSS, validação rigorosa de entrada de dados e testes automatizados com PHPUnit e Pest. Infraestrutura com Docker, Linux, Apache/Nginx, CI/CD, GitLab e Azure DevOps. Experiência com mensageria assíncrona (Kafka, RabbitMQ) e troubleshooting em ambientes produtivos — análise de logs, resolução de incidentes e documentação técnica de fluxos críticos.",
    "Integro IA em todo o ciclo de desenvolvimento — do refinamento técnico a testes, documentação e deploy — acelerando entregas sem abrir mão de qualidade e padronização. Vivência em times ágeis (Scrum, Kanban, Jira) com participação ativa em code review e proposição de melhorias técnicas.",
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
        "Laravel Passport",
        "Eloquent ORM",
        "REST API",
        "RESTful",
        "Swagger/OpenAPI",
        "SOLID",
        "Clean Code",
        "MVC",
        "Composer",
        "Doctrine ORM",
        "Node.js",
        "WordPress",
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
      title: "Desenvolvedor Laravel / Back-end",
      company: "Freelancer",
      period: "08/2025 - 2026",
      responsibilities: [
        "Atuação como consultor independente com foco em back-end PHP 8+/Laravel: desenvolvimento de APIs RESTful documentadas com Swagger/OpenAPI, sistemas internos e integrações para clientes dos setores de cartão de crédito e saúde.",
        "Arquitetura orientada a Clean Code e princípios SOLID: filas com Laravel Horizon, autenticação via Sanctum, separação em camadas (MVC) e implementação de práticas de segurança (proteção contra SQL Injection, XSS e validação de entrada).",
        "Consultoria técnica: levantamento de requisitos, modelagem de banco de dados (PostgreSQL/MySQL), otimização de queries críticas, troubleshooting e resolução de incidentes em produção, e evolução de sistemas legados PHP com documentação técnica dos fluxos críticos.",
      ],
      skills: ["PHP 8+", "Laravel", "Laravel Horizon", "REST API", "Swagger/OpenAPI", "SOLID", "Clean Code", "PostgreSQL", "MySQL", "Docker", "Azure DevOps", "Next.js", "React", "TypeScript"],
    },
    {
      title: "Desenvolvedor Laravel / Back-end",
      company: "Agile Ecommerce (Startup)",
      period: "01/2024 - 07/2025",
      responsibilities: [
        "Desenvolvimento de plataforma SaaS B2B em Laravel (PHP 8) para sincronização de vendas online com ERPs corporativos — automatizando pedidos, controle de estoque e faturamento em tempo real para dezenas de clientes B2B, seguindo Clean Code e princípios SOLID.",
        "Arquitetura e implementação de APIs RESTful com Laravel Lumen, documentadas via Swagger/OpenAPI, para integração com múltiplos ERPs e marketplaces — reduzindo em mais de 80% o tempo de processamento de pedidos.",
        "Implementação de filas com Laravel Horizon para processamento assíncrono de alto volume e testes automatizados com PHPUnit; MVP aprovado no programa de aceleração do Grupo Ser Educacional.",
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

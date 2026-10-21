import { CVData } from "@/types/cv.types";

export const cvData: CVData = {
  personalInfo: {
    name: "Dayvson Marques",
    title: "Web Designer | WordPress & Landing Pages",
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
    "Web Designer e desenvolvedor com mais de 15 anos de experiência, atuando na criação de sites institucionais, landing pages e lojas online com WordPress. Trabalha com HTML, CSS e JavaScript para garantir responsividade em celulares, tablets e desktops.",
    "Desenvolveu dezenas de projetos web para clientes de múltiplos segmentos (turismo, artes, livraria, saúde, varejo, jurídico), com customizações visuais e funcionais específicas para cada site. Experiência com WooCommerce para e-commerce em WordPress.",
    "Participou da construção de Design System e landing pages de alta conversão em produto de e-commerce de grande escala (Accenture/SKY), com foco em performance e testes A/B. Usa Figma para protótipos e handoff de telas.",
    "Organização e autonomia para conduzir projetos do início ao fim, atenção aos detalhes e cumprimento de prazos. Disponível para trabalho 100% remoto.",
  ],

  education: [
    {
      title: "Bacharelado em Sistemas de Informação",
      institution: "UniNabuco",
      period: "2008 - 2012",
      description: "TCC: Desenvolvimento de aplicações web com JavaServer Faces (JSF), com foco em componentização e reuso de elementos de interface.",
    },
    {
      title: "Desenvolvimento Web com Java",
      institution: "Softex Recife",
      period: "2013",
      description: "Construção de um sistema web básico em Java (J2EE) integrado a banco de dados, para gerenciamento de dados (CRUD), aplicando na prática os conceitos abordados no curso."
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
      title: "Design & WordPress",
      skills: ["WordPress", "Elementor", "Divi", "Page Builder", "WooCommerce", "Figma", "UX/UI", "Landing Pages", "SEO Técnico"],
      badgeClass: "bg-gray-400 text-white",
    },
    {
      title: "Front-end",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Responsive Design"],
      badgeClass: "bg-gray-200 text-gray-800",
    },
    {
      title: "Back-end",
      skills: ["PHP 8+", "Laravel", "Node.js", "MySQL", "PostgreSQL"],
      badgeClass: "bg-gray-300 text-gray-900",
    },
    {
      title: "Ferramentas & Versionamento",
      skills: ["Git", "GitLab", "Docker", "CI/CD"],
      badgeClass: "bg-gray-500 text-white",
    },
    {
      title: "IA & Ferramentas",
      skills: ["Claude Code", "Codex", "Cursor", "GitHub Copilot"],
      badgeClass: "bg-gray-900 text-white",
    },
    {
      title: "Metodologias & Gestão",
      skills: ["Scrum", "Kanban", "Jira", "Trello"],
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
        "Na SKY Brasil, atuei em produto de e-commerce de grande escala por mais de 3 anos: construção de Design System, landing pages de alta conversão e testes A/B, com protótipos e handoff via Figma.",
        "Na DirecTV SKY Latam, integrei o time do portal de streaming com mais de 5 milhões de usuários ativos, implementando novas funcionalidades e melhorias de performance.",
      ],
      skills: ["Design System", "Figma", "Landing Pages", "Testes A/B", "React", "HTML5", "CSS3", "SASS", "Bootstrap"],
    },
    {
      title: "Desenvolvedor PHP / Analista de Sistemas",
      company: "Idealizza",
      period: "03/2018 - 07/2019",
      responsibilities: [
        "Manutenção de sistema de gestão de empréstimos consignados em Laravel, com análise de crédito e gestão completa do processo: cadastro de clientes, contratos e relatórios gerenciais, em um sistema financeiro de alta criticidade com regras de negócio complexas, SQL Server, Stored Procedures, Functions e queries complexas otimizadas.",
        "Manutenção de plataformas EAD em Laravel com mais de 10.000 alunos ativos, para treinamentos de concursos públicos e treinamentos internos corporativos, com controle de usuários e permissões, testes automatizados (PHPUnit) e boas práticas de segurança (SQL Injection, XSS).",
        "Manutenção de lojas online em diversos segmentos de clientes: turismo, artes, livraria, comércio e geek, com customizações específicas para cada loja.",
      ],
      skills: ["PHP", "Laravel", "ERP", "Empréstimos Consignados", "Análise de Crédito", "Regras de Negócio", "EAD", "E-commerce", "PHPUnit", "MySQL", "SQL Server", "Stored Procedures", "SOLID", "Segurança"],
    },
    {
      title: "Web Designer / Desenvolvedor Front-end",
      company: "Agências de Publicidade",
      period: "06/2015 - 03/2018",
      responsibilities: [
        "Desenvolvimento de sites institucionais, landing pages e lojas virtuais responsivas (HTML5, CSS3, JavaScript, WordPress/WooCommerce com Elementor, Divi e outros page builders) para clientes de múltiplos segmentos (turismo, saúde, varejo, jurídico, concursos, projetos de edital aprovados, portfólios e comércio de produtos e serviços).",
        "Integração com APIs de frete, gateways de pagamento (PagSeguro, Cielo, PayPal) e plataformas de e-mail marketing; modelagem e otimização de queries MySQL/PostgreSQL em sistemas de alta frequência.",
        "Gestão completa do ciclo de desenvolvimento: levantamento de requisitos, arquitetura, deploy e manutenção em infraestrutura Linux com DNS, SSL via Cloudflare e versionamento com Git.",
      ],
      skills: ["WordPress", "Elementor", "Divi", "WooCommerce", "OpenCart", "HTML5", "CSS3/SASS", "JavaScript", "PHP 7", "Laravel", "MySQL", "PostgreSQL", "REST API", "Git", "Linux", "Cloudflare"],
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

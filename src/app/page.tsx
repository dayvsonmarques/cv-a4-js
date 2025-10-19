'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="cv-container">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dayvson Marques
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Desenvolvedor Web Full Stack
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>dayvson.marques@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>(81) 99962-3374</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Recife – PE, Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌐</span>
              <span>dayvsonmarques.dev.br</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔗</span>
              <span>LinkedIn | GitHub</span>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Sobre
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Desenvolvedor web full stack com mais de 15 anos de experiência no desenvolvimento 
            de sites, lojas online e aplicações web, e-commerce (B2B/B2C), aplicações web para 
            gestão de dados, análise de marketing, e-learning, CRM e plataformas de streaming de vídeo. 
            Graduado em Sistemas de Informação (UniNabuco, 2012). Sólida vivência em engenharia de 
            software, atuando em todo o ciclo de desenvolvimento — da idealização e planejamento à 
            implementação e manutenção de aplicações web. Experiência em projetos voltados a e-commerce 
            (B2B/B2C), gestão de dados, análise de marketing, e-learning, CRM e plataformas de streaming 
            de vídeo. Atuando em diferentes contextos profissionais: fábricas de software, agências 
            digitais, estúdios criativos, startups e projetos freelance.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Experiência Profissional
          </h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Desenvolvedor Web Full Stack (Freelancer)</h3>
                  <p className="text-gray-600">Projetos Independentes</p>
                </div>
                <span className="text-sm text-gray-500">08/2024 - Atual</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Desenvolvimento e manutenção de sites e e-commerces responsivos</li>
                <li>Stack: Next.js, React, TypeScript, Node.js, PostgreSQL, WordPress</li>
                <li>Implementação de soluções com HTML5, CSS3 e JavaScript</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Desenvolvedor Full Stack</h3>
                  <p className="text-gray-600">Agile Ecommerce</p>
                </div>
                <span className="text-sm text-gray-500">01/2024 - 07/2024</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Desenvolvimento e manutenção de e-commerce B2B</li>
                <li>Stack: Laravel, PHP 7, HTML5, CSS3, JavaScript</li>
                <li>Implementação de funcionalidades para comércio eletrônico</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Analista Front-end Pleno</h3>
                  <p className="text-gray-600">Accenture</p>
                </div>
                <span className="text-sm text-gray-500">08/2019 - 03/2023</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Desenvolvimento de plataformas de e-commerce e streaming</li>
                <li>Stack: ReactJS, HTML5, CSS3/SASS, JavaScript, Oracle Cloud Commerce</li>
                <li>Utilização de Bootstrap e jQuery para interfaces responsivas</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Desenvolvedor PHP</h3>
                  <p className="text-gray-600">Idealizza</p>
                </div>
                <span className="text-sm text-gray-500">03/2018 - 01/2019</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Sistemas web EAD, e-commerces e gestão financeira</li>
                <li>Stack: PHP, Docker, CakePHP, HTML5, CSS3, JavaScript, jQuery</li>
                <li>Trabalho com bancos MySQL e SQL Server</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Desenvolvedor Web</h3>
                  <p className="text-gray-600">Corptech</p>
                </div>
                <span className="text-sm text-gray-500">04/2011 - 04/2013</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Desenvolvimento de ERP web integrado ao SAP</li>
                <li>Stack: Java (J2EE, JSP, JSF, Hibernate), MySQL, PostgreSQL</li>
                <li>Integração com Google Maps e Google Charts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Formação Acadêmica
          </h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Bacharelado em Sistemas de Informação</h3>
                  <p className="text-gray-600">UniNabuco</p>
                </div>
                <span className="text-sm text-gray-500">2008 - 2012</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Desenvolvimento Web com Java</h3>
                  <p className="text-gray-600">Softex Recife - 200h</p>
                </div>
                <span className="text-sm text-gray-500">2013</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Habilidades Técnicas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Front-end</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">HTML5</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">CSS3/SASS</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">JavaScript</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">TypeScript</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Vue</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Next.js</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Bootstrap</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Tailwind CSS</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Back-end</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">PHP 8</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Laravel</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">WordPress</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">WooCommerce</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">AdonisJS</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Prisma</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Banco de Dados</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">MySQL</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">PostgreSQL</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">SQL Server</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">NoSQL</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Infraestrutura & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">AWS</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Google Cloud</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Docker</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Linux</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">CI/CD</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Nginx</span>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Idiomas
          </h2>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Inglês</span>
              <span className="text-gray-600">Leitura Avançada / Conversação Básica</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Espanhol</span>
              <span className="text-gray-600">Leitura Intermediária / Conversação Básica</span>
            </div>
          </div>
        </section>

        {/* Print Button */}
        <div className="no-print mt-8 text-center">
          <button 
            onClick={() => window.print()}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            📄 Imprimir CV
          </button>
        </div>
      </div>
    </div>
  );
}

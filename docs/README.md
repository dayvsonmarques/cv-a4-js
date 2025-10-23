# CV25 - Currículo Profissional Next.js

Este é um projeto Next.js criado para desenvolver um currículo profissional responsivo com dimensões A4, otimizado para impressão e visualização digital.

## 🚀 Características

- **Framework**: Next.js 15 com App Router
- **Estilização**: Tailwind CSS
- **Typography**: Google Fonts (Inter)
- **Dimensões**: A4 (210mm x 297mm) 
- **Responsivo**: Adaptável para diferentes tamanhos de tela
- **Print-friendly**: Otimizado para impressão
- **TypeScript**: Tipagem estática para maior confiabilidade

## 🎯 Funcionalidades

- Layout profissional com seções organizadas
- Botão de impressão integrado
- Estilos específicos para impressão (@media print)
- Design responsivo para mobile e desktop
- Cores profissionais e tipografia hierárquica
- Estrutura semântica para acessibilidade

## 🛠️ Começando

### Pré-requisitos

- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### Executando o projeto

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css     # Estilos globais e configuração A4
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página do currículo
├── components/         # Componentes reutilizáveis (futuro)
└── data/              # Dados do currículo (futuro)
```

## 🎨 Personalização

### Dados do Currículo

Edite o arquivo `src/app/page.tsx` para personalizar:
- Informações pessoais
- Experiência profissional  
- Habilidades técnicas
- Formação acadêmica
- Idiomas

### Estilos

- **Cores**: Modifique as variáveis CSS em `globals.css`
- **Fontes**: Altere a configuração no `layout.tsx`
- **Layout**: Ajuste as classes Tailwind CSS no `page.tsx`

## 📄 Impressão

O currículo foi otimizado para impressão em papel A4:
- Clique no botão "Imprimir CV" na página
- Ou use Ctrl+P (Cmd+P no Mac)
- Configure a impressão para A4 sem margens adicionais

## 🚀 Deploy

### Vercel (Recomendado)

O projeto está otimizado para deploy na Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/cv25-next)

### Outras plataformas

- **Netlify**: `npm run build && npm run export`
- **GitHub Pages**: Configure GitHub Actions para build estático
- **Servidor próprio**: `npm run build && npm start`

## 📋 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Dayvson Marques**
- Website: [dayvsonmarques.dev.br](https://dayvsonmarques.dev.br)
- Email: dayvson.marques@gmail.com
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/dayvsonmarques)
- GitHub: [GitHub Profile](https://github.com/dayvsonmarques)

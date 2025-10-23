# CV Components

Estrutura organizada e componentizada do currículo seguindo boas práticas de desenvolvimento.

## 📁 Estrutura de Arquivos

```
src/
├── app/
│   └── page.tsx              # Página principal (orquestradora)
├── components/
│   └── cv/
│       ├── About.tsx         # Componente de seção "Sobre"
│       ├── CVPage.tsx        # Wrapper para páginas A4
│       ├── EducationList.tsx # Lista de formação acadêmica
│       ├── ExperienceList.tsx # Lista de experiências profissionais
│       ├── Header.tsx        # Cabeçalho com informações pessoais
│       ├── LanguagesList.tsx # Lista de idiomas
│       ├── Section.tsx       # Componente genérico de seção
│       ├── SkillsGrid.tsx    # Grade de habilidades técnicas
│       └── index.ts          # Barrel export
├── data/
│   └── cv.data.ts            # Dados do CV centralizados
└── types/
    └── cv.types.ts           # Tipos TypeScript

```

## 🎯 Boas Práticas Aplicadas

### 1. **Separação de Responsabilidades (SoC)**
- **Dados**: Centralizados em `cv.data.ts`
- **Tipos**: Definidos em `cv.types.ts`
- **Componentes**: Isolados e reutilizáveis em `components/cv/`
- **Página**: Apenas orquestra os componentes em `page.tsx`

### 2. **Componentização**
Cada seção do CV é um componente independente:
- `Header` - Informações pessoais e contatos
- `About` - Apresentação profissional
- `EducationList` - Formação acadêmica
- `SkillsGrid` - Habilidades técnicas organizadas
- `LanguagesList` - Idiomas
- `ExperienceList` - Experiências profissionais
- `Section` - Wrapper genérico reutilizável
- `CVPage` - Container para páginas A4

### 3. **TypeScript First**
- Tipos fortemente tipados para todas as interfaces
- Props tipadas em todos os componentes
- Type safety garantida em tempo de compilação

### 4. **Single Source of Truth**
- Todos os dados em `cv.data.ts`
- Fácil manutenção e atualização
- Sem duplicação de informações

### 5. **Props Drilling Evitado**
- Dados passados de forma organizada
- Componentes recebem apenas o necessário
- Desestruturação no nível da página principal

### 6. **DRY (Don't Repeat Yourself)**
- Componentes reutilizáveis (ex: `Section`)
- Lógica de renderização centralizada
- Barrel exports (`index.ts`) para importações limpas

### 7. **Clean Code**
- Nomenclaturas descritivas e consistentes
- Componentes pequenos e focados
- Fácil leitura e manutenção

## 🔄 Como Atualizar o CV

### Atualizar informações pessoais:
```typescript
// src/data/cv.data.ts
personalInfo: {
  name: 'Seu Nome',
  title: 'Seu Cargo',
  contacts: [...]
}
```

### Adicionar experiência:
```typescript
// src/data/cv.data.ts
experiences: [
  {
    title: 'Novo Cargo',
    company: 'Empresa',
    period: '01/2024 - Atual',
    responsibilities: ['...']
  },
  ...
]
```

### Adicionar habilidade:
```typescript
// src/data/cv.data.ts
skillCategories: [
  {
    title: 'Nova Categoria',
    skills: ['Skill 1', 'Skill 2'],
    badgeClass: 'bg-gray-200 text-gray-800'
  }
]
```

## 🧪 Benefícios da Refatoração

1. **Manutenibilidade**: Fácil localizar e modificar componentes
2. **Escalabilidade**: Adicionar novas seções sem afetar o existente
3. **Testabilidade**: Componentes isolados facilitam testes unitários
4. **Reutilização**: Componentes podem ser usados em outros projetos
5. **Legibilidade**: Código limpo e auto-documentado
6. **Type Safety**: Erros detectados em tempo de desenvolvimento

## 📦 Componentes Criados

| Componente | Responsabilidade | Props |
|------------|------------------|-------|
| `Header` | Exibe nome, cargo e contatos | `name`, `title`, `contacts` |
| `Section` | Wrapper genérico com título | `title`, `children`, `className?` |
| `About` | Renderiza parágrafos de apresentação | `paragraphs` |
| `EducationList` | Lista formação acadêmica | `items` |
| `SkillsGrid` | Grade de habilidades categorizadas | `categories` |
| `LanguagesList` | Lista idiomas e níveis | `languages` |
| `ExperienceList` | Lista experiências profissionais | `experiences` |
| `CVPage` | Wrapper para páginas A4 | `children` |

## 🎨 Padrões Utilizados

- **Container/Presentational Pattern**: Separação de lógica e apresentação
- **Composition Pattern**: Componentes compostos (`Section`, `CVPage`)
- **Props Interface Pattern**: Props tipadas e documentadas
- **Barrel Export Pattern**: Importações organizadas via `index.ts`

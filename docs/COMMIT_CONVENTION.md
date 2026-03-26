# Conventional Commits — Guia de Mensagens de Commit

## Formato padrão

```
<tipo>(<escopo>): <descrição curta>

[corpo opcional]

[rodapé opcional]
```

Regras essenciais:

Descrição em inglês (padrão do mercado) e no imperativo — "add" e não "added"
Máximo 72 caracteres na primeira linha
Sem ponto final na descrição
Escopo é opcional mas ajuda em projetos grandes
Uma alteração por commit — evite commits "faz tudo"

---

## Tipos

| Tipo | Descrição |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `refactor` | Refatoração sem mudança de comportamento |
| `style` | Formatação, espaçamento (sem alteração de lógica) |
| `docs` | Documentação |
| `test` | Testes |
| `chore` | Configuração, dependências, build |
| `perf` | Melhoria de performance |

---

## Escopos sugeridos (Next.js)

| Escopo | Uso |
|---|---|
| `pages` | Arquivos em `/pages` ou `/app` |
| `components` | Componentes reutilizáveis |
| `api` | Rotas de API (`/pages/api` ou route handlers) |
| `styles` | Estilos globais ou módulos CSS |
| `hooks` | Custom hooks |
| `lib` | Utilitários e helpers |
| `config` | Configurações (next.config, env, tsconfig) |
| `deps` | Dependências (package.json) |

---

## Exemplos práticos

```bash
feat(components): add reusable Button component with variants
fix(api): resolve CORS error on auth endpoint
refactor(hooks): extract useAuth logic to separate hook
style(components): apply Tailwind classes to Header layout
docs(readme): add environment variables setup guide
chore(deps): upgrade next to 14.2.0
perf(pages): add image lazy loading on home page
test(api): add unit tests for user route handler
```

---

## Regras essenciais

- ✅ Escreva em **inglês** no **imperativo** — *"add"*, não *"added"*
- ✅ Máximo de **72 caracteres** na primeira linha
- ✅ Sem ponto final na descrição
- ✅ Um propósito por commit
- ❌ Evite mensagens vagas
- ❌ Não adicione `Co-Authored-By` no rodapé dos commits

---

## Exemplos do que evitar

```bash
# ❌ Ruim
git commit -m "ajustes"
git commit -m "fix bug"
git commit -m "WIP"
git commit -m "alterações diversas"

# ✅ Bom
git commit -m "fix(auth): resolve redirect loop on protected routes"
git commit -m "feat(cart): add quantity selector with stock validation"
```

---

## Breaking Changes

Quando uma mudança quebra compatibilidade, adicione `!` após o tipo ou descreva no rodapé:

```bash
feat(api)!: change response structure for /users endpoint

BREAKING CHANGE: response now returns { data, meta } instead of array
```

---

## Referências

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Angular Commit Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)

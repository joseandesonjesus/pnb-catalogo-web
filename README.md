## Pernambucanas Catálogo Web

### Informações do projeto:

-   **Linguagem**:

    -   [Vue 3](https://vuejs.org/)
    -   Versão 3.2.47

-   **Framework**:

    -   [Nuxt 3](https://nuxt.com/)
    -   Versão 3.3.1

-   **Estilização**:

    -   [Uno CSS](https://uno.antfu.me/)
    -   Versão 0.50.5

-   **URL de acesso front-end**:

    -   Produção:
    -   Homologação:
    -   Desenvolvimento:

-   **URL de acesso back-end**:

    -   Produção:
    -   Homologação:
    -   Desenvolvimento:

-   **Versão do projeto**:
    -   Produção:
    -   Homologação:
    -   Desenvolvimento:

### IDE recomendada:

-   [Visual Studio Code](https://code.visualstudio.com/)

### Extensões recomendadas:

-   [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
-   [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
-   [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
-   [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
-   [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)
-   [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
-   [WindiCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)

### Comandos

```bash

# rodar o projeto localmente com a API de homologação
npm run dev

# rodar o projeto localmente com a API de produção
npm run prd

# realizar o deploy com a API de homologação para servidores estáticos
npm run generate-dev
npm run generate-qa
npm run generate-hml

# realizar o deploy com a API de produção para servidores estáticos
npm run generate-prd

# visualizar o que foi gerado para deploy em servidores estáticos localmente
npm run preview

# realizar o deploy com a API de homologação para servidores em node
npm run build-dev
npm run build-qa
npm run build-hml

# realizar o deploy com a API de produção para servidores em node
npm run build-prd

# visualizar o que foi gerador para deploy em servidores Node localmente
npm run start

# remove os arquivos padrões gerados pelo nuxt para deploy e caches, são eles: .nuxt, .output, node_modules/.vite, node_modules/.cache
npm run clean

# Tem haver com a geração dos types para o NUXT, não sei 100% o que faz
npm run postinstall

# Checa se o código está seguindo o prettier e corrige com base no .prettierc e corrige
npm run lint:prettier

# Checa o código em busca de erros com base no .eslintrc e corrige
npm run lint:fix

# Roda os comandos do eslint e prettier juntos
npm run lint
```

# 🧪 Cypress Test Automation Project

Bem-vindo ao repositório do meu projeto de automação de testes utilizando [Cypress](https://www.cypress.io/)! 🚀

## 📌 Sobre o Projeto

Este projeto foi criado para explorar e demonstrar boas práticas de automação de testes end-to-end (E2E) com Cypress. Os testes abrangem diversos cenários de UI e API, garantindo a qualidade e estabilidade da aplicação.

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework principal de testes
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem utilizada
- [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/) - Estrutura de assertions
- [ESLint](https://eslint.org/) - Padronização do código
- [GitHub Actions](https://github.com/features/actions) - CI/CD para execução automática dos testes

## 📂 Estrutura do Projeto

```sh
📦 automacao_cypress
├── 📂 cypress
│   ├── 📂 download      # Mock de dados
│   ├── 📂 e2e           # Testes automatizados
│       ├── 📂 api         # Testes de APIs (validação de endpoints, status, payloads etc.)
│       ├── 📂 cucumber    # Testes automatizados seguindo o método BDD com Cucumber + Gherkin
│       ├── 📂 front       # Testes de frontend usando Cypress com linguagem JavaScript
│   ├── 📂 fixtures      # Mock de dados
│   ├── 📂 mock          # Mock de serviços
│   ├── 📂 pages         # Mapeamento de elementos
│   ├── 📂 report        # Relatórios dos testes (criado somente na execução com relatórios)
│   ├── 📂 support       # Comandos customizados e configurações globais
├── 📜 .env              # Arquivo com dados sensíveis (precisa ser criado para execução local)
├── 📜 cypress.config.js # Configuração do Cypress
├── 📜 package.lock.json # Dependências do projeto
├── 📜 package.json      # Dependências do projeto
├── 📜 README.md         # Documentação do projeto
```

## 🚀 Como Executar os Testes

### 🔧 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

### 📥 Clonar o Repositório

```sh
git clone https://github.com/dieneslab/automacao_cypress.git
cd automacao_cypress
```

### 📦 Instalar Dependências

```sh
npm install
npm install express
npm install dotenv --save
npm install mochawesome --save-dev
npm install cypress-cucumber-preprocessor --save-dev
npm install @faker-js/faker --save-dev
npm install start-server-and-test --save-dev
```

### 📄 Criar Arquivo /.env

```sh
CYPRESS_EMAIL=example@example.com
CYPRESS_USER=teste
CYPRESS_PASSWORD=password_senha
```

### ⚡ Subir paralelamente mock-server da API (localhost:4567)

```sh
npm run mock-server
```

IMPORTANTE: Deixe rodando em um prompt paralelo quando for executar os testes de API localmente.

### ▶️ Executar Testes no Modo Interativo

```sh
npx cypress open
```

### 🤖 Executar Testes no Modo Headless

```sh
npx cypress run
```

## 📜 Executar Testes com Relatórios

Os relatórios são gerados automaticamente após a execução dos testes. Para visualizar:

```sh
npx cypress run --spec "cypress/e2e/api/*" --reporter mochawesome --reporter-options "reportDir=cypress/report/api,overwrite=true,html=true,json=true"
npx cypress run --spec "cypress/e2e/front/*" --reporter mochawesome --reporter-options "reportDir=cypress/report/front,overwrite=true,html=true,json=true"
npx cypress run --spec "cypress/e2e/cucumber/features/*" --reporter mochawesome --reporter-options "reportDir=cypress/report/cucumber,overwrite=true,html=true,json=true"
```

Os arquivos gerados ficam na pasta `cypress/reports`.

## 🛠 Execução Automática via GitHub Actions e Relatórios

A cada **push** ou **pull request**, os testes serão executados automaticamente. Para visualizar os resultados:
1. Acesse o repositório no GitHub.
2. Clique na aba **"Actions"**.
3. Selecione o workflow mais recente para ver os detalhes da execução.
4. Realize download dos relatórios na seção **"Artifacts"**

## 🔒 Arquivo .env e secrets no GitHub

A execução no GitHub pelo **"Actions"** é utilizado as variáveis secrets, garantindo a segurança de dados sensíveis do projeto.

IMPORTANTE: Para rodar localmente é necessário criar o arquivo **".env"**.

## 🤝 Contribuindo

Fique à vontade para abrir issues, sugerir melhorias ou enviar PRs. Qualquer contribuição é bem-vinda! 😊

## 📄 Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---

Desenvolvido por [Dienes Stein](https://github.com/dieneslab) 💻✨


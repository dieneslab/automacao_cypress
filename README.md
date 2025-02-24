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
│   ├── 📂 fixtures      # Mock de dados
│   ├── 📂 support       # Comandos customizados e configurações globais
├── 📜 .env              # Arquivo com dados sensíveis
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
git clone https://github.com/dienesgithub/automacao_cypress.git
cd automacao_cypress
```

### 📦 Instalar Dependências

```sh
npm install
npm install mochawesome --save-dev
npm install dotenv --save
```

### ▶️ Executar Testes no Modo Interativo

```sh
npx cypress open
```

### 🤖 Executar Testes no Modo Headless

```sh
npx cypress run
```

## 📊 Relatórios de Testes

Os relatórios são gerados automaticamente após a execução dos testes. Para visualizar:

```sh
npx cypress run --reporter mochawesome
```

Os arquivos gerados ficam na pasta `cypress/reports`.

## 🔒 Arquivo .env e secrets no GitHub

A execução no GitHub pelo Action é utilizado as variáveis secrets, garantindo a segurança de dados sensíveis do projeto.

Para rodar localmente é necessário, no arquivo .env, alterar para seus dados nos testes.

## 🤝 Contribuindo

Fique à vontade para abrir issues, sugerir melhorias ou enviar PRs. Qualquer contribuição é bem-vinda! 😊

## 📄 Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---

Desenvolvido por [Dienes Stein](https://github.com/dienesgithub) 💻✨


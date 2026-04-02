# 📱 Mobile Automation Testing - Native Demo App

Projeto de automação mobile desenvolvido com **WebdriverIO + Appium + Mocha**, utilizando **Page Object Model**, **data-driven tests com JSON**, execução em **BrowserStack** e pipeline automatizado com **GitHub Actions**.

---

## 🚀 Objetivo
Automatizar os principais fluxos do aplicativo **native-demo-app**, cobrindo:

- Login e cadastro
- Navegação entre telas
- Preenchimento de formulários
- Validação de mensagens de erro
- Execução data-driven
- Captura automática de screenshots em falhas
- Relatórios Allure
- Execução em cloud devices (BrowserStack)
- Integração CI/CD com GitHub Actions

---

## 🛠️ Stack utilizada

- **Linguagem:** JavaScript
- **Framework:** WebdriverIO
- **Automação Mobile:** Appium
- **Gerenciador de testes:** Mocha
- **Padrão:** Page Object Model (POM)
- **Relatórios:** Allure Report
- **Cloud Devices:** BrowserStack
- **CI/CD:** GitHub Actions
- **Versionamento:** Git + GitHub

---

## 📁 Estrutura do projeto

```text
appium-wdio-demo
│
├── tests
│   ├── pages
│   │   ├── home.page.js
│   │   ├── login.page.js
│   │   ├── signup.page.js
│   │   └── forms.page.js
│   │
│   ├── specs
│   │   ├── auth.e2e.js
│   │   ├── navigation.e2e.js
│   │   └── forms.e2e.js
│   │
│   ├── test-data
│   │   └── users.json
│   │
│   └── utils
│       └── data-reader.js
│
├── .github
│   └── workflows
│       └── mobile-tests.yml
│
├── wdio.conf.js
├── package.json
└── README.md
```

---

## 🧪 Cenários automatizados

### 🔐 Auth
- CT01 - Login com usuário válido
- CT02 - Login com e-mail inválido
- CT03 - Login com senha vazia
- CT04 - Cadastro com dados válidos
- CT05 - Cadastro com senhas diferentes

### 🧭 Navigation
- CT06 - Navegação para tela de login
- CT07 - Navegação para tela de forms
- CT08 - Navegação para tela de swipe

### 📝 Forms
- CT09 - Preenchimento de campo texto
- CT10 - Validação de modal / mensagem

---

## 📊 Data-Driven Tests
Os testes de autenticação utilizam massa de dados externa em JSON para execução parametrizada.

Arquivo:

```text
tests/test-data/users.json
```

Exemplo:

```json
{
  "validUsers": [
    {
      "email": "teste@qa.com",
      "password": "Test@1234"
    }
  ]
}
```

---

## 📸 Captura automática de evidências
Em caso de falha, screenshots são capturados automaticamente e anexados ao relatório Allure.

---

## 📈 Relatórios
O projeto gera relatórios detalhados com:

- resumo da execução
- testes executados
- logs
- screenshots
- stack trace
- tempo de execução

### Gerar relatório
```bash
allure generate ./allure-results --clean -o ./allure-report
allure open ./allure-report
```

---

## ☁️ Execução na BrowserStack
Os testes são executados em dispositivos reais na nuvem utilizando BrowserStack.

Variáveis utilizadas:

```text
BROWSERSTACK_USERNAME
BROWSERSTACK_ACCESS_KEY
BROWSERSTACK_APP_ID
```

---

## ⚙️ CI/CD - GitHub Actions
O pipeline executa automaticamente a cada push.

Fluxo:

- checkout
- instalação de dependências
- execução dos testes
- geração do Allure
- upload de artifacts

Arquivo:

```text
.github/workflows/mobile-tests.yml
```

---

## ▶️ Como executar localmente

```bash
npm install
npx wdio run wdio.conf.js
```

---

## 👩‍💻 Autora
**Karoline Lopes da Silva**  
QA Engineer | Test Automation | Web & API | Mobile QA

LinkedIn:  
https://www.linkedin.com/in/karoline-lopes-silva

---

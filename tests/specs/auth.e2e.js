const assert = require('assert');
const homePage = require('../pages/home.page');
const loginPage = require('../pages/login.page');
const signupPage = require('../pages/signup.page');
const { readJson } = require('../utils/data-reader');

const users = readJson('users.json');

describe('Auth - Native Demo App', () => {
  beforeEach(async () => {
    await browser.reloadSession();
    await homePage.openLogin();
  });

  it('CT01 - deve realizar login com usuário válido', async () => {
    const user = users.validUsers[0];

    await loginPage.login(user.email, user.password);

    const msg = await loginPage.getText(loginPage.successMessage);
    assert.strictEqual(msg, 'You are logged in!');
  });

  users.invalidLoginUsers.forEach((user, index) => {
    it(`CT0${index + 2} - deve validar login inválido com dataset ${index + 1}`, async () => {
      await loginPage.login(user.email, user.password);

      await loginPage.genericErrorText.waitForDisplayed({ timeout: 10000 });
      const msg = await loginPage.getText(loginPage.genericErrorText);

      assert.ok(msg.length > 0);
    });
  });

  it('CT04 - deve realizar cadastro com dados válidos', async () => {
    const user = users.validSignUpUsers[0];

    await signupPage.signUp(user.email, user.password, user.confirmPassword);

    await signupPage.successOrErrorMessage.waitForDisplayed({ timeout: 10000 });
    const msg = await signupPage.getText(signupPage.successOrErrorMessage);

    assert.ok(msg.length > 0);
  });

  it('CT05 - deve exibir erro ao cadastrar com senhas diferentes', async () => {
    const user = users.invalidSignUpUsers[0];

    await signupPage.signUp(user.email, user.password, user.confirmPassword);

    await signupPage.successOrErrorMessage.waitForDisplayed({ timeout: 10000 });
    const msg = await signupPage.getText(signupPage.successOrErrorMessage);

    assert.ok(msg.length > 0);
  });
});
const assert = require('assert');
const homePage = require('../pages/home.page');
const formsPage = require('../pages/forms.page');

describe('Forms - Native Demo App', () => {
  beforeEach(async () => {
    await browser.reloadSession();
    await homePage.openForms();
  });

  it('CT09 - deve preencher campo de texto e validar resultado', async () => {
    const text = 'Karoline QA Mobile';

    await formsPage.fillInput(text);

    const result = await formsPage.getText(formsPage.inputResult);

    assert.strictEqual(result, text);
  });

  it('CT10 - deve clicar no botão active e validar modal', async () => {
    await formsPage.clickActiveButton();

    await formsPage.modalMessage.waitForDisplayed({ timeout: 10000 });

    const message = await formsPage.getText(formsPage.modalMessage);

    assert.ok(message.length > 0);
  });
});
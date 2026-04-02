const assert = require('assert');
const homePage = require('../pages/home.page');

describe('Navigation - Native Demo App', () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  it('CT06 - deve navegar da home para a tela de login', async () => {
    await homePage.openLogin();
    const isDisplayed = await $('~button-login-container').isDisplayed();
    assert.strictEqual(isDisplayed, true);
  });

  it('CT07 - deve navegar da home para a tela de forms', async () => {
    await homePage.openForms();
    const isDisplayed = await $('~text-input').isDisplayed();
    assert.strictEqual(isDisplayed, true);
  });

  it('CT08 - deve navegar da home para a tela de swipe', async () => {
    await homePage.openSwipe();
    const isDisplayed = await $('~Swipe-screen').isDisplayed();
    assert.strictEqual(isDisplayed, true);
  });
});
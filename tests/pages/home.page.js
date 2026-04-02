const BasePage = require('./initial.page');

class HomePage extends BasePage {
  get loginMenuButton() {
    return $('~Login');
  }

  get formsMenuButton() {
    return $('~Forms');
  }

  get swipeMenuButton() {
    return $('~Swipe');
  }

  async openLogin() {
    await this.waitAndClick(this.loginMenuButton);
  }

  async openForms() {
    await this.waitAndClick(this.formsMenuButton);
  }

  async openSwipe() {
    await this.waitAndClick(this.swipeMenuButton);
  }
}

module.exports = new HomePage();
const BasePage = require('./initial.page');

class MenuPage extends BasePage {
  get homeTab() {
    return $('~Home');
  }

  get webviewTab() {
    return $('~Webview');
  }

  get loginTab() {
    return $('~Login');
  }

  get formsTab() {
    return $('~Forms');
  }

  get swipeTab() {
    return $('~Swipe');
  }

  get dragTab() {
    return $('~Drag');
  }

  async goToHome() {
    await this.waitAndClick(this.homeTab);
  }

  async goToWebview() {
    await this.waitAndClick(this.webviewTab);
  }

  async goToLogin() {
    await this.waitAndClick(this.loginTab);
  }

  async goToForms() {
    await this.waitAndClick(this.formsTab);
  }

  async goToSwipe() {
    await this.waitAndClick(this.swipeTab);
  }

  async goToDrag() {
    await this.waitAndClick(this.dragTab);
  }
}

module.exports = new MenuPage();
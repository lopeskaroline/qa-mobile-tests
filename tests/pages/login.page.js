const BasePage = require('./initial.page');

class LoginPage extends BasePage {
  get loginTab() {
    return $('~button-login-container');
  }

  get signUpTab() {
    return $('~button-sign-up-container');
  }

  get emailInput() {
    return $('~input-email');
  }

  get passwordInput() {
    return $('~input-password');
  }

  get loginButton() {
    return $('~button-LOGIN');
  }

  get successMessage() {
    return $('//*[@text="You are logged in!"]');
  }

  get genericErrorText() {
    return $('//*[contains(@text,"Please") or contains(@text,"valid") or contains(@text,"required")]');
  }

  async openLoginTab() {
    await this.waitAndClick(this.loginTab);
  }

  async openSignUpTab() {
    await this.waitAndClick(this.signUpTab);
  }

  async login(email, password) {
    await this.openLoginTab();
    await this.setValue(this.emailInput, email);
    await this.setValue(this.passwordInput, password);
    await this.waitAndClick(this.loginButton);
  }
}

module.exports = new LoginPage();
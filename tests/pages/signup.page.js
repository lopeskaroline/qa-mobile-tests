const BasePage = require('./initial.page');

class SignupPage extends BasePage {
  get signUpTab() {
    return $('~button-sign-up-container');
  }

  get emailInput() {
    return $('//*[@content-desc="input-email"]');
  }

  get passwordInput() {
    return $('//*[@content-desc="input-password"]');
  }

  get confirmPasswordInput() {
    return $('//*[@content-desc="input-repeat-password"]');
  }

  get signUpButton() {
    return $('~button-SIGN UP');
  }

  get successOrErrorMessage() {
    return $('//*[contains(@text,"Please") or contains(@text,"match") or contains(@text,"success") or contains(@text,"signed up")]');
  }

  async openSignUpTab() {
    await this.signUpTab.waitForDisplayed({ timeout: 10000 });
    await this.signUpTab.click();
    await this.emailInput.waitForDisplayed({ timeout: 15000 });
  }

  async signUp(email, password, confirmPassword = password) {
    await this.openSignUpTab();

    await this.setValue(this.emailInput, email);
    await this.setValue(this.passwordInput, password);
    await this.setValue(this.confirmPasswordInput, confirmPassword);

    await this.waitAndClick(this.signUpButton);
  }
}

module.exports = new SignupPage();
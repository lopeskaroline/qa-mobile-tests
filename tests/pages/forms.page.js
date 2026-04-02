const BasePage = require('./initial.page');

class FormsPage extends BasePage {
  get inputField() {
    return $('~text-input');
  }

  get inputResult() {
    return $('~input-text-result');
  }

  get switchButton() {
    return $('~switch');
  }

  get activeButton() {
    return $('~button-Active');
  }

  get modalMessage() {
    return $('//*[@resource-id="android:id/message"]');
  }

  async fillInput(text) {
    await this.setValue(this.inputField, text);
  }

  async clickActiveButton() {
    await this.waitAndClick(this.activeButton);
  }
}

module.exports = new FormsPage();
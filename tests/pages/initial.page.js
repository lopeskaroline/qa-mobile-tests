class BasePage {
  async waitAndClick(element) {
    await element.waitForDisplayed({ timeout: 20000 });
    await element.click();
  }

  async setValue(element, value) {
    await element.waitForDisplayed({ timeout: 20000 });
    await element.setValue(value);
  }

  async getText(element) {
    await element.waitForDisplayed({ timeout: 20000 });
    return element.getText();
  }

  async isDisplayed(element) {
    return element.isDisplayed();
  }
}

module.exports = BasePage;
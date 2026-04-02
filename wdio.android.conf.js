const { config } = require('./wdio.conf.js');

exports.config = {
  ...config,
  capabilities: [{
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:app': process.env.BROWSERSTACK_APP_ID_ANDROID,
  'bstack:options': {
    deviceName: 'Samsung Galaxy S22',
    platformVersion: '12.0',
    projectName: 'Mobile Automation',
    buildName: 'android-build',
    sessionName: 'Android tests'
  }
}]
};
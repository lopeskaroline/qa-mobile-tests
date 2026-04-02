const { config } = require('./wdio.conf.js');

exports.config = {
  ...config,
  capabilities: [{
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:app': process.env.BROWSERSTACK_APP_ID_IOS,
  'bstack:options': {
    deviceName: 'iPhone 15',
    platformVersion: '17',
    projectName: 'Mobile Automation',
    buildName: 'ios-build',
    sessionName: 'iOS tests'
  }
}]
};
exports.config = {
  runner: 'local',

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  specs: ['./tests/specs/**/*.js'],
  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:app': process.env.BROWSERSTACK_APP_ID,
    'bstack:options': {
      deviceName: 'Samsung Galaxy S22',
      platformVersion: '12.0',
      projectName: 'Appium WDIO Demo',
      buildName: 'build-1',
      sessionName: 'Mobile automation test'
    }
  }],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 20000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 3,

  framework: 'mocha',

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false
    }]
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 120000
  },

  services: [
    ['browserstack', {
      browserstackLocal: false
    }]
  ],

  afterTest: async function (test, context, { error, passed }) {
  if (!passed) {
    const screenshot = await browser.takeScreenshot();

    allure.addAttachment(
      `Falha - ${test.title}`,
      Buffer.from(screenshot, 'base64'),
      'image/png'
    );
  }
}
};
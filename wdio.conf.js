const beforeHook = require('./hooks/beforeHook');
const afterHook = require('./hooks/afterHook');


exports.config = {
  runner: 'local',

  specs: ['./test/specs/**/*.js'],

  suites: {
    20601: ['./20601/specs/**/*.js'],
    20602: ['./20602/specs/**/*.js'],
    20603: ['./20603/specs/**/*.js'],
    20605: ['./20605/specs/**/*.js'],
    20606: ['./20606/specs/**/*.js'],
    20607: ['./20607/specs/**/*.js'],
    20608: ['./20608/specs/**/*.js'],
    20609: ['./20609/specs/**/*.js'],
    20610: ['./20610/specs/**/*.js'],
    20611: ['./20611/specs/**/*.js'],
    qa6: ['./qa6/specs/**/*.js'],
  },

  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 1,

  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        excludeSwitches: ['enable-automation'],
      },
    },
  ],

  logLevel: 'silent',

  bail: 0,

  baseUrl: 'http://stage.localcoding.us',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ['chromedriver'],

  framework: 'mocha',

  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:@babel/register'],
    timeout: 60000,
  },
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {String} cid      capability id (e.g 0-0)
   * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {[type]} specs    specs to be run in the worker process
   * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
   * @param  {[type]} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // before: function (capabilities, specs) {
  // },
  before: beforeHook,
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  // beforeSuite: function (suite) {
  // },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) starts.
   */
  beforeTest: function () {
    const chai = require('chai');
    global.expect = chai.expect;
  },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: function (test, context) {
  // },
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function (test, context, { error, result, duration, passed, retries }) {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine).
   */
  afterTest: function (test, context, { error, result, duration, passed, retries }) {
    if (!passed) {
      browser.takeScreenshot();
    }
  },

  /**
   * Hook that gets executed after the suite has ended
   * @param {Object} suite suite details
   */
  // afterSuite: function (suite) {
  // },
  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  after: afterHook,
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  //onReload: function(oldSessionId, newSessionId) {
  //}
};

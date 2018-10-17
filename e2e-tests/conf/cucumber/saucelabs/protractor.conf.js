exports.config = {

    seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
    framework: 'custom',  // set to "custom" instead of cucumber.
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    specs: ['../../../features/*.feature'],

    // cucumber command line options
    cucumberOpts: {
        require: ['../../../steps/*.js'],   // require step definition files before executing features
        tags: [],                           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        strict: true,                       // <boolean> fail if there are any undefined or pending steps
        format: [
            'json:./e2e-tests/reports/summary.json'
        ],                             // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        dryRun: false,                 // <boolean> invoke formatters without executing steps
        compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },

    capabilities: {

        browserName: 'chrome',
        version: '67.0',
        platform: 'Windows 10',
        screenResolution: '1920x1080',
        username: 'emrhbkrts',
        accessKey: 'c6abb465-ac6f-419a-bd8d-813404d1e050',
        name: 'protractor-cucumber-saucelabs'
    },

    onPrepare: function () {

        //browser.driver.manage().window().setPosition(0, 0);
        browser.driver.manage().window().maximize();
        //browser.driver.manage().window().setSize(1920, 1080);
        browser.waitForAngularEnabled(false);

        chai = require('chai');
        chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        expect = chai.expect;

        loginPage = require('../../../pages/login.page.js');
        mainPage = require('../../../pages/main.page.js');
        profilePage = require('../../../pages/profile.page.js');
    },

    onComplete: function () {

        browser.getSession().then(function (session) {
            console.log('SauceOnDemandSessionID=' + session.getId());
        });
    }
};

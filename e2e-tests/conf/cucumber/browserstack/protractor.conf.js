//var browserstack = require('browserstack-local');

exports.config = {
    seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
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

        // Needed for testing localhost
        //'browserstack.local' : true,

        // Settings for the browser you want to test
        // (check docs for difference between `browser` and `browserName`
        'browserName': 'chrome',
        'browser_version' : '67.0',
        'os' : 'Windows',
        'os_version' : '10',
        'resolution' : '1920x1080',
        'browserstack.user' : 'emrahbakirtas1',
        'browserstack.key' : 'ziyq66JzYbpFyjDm7XxC',
        'build': 'protractor-browserstack',
        'name': 'serial'
    },
/*
    // Code to start browserstack local before start of test
    beforeLaunch: function(){
        console.log("Connecting local");
        return new Promise(function(resolve, reject){
            exports.bs_local = new browserstack.Local();
            exports.bs_local.start({'key': exports.config.capabilities['browserstack.key'] }, function(error) {
                if (error) return reject(error);
                console.log('Connected. Now testing...');

                resolve();
            });
        });
    },
*/
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
    }
/*
    // Code to stop browserstack local after end of test
    afterLaunch: function(){
        return new Promise(function(resolve, reject){
            exports.bs_local.stop(resolve);
        });
    }
*/
};

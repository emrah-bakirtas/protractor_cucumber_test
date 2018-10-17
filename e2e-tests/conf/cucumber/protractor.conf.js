exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',  // set to "custom" instead of cucumber.
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    specs: ['../../features/*.feature'],

    // cucumber command line options
    cucumberOpts: {
        require: ['../../steps/*.js'], // require step definition files before executing features
        tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        strict: true,                  // <boolean> fail if there are any undefined or pending steps
        format: [
            'json:./e2e-tests/reports/summary.json'
        ],                             // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        dryRun: false,                 // <boolean> invoke formatters without executing steps
        compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            removeOriginalJsonReportFile: true,
            reportPath: './e2e-tests/reports/protractor-multiple-cucumber-html-reporter',
            reportName: 'Criticker e2e-test Results',
            pageTitle: 'Criticker e2e-test Results',
            displayDuration: true
        }
    }],

    // Capabilities to be passed to the webdriver instance.
    capabilities: {

        browserName: 'chrome',

        metadata: {
            browser: {
                name: 'chrome',
                version: '67.0.3396.99'
            },
            device: 'Virtual Machine',
            platform: {
                name: 'windows',
                version: '10 Pro'
            }
        }
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
        fs = require('fs');

        loginPage = require('../../pages/login.page.js');
        mainPage = require('../../pages/main.page.js');
        profilePage = require('../../pages/profile.page.js');
        reactPage = require('../../pages/react.page.js');

        //Clean features directory
        var path = "./e2e-tests/reports/protractor-multiple-cucumber-html-reporter/features";

        if( fs.existsSync(path) ) {

            fs.readdirSync(path).forEach(function(file) {
                var curPath = path + "/" + file;
                console.log("deleted file : " + curPath);
                fs.unlinkSync(curPath);
            });
            fs.rmdirSync(path);
        }
    }
};

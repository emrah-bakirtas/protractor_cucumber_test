exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    specs: ['../../suites/*.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 50000, // Set default timeout.
        showColors: true // Use colors in the command line report.
    },


    // Capabilities to be passed to the webdriver instance.
    capabilities: {

        browserName: 'chrome'
    },

    onPrepare: function () {

        //browser.driver.manage().window().setPosition(0, 0);
        browser.driver.manage().window().maximize();
        //browser.driver.manage().window().setSize(1920, 1080);
        browser.waitForAngularEnabled(false);
    }
};

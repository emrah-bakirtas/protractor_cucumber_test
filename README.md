Technologies Covered in This Project
====================================

# Protractor
[Protractor](http://www.protractortest.org/#/) is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

#### Note
Not only Angular. Protractor gives extra advantages to test Angular apps but your app should not necessarily use it.

# Jasmine
[Jasmine](https://jasmine.github.io/) is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

# Cucumber.js
[Cucumber](https://cucumber.io/) is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team.

[Cucumber.js](https://github.com/cucumber/cucumber-js) is the JavaScript implementation of Cucumber and runs on both Node.js (4 and above) and modern web browsers.

# Grunt.js
[Grunt.js](https://gruntjs.com/) is basically a build / task manager written on top of NodeJS.

# BrowserStack
[BrowserStack](https://www.browserstack.com/) is a live, web-based browser testing tool. Instant access to all desktop and mobile browsers. 

# SauceLabs
[SauceLabs](https://saucelabs.com/) ensures your favorite mobile apps and websites work flawlessly on every browser, operating system, and device.

# Protractor Multiple Cucumber HTML Reporter Plugin
[Protractor Multiple Cucumber HTML Reporter Plugin](https://github.com/wswebcreation/protractor-multiple-cucumber-html-reporter-plugin) will connect Protractor, CucumberJS and protractor-cucumber-framework to generate unique JSON files per feature with only a few lines of code.

Building and Running the Project
=============================

## Prerequisites
There are a few things needed before you can work with Protractor. Make sure you have the latest versions of the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

#### Note
- Cucumber scenarios (in Gerkhin) are in e2e-tests/features/feature/update.feature. Config file of these are e2e-tests/conf/*cucumber*
- Jasmine scenarios are e2e-tests/suites/*suites*.js. Config file is e2e-tests/conf/protractor.jasmine.conf.js

#### Note
With the 3.x or greater versions of Protractor, Cucumber is no longer included by default so you will use the custom framework option.

## Setup
1. Clone the repo
2. Install dependencies with `npm install`

## Run tests
<b>For the first three steps</b>, you will need to start the Selenium Server first. Protractor includes a <b>webdriver-manager</b> tool that starts up your server. <b>In a separate terminal tab</b>, run the `webdriver-manager update` command. This downloads the necessary selenium server and chromedriver components. Then run `webdriver-manager start` to start up the server.

1. Run the tests which is developed using protractor and jasmine:
    - Use `npm run jasmine-test` to run
    
2. Run the tests which is developed using protractor and cucumber:
    - Use `npm run cucumber-test` to run
    
    #### Note for running cucumber tests
    After test execution, html report is generated inside `e2e-tests/reports/protractor-multiple-cucumber-html-reporter/index.html`. Open it with browser to see to report.
        
3. Run the tests, which is developed using protractor and cucumber, in parallel:
    - Use `cucumber-same-browser-parallel-test` to run with single browser and its multiple instances
    - Use `cucumber-different-browsers-parallel-test` to run with multiple browsers and their single instance
    - Use `cucumber-different-browsers-different-instances-parallel-test` to run with multiple browsers and their multiple instances

4. Run the tests, which is developed using protractor and cucumber, with grunt:
    
    If you want to run test without starting <b>webdriver-manager</b>, you should use grunt. Steps are as below:
    - Install grunt-cli `npm install -g grunt-cli`
    - Shutdown <b>webdriver-manager</b> if it is running.
    - Update `--proxy = %PROXY%` from `protractor_webdriver:start:command` and `shell:protracotr_install:command` to your own proxy in the Gruntfile.js. Or, add a system variable name is `PROXY` and set your own proxy value to this variable.
    - `%PROXY%` this usage for Windows OS. If you are using MacOS or Linux, you should change `%PROXY%` to `$PROXY`.
    - Use `grunt test` to run tests.
    
    #### Note for running cucumber tests with grunt
    This command will start <b>webdriver-manager</b> first, then run to tests, after that shutdown to <b>webdriver-manager</b>.
 
<b>For the following two steps</b>, Update `*.conf.js` files inside the `e2e-tests/conf/cucumber/browserstack/` directory with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings)    

5. Run the tests, which is developed using protractor and cucumber, on BrowserStack:
    - Use `npm run browsertack-test` to run
    
6. Run the tests, which is developed using protractor and cucumber, in parallel on BrowserStack:
    - Use `browserstack-same-browser-parallel-test` to run with single browser and its multiple instances
    - Use `browserstack-different-browsers-parallel-test` to run with multiple browsers and their single instance
    - Use `browserstack-different-browsers-different-instances-parallel-test` to run with multiple browsers and their multiple instances

    #### Notes for running tests on BrowserStack
    - You can view your test results on the [BrowserStack automate dashboard](https://www.browserstack.com/automate)

    - To test on a different set of browsers, check out [BrowserStack's platform configurator](https://www.browserstack.com/automate/protractor)

<b>For the following two steps</b>, Update `*.conf.js` files inside the `e2e-tests/conf/cucumber/saucelabs/` directory with your SauceLabs Username and Access Key

7. Run the tests, which is developed using protractor and cucumber, on SauceLabs:
    - Use `npm run saucelabs-test` to run
    
8. Run the tests, which is developed using protractor and cucumber, in parallel on SauceLabs: 
    - Use `saucelabs-same-browser-parallel-test` to run with single browser and its multiple instances
    - Use `saucelabs-different-browsers-parallel-test` to run with multiple browsers and their single instance
    - Use `saucelabs-different-browsers-different-instances-parallel-test` to run with multiple browsers and their multiple instances
    
    #### Running tests on SauceLabs locally
    If you want to run your test behind corporate firewall then follow the steps as below:

    - <b>In a separate terminal tab</b>, run `sc.exe -u <saucelabs usernam> -k <saucelabs key>` command to start [Sauce Connect](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy) (Note: sc.exe inside the `sc-4.4.12.win32/bin/` directory)
    - Update `seleniumAddress` field to `http://localhost:4445/wd/hub` inside the `e2e-tests/conf/cucumber/saucelabs/protractor.conf.js` file
    - Use `npm run saucelabs-test` to run

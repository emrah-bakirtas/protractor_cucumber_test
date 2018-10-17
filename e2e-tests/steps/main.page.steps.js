var {Given, When, Then} = require('cucumber');

Given(/^I go to "([^"]*)"$/, function (url) {
    return browser.get(url);
});

Then(/^I click login link$/, function () {
    return mainPage.clickOnLoginLink();
});

When(/^I click username link$/, function () {
    return mainPage.clickOnUserNameLink();
});
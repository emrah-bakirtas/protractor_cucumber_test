var {Then} = require('cucumber');

Then(/^I login with username as "([^"]*)" and password as "([^"]*)"$/, function (userName, password) {
    return loginPage.login(userName, password);
});

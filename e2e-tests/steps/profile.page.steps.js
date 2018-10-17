var {Then} = require('cucumber');

Then(/^I should see username as "([^"]*)" on the profile page$/, function (userName, next) {
    expect(profilePage.getUserName()).to.eventually.equal(userName).and.notify(next);
});

Then(/^I click update personal information link$/, function () {
    return profilePage.clickOnUpdatePersonalInfoLink();
});

Then(/^I enter name as "([^"]*)" and surname as "([^"]*)" and email as "([^"]*)" and city as "([^"]*)"$/, function (name, surname, email, city) {
    return profilePage.updatePersonalInfo(name, surname, email, city);
});

Then(/^I click update password link$/, function () {
    return profilePage.clickOnUpdatePasswordLink();
});

Then(/^I enter oldPassword as "([^"]*)" and newPassword as "([^"]*)"$/, function (oldPassword, newPassword) {
    return profilePage.updatePassword(oldPassword, newPassword);
});
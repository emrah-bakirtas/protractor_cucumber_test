var mainPage = require('../pages/main.page.js');
var loginPage = require('../pages/login.page.js');
var profilePage = require('../pages/profile.page.js');

describe('Update Test', function() {

    describe('Update Personal Information', function () {

        it('I navigate to the app', function () {

            browser.get('https://criticker.com');
        });

        it('I click login link', function() {

            mainPage.clickOnLoginLink();
        });

        it('I login with username as "test-user" and password as "TA12345"', function() {

            loginPage.login("test-user", "TA12345");
        });

        it('I click username link', function() {

            mainPage.clickOnUserNameLink();
        });

        it('I should see username as "test-user" on the profile page', function() {

            profilePage.getUserName("test-user");
        });

        it('I click update personal information link', function() {

            profilePage.clickOnUpdatePersonalInfoLink();
        });

        it('I enter name as "Test" and surname as "Automation" and email as "emrahbakirtas@yahoo.com" and city as "Istanbul"', function() {

            profilePage.updatePersonalInfo("Test", "Automation", "emrahbakirtas@yahoo.com", "Istanbul");
        });

        it('I log out', function() {

            mainPage.signOut();
        });
    });

    describe('Update Password', function () {

        it('I navigate to the app', function () {

            browser.get('https://criticker.com');
        });

        it('I click login link', function() {

            mainPage.clickOnLoginLink();
        });

        it('I login with username as "test-user" and password as "TA12345"', function() {

            loginPage.login("test-user", "TA12345");
        });

        it('I click username link', function() {

            mainPage.clickOnUserNameLink();
        });

        it('I should see username as "test-user" on the profile page', function() {

            profilePage.getUserName("test-user");
        });

        it('I click update password link', function() {

            profilePage.clickOnUpdatePasswordLink();
        });

        it('I enter oldPassword as "TA12345" and newPassword as "TA12345"', function() {

            profilePage.updatePassword("TA12345", "TA12345");
        });

        it('I log out', function() {

            mainPage.signOut();
        });
    });

});
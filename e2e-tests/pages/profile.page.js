var baseFunctions = require('../base/base.functions.js');

var ProfilePage = function () {

    this.elementOfUserNameLink = element(by.css('#up_username'));
    this.elementOfUpdatePersonalInfoLink = element(by.css('#up_infoupdatelink a[href=\'#\']'));
    this.elementOfPasswordLink = element(by.css('#up_pswdupdatelink a'));
    this.elementOfNameField = element(by.css('#up_input_fname'));
    this.elementOfSurnameField = element(by.css('#up_input_lname'));
    this.elementOfEmailField = element(by.css('#up_input_email'));
    this.elementOfCityField = element(by.css('#up_input_city'));
    this.elementOfUpdateSubmitButton = element(by.css('#up_infoupdate_div .btn.btn-default'));
    this.elementOfOldPasswordField = element(by.css('#up_oldpswd'));
    this.elementOfNewPasswordField = element(by.css('#up_pswd1'));
    this.elementOfReNewPasswordField = element(by.css('#up_pswd2'));
    this.elementOfUpdatePasswordSubmitButton = element(by.css('#up_pswdupdate_div .btn.btn-default'));

    this.getUserName = function () {

        return this.elementOfUserNameLink.getText();
    };

    this.clickOnUpdatePersonalInfoLink = function () {
        this.elementOfUpdatePersonalInfoLink.click();
    };

    this.updatePersonalInfo = function (name, surname, email, city) {

        baseFunctions.waitUntilElementVisible(this.elementOfNameField);
        this.elementOfNameField.clear();
        this.elementOfNameField.sendKeys(name);
        this.elementOfSurnameField.clear();
        this.elementOfSurnameField.sendKeys(surname);
        this.elementOfEmailField.clear();
        this.elementOfEmailField.sendKeys(email);
        this.elementOfCityField.clear();
        this.elementOfCityField.sendKeys(city);
        this.elementOfUpdateSubmitButton.click();
    };

    this.clickOnUpdatePasswordLink = function () {

        this.elementOfPasswordLink.click();
    };

    this.updatePassword = function (oldPassword, newPassword) {
        baseFunctions.waitUntilElementVisible(this.elementOfOldPasswordField);
        this.elementOfOldPasswordField.sendKeys(oldPassword);
        this.elementOfNewPasswordField.sendKeys(newPassword);
        this.elementOfReNewPasswordField.sendKeys(newPassword);
        this.elementOfUpdatePasswordSubmitButton.click();
    }
};

module.exports = new ProfilePage();




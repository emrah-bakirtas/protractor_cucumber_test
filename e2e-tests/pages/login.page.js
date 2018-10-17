var LoginPage = function () {

    this.elementOfUserNameField = element(by.css('#si_username'));
    this.elementOfPasswordField = element(by.css('#si_password'));
    this.elementOfGoButton = element(by.css('.btn.btn-primary'));

    this.login = function (userName, password) {

        this.elementOfUserNameField.sendKeys(userName);
        this.elementOfPasswordField.sendKeys(password);
        this.elementOfGoButton.click();
    };
};

module.exports = new LoginPage();
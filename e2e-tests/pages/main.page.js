var MainPage = function () {

    this.elementOfLoginLink = element(by.css('#i_signin_link'));
    this.elementOfUserNameLink = element(by.css('#i_loginleft #i_username_link'));
    this.elementOfSignOutLink = element(by.css('#i_signout_link'));

    this.clickOnLoginLink = function () {
        return this.elementOfLoginLink.click();
    };

    this.clickOnUserNameLink = function () {
        return this.elementOfUserNameLink.click();
    };

    this.signOut = function () {
        return this.elementOfSignOutLink.click();
    };
};

module.exports = new MainPage();
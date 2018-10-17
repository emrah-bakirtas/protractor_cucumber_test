var BaseFunctions = function () {

    // Waits for the element to be visible on the dom.
    this.waitUntilElementVisible = function (element) {

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element), 5000);
    }
}

module.exports = new BaseFunctions();




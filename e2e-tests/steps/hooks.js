var {Before, After, Status} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');

Before(function() {
    setDefaultTimeout(60 * 1000);
});

After(function (scenario) {

    var world = this;
    if (scenario.result.status === Status.FAILED) {

        browser.takeScreenshot().then(function(screenShot) {
            world.attach(screenShot, 'image/png');
        });
    }

    return mainPage.signOut();
});
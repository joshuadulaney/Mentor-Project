module.exports = {
    'Demo test Google' : function (browser) {
      browser
        .url('https://www.google.com')
        .waitForElementVisible('body')
        .setValue('input[type=text]', 'nightwatch')
        .pause(2000)
        .click('input[name=btnK]')
        .pause(10000)
        .assert.containsText('#main', 'Night Watch')
        .end();
    }
  };
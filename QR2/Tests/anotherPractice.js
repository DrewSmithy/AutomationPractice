module.exports = {
    beforeEach: (browser) => {
      browser.url("https://devmountain-qa.github.io/weatherman/build/index.html");
    },
    after: (browser) => {
      browser.end();
    },
    Test: async (browser) => {
      browser.setValue(".enter-location__input", "Sacramento\n");
      browser.waitForElementVisible(".current-weather__location");
      //browser.getText returns a promised object with a value if you don't have a callback. That's not documented though, so I'll write it up both ways.
      const text = (await browser.getText(".current-weather__location")).value;
      browser.assert.ok(
        text == "Sacramento",
        `Text found (${text}) equals the text expected.`
      );
      browser.getText(".current-weather__location", (result) => {
        browser.assert.ok(
          text == result.value,
          `The text found both ways matches, text (${text}) and results (${result.value})`
        );
      });
    },
  };
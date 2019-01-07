const SELECTORS = require("./selectors");

const scrap = async page => {
  // Set Functions and Variables
  await page.evaluate(SELECTORS => {
    window.SELECTORS = SELECTORS;
    window.isInPage = e => e === document.body ? false : document.body.contains(e)
    window.endCondition = () => {
      const e = document.querySelector(SELECTORS.fifthTwit);
      return (isInPage(e) && (!(e.hasChildNodes()))) ? true : false
    };
  }, SELECTORS);

  // Scroll and Scrap
  await page.evaluate(() => {
    const x = 0;
    const y = 3 * 1000;
    const wait = 0.5 * 1000;
    const timer = setInterval(() => {
      // While there is Try Again Button, click on it
      const tryAgainButton = document.querySelector(SELECTORS.tryAgainButton);
      while (isInPage(tryAgainButton)) tryAgainButton.click();
      // Scrap

      // Scroll
      window.scrollBy(x, y);
      // Break if endCondition
      if (endCondition()) {
        console.log("THIS IS THE END")
        return clearInterval(timer);
      }
    }, wait);
  });
};

module.exports = scrap;

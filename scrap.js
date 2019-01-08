const SELECTORS = require("./selectors");

const scrap = async page => {
  // Set Functions and Variables
  await page.evaluate(SELECTORS => {
    window.SELECTORS = SELECTORS;
    window.isInPage = e =>
      e === document.body ? false : document.body.contains(e);
    window.isEndOfScrolling = () => {
      const e = document.querySelector(SELECTORS.fifthTwit);
      return isInPage(e) && !e.hasChildNodes();
    };
  }, SELECTORS);

  // Scroll and Scrap
  await page.evaluate(() => {
    const x = 0;
    const y = 3 * 1000;
    const wait = 0.5 * 1000;
    const foo = [];
    const timer = setInterval(() => {
      // While there is Try Again Button, click on it
      const tryAgainButton = document.querySelector(SELECTORS.tryAgainButton);
      while (isInPage(tryAgainButton)) tryAgainButton.click();

      // Break
      if (isEndOfScrolling()) {
        console.log("THIS IS THE END");
        console.log(foo);
        return clearInterval(timer);
      }

      // Scrap
      const twits = document.querySelector(SELECTORS.twits);
      for (let i = 0; i < twits.children.length; i++) {
        const twit = twits.children[i];
        const prefix = `div:nth-child(${i + 1}) > `;

        const acc = twit.querySelector(`${prefix} ${SELECTORS.acc}`);

        //const name = twit.querySelector(`${prefix} ${SELECTORS.name}`);
        //console.log(name)
        const content = twit.querySelector(`${prefix} ${SELECTORS.content}`);
        if (acc && content) {
          console.log(acc.innerText);
          //console.log(name.innerText);
          console.log(content.innerText);
        } else {
          break;
        }
      }

      // Scroll
      window.scrollBy(x, y);
    }, wait);
  });
};

module.exports = scrap;

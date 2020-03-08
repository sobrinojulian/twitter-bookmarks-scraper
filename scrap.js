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
    const y = 1000;
    const wait = 0.5 * 1000;

    let foo = [];
    const timer = setInterval(() => {
      // While there is Try Again Button, click on it
      const tryAgainButton = document.querySelector(SELECTORS.tryAgainButton);
      while (isInPage(tryAgainButton)) tryAgainButton.click();

      // Break
      if (isEndOfScrolling()) {
        console.log("THIS IS THE END");
        //const bar = foo.filter(e => e.acc === "@awake");
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
        const date = twit.querySelector(`${prefix} ${SELECTORS.date}`);
        const content = twit.querySelector(`${prefix} ${SELECTORS.content}`);
        const likes = twit.querySelector(`${prefix} ${SELECTORS.likes}`);
        const retwits = twit.querySelector(`${prefix} ${SELECTORS.retwits}`);

        if (acc && date && content && likes && retwits) {
          const obj = {
            acc: acc.innerText,
            date: date.innerText,
            content: content.innerText,
            likes: likes.innerText,
            retwits: retwits.innerText
          };
          if (
            !foo.some(e => {
              return (
                e.acc === acc.innerText &&
                e.date === date.innerText &&
                e.content === content.innerText &&
                e.likes === likes.innerText &&
                e.retwits === retwits.innerText
              );
            })
          ) {
            foo.push(obj);
          }
        }
      }

      // Scroll
      window.scrollBy(x, y);
    }, wait);
  });
};

module.exports = scrap;

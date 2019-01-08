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
    const timer = setInterval(() => {
      // While there is Try Again Button, click on it
      const tryAgainButton = document.querySelector(SELECTORS.tryAgainButton);
      while (isInPage(tryAgainButton)) tryAgainButton.click();
      // Scrap
      //const twits = document.querySelector(SELECTORS.twits);
      //for (t in twits.childNodes) {
      //  console.log(t);
      //}
      const twits = document.querySelector(
        "#react-root > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-1pi2tsx.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-13qz1uu.rn-1lgpqti > main > div > div.rn-1oszu61.rn-aqfbo4.rn-e84r5y.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-16y2uox.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div > div > div > div > section > div > div > div"
      );
      if (twits) {
        const fa = twits.children[0];
        //console.log(fa);
        const ee = fa.querySelector(
          "div:nth-child(1) > div > div > article > div > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1iusvr4.rn-eqz5dr.rn-46vdb2.rn-1mnahxq.rn-7o8qx1.rn-p1pxzi.rn-1f6r7vd.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-eqz5dr.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-19i43ro.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1qe8dj5.rn-1mlwlqe.rn-18u37iz.rn-1wtj0ep.rn-1mnahxq.rn-61z16t.rn-11wrixw.rn-zl2h9q.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1d09ksm.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1mlwlqe.rn-18u37iz.rn-1wbh5a2.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1mlwlqe.rn-eqz5dr.rn-1wbh5a2.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-11wrixw.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > a > div > div.rn-1oszu61.rn-1efd50x.rn-14skgim.rn-rull8r.rn-mm0ijv.rn-13yce4e.rn-fnigne.rn-ndvcnb.rn-gxnn5r.rn-deolkf.rn-6koalj.rn-1mlwlqe.rn-18u37iz.rn-1wbh5a2.rn-1mnahxq.rn-61z16t.rn-p1pxzi.rn-1f6r7vd.rn-ifefl9.rn-bcqeeo.rn-wk8lta.rn-9aemit.rn-1mdbw0j.rn-gy4na3.rn-bnwqim.rn-1lgpqti > div"
        );
        console.log(ee.innerText)
      }

      // Scroll
      window.scrollBy(x, y);

      // Break
      if (isEndOfScrolling()) return clearInterval(timer);
    }, wait);
  });
};

module.exports = scrap;

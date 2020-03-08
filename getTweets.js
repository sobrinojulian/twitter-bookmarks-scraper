const getTweet = require(`./getTweet`);
const { scrollElementTop, setBackgroundColor } = require(`./helpers`);

const getTweets = async (browser, page) => {
  const url = `https://mobile.twitter.com/i/bookmarks`;
  const waitUntilFullLoad = { waitUntil: `networkidle2` };
  await page.goto(url, waitUntilFullLoad);

  const bookmarks = [];
  const tweets = await page.$$(`article`);
  for (const tweet of tweets) {
    //await scrollElementTop(page, tweet);
    //await setBackgroundColor(tweet, `lemonchiffon`);
    const data = await getTweet(browser, tweet);
    console.log(data["links"]);
  }
};

module.exports = getTweets;

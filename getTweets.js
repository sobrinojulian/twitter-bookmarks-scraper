const getTweet = require(`./getTweet`);
const { scrollElementTop, setBackgroundColor } = require(`./helpers`);

const getTweets = async page => {
  const url = `https://mobile.twitter.com/i/bookmarks`;
  const waitUntilFullLoad = { waitUntil: `networkidle2` };
  await page.goto(url, waitUntilFullLoad);

  while (true) {
    const tweets = await page.$$(`article`);
    for (const tweet of tweets) {
      await scrollElementTop(page, tweet);
      await setBackgroundColor(page, tweet, "lemonchiffon");
      const data = await getTweet(tweet);
      console.log(data.text);
    }
  }
};

module.exports = getTweets;

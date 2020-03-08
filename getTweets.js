const getTweet = require(`./getTweet`)

const getTweets = async page => {
  const url = `https://mobile.twitter.com/i/bookmarks`;
  const waitUntilFullLoad = { waitUntil: `networkidle2` };
  await page.goto(url, waitUntilFullLoad);

  const tweets = await page.$$(`article`);
  for (const tweet of tweets) {
    await getTweet(tweet)
  }
};

module.exports = getTweets;

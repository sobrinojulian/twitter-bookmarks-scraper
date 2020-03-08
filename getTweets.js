const SELECTORS = require(`./selectors`);
const { innerText, src, dateTime } = require(`./helpers`);

const getTweets = async page => {
  const url = `https://mobile.twitter.com/i/bookmarks`;
  const waitUntilFullLoad = { waitUntil: `networkidle2` };
  await page.goto(url, waitUntilFullLoad);

  const tweets = await page.$$(`article`);
  for (const tweet of tweets) {
    const avatar = await tweet.$(SELECTORS.avatar);
    const id = await tweet.$(SELECTORS.id);
    const name = await tweet.$(SELECTORS.name);

    const date = await tweet.$(SELECTORS.date);
    const replyTo = await tweet.$(SELECTORS.replyTo);
    const text = await tweet.$(SELECTORS.text);

    const replies = await tweet.$(SELECTORS.replies);
    const retweets = await tweet.$(SELECTORS.retweets);
    const likes = await tweet.$(SELECTORS.likes);

    console.log(await src(avatar));
    console.log(await innerText(id));
    console.log(await innerText(name));

    console.log(await dateTime(date))
    console.log(await innerText(replyTo));
    console.log(await innerText(text));

    console.log(await innerText(replies));
    console.log(await innerText(retweets));
    console.log(await innerText(likes));
    console.log();
  }
};
module.exports = getTweets;

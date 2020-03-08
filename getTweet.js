const SELECTORS = require(`./selectors`);
const { innerText, src, href, dateTime } = require(`./helpers`);
const expandTcoURL = require("./expandTcoURL");

const getLinks = async (browser, text) => {
  const links = [];
  const aElementHandles = await text.$$(`a`);
  for (const a of aElementHandles) {
    const link = await href(a);
    if (link.indexOf("t.co") === -1) {
      // If you do not include t.co, get the URL as it is
      links.push(link);
    } else {
      // If you include t.co, get the destination of the shortened URL
      const expandedLink = await expandTcoURL(browser, link);
      links.push(expandedLink);
    }
    links.push(link);
  }
  return links;
};

const getTweet = async (browser, tweet) => {
  const avatar = await tweet.$(SELECTORS.avatar);
  const user = await tweet.$(SELECTORS.user);
  const name = await tweet.$(SELECTORS.name);
  const userURL = await tweet.$(SELECTORS.userURL);

  const tweetURL = await tweet.$(SELECTORS.tweetURL);
  const date = await tweet.$(SELECTORS.date);
  const replyTo = await tweet.$(SELECTORS.replyTo);
  const text = await tweet.$(SELECTORS.text);

  const replies = await tweet.$(SELECTORS.replies);
  const retweets = await tweet.$(SELECTORS.retweets);
  const likes = await tweet.$(SELECTORS.likes);

  return {
    avatar: await src(avatar),
    user: await innerText(user),
    name: await innerText(name),
    userURL: await href(userURL),

    tweetURL: await href(tweetURL),
    date: await dateTime(date),
    replyTo: await innerText(replyTo),
    text: await innerText(text),
    media: ``,
    links: await getLinks(browser, text),
    hashtags: [],

    replies: await innerText(replies),
    retweets: await innerText(retweets),
    likes: await innerText(likes)
  };
};

module.exports = getTweet;

const SELECTORS = require(`./selectors`);
const { innerText, src, dateTime } = require(`./helpers`);

const getTweet = async tweet => {
  const avatar = await tweet.$(SELECTORS.avatar);
  const id = await tweet.$(SELECTORS.id);
  const name = await tweet.$(SELECTORS.name);

  const date = await tweet.$(SELECTORS.date);
  const replyTo = await tweet.$(SELECTORS.replyTo);
  const text = await tweet.$(SELECTORS.text);

  const replies = await tweet.$(SELECTORS.replies);
  const retweets = await tweet.$(SELECTORS.retweets);
  const likes = await tweet.$(SELECTORS.likes);

  return {
    avatar: await src(avatar),
    id: await innerText(id),
    name: await innerText(name),

    date: await dateTime(date),
    replyTo: await innerText(replyTo),
    text: await innerText(text),

    replies: await innerText(replies),
    retweets: await innerText(retweets),
    likes: await innerText(likes)
  };
};

module.exports = getTweet;

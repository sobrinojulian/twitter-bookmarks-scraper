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

  console.log(await src(avatar, `src`));
  console.log(await innerText(id));
  console.log(await innerText(name));

  console.log(await dateTime(date));
  console.log(await innerText(replyTo));
  console.log(await innerText(text));

  console.log(await innerText(replies));
  console.log(await innerText(retweets));
  console.log(await innerText(likes));
  console.log();
};

module.exports = getTweet;

const SELECTORS = require(`./selectors`);
const { innerText, src, href, dateTime, childElementCount } = require(`./helpers`);
const expandTcoURL = require("./expandTcoURL");

const getLinks = async (browser, text) => {
  if (!browser) return [];
  if (!text) return [];

  const links = [];
  const aElementHandles = await text.$$(`a`);
  for (const a of aElementHandles) {
    const link = await href(a);
    const isTco = link.indexOf("t.co") !== -1;
    const isHashtag =
      link.indexOf("https://mobile.twitter.com/hashtag/") !== -1;
    if (isHashtag) continue;
    if (isTco) {
      const expandedLink = await expandTcoURL(browser, link);
      links.push(expandedLink);
    } else {
      links.push(link);
    }
  }
  return links;
};

const getHashtags = async (browser, text) => {
  if (!browser) return [];
  if (!text) return [];

  const hashtags = [];
  const aElementHandles = await text.$$(`a`);
  for (const a of aElementHandles) {
    const link = await href(a);
    const isHashtag =
      link.indexOf("https://mobile.twitter.com/hashtag/") !== -1;
    if (isHashtag) {
      const hashtag = link
        .split("https://mobile.twitter.com/hashtag/")
        .pop()
        .split("?src=hashtag_click")[0];
      hashtags.push(hashtag);
    }
  }
  return hashtags;
};

const getTweet = async (browser, tweet) => {
  const avatar = await tweet.$(SELECTORS.avatar);
  const user = await tweet.$(SELECTORS.user);
  const name = await tweet.$(SELECTORS.name);
  const userURL = await tweet.$(SELECTORS.userURL);

  const tweetURL = await tweet.$(SELECTORS.tweetURL);
	const date = await tweet.$(SELECTORS.date);

	const contentFrame = await tweet.$(SELECTORS.contentFrame)
	const contentFramechildElementCount = await childElementCount(contentFrame)

	let replyTo = ''
	let text = ''
	let media = ''
	let replies = ''
	let retweets = ''
	let likes = ''
	if (contentFramechildElementCount === 4) {
		replyTo = await tweet.$(`${SELECTORS.contentFrame} > div:nth-child(1)`);
		text = await tweet.$(`${SELECTORS.contentFrame} > div:nth-child(2)`);
		media = await tweet.$(`${SELECTORS.contentFrame} > div:nth-child(3)`);
		replies = await tweet.$(`${SELECTORS.contentFrame} > div:nth-child(4) > div:nth-child(1)`)
		retweets = await tweet.$(`${SELECTORS.contentFrame} > div:nth-child(4) > div:nth-child(2)`)
		likes = await tweet.$(`${SELECTORS.contentFrame} > div:nth-child(4) > div:nth-child(3)`)
	} else {
		text = await tweet.$(`${SELECTORS.contentFrame} > div:nth-child(1)`);
		media = await tweet.$(`${SELECTORS.contentFrame} > div:nth-child(2)`);
		replies = await tweet.$(`${SELECTORS.contentFrame} > div:nth-child(3) > div:nth-child(1)`)
		retweets = await tweet.$(`${SELECTORS.contentFrame} > div:nth-child(3) > div:nth-child(2)`)
		likes = await tweet.$(`${SELECTORS.contentFrame} > div:nth-child(3) > div:nth-child(3)`)
	}

	/*
  const replyTo = await tweet.$(SELECTORS.replyTo);
  const text = await tweet.$(SELECTORS.text);

  const replies = await tweet.$(SELECTORS.replies);
  const retweets = await tweet.$(SELECTORS.retweets);
  const likes = await tweet.$(SELECTORS.likes);
	*/
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
    hashtags: await getHashtags(browser, text),

    replies: await innerText(replies),
    retweets: await innerText(retweets),
    likes: await innerText(likes)
  };
};

module.exports = getTweet;

const SELECTORS = require("./selectors");

const innerText = async elm => {
  if (elm) return await elm.evaluate(node => node.innerText);
  return "";
};

const getProperty = async (elm, property) => {
  return await (await elm.getProperty(property)).jsonValue();
};

const cleanReplyTo = async str => {
  return str.split("Replying to \n")[1];
};

const getTweets = async page => {
  const url = `https://mobile.twitter.com/i/bookmarks`;
  const waitUntilFullLoad = { waitUntil: `networkidle2` };
  await page.goto(url, waitUntilFullLoad);

  const articles = await page.$$("article");
  for (const article of articles) {
    const avatar = await article.$(SELECTORS.avatar);

    const id = await article.$(SELECTORS.id);
    /*
    const name = await article.$(SELECTORS.name);
    const date = await article.$(SELECTORS.date);

    const replyTo = await article.$(SELECTORS.replyTo);
    const text = await article.$(SELECTORS.text);
    //const media = await article.$(SELECTORS.media);
    */
    const replies = await article.$(SELECTORS.replies);
    const retweets = await article.$(SELECTORS.retweets);
    const likes = await article.$(SELECTORS.likes);

    console.log(await getProperty(avatar, "src"));

    console.log(await innerText(id));
    /*
    console.log(await innerText(name));
    console.log(await getProperty(date, "title"));

    console.log(await cleanReplyTo(await innerText(replyTo)));
    console.log(await innerText(text));
    //console.log(await innerText(media));
    */

    console.log(await innerText(replies));
    console.log(await innerText(retweets));
    console.log(await innerText(likes));
  }
};
module.exports = getTweets;

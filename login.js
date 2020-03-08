const CREDS = require("./creds");
const SELECTORS = require("./selectors");

const login = async page => {
  const url = `https://mobile.twitter.com/login`
  const waitUntilFullLoad = { waitUntil: `networkidle2` };
  await page.goto(url, waitUntilFullLoad);

  await page.type(SELECTORS.username, CREDS.username);
  await page.type(SELECTORS.password, CREDS.password);

  await page.click(SELECTORS.button);
  await page.waitForNavigation();
};
module.exports = login;

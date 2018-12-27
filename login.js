const CREDS = require("./creds");
const SELECTORS = require("./selectors");

const login = async page => {
  await page.goto("https://mobile.twitter.com/login");

  await page.waitForSelector(SELECTORS.username);
  await page.click(SELECTORS.username);
  await page.keyboard.type(CREDS.username);

  await page.waitForSelector(SELECTORS.password);
  await page.click(SELECTORS.password);
  await page.keyboard.type(CREDS.password);

  await page.waitForSelector(SELECTORS.button);
  await page.click(SELECTORS.button);
  await page.waitForNavigation();
};
module.exports = login;

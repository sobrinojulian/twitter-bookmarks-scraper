const puppeteer = require("puppeteer");
const CREDS = require("./creds");
const SELECTORS = require("./selectors");
const helpers = require("./helpers");
const login = helpers.login;
const autoScroll = helpers.autoScroll;

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await login(page);

  await page.goto("https://mobile.twitter.com/i/bookmarks");
  await autoScroll(page);
}

run();

const puppeteer = require("puppeteer");
const scrap = require("./scrap")
const login = require("./login");

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await login(page);
  await page.goto("https://mobile.twitter.com/i/bookmarks");
  await scrap(page)
}

run();

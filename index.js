const puppeteer = require("puppeteer");
const login = require("./login");
const getTweets = require("./getTweets")

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    //args: [`--window-size=${(width = 499)},${(height = 1000)}`]
    args: ["--start-maximized"],
    devtools: true
  });
  const page = (await browser.pages())[0];

  await login(page);
  await getTweets(browser, page)
}
run()

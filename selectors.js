const tweet = `div > div:nth-child(2)`;

const header = `${tweet} > div:nth-child(2) > div:nth-child(1)`;
const footer = `${tweet} > div:nth-child(2) > div:nth-child(4)`

const SELECTORS = {
  username: `#react-root > div > div > div.css-1dbjc4n.r-1pi2tsx.r-13qz1uu.r-417010 > main > div > div > form > div > div:nth-child(6) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1udh08x > div > input`,
  password: `#react-root > div > div > div.css-1dbjc4n.r-1pi2tsx.r-13qz1uu.r-417010 > main > div > div > form > div > div:nth-child(7) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1udh08x > div > input`,
  button: `#react-root > div > div > div.css-1dbjc4n.r-1pi2tsx.r-13qz1uu.r-417010 > main > div > div > form > div > div:nth-child(8) > div > div > span > span`,

  avatar: `${tweet} > div:nth-child(1) > div > div > a > div:nth-child(1) > div:nth-child(2) > div > img`,

  id: `${header} a > div:nth-child(1) > div:nth-child(2)`,
  name: `${header} a > div:nth-child(1) > div:nth-child(1)`,
  date: `${header} > div > div:nth-child(1) > a`,

  replyTo: `${tweet} > div:nth-child(2) > div:nth-child(2)`,
  text: `${tweet} > div:nth-child(2) > div:nth-child(3)`,
  media: `${tweet} > div:nth-child(2) > div:nth-child(4)`,

  replies: `${footer} > div:nth-child(1) > div > div > div:nth-child(2) > span > span`,
  retweets: `${footer} > div:nth-child(2) > div > div > div:nth-child(2) > span > span`,
  likes: `${footer} > div:nth-child(3) > div > div > div:nth-child(2) > span > span`
};
module.exports = SELECTORS;

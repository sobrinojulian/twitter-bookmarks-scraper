const tweetFrame = `div > div:nth-child(2) > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-5f2r5o.r-1mi0q7o`

const userURL = `${tweetFrame} > div:nth-child(1) > div > div > div.css-1dbjc4n.r-1d09ksm.r-18u37iz.r-1wbh5a2 > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs > a`

const tweetURL = `${tweetFrame} > div:nth-child(1) > div > div > div.css-1dbjc4n.r-1d09ksm.r-18u37iz.r-1wbh5a2 > a`

const SELECTORS = {
  username: `#react-root > div > div > div.css-1dbjc4n.r-1pi2tsx.r-13qz1uu.r-417010 > main > div > div > form > div > div:nth-child(6) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1udh08x > div > input`,

	password: `#react-root > div > div > div.css-1dbjc4n.r-1pi2tsx.r-13qz1uu.r-417010 > main > div > div > form > div > div:nth-child(7) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1udh08x > div > input`,

	button: `#react-root > div > div > div.css-1dbjc4n.r-1pi2tsx.r-13qz1uu.r-417010 > main > div > div > form > div > div:nth-child(8) > div > div > span > span`,

  avatar: `div > div:nth-child(2) > div.css-1dbjc4n.r-1awozwy.r-18kxxzh.r-5f2r5o > div > div > a > div.css-1dbjc4n.r-1adg3ll.r-1udh08x > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img`,

	userURL: userURL,

	user: `${userURL} > div > div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-1f6r7vd`,

	name: `${userURL} > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs`,

	tweetURL: tweetURL,

	date: `${tweetURL} > time`,

	// If it has 'replying to...' then contentFrame has 4 children:
	//	- 1) Replying to
	//	- 2) Text content (Can be empty)
	//	- 3) Media (Can be empty)
	//	- 4) Counter: Replies, Retweets and Likes
	// Else, it has 3 children then:
	//	- 1) Text content (Can be empty)
	//	- 2) Media (Can be empty)
	//	- 3) Counter: Replies, Retweets and Likes
	contentFrame: `${tweetFrame} > div:nth-child(2)`,
}
module.exports = SELECTORS

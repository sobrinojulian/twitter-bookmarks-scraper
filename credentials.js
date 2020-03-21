const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD
}

<<<<<<< HEAD
require('dotenv').config()

let PORT = process.env.PORT
// let MONGODB_URI = process.env.MONGODB_URI
const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
}
=======
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT

module.exports = {
    MONGODB_URI,
    PORT
  }
>>>>>>> b1354268a4cf1e6f50b38c990a4ea610b244c34b

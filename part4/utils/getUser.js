const jwt = require('jsonwebtoken')
const User = require('../models/user')
const loginRouter = require('../controllers/login')
const makeUser = require('../utils/token_extractor')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }
const userExtractor = async(request, response, next) => {
const token = getTokenFrom(request)
    console.log("Token is", token)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: ' not logged in as correct user token missing or incorrect' })
    } else{
        request.user = await User.findById(decodedToken.id)
    }
    next()
}

module.exports = {
    userExtractor
}
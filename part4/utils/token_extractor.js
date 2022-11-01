const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const jwt = require('jsonwebtoken')
const loginRouter = require('../controllers/login')


const tokenExtractor = async (request, response, next) => {
    const getTokenFrom = request => {
        const authorization = request.get('authorization')
        if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
          return authorization.substring(7)
        }
        return null
      }
      
    
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    next()
  }
  module.exports = tokenExtractor
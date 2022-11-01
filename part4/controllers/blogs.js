const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const jwt = require('jsonwebtoken')
const loginRouter = require('./login')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog
    .find({})
    .populate('user', {username:1, name: 1})
        response.json(blogs)
      })

      blogsRouter.get('/:id', (request, response) => {
        Blog.findById(request.params.id)
          .then(blog => {
            if (blog) {
              response.json(blog)
            } else {
              response.status(404).end() 
            }
          })
          .catch(error => {
            console.log(error)
            response.status(400).send({ error: 'malformatted id' })
          })
      })
  

blogsRouter.post('/', async (request, response) => {
  
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    const blog = new Blog({ ...request.body, user: user._id })

    if (typeof blog.likes === 'undefined' || blog.likes === null) {
        blog.likes = 0
    }
    if (typeof blog.title === 'undefined' || blog.title === null || typeof blog.url === 'undefined' || blog.url === null) {
      response.status(400).end()
  } else {
      const savedBlog = await blog.save()
      user.blogs = user.blogs.concat(savedBlog._id)
      await user.save()
      response.status(201).json(savedBlog.toJSON())
  }
   
        // const savedBlog = await note.save()
        // .then(result => {
        //   response.status(201).json(result)
        // }).catch(error => next(error))

  })

  blogsRouter.delete('/:id', (request, response) => {
    Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()
  })

  blogsRouter.put('/:id', (request, response) => {
    const body = request.body

    const blog = {
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes
    }
  
    Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
      .then(updatedBlog => {
        response.json(updatedBlog)
      })
      .catch(error => next(error))
  })
  module.exports = blogsRouter
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')


blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
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
  
    const blog = new Blog(request.body)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })
  blogsRouter.delete('/:id', (request, response) => {
    Blog.findByIdAndRemove(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
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
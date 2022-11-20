const router = require('express').Router()
const jwt = require('jsonwebtoken')
const blog = require('../models/blog')

const Blog = require('../models/blog')
const User = require('../models/user')
const logger = require("../utils/logger")

router.get('/', async (request, response) => {
  const notes = await Blog
    .find({})
    .find({}).populate('user', { username: 1, name: 1 })

  response.json(notes)
})
router.get('/:id', async (request, response) => {
  const notes = await Blog
    .find({})
    .find({}).populate('user', { username: 1, name: 1 })

  response.json(notes)
})

router.post('/', async (request, response) => {
  if (!request.user) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = request.user
  const blog = new Blog({ ...request.body, user: user.id })

  const savedBlog = await blog.save()

  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()

  response.status(201).json(savedBlog)
})

router.delete('/:id', async (request, response) => {
  const blogToDelete = await Blog.findById(request.params.id)
  if (!blogToDelete ) {
    return response.status(204).end()
  }

  if ( blogToDelete.user && blogToDelete.user.toString() !== request.user.id ) {
    return response.status(401).json({
      error: 'only the creator can delete a blog'
    })
  }

  await Blog.findByIdAndRemove(request.params.id)

  response.status(204).end()
})

router.put('/:id', async (request, response, next) => {
  if (!request.user) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = request.user
  const blog = new Blog({ ...request.body, user: user.id })
  // const updatedBlog = await Blog
  //   .findByIdAndUpdate(
  //     request.params.id, 
  //     blog, 
  //     { new: true, runValidators: true, context: 'query' }
  //   )
    // await Blog.deleteMany({})
    const blogToUpdate = await Blog.findById(request.params.id)
    
    console.log("blogtoupdate",blogToUpdate)
  
  
    if ( blogToUpdate.user._id.toString() === request.user._id.toString() ) {
        const newBlog = {
            title: blog.title,
            author: blog.author,
            url: blog.url,
            likes: blog.likes,
            user: blog.user
            
        }
       
        console.log("newBlog", newBlog)
        console.log("request params id", request.params.id)
        try {
          console.log("User match")
            updatedBlog = await Blog.findByIdAndUpdate(
            {_id: request.params.id},
             {likes: blog.likes},
              { new: true })
            logger.info(`blog ${blog.title} successfully updated`)
            //console.log("updatedBlog",updatedBlog)
            //response.json(updatedBlog.toJSON())
        } catch (exception) {
            next(exception)
        }
    } else {
        return
         response.status(401).json({ error: `Unauthorized aaaa` })
        
    }
      
  response.json(updatedBlog)
})


module.exports = router

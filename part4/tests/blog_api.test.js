const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')


beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.initialBlog)
})


// beforeEach(async () => {
//   await Blog.deleteMany({})

//   for (let blog of helper.initialBlogs) {
//     let blogObject = new Note(note)
//     await blogObject.save()
//   }
// })


// beforeEach(async () => {
//   await Blog.deleteMany({})
//   let blogObject = new Blog(helper.initialBlog[0])
//   await blogObject.save()
//   blogObject = new Blog(helper.initialBlog[1])
//   await blogObject.save()
// })
// beforeEach(async () => {
//   await Blog.deleteMany({})
//   let blogObject = new Blog(helper.initialBlog[0])
//   await blogObject.save()
//   blogObject = new Blog(helper.initialBlog[1])
//   await blogObject.save()
//   blogObject = new Blog(helper.initialBlog[2])
//   await blogObject.save()
// })

test('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
}, 100000)


test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body).toHaveLength(helper.initialBlog.length)
 
})
test('unique identifier is named id', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body[0].id).toBeDefined()
})



test('a new blog post can be added to database', async () => {

  
  const newBlog = {
    title: "React patterns1111111",
    author: "Michael Chant11111",
    url: "https://reactpatterns111111.com/"}
  
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)
    console.log("BBBB")
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(helper.initialBlog.length + 1)
},100000)


test('if likes are missing defaults to 0', async () => {

  const newBlogMissingLikes =  {
    title: "React patterns111222222211111",
    author: "Michael Chant122221111",
    url: "https://reactpatterns112221111.com/"}

 await api
.post('/api/blogs')
.send(newBlogMissingLikes)
.expect(201)
.expect('Content-Type', /application\/json/)
const response = await api.get('/api/blogs')
const blog = response.body.find(r => r.title === newBlogMissingLikes.title);
expect(blog.likes).toBe(0)
},10000)


// This test seems to either timeout or if I increase the time it never resolves.
// It seems like it stuck on something
test('if missing title or url responds with 400', async() => {
const newBlogNoTitleNoURL = {
  author: "Michael Chant122221111",
  likes : 6
}
 await api.post('/api/blogs')
.send(newBlogNoTitleNoURL)
.expect(400)

const response = await api.get('/api/blogs')

expect(response.body).toHaveLength(initialNotes.length)

},1000000)

afterAll(() => {
  mongoose.connection.close()
})
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')

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
test('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
}, 100000)


// test('all blogs are returned', async () => {
//   jest.setTimeout(300000);
//   const response = await api.get('/api/blogs')

//   expect(response.body).toHaveLength(helper.initialBlog.length)
 
// })

// test('a specific note is within the returned notes', async () => {
//   const response = await api.get('/api/notes')

//   const contents = response.body.map(r => r.content)
//   expect(contents).toContain(
//     'Browser can execute only Javascript'
//   )
// })

// test('a valid note can be added ', async () => {
//   const newNote = {
//     content: 'async/await simplifies making async calls',
//     important: true,
//   }

//   await api
//     .post('/api/notes')
//     .send(newNote)
//     .expect(201)
//     .expect('Content-Type', /application\/json/)

//   const notesAtEnd = await helper.notesInDb()
//   expect(notesAtEnd).toHaveLength(helper.initialNotes.length + 1)

//   const contents = notesAtEnd.map(n => n.content)
//   expect(contents).toContain(
//     'async/await simplifies making async calls'
//   )
// })


// test('note without content is not added', async () => {
//   const newNote = {
//     important: true
//   }

//   await api
//     .post('/api/notes')
//     .send(newNote)
//     .expect(400)

//   const notesAtEnd = await helper.notesInDb()

//   expect(notesAtEnd).toHaveLength(helper.initialNotes.length)
// })
// test('there are two notes', async () => {
//   const response = await api.get('/api/notes')

//   expect(response.body).toHaveLength(2)
// })

// test('the first note is about HTTP methods', async () => {
//   const response = await api.get('/api/notes')

//   expect(response.body[0].content).toBe('HTML is easy')
// })
afterAll(() => {
  mongoose.connection.close()
})
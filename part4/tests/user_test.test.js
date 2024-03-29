const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const jwt = require('jsonwebtoken')
const api = supertest(app)
const User = require('../models/user')
const Blog = require('../models/blog')
const helper = require('./test_helper')


let token
describe('when there is initially one user in db', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    await Blog.deleteMany({})
    
    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })
    await user.save()
    
    const userLogin = {
      username: user.username,
      id: user.id,
    }
    
    let token = jwt.sign(userLogin, process.env.SECRET)
  })

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })
})
describe('when there is initially one user in db', () => {
    // ...
  
    test('creation fails with proper statuscode and message if username already taken', async () => {
      const usersAtStart = await helper.usersInDb()
  
      const newUser = {
        username: 'root',
        name: 'Superuser',
        password: 'salainen',
      }
  
      const result = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)
  
      expect(result.body.error).toContain('username must be unique')
  
      const usersAtEnd = await helper.usersInDb()
      expect(usersAtEnd).toEqual(usersAtStart)
    })
  })

  test("password too short", async () => {
    const newUser = {
        username: 'root',
        name: 'Superuser',
        password: 'salainen',
      }
      await api.post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)
  })

  afterAll(() => {
    mongoose.connection.close()
  })

 
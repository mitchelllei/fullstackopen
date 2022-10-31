<<<<<<< HEAD
const config = require('./utils/config')
=======
//const http = require('http')
>>>>>>> b1354268a4cf1e6f50b38c990a4ea610b244c34b
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
<<<<<<< HEAD
const blogsRouter = require('./controllers/blogs')

const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl)
app.use(cors())
app.use(express.json())

=======
const blogsRouter = require('./controllers/blogs');
const config = require('./utils/config')


const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
 //'mongodb://localhost/bloglist'
//mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())
>>>>>>> b1354268a4cf1e6f50b38c990a4ea610b244c34b
app.use('/api/blogs', blogsRouter)

module.exports = app
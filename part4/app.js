const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Blog1 = require('./models/blog');
const config = require('./utils/config')


 //'mongodb://localhost/bloglist'
mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())

module.exports = app
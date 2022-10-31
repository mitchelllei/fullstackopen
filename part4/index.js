const app = require('./app')
<<<<<<< HEAD
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)


server.listen(config.PORT, () => {
=======
const config = require('./utils/config')
const http = require('http')
const server = http.createServer(app)



 //'mongodb://localhost/bloglist'





app.listen(config.PORT, () => {
>>>>>>> b1354268a4cf1e6f50b38c990a4ea610b244c34b
  console.log(`Server running on port ${config.PORT}`)
})
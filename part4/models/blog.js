const mongoose = require('mongoose')

// mongoose.set('useFindAndModify', false)
<<<<<<< HEAD
//const url = process.env.MONGODB_URI

const blogSchema = new mongoose.Schema({
    title: {type: String,
      required: true},
    author: String,
    url: {type: String,
      required: true},
    likes:Number
  })
 blogSchema.pre('save',function(next) {
    if(!this.likes)
        this.likes = 0

    next();
})
  blogSchema.set('toJSON', {
=======
const url = process.env.MONGODB_URI
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number

})

blogSchema.set('toJSON', {
>>>>>>> b1354268a4cf1e6f50b38c990a4ea610b244c34b
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
<<<<<<< HEAD

module.exports = mongoose.model('Blog', blogSchema)  
=======
module.exports = mongoose.model('Blog', blogSchema)
>>>>>>> b1354268a4cf1e6f50b38c990a4ea610b244c34b

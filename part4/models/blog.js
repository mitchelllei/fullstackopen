const mongoose = require('mongoose')

// mongoose.set('useFindAndModify', false)
//const url = process.env.MONGODB_URI

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes:Number
  })
 blogSchema.pre('save',function(next) {
    if(!this.likes)
        this.likes = 0

    next();
})
  blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Blog', blogSchema)  
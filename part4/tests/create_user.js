const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const createUser = async () => {
    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root',name:"test", passwordHash })
    
    await user.save()
      
    const userLogin = {
        username: user.username,
        id: user._id,
    };
      
    const token = jwt.sign(userLogin, process.env.SECRET);
    console.log(token)
  
    return { user, token }
  }
  module.exports = {
    createUser
  }
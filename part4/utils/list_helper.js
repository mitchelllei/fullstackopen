const dummy = (blogs) => {
    return 1
  }
  
  const totalLikes = (blogs) => {
    console.log("AAAA", blogs)
    return blogs.reduce((sum, iteration) => sum + iteration.likes,0) 
  }
  module.exports = {
    dummy,
    totalLikes
  }
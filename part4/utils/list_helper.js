const dummy = (blogs) => {
    return 1
  }
  
  const totalLikes = (blogs) => {
    console.log("AAAA", blogs)
    return blogs.reduce((sum, iteration) => sum + iteration.likes,0) 
  }

  const favoriteBlog = (blogs) => {
    console.log(blogs.reduce((max,iteration) => max.likes > blogs.likes ? max : blogs))
    return blogs.reduce((max,iteration) => max.likes > blogs.likes ? max : blogs)
  }

  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }
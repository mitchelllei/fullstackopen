import React , { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({blog}) => {
  const [showBlogDetails, setShowBlogDetails] = useState(false)
  const showWDetails = {display: showBlogDetails ? '' : 'none' }
  const [blogObject, setBlogObject] = useState(blog)
  
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const buttonName = showBlogDetails ? 'close' : 'show'

  const changeShowBlog= () => {
    setShowBlogDetails(!showBlogDetails)
  }

  const addLike = () => {
    const addLikeBlog = ({
      ...blog,
      likes: blog.likes + 1
    })
    blogService.update(addLikeBlog)
    setBlogObject(addLikeBlog)
    console.log("like added")
  }

return(
  <React.Fragment>
   <div style={blogStyle} className='blog'>

<div>
        <p>{blog.title} - {blog.author} </p>
      </div>
      <button onClick={changeShowBlog}>
          {buttonName}
          </button>
          
    <div style={showWDetails}>
    {blog.url}
    { blog.likes }
     <button id='like' onClick={addLike}>like</button>
</div>
</div>
  </React.Fragment>
)
}

  

export default Blog
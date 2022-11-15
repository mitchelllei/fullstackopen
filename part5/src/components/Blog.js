import React , { useState } from 'react'

const Blog = ({blog}) => {
  const [showBlogDetails, setShowBlogDetails] = useState(false)
  const showWDetails = { show: showBlogDetails ? '' : 'none' }
  
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

  
return(
  <React.Fragment>


  <div style={blogStyle}>
  <div>
    <p>{blog.title} - {blog.author} <button onClick={changeShowBlog}>{buttonName}</button></p>
  </div>
  <div style={showWDetails }>
    <p>{blog.url}</p>
    <p>{ blog.likes } <button id='like' onClick={console.log("like")}>like</button></p>
  </div>
</div>
  </React.Fragment>
)
}

  

export default Blog
import React , { useState } from 'react'

const Blog = ({blog}) => {
  const [showBlogDetails, setShowBlogDetails] = useState(false)
  const showWDetails = {display: showBlogDetails ? '' : 'none' }
  
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
   <div style={blogStyle} className='blog'>

<div>
        <p>{blog.title} - {blog.author} <button onClick={changeShowBlog}>{buttonName }</button></p>
      </div>


    <div style={showWDetails}>
    {blog.url}
    { blog.likes } <button id='like' onClick={console.log("like")}>like</button>
</div>
</div>
  </React.Fragment>
)
}

  

export default Blog
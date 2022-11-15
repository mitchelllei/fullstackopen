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


  
    {blog.title} - {blog.author}
    
    {blog.title} - {blog.author} 
    <button onClick={changeShowBlog}>
          {buttonName}
    </button>


    <div style={showWDetails}>
    {blog.url}
    { blog.likes } <button id='like' onClick={console.log("like")}>like</button>
</div>
  </React.Fragment>
)
}

  

export default Blog
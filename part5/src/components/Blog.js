import React , { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({blog}) => {
  const [showBlogDetails, setShowBlogDetails] = useState(false)
  const showWDetails = {display: showBlogDetails ? '' : 'none' }
  const [blogObject, setBlogObject] = useState(blog)
  const [likeButtonClicked,setLikeButtonClicked] = useState(0)
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(0)
  
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

  const incrementLikeButton = () => {
    
    setLikeButtonClicked(likeButtonClicked + 1);
  }

  const incrementDeleteButton = () => {
    
    setDeleteButtonClicked(deleteButtonClicked + 1);
    {console.log("delete counter should increment")}
  }


  const addLike = async () => {
   
    blogService.
    blogLike(blog)
   {console.log("liked added")}
  

    }
    const deleteBlogEntry = async () => {
      window.confirm(`do you want to delete ${blog.title}`)

      blogService
        .deleteBlog(blog)
        {console.log("blog deleted clicked")}
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
     <button id='like' onClick={() => {
      addLike();
      incrementLikeButton()
      }}
      >like</button>

     <button id='delete' onClick={() => {
      deleteBlogEntry();
      incrementDeleteButton()
     }}
     >delete</button>

</div>
</div>
  </React.Fragment>
)
}

  

export default Blog
import React from "react"

const ToggleBlog = ({
   handleSubmit,
    handleTitleChange,
    handleUrlChange,
    handleAuthorChange,
    handleLikesChange,
    title,
    url,
    author,
    likes,
   }) => {
    return (
       <div>
        <form onSubmit={handleSubmit}>
        <div>
        title
        <input
        type = "text"
        value = {title}
        name = "title"
        onChange={ handleTitleChange}
        />
      </div>
      url
        <input 
        type = "text"
        value ={url}
        name="url"
        onChange={handleUrlChange}
      />
      <div>
   
      <div>
      author
        <input 
        type = "text"
        value ={author}
        name="author"
        onChange={handleAuthorChange}
      />
      </div>
     
      <div>
      likes
        <input 
        type = "text"
        value ={likes}
        name="likes"
        onChange={handleLikesChange}
      />
      <button type="submit">add blog</button>
      </div>
      </div>
      </form>
      </div>
    )
   }
   export default ToggleBlog


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

    <form onSubmit={handleSubmit}>
      <div>
        title
        <input
          id = "title"
          type = "text"
          value = {title}
          name = "title"
          onChange={ handleTitleChange}
        />
      </div>
      <div>
      url
        <input
          id = "url"
          type = "text"
          value ={url}
          name="url"
          onChange={handleUrlChange}
        />
      </div>
      <div>

      author
        <input
          id = "author"
          type = "text"
          value ={author}
          name="author"
          onChange={handleAuthorChange}
        />
      </div>

      <div>
      likes
        <input
          id = "likes"
          type = "text"
          value ={likes}
          name="likes"
          onChange={handleLikesChange}
        />
      </div>
      <button type="submit">add blog</button>

    </form>

  )
}
export default ToggleBlog
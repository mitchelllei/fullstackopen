import React, { useState, useEffect } from 'react'

import Blog from './components/Blog'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import ToggleBlog from './components/ToggleBlog'

import blogService from './services/blogs'
import loginService from './services/login'


import './index.css'


const App = () => {
  const [blogs, setBlogs] = useState([]) 
  const [newBlog, setNewBlog] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [likes, setLikes] = useState('')

  const [loginVisible, setLoginVisible] = useState(false)



  useEffect(() => {
    blogService
      .getAll().then(initialBlogs => {
        setBlogs(initialBlogs)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])


  const handleLogin = async (event) => {
    event.preventDefault()
  
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      ) 
      setErrorMessage("Logged in Succesfully")
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log("Error Logging In")
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = async (event) => {
    event.preventDefault()
    try{
      window.localStorage.removeItem('loggedBlogAppUser')
      setUser(null)
      setErrorMessage("Logged out Succesfully")
    } catch (exception){
      setErrorMessage("error logging out")
      setTimeout(()=> {
        setErrorMessage(null)
      },5000)
    }
    
  }


// const loginForm = () => (
//   <form onSubmit={handleLogin}>
//     <div>
//       username
//         <input
//         type="text"
//         value={username}
//         name="Username"
//         onChange={({ target }) => setUsername(target.value)}
//       />
//     </div>
//     <div>
//       password
//         <input
//         type="password"
//         value={password}
//         name="Password"
//         onChange={({ target }) => setPassword(target.value)}
//       />
//     </div>
//     <button type="submit">login</button>
//   </form>      
// )
  const handleBlogChange = (event) => {
    setNewBlog(event.target.value)
  }
  
  

  const handleTitleChange = ({ target }) => {
    setTitle(target.value)
  }

  const handleAuthorChange = ({ target }) => {
    setAuthor(target.value)
  }

  const handleUrlChange = ({ target }) => {
    setUrl(target.value)
  }
  const handleLikesChange = ({ target }) => {
    setLikes(target.value)
  }

  const handleSubmitBlog = ({blogs,setBlogs,token}) => {
    const makeBlog = (event) => {
    event.preventDefault()

    blogService.create({ title, author, url, likes },token)
    .then((response) => {
      setBlogs(blogs.concat(response))

    })

  //   function handleSubmit(event) {
  //     event.preventDefault();
  
  //     const data = new FormData(event.target);
  
  // +   const value = Object.fromEntries(data.entries());
  
  //     console.log({ value });
  //   }
  }
      setTitle('')
      setAuthor('')
      setUrl('')
      setLikes('')
  
  }
  const makeBlogObject = async (event) => {
  
try {
  event.preventDefault();
  const data = new FormData(event.target);
  const formObject = Object.fromEntries(data.entries());
  const blogObject = {title: formObject.title, url: formObject.url, author: formObject.author,likes: formObject.likes}
  console.log("blogObject",blogObject)
  const madeBlog = await blogService
  .create(blogObject)
 
  setBlogs(blogs.concat(madeBlog))
  console.log("Added",madeBlog)
  console.log("All blogs is ", blogs)
  setErrorMessage("Blog added succesfully")
} catch (e) {
  console.log('Error')
  setErrorMessage("Failed to add new blog")
  }
   
   }
    
      
  
 
  if (user === null) {
    return (
      <React.Fragment>
        <h2>Log in to application</h2>
        <Notification message={errorMessage} />
        
        <Togglable buttonLabel='login'>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
        </Togglable> :
        <div>
          <p>{user} logged in</p>
          
        </div>
        </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <h2>blogs</h2>
      
      
      <div>
      <Notification message={errorMessage} />
      </div>
      <div>
        <ToggleBlog
    handleSubmit= {makeBlogObject}
    handleTitleChange = {({ target }) =>setTitle(target.value)}
    handleUrlChange = {({ target }) =>setUrl(target.value)}
    handleAuthorChange = {({ target }) =>setAuthor(target.value)}
    handleLikesChange = {({ target }) =>setLikes(target.value)}
    title = {title}
    url = {url}
    author = {author}
    likes = {likes} />
      </div>
  
      <div>
      {blogs.map(blog => {
  console.log("BLOG ISqqq",blog)
   return <Blog key={blog.id} blog={blog} /> 
}
   )}
      </div>
     
    
  


      <form onSubmit={handleLogout}>
      <button type="submit">logout</button>
      
      </form>
     
     
    </React.Fragment>
    
    
   
    
  )
}

export default App




{/* <h1 style={{ fontSize: "5rem" }}>{errorMessage}</h1>   */}
{/* <Togglable buttonLabel="new note">
            <NoteForm createNote={addNote} />
          </Togglable> */}
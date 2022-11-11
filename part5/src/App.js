import React, { useState, useEffect } from 'react'

import Blog from './components/Blog'

import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

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

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
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
    } catch (exception){
      setErrorMessage("error logging out")
      setTimeout(()=> {
        setErrorMessage(null)
      },5000)
    }
    
  }


  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>      
  )
  const handleBlogChange = (event) => {
    setNewBlog(event.target.value)
  }
  const blogForm = () => (
    <form onSubmit={addBlog}>
      <input
        value={newBlog}
        onChange={handleBlogChange}
      />
      <button type="submit">save</button>
    </form>  
  )
  // const makeBlogObject = ({title, author, url,user,  likes =  0}) => {
  //   const blogObject = {
  //     title: title,
  //     url: url,
  //     author: author,
  //     likes: likes,
  //     user: user
  //   }
  // }
  const addBlog = (event,) => {
    event.preventDefault()
    const blogObject = {
      title: newBlog.title,
      url: newBlog.url,
      author: newBlog.author,
      likes: newBlog.likes,
      user: user
    }

    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setNewBlog('')
        console.log("BLOGS IS",blogs)
      })
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
} catch (e) {
  console.log('Error')
  }
   
   }
    
      
  // formObject["user"] = (user.username)
    // console.log("USER",user.username)
    // console.log(formObject);
    //   .then((response) => {
    //     if (response.status === 201) {
    //         setError(`${response.data.title} by ${response.data.author} added`)
    //         setTimeout(() => setError(null), 2000)
    //         setBlogs(blogs.concat(response.data))
    //         setDisplay(false)
    //     } else {
    //         setError(`Unable to add ${response.data.title} by ${response.data.author}`)
    //         setTimeout(() => setError(null), 2000)
    //     }
    // })
 
  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
            <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>

      </div>
    )
  }

  return (
    <React.Fragment>
      <h2>blogs</h2>
      <form onSubmit={makeBlogObject}>
      <any element or components>
      <div>
        title
        <input
        type = "text"
        value = {title}
        name = "title"
        onChange={({ target }) =>setTitle(target.value)}
        />
      </div>
      url
        <input 
        type = "text"
        value ={url}
        name="url"
        onChange={({ target }) => setUrl(target.value)}
      />
      <div>
   
      <div>
      author
        <input 
        type = "text"
        value ={author}
        name="author"
        onChange={({ target }) => setAuthor(target.value)}
      />
      </div>
     
      <div>
      likes
        <input 
        type = "text"
        value ={likes}
        name="likes"
        onChange={({ target }) => setLikes(target.value)}
      />
      <button type="submit">add blog</button>
      </div>
      </div>
      <div>
      {blogs.map(blog => {
  console.log("BLOG ISqqq",blog)
   return <Blog key={blog.id} blog={blog} /> 
}
   )}
      </div>
      </any>
    </form>
    
  


      <form onSubmit={handleLogout}>
      <button type="submit">logout</button>
      
      </form>
     
     
    </React.Fragment>
    
    
   
    
  )
}

export default App

{/* <script>
const form = document.querrySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(form)
  console.log(fd)
  new FormData()
})
</script> */}



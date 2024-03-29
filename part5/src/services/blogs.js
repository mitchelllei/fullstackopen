import axios from 'axios'
const baseUrl = '/api/blogs'
const backendUrl = 'http://localhost:3003/api/blogs'

let token = null


const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}

const create = async newObject => {
  console.log('Object in Blog Service ',newObject)
  Object.assign(
    {},
    ...function _flatten(o) {
      return [].concat(...Object.keys(o)
        .map(k =>
          typeof o[k] === 'object' ?
            _flatten(o[k]) :
            ({ [k]: o[k] })
        )
      )
    }(newObject)
  )
  const config = {
    headers: { Authorization: token },
  }
  console.log('config is ',config)
  console.log('Token is ',token)
  const response = await axios.post(backendUrl, newObject, config)

  return response.data
}

const update = (id, newObject) => {
  console.log('ID IS ',id)
  console.log('newObject is ', newObject)
  const request = axios.put(`${backendUrl}/${id.id}`, id)
  return request.then(response => response.data)
}

const blogLike = async (blogObject) => {
  const config = {
    headers: { Authorization: token },
  }
  console.log('blog object is ',)
  if(blogObject.user.id !== undefined){
    console.log('blog object is ',blogObject)
    const likeBlog = blogObject
    likeBlog.likes = blogObject.likes+1
    console.log(`${backendUrl}/${blogObject.id}`)
    const response =  axios.put(`${backendUrl}/${blogObject.id}`, likeBlog, config)

    return response.data
  //return axios.put(`${backendUrl}/${blogObject.id}`, likeBlog)
  }
  console.log('User not defined')
}

const deleteBlog = async (blogObject) => {
  const config = {
    headers: { Authorization: token },
  }
  if(blogObject.user.id !== undefined){
    console.log('Blog object id is ',blogObject.id)
    const response = await axios.delete(`${baseUrl}/${blogObject.id}`, config)
    return response.data
  }
  console.log('User not defined')
}
// eslint-disable-next-line
export default { getAll, create, update, setToken, blogLike, deleteBlog }

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
  console.log("Object in Blog Service ",newObject)
  Object.assign(
    {}, 
    ...function _flatten(o) { 
      return [].concat(...Object.keys(o)
        .map(k => 
          typeof o[k] === 'object' ?
            _flatten(o[k]) : 
            ({[k]: o[k]})
        )
      );
    }(newObject)
  )
  const config = {
    headers: { Authorization: token },
  }
  console.log("config is ",config)
  console.log("Token is ",token)
  const response = await axios.post(baseUrl, newObject, config)
  
  return response.data
}

const update = (id, newObject) => {
  console.log("ID IS ",id.id)
  console.log("newObject is ", newObject)
  const request = axios.put(`${backendUrl}/${id}`, newObject)
  return request.then(response => response.data)
}
// eslint-disable-next-line
export default { getAll, create, update, setToken }

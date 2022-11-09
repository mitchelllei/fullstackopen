import axios from 'axios'
const baseUrl = '/api/blogs'

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

  const response = await axios.post(baseUrl, {title: newObject.title, url: newObject.url, author: newObject.author,likes: newObject.likes}, config)
  return response.data
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}
// eslint-disable-next-line
export default { getAll, create, update, setToken }

import axios from 'axios'
const baseUrl = 'localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request =  axios.post(baseUrl,newObject)
    return request.then(response => response.data)
}

const update = (id,newObject) => {
    const request =  axios.put(`${baseUrl}/${id}`,newObject)
    return request.then(response => response.data)
}

const deleteEntry = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return console.log("delete succesful")
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    deleteEntry:deleteEntry
}
import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Add from './components/Add'
import Form from './components/form'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fufilled')
      setPersons(response.data)
    })
  }, [])
  console.log('render', persons.length)
 
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      
    }
   const inPhonebook = persons.some(item => item.name === newName) // true
   const inPhonebookNumber = persons.some(item => item.number === newNumber)
    if (inPhonebook === false & inPhonebookNumber === false) {
      console.log('name not in phonebook')
      setPersons(persons.concat(nameObject))
      setNewName('')
      axios.post('http://localhost:3001/persons', nameObject)
      .then(response => {
        console.log("response is ",response)
      })
    } else {
      alert(`name: ${newName} with number ${newNumber} is already in phonebook`)
    }
    
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Add addName={addName} newName={newName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>


      <h2>Numbers</h2>

      <Search persons= {persons} searchValue={searchValue} />
    
      <div>
      <Form searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {/* <div>debug: {persons.id}</div>
      <div>debug: <pre>{JSON.stringify(persons, null, 2)}</pre></div> */}
    </div>
    
  )
}

export default App
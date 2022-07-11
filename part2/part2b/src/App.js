import { useState } from 'react'
import Search from './components/Search'
import Add from './components/Add'
import Form from './components/form'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState("")

 
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
      id: persons.length + 1,
    }
   const inPhonebook = persons.some(item => item.name === newName) // true
   const inPhonebookNumber = persons.some(item => item.number === newNumber)
    if (inPhonebook === false & inPhonebookNumber === false) {
      console.log('name not in phonebook')
      setPersons(persons.concat(nameObject))
      setNewName('')
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
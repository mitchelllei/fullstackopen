import { useState, useEffect } from 'react'
import Search from './components/Search'
import Add from './components/Add'
import Form from './components/form'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {

    personService
    .getAll()
    .then(initialPersons => {
    setPersons(initialPersons)
    })
   
  }, [])
 
 
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
      personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))

      })
      setNewName('')
     

    } else {

      alert(`name: ${newName} with number ${newNumber} is already in phonebook`)
     
      let index = persons.findIndex(person => {
        return person.name === newName
      })
      let indexCheck = index ? (console.log(index)) : (console.log("Check failed"))
      personService
      .update(index, nameObject)
    
    
  }
  
    }
  return (
    <div>
      <h2>Phonebook</h2>
      <Add addName={addName} newName={newName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>


      <h2>Numbers</h2>

      <Search persons= {persons} searchValue={searchValue} setPersons={setPersons} />
    
      <div>
      <Form searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {/* <div>debug: {persons.id}</div>
      <div>debug: <pre>{JSON.stringify(persons, null, 2)}</pre></div> */}
    </div>
    
  )
}

export default App
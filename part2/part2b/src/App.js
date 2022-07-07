import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'John', number: "123", id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
 
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
   const inPhonebookNumber = persons.some(item => item.nnumber === newNumber)
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
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
          value = {newNumber}
          onChange={handleNumberChange}
           />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p)=>(
      <p key = {p.name}> {p.name}</p>
      ))}
      <div>debug: {persons.id}</div>
      <div>debug: <pre>{JSON.stringify(persons, null, 2)}</pre></div>
    </div>
    
  )
}

export default App
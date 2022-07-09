import { useState } from 'react'

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
      {persons.filter(person=> person.name.match(new RegExp(searchValue, "i")))
          .map(filteredPerson => {
            return <li key={filteredPerson.name}>{filteredPerson.name} {filteredPerson.number}</li>
          })
          }
      <div>
        <input
          type = "text"
          name = "search"
          value = {searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      {/* <div>debug: {persons.id}</div>
      <div>debug: <pre>{JSON.stringify(persons, null, 2)}</pre></div> */}
    </div>
    
  )
}

export default App
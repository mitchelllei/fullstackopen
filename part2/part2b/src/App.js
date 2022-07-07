import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'John' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: persons.length + 1,
    }
  
    setPersons(persons.concat(nameObject))
    setNewName('')
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p)=>(
      <p key = {p.id}> {p.content}</p>
      ))}
      <div>debug: <pre>{JSON.stringify(persons, null, 2)}</pre></div>
    </div>
    
  )
}

export default App
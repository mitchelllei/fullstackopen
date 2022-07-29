import React from 'react'
import { useState} from 'react'
import Button from './Button'
import personService from '../services/persons'
const Search = ({persons, searchValue,setPersons}) => {
const [reRenderAfterDelete,setreRenderAfterDelete] = useState([])


const onClick = ({id}) => {
  console.log(id)
  if (window.confirm("Do you want to delete this entry?")){
  personService
  .deleteEntry(id)
  setPersons(persons.filter((person) => person.id !== id))
  
}
}

return(

<>
{persons.filter(person=> person.name.match(new RegExp(searchValue, "i")))
.map(filteredPerson => {
  {/* console.log(filteredPerson) */}
  return(
    
    <React.Fragment key = {filteredPerson.id}>
    <div>
    <li>{filteredPerson.name} {filteredPerson.number}</li>
    </div>
    <div>
    <Button onClick={() => onClick(filteredPerson)}> </Button>
    </div>
   
    
   
    </React.Fragment>
  ) 
})
}
</>
)
}

export default Search




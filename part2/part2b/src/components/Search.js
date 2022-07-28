import React from 'react'
import { useState} from 'react'
import Button from './Button'
import personService from '../services/persons'
const Search = ({persons, searchValue}) => {
  const getID = (object,value) => {
    return Object.keys(object.find(key => object[key]===value))
  }

const onClick = ({id}) => {
  console.log(id)
  personService
  .deleteEntry(id)
}

return(

<>
{persons.filter(person=> person.name.match(new RegExp(searchValue, "i")))
.map(filteredPerson => {
  console.log(filteredPerson)
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




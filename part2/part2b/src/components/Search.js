import React from 'react'

const Search = ({persons, searchValue}) => {
return(
<>
{persons.filter(person=> person.name.match(new RegExp(searchValue, "i")))
.map(filteredPerson => {
  return <li key={filteredPerson.name}>{filteredPerson.name} {filteredPerson.number}</li>
})
}
</>
)
}

export default Search
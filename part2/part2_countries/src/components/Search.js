import React from 'react'
const Search = ({countries, searchValue}) => {
    return(
    <>
    {countries.filter(country=> country.name.match(new RegExp(searchValue, "i")))
    .map(filteredPerson => {
      return <li key={filteredPerson.name}>{filteredPerson.name} {filteredPerson.number}</li>
    })
    }
    </>
    )
    }
    
    export default Search
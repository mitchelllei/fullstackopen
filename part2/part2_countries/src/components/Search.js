import React from "react";

const Search = ({ countries, searchValue }) => {
  const countriesFiltered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log("aaa", countries[0])
  const listedCountries =  countriesFiltered.map((countries) =>
  <li key={countries.name.common}>{countries.name.common}</li>
  )
  if (searchValue === ""){
    return <ul>{listedCountries}</ul>
  }
  if  (listedCountries.length >10){
  return( <>

  <p>Too many matches, make entry more specific</p>
  <ul>{listedCountries}</ul>
  </>
  )
  }

  if (listedCountries.length === 1) {
    return <>
      <p>Here is the data for </p>
      <ul>{listedCountries}</ul>
    </>
  }
  
  return (
    <div> 
     <ul>{listedCountries}</ul>
     </div>
     )
  }
    <>
     
        
      
  
    

</>
       


export default Search;
        
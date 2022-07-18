import React from "react";
import axios from "axios";
import SingleCountryData from './SingleCountryData'
import Button from "./Button"

const Search = ({ countries, searchValue}) => {
  const countriesFiltered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  const listedCountries = countriesFiltered.map((countries,index) => (
    <React.Fragment key={index}>
    
      <li> {countries.name.common} </li>
    </React.Fragment>
  ));



      
if (searchValue === "") {
  return <ul>{listedCountries}</ul>;
}
if (listedCountries.length > 1 && listedCountries.length <= 10) {
  return (
    <>
      <p>Too many matches, make entry more specific</p>
      <ul>{countriesFiltered.map((country,index) => <SingleCountryData key = {index} countriesFiltered1 = {country}/>) }


      </ul>
     
    </>
  );
}

if (listedCountries.length === 1) {
  return (
    <>
      <p>Here is the data for </p>
      <ul>{countriesFiltered.map((country,index) => <SingleCountryData key = {index} countriesFiltered1 = {country}/>) }
       </ul>
    </>
  )
}

return <div><ul>{listedCountries}</ul>;</div>;
}
export default Search;

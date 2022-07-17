import React from "react";
import axios from "axios";
import SingleCountryData from './SingleCountryData'
import Button from "./Button"

const Search = ({ countries, searchValue}) => {
  const countriesFiltered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  const listedCountries = countriesFiltered.filter((d) => d !== "" && d !== null).map((countries) => (
    <React.Fragment key={countries.name.common}>
      <li> {countries.name.common} </li>
    </React.Fragment>
  ));



      
if (searchValue === "") {
  return <ul>{listedCountries}</ul>;
}

if (listedCountries.length === 1) {
  return (
    <>
      <p>Here is the data for </p>
      <div>
      <SingleCountryData countriesFiltered = {countriesFiltered} countries={countries} /> 
       </div>
    </>
  );
}

return <div></div>;
}
export default Search;

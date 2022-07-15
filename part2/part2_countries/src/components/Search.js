import React from "react";
import axios from "axios";

const Search = ({ countries, searchValue }) => {
  const countriesFiltered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  const listedCountries = countriesFiltered.map((countries) => (
    <React.Fragment key={countries.name.common}>
      <li> {countries.name.common} </li>
    </React.Fragment>
  ));

  const listedCountriesData = countriesFiltered.map((countries) => (
    <React.Fragment key={countries.name.common}>
      <li> {countries.name.common}</li>
      <li> capital {countries.capital}</li>
      <li> area {countries.area}</li>
      <img src={countries.flags.png} alt="Flag" />
      
      <li>
        {
         
          countries.languages.map(({language,index}) => (
          <React.Fragment key={index}>
            <li>{language}</li>
          </React.Fragment>
        ))}
      </li>
    </React.Fragment>
  ));
      
if (searchValue === "") {
  return <ul>{listedCountries}</ul>;
}
if (listedCountries.length > 10) {
  return (
    <>
      <p>Too many matches, make entry more specific</p>
      <ul>{listedCountries}</ul>
    </>
  );
}

if (listedCountries.length === 1) {
  return (
    <>
      <p>Here is the data for </p>
      <ul>{listedCountriesData}</ul>
    </>
  );
}

return <div></div>;
}
export default Search;

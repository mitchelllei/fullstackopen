import React from 'react'

const Print = ({ countries, searchValue }) => {
    return (
        <>
        {countries.filter(country => country.name.common.match(new RegExp(searchValue, "i")))
        .map(filteredCountry => {
            return <li key={filteredCountry.name.common}>{filteredCountry.name.common}</li>
        })}


        </>
    )
}

export default Print


import React,{ useState} from 'react'
import Button from "./Button";

const SingleCountryData = ({index,  countriesFiltered1}) => {
  const [showCountry, setShowCountry] = useState(false);
  const onClickHandler = () => setShowCountry(!showCountry);
  
  const country  = countriesFiltered1
  console.log("country",country)
  console.log("name",country.name.common)
  return showCountry ? (
      <React.Fragment key = {index}>
        <li> {country.name.common}</li>
        <li> capital {country.capital}</li>
        <li> area {country.area}</li>
        <img src={country.flags.png} alt="Flag" />
        <li>
          {country.languages &&
            Object.values(country.languages)
              .filter((d) => d !== "" && d !== null)
              .map((language) => (
                <React.Fragment key={language}>
                  <p>{language}</p>
                </React.Fragment>
              ))}
        </li>
      </React.Fragment>
    ) : (
    <li>
      {country.name.common}
     
      <div>
        <Button onClick={onClickHandler} />{" "}
      </div>
    </li>
  )
}

export default SingleCountryData;

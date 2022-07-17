import React,{ useState} from 'react'
import Button from "./Button";

const SingleCountryData = ({ countriesFiltered}) => {
  const [showCountry, setShowCountry] = useState(false);
  const onClickHandler = () => setShowCountry(!showCountry);

  return showCountry ? (
    countriesFiltered.filter((d) => d !== "" && d !== null).map((countries) => (
      <React.Fragment key={countries.name.common}>
        <li> {countries.name.common}</li>
        <li> capital {countries.capital}</li>
        <li> area {countries.area}</li>
        <img src={countries.flags.png} alt="Flag" />
        <li>
          {countries.languages &&
            Object.values(countries.languages)
              .filter((d) => d !== "" && d !== null)
              .map((language) => (
                <React.Fragment key={language}>
                  <p>{language}</p>
                </React.Fragment>
              ))}
        </li>
      </React.Fragment>
    ))
  ) : (
    <li>
      {" "}
     
      <div>
        <Button onClick={onClickHandler} />{" "}
      </div>
    </li>
  )
}

export default SingleCountryData;

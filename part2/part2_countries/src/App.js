import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Form from './components/Form'
import Print from './components/Print'
import SingleCountryData from './components/SingleCountryData'


const App = () => {
  const [countries, setCountry] = useState([])
  const [searchValue, setSearchValue] = useState("")
 


  useEffect(() => {
    
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountry(response.data)
      })
  }, [])
  
  
  return(
    <div>
      <Form searchValue={searchValue} setSearchValue={setSearchValue} />
      <Search countries = {countries} searchValue={searchValue} />
   
     </div>
  
    

  )
}
export default App

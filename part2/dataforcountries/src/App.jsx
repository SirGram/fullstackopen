import { useState, useEffect } from 'react'
import './App.css'
import countryService from './services/countryService'
import FilterCountries from './components/filtercountries'



function App() {
  const [filter, setFilter] = useState("")
  const [countries, setCountries] = useState([])
  const handleChange = (e) => { setFilter(e.target.value) }



  useEffect(() => {
    countryService
      .getAll()      
      .then(data => {
        const countriesnames = data.map(item => item.name.common).sort()
        console.log(countriesnames)
        setCountries(countriesnames)
      })

  }, [])

  return (
    <>
      <p>find countries <input value={filter} onChange={handleChange}></input></p>

      <FilterCountries countries={countries} filter={filter} setFilter={setFilter}/>

    </>
  )
}

export default App

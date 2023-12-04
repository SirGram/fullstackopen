import { useState, useEffect } from "react"
import countryService from "../services/countryService"

const FilterCountries = ({ countries, filter, setFilter }) => {
    const filteredCountries = countries.filter(country => country.toLowerCase().includes(filter.toLowerCase()))
    console.log("filtered", filteredCountries.length, "countries")
    const [countryData, setCountryData] = useState(null)   
    const [weatherTemperature, setWeatherTemperature] = useState("")    
    const [weatherWind, setWeatherWind] = useState("")    
    const [weatherIcon, setWeatherIcon] = useState("")

    useEffect(() => {
        if (filteredCountries.length === 1)
            countryService
                .getCountry(filteredCountries[0].toLowerCase())
                .then(response => {
                    setCountryData(response)
                    console.log(countryData?.name?.common)
                })
    }, [filter])

    if (filter) {
        if (filteredCountries.length > 10)
            return <p>Too many matches, specify another filter</p>
        else if (filteredCountries.length === 1) {
            const languages = Object.values(countryData?.languages || {})
            let weather
            if (countryData?.capital){
                countryService
                    .getWeather(countryData.capital)
                    .then(response=>{                 
                        setWeatherTemperature((response.main.temp - 273.15).toFixed(2))                        
                        setWeatherWind(response.wind.speed)
                        setWeatherIcon(response.weather[0].icon)
                       
                    })
                }

            return (
                <div>
                    <h1>{countryData?.name?.common}</h1>
                    <p>capital {countryData?.capital}</p>
                    <p>area {countryData?.area}</p>
                    <h3>languages:</h3>
                    <ul>
                        {languages.map(language => (
                            <li key={language}>{language}</li>))}
                    </ul>
                    <img src={countryData?.flags?.png} alt="" />
                    <h3>Weather in {countryData?.capital}</h3>
                    <p>temperature {weatherTemperature} Celsius</p>
                    {weatherIcon && (
                    <img src= {`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}></img>)}
                    <p>wind {weatherWind} m/s</p>
                </div>
            )
        }
        else {
            const showCountry=(e,country)=>{
                e.preventDefault()
                setFilter(country)
            }
            return (
                <div>
                    {filteredCountries.map(country =>
                        (<p key={country}>{country} <button onClick={e=>showCountry(e,country)}>show</button></p>))}
                </div>
            )
        }
    }

}

export default FilterCountries
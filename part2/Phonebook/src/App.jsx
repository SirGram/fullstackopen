import { useState, useEffect } from 'react'
import Persons from "./components/persons"
import Filter from "./components/filter"
import AddContact from "./components/addcontact"
import axios from "axios"

const App = () => {
  
  const [persons, setPersons] = useState([])
  console.log(persons)
  const hook = ()=>{
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
      setPersons(response.data)
    })
}
  useEffect(hook, [])

 
  const [filter, setFilter] = useState("")  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter= {filter}setFilter = {setFilter}/>
      <h3>Add new Contact</h3>
      <AddContact persons = {persons} setPersons = {setPersons}/>      
      <h3>Contacts</h3>      
      <Persons persons = {persons} filter = {filter} setFilter = {setFilter}/>      
    </div>

  )
}

export default App

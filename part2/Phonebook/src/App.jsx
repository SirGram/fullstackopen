import { useState } from 'react'
import Persons from "./components/persons"
import Filter from "./components/filter"
import AddContact from "./components/addcontact"


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456'},
    { name: 'Ada Lovelace', phone: '39-44-5323523'},
    { name: 'Dan Abramov', phone: '12-43-234345'},
    { name: 'Mary Poppendieck', phone: '39-23-6423122'} 
  ]) 
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

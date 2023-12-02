import { useState, useEffect } from 'react'
import Persons from "./components/persons"
import Filter from "./components/filter"
import AddContact from "./components/addcontact"
import contactService from './services/contactService'

const App = () => {

  const [persons, setPersons] = useState([])
  const hook = () => {
    contactService
      .getAll()
      .then(initialContacts => {
        console.log('initial persons:', initialContacts)        
        setPersons(initialContacts)})      
  }
  useEffect(hook, [])

  

  const [filter, setFilter] = useState("")

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add new Contact</h3>
      <AddContact persons={persons} setPersons={setPersons} />
      <h3>Contacts</h3>
      <Persons persons={persons} setPersons={setPersons} filter={filter} />
    </div>

  )
}

export default App

import { useState, useEffect } from 'react'
import Persons from "./components/persons"
import Filter from "./components/filter"
import AddContact from "./components/addcontact"
import contactService from './services/contactService'
import Notification from "./components/notification"

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
  const [errorMessage, setErrorMessage] = useState(null)

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message = {errorMessage}/>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add new Contact</h2>
      <AddContact persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage} />
      <h2>Contacts</h2>
      <Persons persons={persons} setPersons={setPersons} filter={filter} />
    </div>

  )
}

export default App

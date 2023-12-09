import { useState} from 'react'
import contactService from '../services/contactService'

const AddContact=(props)=>{   

    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")   
    const handleName = (event) =>{setNewName(event.target.value)}
    const handleNumber = (event) =>{setNewNumber(event.target.value)}

    const addContact = (event) =>{
        console.log("trying to add to", props.persons)
        event.preventDefault() 
        const contact = {
            name:newName,
            number:newNumber
        }
        if (!props.persons.some(person => (person.name === newName)) ) {      
            contactService
                .create(contact)
                .then(response=>{
                    console.log("trying to introduce",response)
                    props.setPersons(persons => [...persons, response])
                    setNewName("")
                    setNewNumber("")                    
                    props.setErrorMessage(`Added ${newName}`)
                    
                })
                
                
          
            
        } else {  
            const existingContact = props.persons.find((person)=>(person.name === newName))
            const question = window.confirm(`${newName} is already added to the phonebook. Replace the old number with a new one?`)

            if (question){
                contactService
                    .update(existingContact.id, contact)
                    .then(updatedContact=>{
                        console.log("trying to reintroduce",updatedContact)
                        props.setPersons(persons => persons.map((person)=> person.id === updatedContact.id ? updatedContact: person))
                        setNewName("")
                        setNewNumber("")                        
                        props.setErrorMessage(`Changed ${newName}`)
                    })                        
                    .catch(error => {
                         props.setErrorMessage(`Information of ${newName} has already been removed from the server`)
                         setTimeout(() => {
                            props.setErrorMessage(null)
                         }, 5000)
                    })

            }
        }    
    }
    return(
        <form onSubmit = {addContact}>
        <div>name: <input value = {newName} onChange={handleName}/></div> 
        <div>number: <input value= {newNumber} onChange = {handleNumber}></input></div>
        <button type="submit">add</button>    
        </form>   
    )
}

export default AddContact

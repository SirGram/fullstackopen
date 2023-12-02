import { useState} from 'react'
import contactService from '../services/contactService'

const AddContact=(props)=>{   

    const [newName, setNewName] = useState("")
    const [newPhone, setNewPhone] = useState("")   
    const handleName = (event) =>{setNewName(event.target.value)}
    const handlePhone = (event) =>{setNewPhone(event.target.value)}

    const addContact = (event) =>{
        console.log("trying to add to", props.persons)
        event.preventDefault() 
        const contact = {
            name:newName,
            phone:newPhone
        }
        if (!props.persons.some(person => (person.name === newName)) ) {      
            contactService
                .create(contact)
                .then(response=>{
                    console.log("trying to introduce",response)
                    props.setPersons(persons => [...persons, response])
                    setNewName("")
                    setNewPhone("")                    
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
                        setNewPhone("")                        
                        props.setErrorMessage(`Changed ${newName}`)
                    })
            }
        }    
    }
    return(
        <form onSubmit = {addContact}>
        <div>name: <input value = {newName} onChange={handleName}/></div> 
        <div>phone: <input value= {newPhone} onChange = {handlePhone}></input></div>
        <button type="submit">add</button>    
        </form>   
    )
}

export default AddContact

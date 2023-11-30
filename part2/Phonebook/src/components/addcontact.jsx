import { useState, useEffect } from 'react'
import axios from 'axios'

const AddContact=(props)=>{   

    const [newName, setNewName] = useState("")
    const [newPhone, setNewPhone] = useState("")   
    const handleName = (event) =>{setNewName(event.target.value)}
    const handlePhone = (event) =>{setNewPhone(event.target.value)}

    const addContact = (event) =>{
        console.log("trying to add to", props.persons)
        event.preventDefault() 
        const contact = {
            name:{newName},
            number:{newNumber}
        }
        if (!props.persons.some(obj => (obj.name === newName)) ) {      
            
            axios
                .post("http://localhost:3001/persons", contact)
                .then(response=>console.log("sent ", response.data))

            setNewName("")
            setNewPhone("")
        } else {  
            console.log("alert")    
            alert(`${newName} and/or ${newPhone}is already added to phonebook`)
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

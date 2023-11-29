import { useState } from 'react'
const AddContact=(props)=>{   

const [newName, setNewName] = useState("")
const [newPhone, setNewPhone] = useState("")   
const handleName = (event) =>{setNewName(event.target.value)}
const handlePhone = (event) =>{setNewPhone(event.target.value)}

const addContact = (event) =>{
    console.log(props.persons, newName, newPhone)
    event.preventDefault() 
    if (!props.persons.some(obj => (obj.name === newName)) ) {      
        props.setPersons([...props.persons,{name:newName, phone: newPhone}])
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

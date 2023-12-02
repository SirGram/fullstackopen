import contactService from "../services/contactService"

const Persons = (props) => {  
  const personsToShow = props.persons.filter(person => person.name.includes(props.filter))

  const deleteContact=(id)=>{
    contactService
      .remove(id)
      .then(()=>{
        const updatedPersons = props.persons.filter(person => person.id !== id)
        props.setPersons(updatedPersons)
      })
  
  }

  return(
  <div>
    {personsToShow.map((person,index)=> (
    <form key= {index} onSubmit={(e)=>{
      e.preventDefault()
      console.log("selected for deletion ", person)
      const question = window.confirm("Delete?", person.name)
      if (question){
        deleteContact(person.id)}
        
      else{console.log("Deletion canceled")}
    }}>

    <p >{person.name} {person.phone} <button type="submit">delete</button> </p>
    </form>  
    ))}    
  </div>)
}
export default Persons
const Persons = (props) => {  
    const personsToShow = props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase()))
    return(
    <div>
      {personsToShow.map((person,index)=> (
      <p key= {index}>{person.name} {person.phone}</p>
      ))}
    </div>)
  }
export default Persons
const Persons = (props) => {  
  console.log("arrived", props)
  const personsToShow = props.persons.filter(person => person.name.includes(props.filter))
  return(
  <div>
    {personsToShow.map((person,index)=> (
    <p key= {index}>{person.name} {person.phone}</p>
    ))}
  </div>)
}
export default Persons
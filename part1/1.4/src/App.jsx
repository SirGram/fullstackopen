const Header =(props) => {
  console.log(props)
  return(
    <h1>{props.course}</h1>
  )
}
const Content = (props) =>{
  console.log(props)
  return (
    <> 
    <Part name={props.parts[0].name} exercise={props.parts[0].exercises}/>    
    <Part name={props.parts[1].name} exercise={props.parts[1].exercises}/>    
    <Part name={props.parts[2].name} exercise={props.parts[2].exercises}/>

    </>
   
  )
}
const Part = (props) =>{
  console.log(props)
  return(
    <p>{props.name} {props.exercise}</p>
  )

}
const Total = (props) =>{
  console.log(props)
  const numberexercises= props.exercises[0].exercises+props.exercises[1].exercises+props.exercises[2].exercises
  return(
    <p>Number of exercises {numberexercises}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total exercises={parts}/>      
    </div>
  )
}

export default App



const Part = (props)=> {
  return(
    <p>{props.part.name} {props.part.exercises}</p>
  )
}
const Total =(props)=> {
 
  const exerciseValues = props.parts.map((part)=>part.exercises)
  let initialValue=0

  console.log(exerciseValues)
  const total = exerciseValues.reduce((accumulator, currentValue) =>  accumulator+currentValue, initialValue)
  console.log(total);
  
  return(
    <p>Total of {total} exercises</p>
  )
}

const Course = (props) => {
  return (
    <div>
    <h1>{props.course.name}</h1>
    
      <div>
        
        {props.course.parts.map((part) =>
          <Part key= {part.id} part = {part}/>
        )}
        <Total parts={props.course.parts}/>
      </div>

    </div>
    
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App



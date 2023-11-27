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
    <h4>Total of {total} exercises</h4>
  )
}

const Course = (props) => {
  return (
    <>
      <h1>"Web development curriculum"</h1>
      {props.courses.map((course)=>(
        <div key = {course.id}>
        <h2>{course.name}</h2>

        <div>        
          {course.parts.map((part) =>
            <Part key= {part.id} part = {part}/>
          )}
          <Total parts={course.parts}/>
        </div>  
      </div> 

      ))}
    </>
    
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App



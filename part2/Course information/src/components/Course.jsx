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
    {/*a takes each course from the array*/}
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
export default Course
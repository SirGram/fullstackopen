import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const Button = (props) => {
  console.log(props)
  return(      
  <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Results = props => <p>{props.grade} {props.value}</p>

const CalculateStats = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = (props.good + props.bad ) / 3
  const positive = props.good / total
  return(
    <div>
    <p>all {total}</p>
    <p>average {average}</p>    
    <p>positive {positive}</p>
    </div>
  )
}
 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = "give feedback"
  const title2 = "statistics"

  


  return (
    
    <div>
      <Header title = {title}/>

      <Button handleClick = {()=>setGood(good+1)} text = {"good"}/>
      <Button handleClick = {()=>setNeutral(neutral+1)} text = {"neutral"}/>
      <Button handleClick = {()=>setBad(bad+1)} text = {"bad"}/>

      <Results  grade= {"good"} value = {good} />
      <Results  grade= {"neutral"} value = {neutral} />
      <Results  grade= {"bad"} value = {bad} />

      <CalculateStats good = {good} neutral = {neutral} bad = {bad}/>
      
         
      <Header title = {title2}/>
    </div>
  )
}

export default App
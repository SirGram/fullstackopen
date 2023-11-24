import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const Button = (props) => {
  console.log(props)
  return(      
  <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = props => <p>{props.text} {props.value}</p>

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good + props.bad ) / 3
  const positive = props.good / all
  return(
    all === 0 ?(
      <p>No feedback given</p> 
    ) : <div>
    <StatisticLine text = {"good"} value= {props.good}/>    
    <StatisticLine text = {"neutral"} value= {props.neutral}/>
    <StatisticLine text = {"bad"} value= {props.bad}/>
    <StatisticLine text = {"all"} value= {all}/>
    <StatisticLine text = {"average"} value= {average}/>    
    <StatisticLine text = {"positive"} value= {positive}/>
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
      <Header title = {title2}/>

      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
               
   
    </div>
  )
}

export default App
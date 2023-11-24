import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const Button = (props) => {
  console.log(props)
  return(      
  <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Stat = props => <p>{props.name} {props.value}</p>

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good + props.bad ) / 3
  const positive = all === 0 ? 0 : props.good / all
  return(
    <div>
      <Stat name = {"good"} value= {props.good}/>    
      <Stat name = {"neutral"} value= {props.neutral}/>
      <Stat name = {"bad"} value= {props.bad}/>
      <Stat name = {"all"} value= {all}/>
      <Stat name = {"average"} value= {average}/>    
      <Stat name = {"positive"} value= {positive}/>
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
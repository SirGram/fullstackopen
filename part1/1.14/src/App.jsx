import React, { useState } from 'react'

const Header= (props)=><h1>{props.title}</h1>

const changeAnecdote = (props)=> {
  const randomNumber = Math.floor(Math.random()*props.length)
  console.log("changed to", randomNumber)
  return randomNumber

}

const voteAnecdote = (selected, votes, setVotes)=>{
  console.log("voted", selected)
  const newVotes = [...votes]
  newVotes[selected]+=1
  console.log(newVotes)
  setVotes(newVotes)
}

const selectVoted = (props)=>{
  const max = Math.max(...props)
  const indexOfMax= props.indexOf(max)
  return indexOfMax
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(0)) 

  const title= "Anecdote of the day"
  const title2= "Anecdote with most votes"

  return (
    <div>
      <Header title = {title}/>

      <p>{anecdotes[selected]}</p>      
      <p>Has {votes[selected]} votes</p>
      
      <button onClick={() => setSelected(changeAnecdote(anecdotes))}>next anecdote</button>
      <button onClick={() => voteAnecdote(selected, votes, setVotes)}>Vote</button>
      
      <Header title = {title2}/>
      <p>{anecdotes[selectVoted(votes)]}</p>

      
    </div>
  )
}

export default App

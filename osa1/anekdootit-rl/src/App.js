import { useState } from 'react'


const Button = (props) => {
  return(
    <button onClick={props.handleClick}> {props.text} </button>
  )
}

const Display = (props) => {
  return(
    <div>
      <h1>Anecdote of the day!!!</h1>
      <p>{props.anecdotes[props.selected]}</p>
      <p>has{props.points[props.selected]}votes</p>
    </div>
  )
} 
const MostVotedAnecdote = (props) => {
  let mostVoted = 0;

  for (let i = 1; i < props.points.length; i++){
    if (props.points[i] > props.points[mostVoted]) {
      mostVoted = i;
    }
  }
  return (
    <div>
      <h1>Most voted Anecdote</h1>
      <p>{props.anecdotes[mostVoted]}</p>
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  let [selected, setSelected] = useState(0)
  let [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const addToPoints = () => {
    console.log(points)
    const copy = [...points]
    copy[selected] += 1;
    setPoints(copy)
  }

  return (
    <div>
      <Display anecdotes = {anecdotes} selected = {selected} points={points} />
      <Button handleClick={() => addToPoints()} text="Vote!" points = {points} />
      <Button handleClick={() => setSelected(selected = Math.floor(Math.random() * anecdotes.length))} text="Next anecdote!" selected = {selected} />
      <MostVotedAnecdote points = {points} anecdotes = {anecdotes} />
    </div>
  )
}

export default App

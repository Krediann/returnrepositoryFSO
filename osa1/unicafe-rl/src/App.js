import { useState } from 'react'



const StatisticLine = (props) => {
  return(
      <b>{props.text} {props.value}</b>
  )
}

const Statistics = (props) => {
  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0){
  let All = props.good+props.neutral+props.bad
  let Average = (props.good - props.bad)/All
  let Percentage = props.good/All
    return(
      <table>
        <tbody>
          <tr><td><StatisticLine text="Good" value={props.good} /></td></tr>
          <tr><td><StatisticLine text="Neutral" value={props.neutral} /></td></tr>
          <tr><td><StatisticLine text="Bad" value={props.bad} /></td></tr>
          <tr><td><StatisticLine text="All" value={All} /></td></tr>
          <tr><td><StatisticLine text="Average" value={Average} /></td></tr>
          <tr><td><StatisticLine text="Positive reviews" value={Percentage} /></td></tr>
        </tbody>
    </table>
    )
  }
  else{
    return(
      <div>
        <h2>Statistics!</h2>
        <p>No data collected</p>
      </div>
    )
  }
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}> {props.text} </button>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={() => setGood(good+1)} text="Good!" good = {good}/>
      <Button handleClick={() => setNeutral(neutral+1)} text="Neutral!" neutral = {neutral}/>
      <Button handleClick={() => setBad(bad+1)} text="Bad!" bad = {bad}/>

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App

import { useState } from 'react'


const Statistics = (props) => {
  let All = props.good+props.neutral+props.bad
  return(
  <div>
  <p>All: {All}</p>
  <p>Average: {(props.good - props.bad)/All}</p>
  <p>Positive reviews:{props.good/All} </p>
  </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback!</h1>
      <button onClick={() => {
        setGood(good+1);
      }}>Good!</button>

      <button onClick={() => {
        setNeutral(neutral+1);
      }}>Neutral!</button>

      <button onClick={() => {
        setBad(bad+1);
      }}>Bad!</button>

      <h2>Statistics!</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App

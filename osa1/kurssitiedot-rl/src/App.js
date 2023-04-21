const Header = (props) => {
  return ( 
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return(
    <div>
      <p> {props.parts1} {props.exercises1} </p>
      <p> {props.parts2} {props.exercises2} </p>
      <p> {props.parts3} {props.exercises3} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part parts1 = {props.parts[0].part} exercises1 = {props.parts[0].exercises} />
      <Part parts2 = {props.parts[1].part} exercises2 = {props.parts[1].exercises} />
      <Part parts3 = {props.parts[2].part} exercises3 = {props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return ( 
    <div>
      <p> Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )
}


const App = () => {
  const course = "Half Stack application development"
  const parts = [
    {part: "Fundamentals of React", exercises: 10},
    {part: "Using props to pass data", exercises: 7},
    {part: "State of a component", exercises: 14}
  ]

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App

const Header = (props) => {
  return ( 
    <div>
      <h1>{props.course.name}</h1>
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
      <Part parts1 = {props.course.parts[0].name} exercises1 = {props.course.parts[0].exercises} />
      <Part parts2 = {props.course.parts[1].name} exercises2 = {props.course.parts[1].exercises} />
      <Part parts3 = {props.course.parts[2].name} exercises3 = {props.course.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return ( 
    <div>
      <p> Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} </p>
    </div>
  )
}


const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {name: "Fundamentals of React", exercises: 10},
      {name: "Using props to pass data", exercises: 7},
      {name: "State of a component", exercises: 14}
  ]}

  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />
    </div>
  )
}

export default App

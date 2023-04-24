
const Course =(props) => {
  const course = props.course
  return(
    <div>
      <Header course = {course} />
      <Content course = {course} />
    </div>
  )
}

const Header = (props) => {
  const course = props.course
  return ( 
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  const course = props.course
  return (
    <div>
      <Part course = {course} />
    </div>
  )
}

const Part = (props) => {
  const course = props.course
  return(
    <div>
      {course.parts.map(part =>(
        <PartList key={part.id} part={part} />
      ))}
    </div>
  )
}

const PartList = props => {
  const part = props.part
  return(
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}

/*
const Total = (props) => {
  return ( 
    <div>
      <p> Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} </p>
    </div>
  )
}
*/

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {name: "Fundamentals of React", exercises: 10, id: 1},
      {name: "Using props to pass data", exercises: 7, id: 2},
      {name: "State of a component", exercises: 14, id: 3},
      {name: "Kun tehtävä hajoaa", exercises: 2, id: 4}
  ]}

  return (
    <div>
      <Course course = {course} />
    </div>
  )
}

export default App


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
      <Total course = {course} />
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

const PartList = (props) => {
  const part = props.part
  return(
    <div>
      <p>{part.name} <b>{part.exercises}</b></p>
    </div>
  )
}

const Total = (props) => {
  const course = props.course
  const total = course.parts.reduce((total, part) => total + part.exercises, 0)
  return(
    <div>
      <p>Total of <b>{total}</b> exercises in this course!</p>
    </div>
  )
}

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

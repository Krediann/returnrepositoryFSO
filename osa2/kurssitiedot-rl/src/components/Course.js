const Course =(props) => {
  const courses = props.course
  return(
    <div>
      {courses.map((course) => (
        <div key = {course.id}>
          <Header course = {course} />
          <Content course = {course} />
        </div>
        ))}
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

//Making this change just so I can commit Task 2-3 since I had already done it with reduce :D
const Total = (props) => {
  const course = props.course
  const total = course.parts.reduce((total, part) => total + part.exercises, 0)
  return(
    <div>
      <p>Total of <b>{total}</b> exercises in this course!</p>
    </div>
  )
}

export default Course;
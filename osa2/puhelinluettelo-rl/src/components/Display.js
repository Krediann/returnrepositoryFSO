const Button = (props) =>{
  const text = props.text
  const handleClick = props.handleClick
  return(
      <button onClick={handleClick}>{text}</button>
  )
}

const Display = (props) => {
  const persons = props.persons
  const filter = props.filter
  const deletePerson = props.deletePerson
  const filterPersons = (arr, filter) => {
    return arr.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));
  }

  const filteredPersons = filterPersons(persons, filter)
    return(
      <div>
        {filteredPersons.map((person) => (
          <div key = {person.name}>
            <p>{person.name} {person.number}<Button handleClick = {() => deletePerson(person.id, person.name)} text = "Delete"/></p>
          </div>
        ))}
      </div>
    )
}

export default Display;
const Display = (props) => {
  const persons = props.persons
  const filter = props.filter
  const filterPersons = (arr, filter) => {
    return arr.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));
  }

  const filteredPersons = filterPersons(persons, filter)
    return(
      <div>
        {filteredPersons.map((person) => (
          <div key = {person.name}>
            <p>{person.name} {person.number}</p>
          </div>
        ))}
      </div>
    )
}

export default Display;
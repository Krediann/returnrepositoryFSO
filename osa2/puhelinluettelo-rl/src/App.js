import { useState } from "react"

const Display = (props) => {
  const persons = props.persons
  return(
    <div>
      {persons.map((person) => (
        <div key = {person.name}>
          <p>{person.name} {person.number}</p>
        </div>
      ))}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ])

  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const isCopy = persons.find(({name}) => name === newName)
    console.log(isCopy)
    if (!isCopy){
      setPersons([...persons, newPerson]);
    }
    else {
      alert(`${newName} is already added to phonebook! Haha >:)`)
    }
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <div>
      <h1>Phonebook</h1>
      </div>
      <div>

      </div>
      <div>
        <h2>Add a new person</h2>
      </div>
      <div>
        <form onSubmit={addPerson}>
          <div>
            Name: <input type = "tel" value={newName} onChange={handleNameChange} />
          </div>
          <div>
            Phonenumber: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <button type="submit">Add!</button>
        </form>
      </div>
      <h2>Numbers</h2>
      <Display persons = {persons} />
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
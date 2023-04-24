import { useState } from "react"
import Display from "./components/Display";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ])

  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  const addPerson = (e) => {
    e.preDefault()
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

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <div>
      <h1>Phonebook</h1>
      </div>
      <div>
        Filter search results: <input value={filter} onChange={handleFilterChange} />
      </div>
      <div>
        <h2>Add a new person</h2>
      </div>
      <div>
        <form onSubmit={addPerson}>
          <div>
            Name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            Phonenumber: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <button type="submit">Add!</button>
        </form>
      </div>
      <h2>Numbers</h2>
      <Display persons = {persons} filter = {filter}/>
      <div>debug: {newName}{newNumber}</div>
    </div>
  )
}

export default App
import { useState } from 'react'

const Display = (props) => {
  const persons = props.persons
  return(
    <div>
      {persons.map((person) => (
        <div key = {person.name}>
          <p>{person.name}</p>
        </div>
      ))}
    </div>
  )
}

const App = () => {
  let [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  let [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
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
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <button type="submit">Add!</button>
      </form>
      <h2>Numbers</h2>
      <Display persons = {persons} />
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
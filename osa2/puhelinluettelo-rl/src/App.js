import { useState, useEffect } from "react"
import axios from "axios"

import Display from "./components/Display"
import Form from "./components/Form"
import Filter from "./components/Filter"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  useEffect(() => {
    axios
    .get("http://localhost:3001/persons")
    .then(res => {
      setPersons(res.data)
    })
  })



  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const isCopy = persons.find(({name}) => name === newName)
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
      <Filter 
      filter = {filter} 
      handleFilterChange = {handleFilterChange}
      />
      <div>
        <h2>Add a new person</h2>
      </div>
      <div>
        <Form
          newName = {newName}
          newNumber = {newNumber}
          handleNameChange = {handleNameChange}
          handleNumberChange={handleNumberChange}
          addPerson = {addPerson}
        />
      </div>
      <h2>Numbers</h2>
      <Display persons = {persons} filter = {filter}/>
      <div>debug: {newName}{newNumber}</div>
    </div>
  )
}

export default App
import { useState, useEffect } from "react"
import axios from "axios"

import Display from "./components/Display"
import Form from "./components/Form"
import Filter from "./components/Filter"
import personsService from "./services/persons"
import Notification from "./components/message"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    axios
    .get("http://localhost:3001/persons")
    .then(res => {
      setPersons(res.data)
    })
  }, [])

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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
      personsService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons([...persons, returnedPerson]);
      })
      setMessage(`Added ${newName}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
    else {
      updatePerson(isCopy.id)
    }
    setNewName("")
    setNewNumber("")
  }

  const updatePerson = (id) => {
    if (window.confirm(`${newName} is already added to phonebook! Replace the old number with a new one?`) === true){
      const person = persons.find(p => p.id === id)
      const changedperson = {...person, number: newNumber}
      personsService
      .update(id, changedperson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        setMessage(`Updated ${person.name}'s phonenumber to: ${newNumber}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      .catch(error => {
        console.log(error)
        setErrorMessage(
          `Data of ${person.name} has already been deleted from the server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
  }

  const deletePerson = (id, name) => {
    if(window.confirm(`Are you sure you want to delete ${name}?`) ===true){
    personsService
      .del(id)
      .then( res => {
        setPersons(persons.filter(person => person.id !== id));
      })
      setMessage(`Deleted ${name}'s info from the database`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
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
      <h1>Phonebook</h1>
      <Notification message={message} errorMessage = {errorMessage} />
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
      <div><Display persons = {persons} filter = {filter} deletePerson = {deletePerson} /></div>
      <div>debug: {newName}{newNumber}</div>
    </div>
  )
}
export default App
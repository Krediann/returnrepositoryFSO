const Form = (props) => {
  const newName = props.newName
  const newNumber = props.newNumber
  const handleNameChange = props.handleNameChange
  const handleNumberChange = props.handleNumberChange
  const addPerson = props.addPerson
  return(
    <div>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <br></br>
        <div>
          Phonenumber: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <br></br>
        <button type="submit">Add!</button>
      </form>
    </div>
  )
}

export default Form;
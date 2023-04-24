const Filter = (props) => {
  const filter = props.filter
  const handleFilterChange = props.handleFilterChange
  return(
    <div>
      Filter search results: <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter;
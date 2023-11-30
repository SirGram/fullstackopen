const Filter = (props)=>{
    const handleFilter= (event)=>{
      props.setFilter(event.target.value)  
      console.log("filter", props.filter)
    }
    return(    
      <div>filter shown with <input value = {props.filter} onChange = {handleFilter}/></div>
    )
  }
export default Filter
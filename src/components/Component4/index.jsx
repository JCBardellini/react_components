import React, { useState } from 'react'

const AddNames = () => {

    const [name, setName] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (inputValue !== "") {
            setName([...name, inputValue])
            setInputValue("")
        }
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={inputValue}/>
            <button type="submit">Submit</button>
        </form>
        <ul>
            {name.map( (name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    </div>
  )
}

export default AddNames
import React, { useState } from 'react'
import './index.css'

const SimpleInput = () => {

    const [inputValue, setInputValue] = useState("")
    const [displayText, setDisplayText] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        if (inputValue !== "") {
            setDisplayText(inputValue);
            setInputValue("")
        }
    }

  return (

    <div>
        <input type="text" value={inputValue} onChange={handleInputChange}/>
        <button onClick={handleClick}>Show this text on screen</button>
        <p>{displayText}</p>
    </div>
  )
}

export default SimpleInput
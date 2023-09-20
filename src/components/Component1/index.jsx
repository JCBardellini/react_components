import React, { useState } from 'react'
import './index.css'
// added a css file to style for later

const Counter = () => {
    // use a useState hook to control my buttons every time i click it
    const [count, setCount] = useState(0)
    // created a handleAdd function, that will add a +1 every time you click on the button
    const handleAdd = () => {
        setCount(count + 1);
    }
    // created a handleSub function that will take subtract -1 every time you click on the subtract button, also created a if statement, ensuring that it will not go below 0
    const handleSub = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    
  return (
    <div>
        <h2>total is {count}</h2>
        <button onClick={handleAdd}>Add +</button>
        <button onClick={handleSub}>Sub -</button>
    </div>
  )
}

export default Counter
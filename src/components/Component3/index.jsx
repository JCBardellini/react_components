import React, { useState } from 'react'

const RandomName = () => {


    const [name, setName] = useState([  
    "Joe", "Simo", "Rene", "Francis",
    "DJ", "Cynthia", "Kelly", "Yaqi",
    "Svitlana", "Ruzeda", "Xavier", "Jasmine",
   "Yain", "Mexian", "JC", "Massoud", "Lucas",
    "Marco","Akshat"
    ])
    const [randomIndex, setRandomIndex] = useState("")

    const randomNum = () => {
        const randomID = Math.floor(Math.random() * name.length);
        setRandomIndex(randomID)
    }
    

  return (
    <div>
        <h1>{randomIndex !== null ? name[randomIndex] : "click the button for a name"}</h1>
        <button onClick={randomNum}>RandomName</button>
    </div>
  )
}

export default RandomName
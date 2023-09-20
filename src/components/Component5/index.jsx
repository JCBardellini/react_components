import React, { useState } from 'react'

const ToggleTheme = () => {

    const [theme, setTheme] = useState("light")
    
    const handleClick = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light")
        }
    }

  return (
    <div>
        <button onClick={handleClick}>Change Theme</button>
        <div className={theme}> I am {theme} theme!</div>
    </div>
  )
}

export default ToggleTheme
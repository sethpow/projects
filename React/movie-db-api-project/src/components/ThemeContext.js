import React, { createContext, useState } from 'react'
const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState('Light')
    
    function changeTheme(){
        setTheme(prevTheme => 
            (prevTheme === 'Light' ? 'Dark' : 'Light')
        )
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}

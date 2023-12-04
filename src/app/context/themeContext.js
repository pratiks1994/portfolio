"use client"
const { createContext, useState } = require("react");
import React from 'react'
export const themeContext = createContext(null)

export default function ThemeContextProvider({children}) {

const [theme,setTheme] = useState("dark")

  return (
    <themeContext.Provider value = {{theme,setTheme}} >
        {children}
    </themeContext.Provider>
    
  )
}




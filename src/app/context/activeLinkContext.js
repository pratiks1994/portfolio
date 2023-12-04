"use client"
const { createContext, useState } = require("react");
import React from 'react'
export const activeLinkContext = createContext(null)

export default function ActiveLinkContextProvider({children}) {


const [activeLink,setActiveLink] = useState("home")
const [timeOfLastClick,setTimeOfLastClick] = useState(0)


  return (
    <activeLinkContext.Provider value = {{activeLink,setActiveLink,timeOfLastClick,setTimeOfLastClick}} >
        {children}
    </activeLinkContext.Provider>
    
  )
}




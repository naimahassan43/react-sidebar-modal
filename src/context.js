import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children})=>{
   return <AppContext.Provider value='hiiii'>{children}</AppContext.Provider>
}

//custom hook
export const useGlobalContext = ()=>{
   return useContext(AppContext)
}

export {AppContext, AppProvider}
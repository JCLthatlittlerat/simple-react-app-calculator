//Context API demonestration
import React, { createContext, useContext, useState } from 'react'
const MealsContext = createContext(); //context created with "MealsContext" name
const todaysMeals = ["Baked Beans", "Baked Sweat Potatoes"] //This is an array data for the state data, which is the data to be shared with the context created as 'contextProvider'
function ContextProviderExample({children}) {
    const [meals] = useState(todaysMeals) //
  return (
    <MealsContext.Provider value={{meals}}>
        {children}
    </MealsContext.Provider>
  )
}

export const useMealsListContext = () =>useContext(MealsContext);
export default ContextProviderExample
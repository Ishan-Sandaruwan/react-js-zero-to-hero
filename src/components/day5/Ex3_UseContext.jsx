import React, { createContext } from 'react'
import Ex3_child from './Ex3_child';

export const dataContext = createContext();

export default function Ex3_UseContext() {
    const user = {name:"saman",age:"15"}

  return (
    <dataContext.Provider value={user}>
        <Ex3_child/>
    </dataContext.Provider>
  )
}

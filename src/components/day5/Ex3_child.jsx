import React, { useContext } from 'react'
import { dataContext } from './Ex3_UseContext';

export default function Ex3_child() {
    const user = useContext(dataContext);
  return (
    <div>name : {user.name}</div>
  )
}

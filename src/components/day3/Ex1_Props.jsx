import React from 'react'

// Exercise 1: Create a functional component UserCard that accepts name and age as props and displays a user card.

export default function Ex1_Props(props) {
  return (
    <div>
        name : {props.name} , age : {props.age}
    </div>
  )
}

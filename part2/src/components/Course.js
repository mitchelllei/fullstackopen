import React from 'react'

const Course = ({ courses }) => {
    return (
        <>
       {courses.map(({ name, id, parts }) => (
        <React.Fragment key={id}>
    <p>Name: {name}</p>
    <ul>
      {parts.map((part) => (
        <li key={part.id}>{part.name}</li> 
      ))}
    </ul>
  </React.Fragment>
))}
        </>
    )
}


export default Course
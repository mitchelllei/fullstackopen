import React from 'react'

const Course = ({ courses }) => {
    return (
        <>
       {courses.map(({ name, id, parts }) => (
        <React.Fragment key={id}>
    <p>Name: {name}</p>
    <ul>
      {parts.map((part) => (
        <li key={part.id}>{part.name} {part.exercises}</li> 
      ))}

    </ul>
    <p>Total: {parts.reduce((total, current) => total = total + current.exercises,0)}</p>
  </React.Fragment>
))}
        </>
    )
}


export default Course
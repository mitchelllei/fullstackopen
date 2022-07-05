import React from 'react'

const Course = ({ courses }) => {
    return (
        <>
        <h1>Web Development Curriculum</h1>
        {courses.flatMap(course => course.parts.map(part => {return (<p key={`${course.id}-${part.id}`}>{part.exercises}</p>)}))},
        {courses.flatMap(course => <p>{course.name}</p>)}
        </>
    )
}

export default Course
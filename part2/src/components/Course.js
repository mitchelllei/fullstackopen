import React from 'react'

const Course = ({ course }) => {
    return (
        <>
        <h1>{course.name}</h1>
        <ul>
        {course.parts.map(course1 => 
          <li key={course1.id}>
            {course1.name} {course1.exercises}
          </li>
        )}
      </ul>
    
        </>
    )
}
const Course1 = ({ course1 }) => <h1>{course1}</h1>

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>
    <>
        <Part
            part={parts[0]}
        />
        <Part
            part={parts[1]}
        />
        <Part
            part={parts[2]}
        />
    </>

export default Course
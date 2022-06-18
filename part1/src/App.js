/*
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
*/

const Header = (props) => {
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part},{props.exercise_n}
      </p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>
        {props.total}
      </p>
    </div>
  )
}

//1.2
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part},{props.number}
      </p>
    </div>
  )
}
const ContentRefactored = (props) => {
  return (
    <div>
      <p>
      {props.parts.map((part,index)=>{
        return(
          <Part part={part.part} number={part.exercise} key={index}/>
        )
      })
      }
      </p>
    </div>
  )
}

const App = (props) => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [{ part: 'Fundamentals of React', exercise: 10 }, { part: 'Using props to pass data', exercise: 7 }, { part: 'State of a component', exercise: 14 }]
  return (
    <>
      {/*Header renders name*/}
      <Header course={course} />
      {/*Content renders parts and number of exercises*/}
      <Content part={part1} exercise_n={exercises1} />
      <Content part={part2} exercise_n={exercises2} />
      <Content part={part3} exercise_n={exercises3} />
      {/*Total renders total number of exercises*/}
      <Total total={exercises1 + exercises2 + exercises3} />
      Exercise 1.2 Refactored Content component
      Content Refactored
      <ContentRefactored parts={parts} />
    </>
  )
}
export default App
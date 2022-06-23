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

import { valueToNode } from "@babel/types"
import { useDebugValue } from "react"

// const Header = (props) => {
//   return (
//     <div>
//       <p>
//         {props.course}
//       </p>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part},{props.exercise_n}
//       </p>
//     </div>
//   )
// }
// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         {props.total}
//       </p>
//     </div>
//   )
// }

// //1.2
// const Part = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part},{props.number}
//       </p>
//     </div>
//   )
// }
// const ContentRefactored = (props) => {
//   return (
//     <div>
//       <p>
//       {props.parts.map((part,index)=>{
//         return(
//           <Part part={part.part} number={part.exercise} key={index}/>
//         )
//       })
//       }
//       </p>
//     </div>
//   )
// }

{/* Exercises 1.1,1.2

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
//<Header course={course}/>
{/*Content renders parts and number of exercises*/ }
//<Content part={part1} exercise_n={exercises1} />
//<Content part={part2} exercise_n={exercises2} />
//<Content part={part3} exercise_n={exercises3} />
{/*Total renders total number of exercises*/ }
//<Total total={exercises1 + exercises2 + exercises3} />
//Exercise 1.2 Refactored Content component
//Content Refactored
//<ContentRefactored parts={parts} />
//</>
// )
//*/}
//1.3
// const Header = (props) => {
//   console.log(props)
//   return <h1>{props.course}</h1>
// }

// const Content = (props) => {
//   console.log(props)
//   return <h1>{props.name},{props.exercises}</h1>
// }

// const Total = (props) => {
//   console.log(props)
//   return <h1>{props.total}</h1>
// }
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//        <Header course={course}/>
//       {/*Content renders parts and number of exercises*/}
//       <Content name={part1.name} exercises={part1.exercises} />
//       <Content name={part2.name} exercises={part2.exercises} />
//       <Content name={part3.name} exercises={part3.exercises} />
//       <Total total={part1.exercises+part2.exercises+part3.exercises}/>
//     </div>
//   )
// }


//const ContentRefactored = (props) => {
//   return (
//     <div>
//       <p>
//       {props.parts.map((part,index)=>{
//         return(
//           <Part part={part.part} number={part.exercise} key={index}/>

//<ContentRefactored parts={parts} />

// const parts = [{ part: 'Fundamentals of React', exercise: 10 }, { part: 'Using props to pass data', exercise: 7 }, { part: 'State of a component', exercise: 14 }]
//1.4

// const Header = (props) => {
//   return <h1>{props.course}</h1>
// }

// const Content= (props) => {
//   return (
//    <div>
//     {props.parts.map(({name, exercises}) => (
//         <p>key={name} {exercises}</p>
//       ))}
//    </div>
//   )
// }

// const Total = (props) => {
//   return <h1>{props.total}</h1>
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
//   const partlist =  parts.map(post => {
//       return(
//       <p>{post.name}</p>
//       )
// });
//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total total={parts[0].exercises+parts[1].exercises+parts[2].exercises} />
     

//     </div>
//   )
// }
//parts[0].name
//1.5

/* <Total total={parts.exercises[0]+parts.exercises[1]+parts.exercises[2]} />
const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      {props.course.map(({parts.name, parts.exercises}) => (
        <p>key={parts.name} {parts.exercises}</p>
      ))}
    </div>
  )
} */

// const ContentRefactored = (props) => {
//   return (
//     <div>
//       <p>
//       {props.parts.map((part,index)=>{
//         return(
//           <Part part={part.part} number={part.exercise} key={index}/>
//         )
//       })
//       }
//       </p>
//     </div>
//   )
// }
// const Content = (props) => {
//   props.posts.map((post) => {

//     return(
//       <p>{post.name}</p>
//     ) 
//   }
//   );
// }

// const Test = (props) => {
//   return <p>{props.partlist}</p>
// }
//1.5
const Header = (props) => {
  return <p>{props.course.name}</p>
}

const Content= (props) => {
  return (
   <div>
    {props.course.parts.map( part => <p>{part.name}</p>)}
   </div>
  )
}

const Total = (props) => {
  return <p>Total {props.total}</p>
  
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  //Referenced this site https://dev.to/yogesnsamy/how-to-use-the-reduce-method-in-javascript-and-react-5dhl
  //Which seems to have an identical example for the total function
  const total = course.parts.reduce(
    (prev,cur) => prev + cur.exercises,0
  );
    

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total total={total} />
    
    </div>
  )
}

export default App

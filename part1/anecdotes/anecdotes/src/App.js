import {useState } from 'react'

const Button = ({quality,text}) => (
  <button onClick={quality}>
    {text}
    
  </button>
)

const MakeAnecdote = (props) =>
{
  <div>
    console.log(props.textToWrite);
    <p>{props.textToWrite}</p>
  </div>

}
//<Button quality = {() => setToSelected(good + 1)} text = "new quote" /> 
//{anecdotes[selected]}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const len = anecdotes.length
 
  const [selected, setSelected] = useState(Math.floor(Math.random() * len))
  const [voteList, newVoteList] = useState(Array(len).fill(0)) //Because it needs to update the array each time the state changes
  
  const textToWrite = anecdotes[selected] 

  const setVoteArray = () => {
    let copyArray = [...voteList]
    copyArray[selected]++
    newVoteList(copyArray)
  }

  const makeRandomNum = () => {
    setSelected(Math.floor(Math.random() * len))
    
  }
  let hasVoted = false
  if (Math.max(...voteList) >0)
  {
    hasVoted = true
  }
    

  console.log(newVoteList)
  let i = voteList.indexOf(Math.max(...voteList));
  
  return (

    <div>
      <Button quality={makeRandomNum} text="New Anecdote" />
      <Button quality={setVoteArray} text="new Vote" />
      <MakeAnecdote textToWrite={textToWrite}/>
      <p>Anecdote: "{anecdotes[selected]}"</p>
      <p>vote {voteList[selected]}</p>
      
      {
        <p>{hasVoted ? `Anecdote ${anecdotes[i]} has the highest vote with ${voteList[i]}` : 'No votes yet'}</p>
      }
    </div>
  )
}

export default App
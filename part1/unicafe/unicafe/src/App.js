import {useState} from 'react';
const Display = props => <div>{props.quality} {props.value} </div>

const Button = ({quality,text}) => (
  <button onClick={quality}>
    {text}
  </button>
)

const StatisticLine = ({good,bad,total}) => {
  return(
    <div>
    <p> average {(good-bad)/(total)} </p>
    </div>
)
}


const Statistics = ({total, good, bad, neutral}) => {
 
  if(total === 0){
    return(
      <div>
        No feedback given
        
      </div>
    )
  }
  return(

  <div>
  <table>
    <tbody>
      <tr>
        <td>good</td>
        <td> {good}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>total</td>
        <td>{total}</td>
      </tr>
      <tr>
        <td>positive</td>
        <td>{good/total}</td>
      </tr>
        <tr>
        <td>average</td>
        <td>{(good-bad)/(total)}</td>
      </tr>
     </tbody>
    </table>
  </div>  
  )
}

const App = () => {
  const a = "SDDFFF"
  const [value, setValue] = useState(10)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const total = good + neutral + bad
  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  const setToGood = newGood => {
    console.log('newGood', newGood)
    setGood(newGood)
    
  }

  const setToNeutral = newNeutral => {
    console.log('newNeutral', newNeutral)
    setNeutral(newNeutral)
  }

  const setToBad = newBad => {
    console.log('newBad', newBad)
    setBad(newBad)
  }
  
  return (
    <div>
    <div>  
      <h1><b>Feedback</b></h1>
      <div>

      </div>
      <Button quality = {() => setToGood(good + 1)} text = "good" /> 
      <Button quality = {() => setToNeutral(neutral + 1)} text = "neutral" /> 
      <Button quality = {() => setToBad(bad + 1)} text = "bad" /> 
      <div>  
      <h1><b>Statistics</b></h1> 
      <Statistics a = {a} total={total} good={good} bad={bad} neutral = {neutral}/>
      </div>
      
      </div>
      <div>
     
      
      </div>
    </div>
  )
}

export default App

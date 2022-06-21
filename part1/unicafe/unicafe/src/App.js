import {useState} from 'react';
const Display = props => <div>{props.quality} {props.value} </div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({total, good, bad}) => {
  if(total === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(

  <div>
    total {total} <br></br>
    positive {good/total}<br></br>
    average {(good-bad)/(total)}
  </div>  
  )
}

const App = () => {
  
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
      <h><b>Statistics</b></h> 
 
      
    
      <Display value={good} quality="good" />
      <Display value={neutral} quality="neutral" />
      <Display value={bad} quality="bad" />
      <Statistics total={total} good={good} bad={bad}/>
      </div>
      <h><b>Feedback</b></h>
      
      <div>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      </div>
    </div>
  )
}

export default App
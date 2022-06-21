import {useState} from 'react';
const Display = props => <div>{props.quality} {props.value} </div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
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
      <h><b>Statistics</b></h>
      <Display value={good} quality="good" />
      <Display value={neutral} quality="neutral"  />
      <Display value={bad} quality="bad" />
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
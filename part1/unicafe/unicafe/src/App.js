import {useState} from 'react';
const Display = props => <div>{props.quality} {props.value} </div>

const Button = ({quality,text}) => (
  <button onClick={quality}>
    {text}
  </button>
)

  const StatisticLine = (props) => (
    <tr>
      <td>{props.text} {props.value}</td> 
    </tr>

    
  )


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
    <StatisticLine text="good" value={good} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="total" value={total} />
    <StatisticLine text="positive" value={good/total} />
    <StatisticLine text="average" value={(good-bad)/(total)}/>
     </tbody>
    </table>
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
      <h1><b>Feedback</b></h1>
      <div>

      </div>
      <Button quality = {() => setToGood(good + 1)} text = "good" /> 
      <Button quality = {() => setToNeutral(neutral + 1)} text = "neutral" /> 
      <Button quality = {() => setToBad(bad + 1)} text = "bad" /> 
      <div>  
      <h1><b>Statistics</b></h1> 
      <Statistics total={total} good={good} bad={bad} neutral = {neutral}/>
      </div>
      
      </div>
      <div>
     
      
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react'

const all = (g, n, b) => g + n + b;
const pos = (g, n, b) => all(g, n, b) ? (g / all(g, n, b)) * 100 : 0
const avg = (g, n, b) => all(g, n, b) ? (g - b) / all(g, n, b) : 0
const Statistic = props => <div>{props.text} {props.value} {props.text2}</div>
const Statistics = (props) => {

  return (
    <div>
      <Statistic text="good: " value={props.good} />
      <Statistic text="neutral: " value={props.neutral} />
      <Statistic text="bad: " value={props.bad} />
      <Statistic text="all: " value={props.all} />
      <Statistic text="average: " value={props.avg} />
      <Statistic text="positive: " value={props.pos} text2="%" />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all(good, neutral, bad)} avg={avg(good, neutral, bad)} pos={pos(good, neutral, bad)} />
    </div>
  )
}

export default App
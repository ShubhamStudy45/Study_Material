//Functional Component
//Importing Hooks to use to maintain the state
import { useState } from "react"

import Header from "./Header"
const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 0,
  })

  const [state2, setState2] = useState({
    counter2: 0,
  })

  const onIncrement1 = () => {
    console.log("increment by 1")
    setState({
      counter1: state.counter1 + 1,
    })
  }

  const onDecrement1 = () => {
    console.log("decrement by 1")
    setState({
      counter1: state.counter1 - 1,
    })
  }
  const onReset1 = () => {
    console.log("reset to 0")
    setState({
      counter1: 0,
    })
  }
  const onIncrement2 = () => {
    console.log("increment by 1")
    setState2({
      counter2: state2.counter2 + 1,
    })
  }

  const onDecrement2 = () => {
    console.log("decrement by 1")
    setState2({
      counter2: state2.counter2 - 1,
    })
  }
  const onReset2 = () => {
    console.log("reset to 0")
    setState2({
      counter2: 0,
    })
  }
  return (
    <div>
      <Header subtitle="This is the functional based component" />
      <div className="counter">
        <h5>Counter1 : {state.counter1}</h5>
        <button onClick={onIncrement1} className="btn btn-success">
          +1
        </button>
        <button onClick={onDecrement1} className="btn btn-success">
          -1
        </button>
        <button onClick={onReset1} className="btn btn-danger">
          Reset
        </button>
      </div>
      <div className="counter">
        <h5>Counter2 : {state2.counter2}</h5>
        <button onClick={onIncrement2} className="btn btn-success">
          +1
        </button>
        <button onClick={onDecrement2} className="btn btn-success">
          -1
        </button>
        <button onClick={onReset2} className="btn btn-danger">
          Reset
        </button>
      </div>
    </div>
  )
}
export default CounterApp

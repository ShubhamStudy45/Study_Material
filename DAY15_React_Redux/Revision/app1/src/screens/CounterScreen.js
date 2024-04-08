import Header from "../components/Header"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "../actions/CounterAction"
const CounterScreen = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const onIncrement = () => {
    dispatch(increment())
  }
  const onDecrement = () => {
    dispatch(decrement())
  }
  const onReset = () => {
    dispatch(reset())
  }
  console.log(counter)
  return (
    <div>
      <div>
        <Header title="Counter" />
      </div>
      <div>
        <h5>
          <strong>Counter : </strong>
          {counter}
        </h5>
        <div className="counterbtn">
          <button onClick={onIncrement} className="btn btn-success">
            +1
          </button>
          <button onClick={onDecrement} className="btn btn-warning">
            -1
          </button>
          <button onClick={onReset} className="btn btn-danger">
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
export default CounterScreen

import Header from "../component/Header"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "../action/CounterAction"
const CounterScreen = (props) => {
  //get the current value from store
  const count = useSelector((state) => state.counter)

  const dispatch = useDispatch()
  // console.log(count)

  const onIncrement = () => {
    dispatch(increment())
    localStorage.setItem("counter", count)
  }
  const onDecrement = () => {
    dispatch(decrement())
    localStorage.setItem("counter", count)
  }
  const onreset = () => {
    dispatch(reset())
  }
  // console.log(typeof countervalue)
  return (
    <div>
      <Header title="Counter" />
      <h4>Current Counter = {count}</h4>
      <div className="counterbtn">
        <button onClick={onIncrement} className="btn btn-warning">
          +1
        </button>
        <button onClick={onDecrement} className="btn btn-success">
          -1
        </button>
        <button onClick={onreset} className="btn btn-danger">
          reset
        </button>
      </div>
    </div>
  )
}
export default CounterScreen

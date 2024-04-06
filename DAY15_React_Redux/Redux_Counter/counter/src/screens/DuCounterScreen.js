import Header from "../component/Header"
import { useSelector } from "react-redux"
const DummyCounterScreen = (props) => {
  const counter = useSelector((state) => state.counter)

  return (
    <div>
      <Header title="DommyCounter" />
      <h5>Current Counter = {counter}</h5>
    </div>
  )
}
export default DummyCounterScreen

import Header from "../components/Header"
import { useSelector } from "react-redux"
const DuCounterScreen = () => {
  const counter = useSelector((state) => state.counter)
  return (
    <div>
      <Header title="Dummy Counter" />
      <h5>
        <strong>Dummy Counter : </strong>
        {counter}
      </h5>
    </div>
  )
}
export default DuCounterScreen

import "./App.css"
import { Route, Routes } from "react-router-dom"
import About from "./component/About"

const App = () => {
  return (
    <div>
      <div>
        <h3>My Application</h3>
        <Routes>
          <Route path="/" element={<About />}></Route>
          {/* <Route path="/about" element={About}></Route> */}
          {/* <Route exact path="/" component={About}></Route> */}
        </Routes>
      </div>
    </div>
  )
}

export default App

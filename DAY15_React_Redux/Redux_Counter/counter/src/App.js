import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AboutScreen from "./screens/AboutScreen"
import HomeScreen from "./screens/HomeScreen"
import RegistrationScreen from "./screens/RegistractionScreen"
import CounterScreen from "./screens/CounterScreen"
import DummyCounterScreen from "./screens/DuCounterScreen"
import Navigation from "./component/Navigation"
import ProductScreen from "./screens/ProductScreen"
function App() {
  return (
    <div>
      <div>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/Home" element={<HomeScreen />}></Route>
            <Route
              path="/registration"
              element={<RegistrationScreen />}
            ></Route>
            <Route path="/counter" element={<CounterScreen />}></Route>
            <Route
              path="/dummycounter"
              element={<DummyCounterScreen />}
            ></Route>
            <Route path="/product" element={<ProductScreen />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App

//1:07:26

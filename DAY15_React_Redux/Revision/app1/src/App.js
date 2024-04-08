import "./App.css"
//packages
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

//Screens
import AboutScreen from "./screens/AboutScreen"
import ProductScreen from "./screens/ProductScreen"
import CounterScreen from "./screens/CounterScreen"
import DuCounterScreen from "./screens/DuCounterScreen"
import ProfileScreen from "./screens/ProfileScreen"
import HomeScreen from "./screens/HomeScreen"
import Navigator from "./components/Navigator"
import SignInScreen from "./screens/SigninScreen"
import SignOffScreen from "./screens/SignoffScreen"
const App = () => {
  return (
    <div>
      <Router>
        <Navigator />
        <Routes>
          <Route path="/home" element={<HomeScreen />}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
          <Route path="/product" element={<ProductScreen />}></Route>
          <Route path="/counter" element={<CounterScreen />}></Route>
          <Route path="/ducounter" element={<DuCounterScreen />}></Route>
          <Route path="/profile" element={<ProfileScreen />}></Route>
          <Route path="/signin" element={<SignInScreen />}></Route>
          <Route path="/signup" element={<SignOffScreen />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

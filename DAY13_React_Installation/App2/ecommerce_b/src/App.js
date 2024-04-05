import "./App.css"
// import { Routes } from "react"
// import Product from "./components/product"
// import Order from "./components/order"
// import Profile from "./components/profile"
// import About from "./components/about"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"

function App() {
  return (
    <div>
      {/* <h2>My Application</h2>
      {/* for switching between the component we use package called react-router-dom */}
      {/* <About /> <Product /> <Profile /> <Order /> */}
      <h2>My Application</h2>
      {/* <Product />
        <About />
        <Profile />
        <Order />
        <About /> */}
      {/* <Switch>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/order" Component={Order}></Route>
          <Route path="/profile" element={Profile}></Route>
        </Switch>
      </Router> */}
      <Router>
        <Switch>
          <Route path="/" Component={Home}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

//02:04:42

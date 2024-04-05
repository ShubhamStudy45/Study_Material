import "./App.css"

import { legacy_createStore as createStore } from "redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import About from "./component/About"
//action  : what action we need to perform on store
//Reducer : implementation logic of action
//Store : we can keep our data in store
//Dispatch : is reference function of useDispatch() with which when the someone do react or do action on event then its get called.

//Action
const increment = () => {
  return {
    type: "increment",
  }
}
const decrement = () => {
  return {
    type: "decrement",
  }
}
const reset = () => {
  return {
    type: "reset",
  }
}
const isSignin = () => {
  return {
    type: "isSigned-in",
  }
}

const isSignedOff = () => {
  return {
    type: "isSigned-off",
  }
}
//Reducer

const CounterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    default:
      return 0
  }
}

//Store

let Store = createStore(CounterReducer)

//dispatch
Store.subscribe(() => {
  console.log("Updated store : ", Store.getState())
})

// Store.dispatch(increment())
// Store.dispatch(increment())
// Store.dispatch(increment())
// Store.dispatch(increment())
// Store.dispatch(increment())
// Store.dispatch(increment())

function App() {
  return (
    <div>
      <h2>My Application</h2>
      <Router>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

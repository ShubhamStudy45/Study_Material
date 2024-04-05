import "./App.css"

import { legacy_createStore as createStore } from "redux"
//redux

//Action
const signin = () => {
  return {
    type: "Signin",
  }
}

const loggoff = () => {
  return {
    type: "Loggoff",
  }
}
//Reducer
const isLoggedinReducer = (state = false, action) => {
  switch (action.type) {
    case "Signin":
      return {
        state: true,
      }
    case "Loggoff":
      return {
        state: false,
      }
    default:
      return false
  }
}
let store = createStore(isLoggedinReducer)
store.subscribe(() => {
  console.log("updated store : ", store.getState())
})
//Dispatch
store.dispatch(signin())

/*
//Counter
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
//Reducer
const CounterReducer = (state = 0, action) => {
  console.log(state)

  switch (action.type) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
  }
}
//Store
let store = createStore(CounterReducer)
//Dispatch
store.subscribe(() => {
  console.log("store updated : ", store.getState())
})
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
*/
function App() {
  return (
    <div>
      <div></div>
    </div>
  )
}

export default App

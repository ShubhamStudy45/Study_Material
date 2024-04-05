import "./App.css"
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// import About from "./component/About"
// import Search from "./component/Search"
// import Profile from "./component/Profile"
// import Product from "./component/Product"
import { legacy_createStore as createStore } from "redux"

//Redux
//Global state management with which we can share the data among other component

//Reducer
//What action we need to perform on data that code we can write here

const increment = () => {
  return {
    type: "increment",
  }
}
// const decrement = () => {
//   return {
//     type: "decrement",
//   }
// }
// const reset = () => {
//   return {
//     type: "reset",
//   }
// }

//Action
//Action implementation logic we can write here

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
//Store is the one which we can keep our data
let store = createStore(CounterReducer)

store.subscribe(() => {
  console.log("update store : ", store.getState())
})
//dispatch

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
//dispatch uses a useDispatch() hook to call the Reducer

function App() {
  return (
    <div>
      {/*
      <BrowserRouter>
        <h2>Myapplication</h2>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
  </BrowserRouter>*/}
      <MyApplication />
    </div>
  )
}

export default App

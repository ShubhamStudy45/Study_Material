//userReducer
import CounterReducer from "./CounterReducer"
import isLoggedInReducer from "./isLoggedInReducer"
import ProductReducer from "./ProductReducer"
import { combineReducers } from "redux"
const reducers = combineReducers({
  counter: CounterReducer,
  isLoggedIn: isLoggedInReducer,
  productsList: ProductReducer,
})

export default reducers

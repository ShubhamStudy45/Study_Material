//Below will get all the reducer combined into one
import { combineReducers } from "redux"

import { CounterReducer } from "./CounterReducer"
import loggedInReducer from "./loggedInReducer"
import CartReducer from "./CartReducer"
const reducers = combineReducers({
  counter: CounterReducer,
  isLoggedIn: loggedInReducer,
  CartItem: CartReducer,
})

export default reducers

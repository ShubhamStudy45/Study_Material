import { legacy_createStore as createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import logger from "redux-logger"
//thunk : this going to provide us asynchronous call with which we can make a API call and
//get the data return from action as the payload
import { thunk } from "redux-thunk"
import { combineReducers } from "redux"

import { SignupReducer } from "./reducers/UserReducer"

const reducers = combineReducers({
  userSignup: SignupReducer,
})

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)
//
export default store

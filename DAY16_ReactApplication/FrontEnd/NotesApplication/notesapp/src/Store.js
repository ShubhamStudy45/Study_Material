import { legacy_createStore as createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import logger from "redux-logger"
//thunk : this going to provide us asynchronous call with which we can make a API call and
//get the data return from action as the payload
import { thunk } from "redux-thunk"
import { combineReducers } from "redux"

import { SignupReducer, SigninReducer } from "./reducers/UserReducer"
import {
  addNoteReducer,
  fetchNoteReducer,
  deleteNoteReducer,
  editNoteReducer,
} from "./reducers/NoteReducer"
const reducers = combineReducers({
  userSignup: SignupReducer,
  userSignin: SigninReducer,
  addnote: addNoteReducer,
  notes: fetchNoteReducer,
  deletenotes: deleteNoteReducer,
  editNotes: editNoteReducer,
})

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)
//
export default store

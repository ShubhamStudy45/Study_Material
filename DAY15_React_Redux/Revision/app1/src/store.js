import { legacy_createStore as createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import reducers from "./reducers"
let store = createStore(reducers, composeWithDevTools(applyMiddleware()))

export default store

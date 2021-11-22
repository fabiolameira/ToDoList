import { createStore, applyMiddleware } from "redux"
import reducers from "./reducers"
import thunk from "redux-thunk"

const defaultState = {
	tasks: [],
}

export const store = createStore(reducers, defaultState, applyMiddleware(thunk))

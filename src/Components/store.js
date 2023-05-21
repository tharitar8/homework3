import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/combineReducer' // Import your root reducer
import thunk from 'redux-thunk' // Import any middleware you want to use

const store = createStore(rootReducer, applyMiddleware(thunk)) // Create the Redux store

export default store // Export the created store

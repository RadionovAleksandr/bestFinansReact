import { createStore, applyMiddleware } from 'redux'
// import { pageReducer } from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


import { rootReducer, initialState } from '../reducers'
export const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger))

// import { createStore } from 'redux'
// import { rootReducer, initialState } from '../reducers'
// export const store = createStore(rootReducer, initialState)
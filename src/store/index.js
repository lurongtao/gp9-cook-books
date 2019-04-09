import { createStore, applyMiddleware } from 'redux'
import Immutable from 'immutable'
import thunk from 'redux-thunk'

import reducer from './reducer'

const enhancer = applyMiddleware(thunk)

const initialState = Immutable.Map()

const store = createStore(reducer, initialState, enhancer)

export default store
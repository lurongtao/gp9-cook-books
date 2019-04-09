import { 
  GET_LIST,
  SET_IS_LOADED
} from './actionTypes'

import { fromJS } from 'immutable'

const defaultState = fromJS({
  list: [],
  isLoaded: false
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case GET_LIST:
      return state.setIn(['list'], fromJS(action.list))
    case SET_IS_LOADED: 
      return state.setIn(['isLoaded'], action.isLoaded)
    default:
      return state
  }
}
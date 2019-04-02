import { 
  GET_LIST,
  SET_IS_LOADED
} from './actionTypes'

const defaultState = {
  list: [],
  isLoaded: false
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.list
      }
    case SET_IS_LOADED: 
      return {
        ...state,
        isLoaded: action.isLoaded
      }
    default:
      return state
  }
}
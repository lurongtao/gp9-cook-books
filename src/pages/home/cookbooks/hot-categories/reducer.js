import { GET_CATEGORIES } from './actionTypes'

const defaultState = {
  categories: {}
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case GET_CATEGORIES:
      return {
        categories: action.categories
      }

    default: 
      return state
  }
}

export default reducer
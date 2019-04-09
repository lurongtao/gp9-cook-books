import { GET_CATEGORIES } from './actionTypes'

import { fromJS } from 'immutable'

const defaultState = fromJS({
  categories: {}
})

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case GET_CATEGORIES:
      // return {
      //   categories: action.categories
      // }
      return state.setIn(['categories'], fromJS(action.categories))
    default: 
      return state
  }
}

export default reducer
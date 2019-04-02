import http from 'utils/fetch'
import { 
  GET_LIST,
  SET_IS_LOADED
} from './actionTypes'

export const getListSync = list => ({
  type: GET_LIST,
  list
})

export const setIsLoaded = isLoaded => ({
  type: SET_IS_LOADED,
  isLoaded
})

export const getListAsync = () => {
  return async dispatch => {
    let result = await http.get('/api/list')
    dispatch(getListSync(result.data.slice(0, 3)))
    dispatch(setIsLoaded(true))
  }
}
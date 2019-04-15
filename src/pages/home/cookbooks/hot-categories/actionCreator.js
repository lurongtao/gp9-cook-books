import http from 'utils/fetch'

import { GET_CATEGORIES } from './actionTypes'

const getCategoriesSync = categories => ({
  type: GET_CATEGORIES,
  categories
})

const getCategoriesAsync = () => {
  return async dispatch => {
    let result = await http.get('/xapi/api/category')
    dispatch(getCategoriesSync(result.data))
  }
}

export {
  getCategoriesSync,
  getCategoriesAsync
}
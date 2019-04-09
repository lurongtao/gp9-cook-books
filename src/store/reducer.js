// import { combineReducers } from 'redux'
import {
  combineReducers
} from 'redux-immutable';

import { reducer as list } from 'pages/home/cookbooks/swiper/'
import { reducer as menu } from 'pages/home/cookbooks/hot-categories/'

export default combineReducers({
  list,
  menu
})
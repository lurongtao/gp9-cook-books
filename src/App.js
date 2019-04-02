import React, { Component } from 'react'

import store from './store/'

import { Provider } from 'react-redux'

import Home from 'pages/home/Home'

import {
  BrowserRouter as Router
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Home></Home>
        </Router>
      </Provider>
    )
  }
}

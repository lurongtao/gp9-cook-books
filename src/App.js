import React, { Component } from 'react'

import store from './store/'

import { Provider } from 'react-redux'

import Home from 'pages/home/Home'
import { List } from 'pages/list/'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path='/home' component={Home}/>
            <Route path='/list' component={List}/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

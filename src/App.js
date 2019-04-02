import React, { Component } from 'react'

import Home from 'pages/home/Home'

import {
  BrowserRouter as Router
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Home></Home>
      </Router>
    )
  }
}

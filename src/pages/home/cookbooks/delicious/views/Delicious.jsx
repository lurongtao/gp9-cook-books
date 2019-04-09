import React, { Component } from 'react'

import { connect } from 'react-redux'

import DeliciousUI from './DeliciousUI'

const mapState = state => ({
  list: state.getIn(['list', 'list']).slice(0, 10)
})

class Decicious extends Component {
  render() {
    return (
      <DeliciousUI { ...this.props }></DeliciousUI>
    )
  }
}

export default connect(mapState)(Decicious)
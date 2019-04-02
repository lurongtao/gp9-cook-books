import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getListAsync, setIsLoaded } from '../actionCreator'

import SwiperUI from './SwiperUI'

const mapState = state => ({
  list: state.list.list,
  isLoaded: state.list.isLoaded
})

const mapDispatch = dispatch => ({
  fetchData() {
    dispatch(getListAsync())
  },

  initIsLoaded() {
    dispatch(setIsLoaded(false))
  }
})

class Swiper extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
  }

  render() {
    return (
      <SwiperUI { ...this.props } />
    )
  }

  fetchData() {
    this.props.fetchData()
    this.props.initIsLoaded()
  }
}

export default connect(mapState, mapDispatch)(Swiper)

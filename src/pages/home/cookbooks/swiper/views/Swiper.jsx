import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getListAsync, setIsLoaded } from '../actionCreator'

import SwiperUI from './SwiperUI'

const mapState = state => {
  // console.log(state.getIn(['list']))
  return ({
    list: state.getIn(['list', 'list']).slice(0, 3),
    isLoaded: state.getIn(['list', 'isLoaded'])
  })
}

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

  // componentDidMount() {
  //   console.log(this)
  // }
}

export default connect(mapState, mapDispatch)(Swiper)

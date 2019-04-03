import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  HotCateContainer
} from './HotCategoriesStyled'

import {
  getCategoriesAsync
} from '../actionCreator'

const mapState = state => {
  return ({
    categories: state.menu.categories.category
  })
}

const mapDispatch = dispatch => ({
  fetchData() {
    dispatch(getCategoriesAsync())
  }
})

class HotCategories extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
  }

  render() {
    let filteredCate = (this.props.categories && this.props.categories['热门'].slice(0, 11)) || []
    return (
      <HotCateContainer>
        <h1>热门分类</h1>
        <ul>
          {
            filteredCate.map(value => (
              <li key={value.title}>
                <img src={value.img} alt=""/>
                <b>{value.title}</b>
              </li>
            ))
          }
          <li>更多...</li>
        </ul>
      </HotCateContainer>
    )
  }

  fetchData() {
    this.props.fetchData()
  }
}

export default connect(mapState, mapDispatch)(HotCategories)

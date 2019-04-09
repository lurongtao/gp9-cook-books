import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  withRouter
} from 'react-router-dom'

import {
  HotCateContainer
} from './HotCategoriesStyled'

import {
  getCategoriesAsync
} from '../actionCreator'

const mapState = state => {
  return ({
    categories: state.getIn(['menu', 'categories', 'category'])
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
    let filteredCate = (this.props.categories && this.props.categories.getIn(['热门']).slice(0, 11)) || []
    return (
      <HotCateContainer>
        <h1>热门分类</h1>
        <ul>
          {
            filteredCate.map(value => (
              <li onClick={() => this.props.history.push('/list', {id: new Date().getTime()})} key={value.get('title')}>
                <img src={value.get('img')} alt=""/>
                <b>{value.get('title')}</b>
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

export default withRouter(connect(mapState, mapDispatch)(HotCategories))

import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import BScroll from 'better-scroll'

import { Map, List } from 'immutable'

import {
  BorderedMenuContainer
} from './MenuStyled'

import { withRouter } from 'react-router-dom'

import AnimateComponent from 'components/highorder/AnimateComponent'

const mapState = state => ({
  categories: state.getIn(['menu', 'categories'])
})

class Menu extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    return nextState.currentNav === '' ? {
      currentNav: nextProps.type === 'category' ? '热门' : '肉类'
    } : null
  }

  constructor(props) {
    super(props)
    this.state = {
      // currentNav: this.props.type === 'category' ? '热门' : '肉类'
      currentNav: ''
    }

    this.handleNavClick = this.handleNavClick.bind(this)
  }
  
  render() {
    let category = this.props.categories.get('category')
    let material = this.props.categories.get('material')

    let nav = this.props.type === 'category'
      ? category || Map({})
      : material || Map({})

    let content = this.props.type === 'category'
      ? (category && category.getIn([this.state.currentNav])) || List([])
      : (material && material.getIn([this.state.currentNav])) || List([])

    return (
      <BorderedMenuContainer>
        <div id={`nav-${this.props.type}`}>
          <ul>
            {
              Object.keys(nav.toJS()).map(value => (
                <li 
                  key={value}
                  className={this.state.currentNav === value ? 'active' : ''}
                  onTouchStart={e => this.handleNavClick(e, value)}
                ><span>{value}</span></li>
              ))
            }
          </ul>
        </div>
        <div id={`content-${this.props.type}`}>
          <ul>
            {
              content.toJS().map((value,index) => (
                <li onClick={() => this.props.history.push('/list', {id: new Date().getTime()})} key={index}>{value.title || value}</li>
              ))
            }
          </ul>
        </div>
      </BorderedMenuContainer>
    )
  }

  componentDidMount() {
    this.bScroll = new BScroll(`#nav-${this.props.type}`, {click: true})
    new BScroll(`#content-${this.props.type}`, {click: true})
  }

  handleNavClick(e, value) {
    this.setState({currentNav: value})
    let currentPos = e.touches[0].clientY - 108
    if (currentPos < 100) {
      this.bScroll.scrollTo(0, 0)
    }
    if (currentPos > 300) {
      this.bScroll.scrollTo(0, this.bScroll.maxScrollY)
    }
  }
}

export default connect(mapState)(withRouter(AnimateComponent(Menu)))
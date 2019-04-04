import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import BScroll from 'better-scroll'

import { withRouter } from 'react-router-dom'

import {
  BorderedMenuContainer
} from './MenuStyled'

import animateComponent from 'components/higeorder/animateComponent'

const mapState = state => ({
  categories: state.menu.categories
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
  }
  
  render() {
    let category = this.props.categories.category
    let material = this.props.categories.material

    let nav = this.props.type === 'category'
      ? category || {}
      : material || {}

    let content = this.props.type === 'category'
      ? (category && category[this.state.currentNav]) || []
      : (material && material[this.state.currentNav]) || []

    return (
      <BorderedMenuContainer>
        <div id={`nav-${this.props.type}`}>
          <ul>
            {
              Object.keys(nav).map(value => (
                <li 
                  key={value}
                  className={this.state.currentNav === value ? 'active' : ''}
                  onClick={() => this.setState({currentNav: value})}
                ><span>{value}</span></li>
              ))
            }
          </ul>
        </div>
        <div id={`content-${this.props.type}`}>
          <ul>
            {
              content.map((value,index) => (
                <li key={index}>{value.title || value}</li>
              ))
            }
          </ul>
        </div>
      </BorderedMenuContainer>
    )
  }

  componentDidMount() {
    new BScroll(`#nav-${this.props.type}`, {click: true})
    new BScroll(`#content-${this.props.type}`, {click: true})
  }
}

export default connect(mapState)(withRouter(animateComponent(Menu)))
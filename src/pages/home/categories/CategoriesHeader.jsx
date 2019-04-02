import React, { Component } from 'react'

import {
  Header,
  BorderedNav
} from './CategoriesStyled'

export default class CategoriesHeader extends Component {
  constructor(props) {
    super(props)
    this.handleSwich = this.handleSwich.bind(this)

    this.state = {
      dir: 'left',
      delayDir: 'left'
    }
  }
  render() {
    return (
      <Header>
        <BorderedNav dir={this.state.dir} delayDir={this.state.delayDir}>
          <div onClick={() => this.handleSwich('left')}>分类</div>
          <div onClick={() => this.handleSwich('right')}>食材</div>
        </BorderedNav>
      </Header>
    )
  }

  handleSwich(dir) {
    this.setState({
      dir
    })
    
    setTimeout(() => {
      this.setState({
        delayDir: dir
      })
    }, 300)

    this.props.onSwitch(dir)
  }
}

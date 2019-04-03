import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  DeliciousContainer
} from './DeliciousStyled'

const mapState = state => ({
  list: state.list.list.slice(0, 10)
})

class Decicious extends Component {
  render() {
    return (
      <DeliciousContainer>
        <h1>热门分类</h1>
        <div>
          {
            this.props.list.map(value => (
              <dl key={value.id}>
                <dt>
                  <img src={value.img} alt=""/>
                </dt>
                <dd>
                  <h3>{value.name}</h3>
                  <div>
                    <span>{value.all_click}</span> 浏览 &nbsp;&nbsp;
                    <span>{value.favorites}</span> 收藏
                  </div>
                </dd>
              </dl>
            ))
          }
        </div>
      </DeliciousContainer>
    )
  }
}

export default connect(mapState)(Decicious)
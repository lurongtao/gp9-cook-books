import React, { Component } from 'react'

import {
  HomeContainer
} from './HomeStyled'

import HomeTabs from './HomeTabs'

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <HomeTabs></HomeTabs>
      </HomeContainer>
    )
  }
}

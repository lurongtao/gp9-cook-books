import React, { Component } from 'react'

import Swiper from './swiper/Swiper'
import Search from 'components/search/Search'

import {
  CookBookContainer,
  Header
} from './CookBookStyled'

export default class CookBooks extends Component {
  render() {
    return (
      <CookBookContainer>
        <Header>菜谱大全</Header>
        <main>
          <Swiper></Swiper>
          <Search
            hasborder={true}
            bgcolor="#fff"
          ></Search>
        </main>
      </CookBookContainer>
    )
  }
}

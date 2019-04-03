import React, { Component } from 'react'

import BScroll from 'better-scroll'

import Swiper from './swiper/views/Swiper'
import Search from 'components/search/Search'
import { HotCategories } from './hot-categories/'
import { Delicious } from './delicious/'

import {
  CookBookContainer,
  Header
} from './CookBookStyled'

export default class CookBooks extends Component {
  render() {
    return (
      <CookBookContainer>
        <Header>菜谱大全</Header>
        <main id="cookbook_scroll">
          <div>
            <Swiper></Swiper>
            <Search
              hasborder={true}
              bgcolor="#fff"
              radius={5}
            ></Search>
            <HotCategories></HotCategories>
            <Delicious></Delicious>
          </div>
        </main>
      </CookBookContainer>
    )
  }

  componentDidMount() {
    new BScroll('#cookbook_scroll')
  }
}

import React, { Component } from 'react'

import Img from 'assets/images/swiper-1.png'
import {
  SwiperContainer
} from './SwiperStyled'

export default class Swiper extends Component {
  render() {
    return (
      <SwiperContainer>
        <img src={Img} alt=""/>
      </SwiperContainer>
    )
  }
}

import React, { Component } from 'react'

import { Carousel } from 'antd-mobile';

import {
  SwiperContainer
} from './SwiperStyled'

export default class Swiper extends Component {
  constructor(props) {
    super(props)
    this.fetchData()

    this.state = {
      list: []
    }
  }

  render() {
    return (
      <SwiperContainer>
        <Carousel
          autoplay={false}
          infinite
        >
          {
            this.state.list.map( value => (
              <img src={value.img} key={value.id} alt=""/>
            ))
          }
        </Carousel>
      </SwiperContainer>
    )
  }

  fetchData() {
    fetch('/api/list')
      .then(response => response.json())
      .then(result => {
        this.setState({
          list: result.data.slice(0, 3)
        })
      })
  }
}

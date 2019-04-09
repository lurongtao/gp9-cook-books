import React from 'react'

import {
  SwiperContainer
} from './SwiperStyled'

import { Carousel, ActivityIndicator } from 'antd-mobile';

export default props => {
  return (
    <SwiperContainer>
      {
        props.isLoaded ? (
          <Carousel>
            {
              props.list.map(value => {
                return (
                  <img key={value.get('id')} src={value.get('img')} alt={value.get('name')}/>
                )
              })
            }
          </Carousel>
        ) : (
          <ActivityIndicator animating />
        )
      }
    </SwiperContainer>
  )
}
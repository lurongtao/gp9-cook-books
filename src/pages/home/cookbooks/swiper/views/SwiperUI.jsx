import React from 'react'

import {
  SwiperContainer
} from './SwiperStyled'

import { Carousel, ActivityIndicator } from 'antd-mobile';

export default props => (
  <SwiperContainer>
    {
      props.isLoaded ? (
        <Carousel>
          {
            props.list.map(value => (
              <img key={value.id} src={value.img} alt={value.name}/>
            ))
          }
        </Carousel>
      ) : (
        <ActivityIndicator animating />
      )
    }
  </SwiperContainer>
)
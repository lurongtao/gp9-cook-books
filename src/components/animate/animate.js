import React from 'react'

import {
  CSSTransition
} from 'react-transition-group'

import { Menu } from 'components/menu/'

export default ({location}) => {
  console.log(location)
  return (
    <CSSTransition
      in={true}
      timeout={300}
      classNames={{
        enterActive: "animated slideInLeft",
        exitActive: "animated slideOutLeft"
      }}
    >
      <Menu type="category"></Menu>
    </CSSTransition>
  )
}
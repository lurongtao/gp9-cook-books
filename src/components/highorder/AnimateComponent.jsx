import React from 'react'

import { CSSTransition } from 'react-transition-group'

export default Comp => props => {
  let dir = props.location.state && props.location.state.dir
  return (
    <CSSTransition
      in={!!props.match}
      timeout={1000}
      classNames={{
        enter: 'animated',
        enterActive: dir === 'left' ? 'slideInLeft' : 'slideInRight',
        exit: 'animated',
        exitActive: dir === 'left' ? 'slideOutRight' : 'slideOutLeft'
      }}
      unmountOnExit={true}
      mountOnEnter={true}
    >
      <Comp { ...props } ></Comp>
    </CSSTransition>
  )
}
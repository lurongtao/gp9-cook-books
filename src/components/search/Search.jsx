import React, { Component } from 'react'

import SearchIcon from 'assets/images/search.png'

import { 
  BorderedInputContainer,
  InputContainer,
  SearchContainer
} from './SearchStyled'

export default class Search extends Component {
  render() {
    let TempComp = this.props.hasborder ? BorderedInputContainer : InputContainer
    return (
      <SearchContainer>
        <TempComp { ...this.props }>
          <img src={SearchIcon} alt="searchicon"/>
          <span>想吃什么搜这里，比如川菜</span>
        </TempComp>
      </SearchContainer>
    )
  }
}

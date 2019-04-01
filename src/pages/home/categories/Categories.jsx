import React, { Component } from 'react'

import {
  CategoriesContainer,
  Header
} from './CategoriesStyled'

import Search from 'components/search/Search'

export default class Categories extends Component {
  render() {
    return (
      <CategoriesContainer>
        <Header>aa</Header>
        <main>
          <Search
            hasborder={false}
            bgcolor="#efefef"
          ></Search>
        </main>
      </CategoriesContainer>
    )
  }
}

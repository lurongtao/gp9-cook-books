import React, { Component } from 'react'

import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'

import {
  CategoriesContainer
} from './CategoriesStyled'

import Search from 'components/search/Search'
import CategoriesHeader from './CategoriesHeader'

import CategoriesLeftList from './CategoriesLeftList'
import CategoriesRightList from './CategoriesRightList'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.handleSwitch = this.handleSwitch.bind(this)
  }
  render() {
    return (
      <CategoriesContainer>
        <CategoriesHeader onSwitch={this.handleSwitch}></CategoriesHeader>
        <main>
          <Search
            hasborder={false}
            bgcolor="#efefef"
          ></Search>
        </main>
        <Switch>
          <Redirect exact from='/' to='/categories' />
          <Route path='/categories' component={CategoriesLeftList}/>
          <Route path='/material' component={CategoriesRightList}/>
        </Switch>
      </CategoriesContainer>
    )
  }

  handleSwitch(dir) {
    let path = dir === 'left' ? '/categories' : '/material'
    this.props.history.push(path)
  }
}

export default withRouter(Categories)

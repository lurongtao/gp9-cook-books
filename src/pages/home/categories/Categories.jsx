import React, { Component } from 'react'

import {
  Route,
  withRouter
} from 'react-router-dom'

import {
  CategoriesContainer
} from './CategoriesStyled'

// import animate from 'components/animate/animate'

import Search from 'components/search/Search'
import CategoriesHeader from './CategoriesHeader'

import CategoriesLeftList from './CategoriesLeftList'
import CategoriesRightList from './CategoriesRightList'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.handleSwitch = this.handleSwitch.bind(this)

    this.state = {
      enterClass: 'slideInRight',
      exitClass: 'slideOutLeft'
    }
  }
  render() {
    return (
      <CategoriesContainer>
        <CategoriesHeader onSwitch={this.handleSwitch}></CategoriesHeader>
        <Search
          hasborder={false}
          bgcolor="#efefef"
          radius={5}
        ></Search>
        <div>
          <Route exact path='/' children={() => <CategoriesLeftList />}/>
          <Route path='/categories' children={() => <CategoriesLeftList />}/>
          <Route path='/material' children={() => <CategoriesRightList />}/>
        </div>
      </CategoriesContainer>
    )
  }

  handleSwitch(dir) {
    let path = dir === 'left' ? '/categories' : '/material'
    this.props.history.push(path, {dir})
    // this.setState({
    //   enterClass: dir === 'left' ? 'slideInLeft' : 'slideInRight',
    //   exitClass: dir === 'left' ? 'slideOutRight' : 'slideOutLeft'
    // })
  }
}

export default withRouter(Categories)

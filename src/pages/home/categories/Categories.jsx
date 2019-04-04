import React, { Component } from 'react'

import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'

import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'

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
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            timeout={300}
            classNames={{
              enterActive: "animated " + this.state.enterClass,
              exitActive: "animated " + this.state.exitClass
            }}
          >
            <Switch>
              <Redirect exact from='/' to='/categories' />
              <Route path='/categories' component={CategoriesLeftList}/>
              <Route path='/material' component={CategoriesRightList}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </CategoriesContainer>
    )
  }

  handleSwitch(dir) {
    let path = dir === 'left' ? '/categories' : '/material'
    this.props.history.push(path)
    this.setState({
      enterClass: dir === 'left' ? 'slideInLeft' : 'slideInRight',
      exitClass: dir === 'left' ? 'slideOutRight' : 'slideOutLeft'
    })
  }
}

export default withRouter(Categories)

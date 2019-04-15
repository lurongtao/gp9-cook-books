import React, { Component } from 'react'

import store from './store/'
import http from 'utils/fetch'

import { Provider } from 'react-redux'

import Home from 'pages/home/Home'
import { List } from 'pages/list/'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

export default class App extends Component {
  render() {
    this.initWechatConfig()
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path='/home' component={Home}/>
            <Route path='/list' component={List}/>
          </Switch>
        </Router>
      </Provider>
    )
  }

  async initWechatConfig() {
    // ！！一定要注意result里signature编码生成要使用现有请求的URL，如下的url:https://walter666.cn/xapi
    // module.exports = {
    //   token: 'weixin',
    //   appId: 'wxd901da01d13166a9',
    //   secret: '9b2c552de9f5a46b292dfae241a91f8d',
    //   url: 'https://walter666.cn/xapi'
    // }
    let result = await http.get('/jsapiConfig')
    let config = {
      debug: false,
      ...result,
      jsApiList: [
        'scanQRCode',
        'chooseImage'
      ] // 必填，需要使用的JS接口列表
    }
    wx.config(config)
  }
}

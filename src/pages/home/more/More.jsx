import React, { Component } from 'react'

export default class More extends Component {
  render() {
    return (
      <div>
        more
        <div><button onClick={this.scan.bind(this)}>扫描</button></div>
      </div>
    )
  }

  scan() {
    wx.ready(() => {
      wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        }
      })
    })
  }
}

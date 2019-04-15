import React, { Component } from 'react'

export default class Map extends Component {
  constructor(props) {
    super(props)
    // this.getLocation()
  }

  render() {
    return (
      <div id="map_container" style="width: 100%; height: 100%;">
        
      </div>
    )
  }

  componentDidMount() {
    this.getLocation()
  }

  getLocation() {
    wx.ready(() => {
      wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: (res) => {
          var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          var speed = res.speed; // 速度，以米/每秒计
          var accuracy = res.accuracy; // 位置精度
          
          var map = new BMap.Map("map_container");          // 创建地图实例  
          var point = new BMap.Point(longitude, latitude);  // 创建点坐标  
          map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  

          // this.openLocation({
          //   latitude,
          //   longitude
          // })
        }
      });
    })
  }

  openLocation({latitude, longitude}) {
    wx.openLocation({
      latitude, // 纬度，浮点数，范围为90 ~ -90
      longitude, // 经度，浮点数，范围为180 ~ -180。
      name: '沙河', // 位置名
      address: '沙阳路', // 地址详情说明
      scale: 16 // 地图缩放级别,整形值,范围从1~28。默认为最大
    })
  }
}

import React from 'react'

import {
  DeliciousContainer
} from './DeliciousStyled'

export default (props) => {
  return (
    <DeliciousContainer>
      <h1>热门分类</h1>
      <div>
        {
          props.list.map(value => (
            <dl key={value.get("id")}>
              <dt>
                <img src={value.get("img")} alt=""/>
              </dt>
              <dd>
                <h3>{value.get("name")}</h3>
                <div>
                  <span>{value.get("all_click")}</span> 浏览 &nbsp;&nbsp;
                  <span>{value.get("favorites")}</span> 收藏
                </div>
              </dd>
            </dl>
          ))
        }
      </div>
    </DeliciousContainer>
  )
}
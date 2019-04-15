import styled from 'styled-components'
import border from 'components/styled/border'
import ellipsis from 'components/styled/ellipsis'

const ListWrapper = styled.div `
  .am-navbar-light {
    background: #ee7530;
    color: #fff;
  }
  .am-navbar-light .am-navbar-title {
    color: #fff;
  }

  .am-list-view-scrollview {
    margin: 0 !important;
    border: 0 !important;
  }
`

const ListItem = border({
  component: styled.div `
    display: flex;
    width: ${window.innerWidth + 'px'};
    overflow: hidden;
    > div:first-child {
      width: 1.4rem;
      padding: .1rem .15rem .1rem .1rem;
      img {
        width: 100%;
      }
    }
    > div:last-child {
      flex: 1;
      display: flex;
      flex-direction: column;
      line-height: .28rem;
      justify-content: center;
      overflow: hidden;
      h1 {
        font-size: .18rem;
      }
      h2 {
        font-size: .14rem;
        font-weight: 100;
        color: #666;
      }
      h3 {
        font-size: .12rem;
        font-weight: 100;
        color: #666;
      }
    }
  `,
  width: '0 0 1px 0'
})

const EllipsisH2 = ellipsis({
  component: styled.h2 ``,
  lineClamp: 1
})

export {
  ListWrapper,
  ListItem,
  EllipsisH2
}
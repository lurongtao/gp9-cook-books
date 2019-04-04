import Styled from 'styled-components'

import border from '../../styled/border'

const MenuContainer = Styled.div `
  display: flex;
  /* flex: 1; */
  height: 100%;

  div {
    height: 100%;
    &:first-child {
      flex: 93;
      background: #f3f3f3;
      ul {
        width: 100%;
        li {
          height: .46rem;
          line-height: .46rem;
          text-align: center;
          &.active {
            background: #fff;
            span {
              display: inline-block;
              height: 100%;
              border-bottom: solid #ee7530 .02rem;
              color: #ee7530;
            }
          }
        }
      }
    }
    &:last-child {
      flex: 282;
      background: #fff;
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: .15rem 0;
        li {
          width: 33.333334%;
          height: .46rem;
          line-height: .46rem;
          text-align: center;
        }
      }
    }
  }
`

const BorderedMenuContainer = border({
  component: MenuContainer,
  width: '1px 0 0 0'
})

export {
  MenuContainer,
  BorderedMenuContainer,
}
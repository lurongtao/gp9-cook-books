import Styled from 'styled-components'

const HotCateContainer = Styled.div `
  background: #fff;
  h1 {
    height: .5rem;
    padding-left: .1rem;
    font-size: .14rem;
    color: #666;
    line-height: .5rem;
    font-weight: 400;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-right: .15rem;

    li {
      width: 25%;
      padding-left: .15rem;

      &:last-child {
        font-size: .14rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        width: 100%;
        border-radius: .1rem;
      }

      b {
        font-weight: 100;
        display: block;
        margin: .1rem 0;
        text-align: center;
      }
    }
  }
`

export {
  HotCateContainer
}
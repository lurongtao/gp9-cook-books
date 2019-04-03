import Styled from 'styled-components'

const DeliciousContainer = Styled.div `
  h1 {
    height: .5rem;
    padding-left: .1rem;
    font-size: .14rem;
    color: #666;
    line-height: .6rem;
    font-weight: 400;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    padding: 0 .1rem .1rem 0;

    dl {
      width: 50%;
      padding-left: .1rem;
      dt {
        img {
          width: 100%;
        }
      }
      dd {
        width: 100%;
        height: .6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* display: table-cell;
        text-align: center;
        vertical-align: middle; */
        h3 {
          font-size: .16rem;
        }
        > div {
          color: #999;
          font-size: .12rem;
        }
      }
    }
  }
`

export {
  DeliciousContainer
}
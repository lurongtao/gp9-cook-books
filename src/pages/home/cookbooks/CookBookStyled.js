import Styled from 'styled-components'

const CookBookContainer = Styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow: scroll;
  }
`

const Header = Styled.header `
  height: .44rem;
  background: #ee7530;
  text-align: center;
  line-height: .44rem;
  font-size: .18rem;
  color: #fff;
  font-weight: 100;
`

export {
  CookBookContainer,
  Header
}
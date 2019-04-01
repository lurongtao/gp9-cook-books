import Styled from 'styled-components'

import border from 'components/styled/border'

const SearchContainer = Styled.div `
  height: .64rem;
  padding: .12rem .15rem;
`

const InputContainer = Styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${ props => props.bgcolor };
  img {
    width: .18rem;
    height: .18rem;
    margin-right: .02rem;
  }
  span {
    font-size: .14rem;
    color: #666;
  }
`

const BorderedInputContainer = border({
  component: InputContainer,
  radius: 5,
  color: '#ee7530'
})

export {
  BorderedInputContainer,
  SearchContainer,
  InputContainer
}
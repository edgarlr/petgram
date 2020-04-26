import styled, { css } from 'styled-components'
import { backgroundColor } from '../../styles/Theme'

export const Div = styled.div`
  position: fixed;
  top: 0;
  background-color: ${backgroundColor};
  z-index: 100;
  height: auto;
  width: 100%;
  max-width: 500px;
  padding: 10px 0;
  &:first-child {
    font-size: 1em;
    transition: .2s;
    ${props => props.fixed && css`
      font-size: .8em;
      padding: 0;
    `}
  }
`

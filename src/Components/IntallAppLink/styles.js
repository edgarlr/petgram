import styled from 'styled-components'
import { backgroundColor, IconColor, AccentColor } from '../../styles/Theme'

export const Div = styled.div`
  display: flex;
  position: fixed;
  background: ${backgroundColor};
  opacity: .9;
  bottom: 50px;
  width: 100%;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
`

export const Button = styled.p`
  color: ${AccentColor};
  font-size: .9em;
  font-weight: bold;
  cursor: pointer;
`

export const Close = styled.button`
  position: absolute;
  right: 0;
  line-height: 0;
  & svg {
    color: ${IconColor};
  }
`

import styled from 'styled-components'
import { AccentColor } from '../../styles/Theme'

export const Button = styled.button`
  background: ${AccentColor};
  border-radius: 5px;
  color: #fff;
  height: 50px;
  display: block;
  width: 100%;
  font-size: 1em;
  text-align: center;
  margin-top: 20px;
  &[disabled] {
    opacity: 0.3;
  }
`

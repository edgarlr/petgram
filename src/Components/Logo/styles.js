import styled from 'styled-components'
import { TextColor } from '../../styles/Theme'

export const Svg = styled.svg`
  display: block;
  margin: 0 auto;
  width: ${props => props.size};
  fill: ${TextColor}
`

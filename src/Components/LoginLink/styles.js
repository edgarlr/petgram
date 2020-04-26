import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { AccentColor, SubtitleColor } from '../../styles/Theme'

export const Div = styled.div`
  display: flex;
  font-size: .8em;
  justify-content: center;
  & p {
    margin-right: 5px;
  }
`
export const Link = styled(LinkRouter)`
  color: ${AccentColor};
  text-decoration: none;
  font-weight: bold;
`

export const Text = styled.p`
  color: ${SubtitleColor}
`

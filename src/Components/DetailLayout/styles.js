import styled from 'styled-components'
import { IconColor, SubtitleColor } from '../../styles/Theme'

export const Div = styled.div`
  padding: 0 14px;
`

export const Button = styled.button`
  color: ${IconColor};
  margin: 16px 0 16px;
  padding: 0
  & svg {
    margin: 16px 0 0;
  }
`
export const Subtitle = styled.h2`
  font-size: 24px;
  color: ${SubtitleColor};
  padding: 0 0 20px;

`

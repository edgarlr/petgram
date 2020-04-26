import styled from 'styled-components'
import { TitleColor, IconColor } from '../../styles/Theme'

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  cursor: pointer;
  & svg {
    margin-right: 4px;
    color: ${props => props.liked ? '#ff6363' : IconColor};
  }
`

export const Likes = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-top: -1px;
  color: ${TitleColor};
`

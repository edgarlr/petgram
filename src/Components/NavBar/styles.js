import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { AccentColor, backgroundColor, TextColor } from '../../styles/Theme'

export const Nav = styled.nav`
  align-items: center;
  background: ${backgroundColor};
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`
export const Link = styled(LinkRouter)`
  align-items: center;
  color: ${TextColor};
  opacity: .4;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    margin-top: -3px;
    opacity: 1;
    color: ${AccentColor};
    & svg{
      display: none;
    }
    &:before{
      content: '${props => props.name}';
      font-size: .83em;
      font-weight: bold;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 12px;
      width: 5px;
      height: 5px;
      background: ${AccentColor};
      border-radius: 50%;
    }
  }
  `

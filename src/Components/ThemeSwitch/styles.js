import styled from 'styled-components'
import { AccentColor, TextColor } from '../../styles/Theme'

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`
export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`

export const Input = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.checked ? AccentColor : '#ccc'};
  transition: .4s;
  border-radius: 34px;
  &:before{
    transform: ${props => props.checked ? 'translateX(26px)' : 'none'};
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
  }
`
export const Text = styled.p`
  color: ${TextColor};
  font-size: 1em;
`

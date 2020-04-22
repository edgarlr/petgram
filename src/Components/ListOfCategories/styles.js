import styled, { css } from 'styled-components'
import {fadeIn} from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 10px 0;
  ${props => props.fixed && css`
    ${fadeIn({time:'1s'})}
    background: #fff;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    border-radius: 60px;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -2px;
    transform: scale(.5);
    z-index: 1;
  `}
`
export const Item = styled.li`
  padding: 0 8px;
`
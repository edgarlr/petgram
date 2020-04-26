import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 75px 0 10px;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  /* ${props => props.fixed && css`
    height: 70px;
    background: white;
    box-shadow: 0 0 5px rgba(0,0,0,0.4);
    padding: 0;
    width: 100%
    position: fixed;
    right: 0; 
    top: -2px;
    z-index: 1;
    & li {
      transform: scale(.85);
      padding: 5px 5px;
      & div {
        margin-bottom: 1em;
      }
    }
  `} */
`
export const Item = styled.li`
  padding: 0 0 0 16px;
  position: relative;
`

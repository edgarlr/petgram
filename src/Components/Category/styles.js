import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { backgroundColor } from '../../styles/Theme'

export const Link = styled(LinkRouter)`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
`

export const Div = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  &:after {
    position: absolute;
    border-radius: 50%;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #fbc2eb;
    content: "";
    z-index: -1;
    transform: scale(1.09);
    background-image: linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%);
    ${Link}[aria-current] & {
      background-image: linear-gradient(120deg, #8fd3f4 0%, #84fab0 100%);
    }
  }
`

export const Image = styled.img`
  border: 2px solid ${backgroundColor};
  overflow: hidden;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  object-fit: cover;
`

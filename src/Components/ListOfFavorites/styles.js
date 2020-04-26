import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { SkeletonColor } from '../../styles/Theme'

export const Link = styled(LinkRouter)`
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${SkeletonColor};
  &:after{
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4px;
  padding-top: 10px;
`

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`

import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'
import { SkeletonColor } from '../../styles/Theme'

export const Article = styled.article`
  min-height: 220px;
  margin: 0 0 30px;
`

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  background-color: ${SkeletonColor};
`

export const Img = styled.img`
  ${fadeIn({ time: '2s' })}
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

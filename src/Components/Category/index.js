import React from 'react'
import { Link, Image, Div } from './styles'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '...' }) => (
  <Link to={path}>
    <Div>
      <Image src={cover} />
    </Div>
    {emoji}
  </Link>
)

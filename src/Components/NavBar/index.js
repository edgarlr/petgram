import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '24px'

export const NavBar = () => {
  return (
    <Nav>
      <Link name='Inicio' to='/'>
        <MdHome size={SIZE} />
      </Link>
      <Link name='Favoritos' to='/favs'>
        <MdFavoriteBorder size={SIZE} />
      </Link>
      <Link name='Perfil' to='/user'>
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  )
}

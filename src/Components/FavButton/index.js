import React from 'react'
import { Button, Likes } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import PropTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button liked={liked} onClick={onClick}>
      <Icon size='24px' />
      <Likes>{likes} likes</Likes>
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import { Div, Button, Subtitle } from './styles'
import { navigate } from '@reach/router'

const handleBackClick = async (e) => {
  e.preventDefault()
  await navigate('/', { replace: true })
}

export const DetailLayout = ({ children, id }) => (
  <Div>
    <Button onClick={handleBackClick} >
      <MdArrowBack size='32px' />
    </Button>
    <Subtitle>Fotografia {id}</Subtitle>
    { children }
  </Div>
)
